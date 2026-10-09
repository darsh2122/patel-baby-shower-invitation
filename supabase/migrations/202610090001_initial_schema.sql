-- Patel Baby Shower: initial schema and security policies
create extension if not exists pgcrypto;
create table if not exists public.household_rsvps (
 id uuid primary key default gen_random_uuid(), household_name text not null check (char_length(household_name) between 2 and 120),
 contact_name text not null check (char_length(contact_name) between 2 and 120), email text not null check (char_length(email) <= 254),
 attending boolean not null, guest_count integer not null check (guest_count between 0 and 20),
 dietary_notes text check (dietary_notes is null or char_length(dietary_notes) <= 500), message text check (message is null or char_length(message) <= 1000),
 created_at timestamptz not null default now(), updated_at timestamptz not null default now(),
 constraint household_rsvps_email_unique unique (email),
 constraint household_rsvps_attendance_count check ((attending and guest_count >= 1) or (not attending and guest_count = 0))
);
create index if not exists household_rsvps_created_at_idx on public.household_rsvps(created_at desc);
create table if not exists public.guest_messages (
 id uuid primary key default gen_random_uuid(), name text not null check(char_length(name) between 2 and 100),
 message text not null check(char_length(message) between 2 and 500), approved boolean not null default false, created_at timestamptz not null default now()
);
create index if not exists guest_messages_public_idx on public.guest_messages(approved, created_at desc);
-- Atomic rate limiting used by the server routes (fingerprints are hashed IPs, never raw IPs).
create table if not exists public.public_submission_limits (scope text not null, fingerprint text not null, window_start timestamptz not null, hits integer not null default 0, primary key(scope,fingerprint,window_start));
create or replace function public.consume_public_submission(p_scope text,p_fingerprint text,p_limit integer,p_window_seconds integer) returns boolean
language plpgsql security definer set search_path = public as $$
declare v_start timestamptz; v_hits integer;
begin
 if p_scope not in ('rsvp','message') or p_limit < 1 or p_window_seconds < 1 then return false; end if;
 v_start := to_timestamp(floor(extract(epoch from now()) / p_window_seconds) * p_window_seconds);
 insert into public.public_submission_limits(scope,fingerprint,window_start,hits) values(p_scope,p_fingerprint,v_start,1)
 on conflict(scope,fingerprint,window_start) do update set hits=public_submission_limits.hits+1 returning hits into v_hits;
 return v_hits <= p_limit;
end; $$;
revoke all on function public.consume_public_submission(text,text,integer,integer) from public, anon, authenticated;
grant execute on function public.consume_public_submission(text,text,integer,integer) to service_role;
-- All database access is mediated by server routes. No public table access is allowed.
alter table public.household_rsvps enable row level security;
alter table public.guest_messages enable row level security;
alter table public.public_submission_limits enable row level security;
revoke all on public.household_rsvps from anon, authenticated;
revoke all on public.guest_messages from anon, authenticated;
revoke all on public.public_submission_limits from anon, authenticated;
grant select,insert,update,delete on public.household_rsvps to service_role;
grant select,insert,update,delete on public.guest_messages to service_role;
grant select,insert,update,delete on public.public_submission_limits to service_role;
-- Cleanup stale rate-limit buckets periodically, or run manually.
create or replace function public.cleanup_public_submission_limits() returns void language sql security definer set search_path=public as $$ delete from public.public_submission_limits where window_start < now() - interval '2 days'; $$;
revoke all on function public.cleanup_public_submission_limits() from public, anon, authenticated;
grant execute on function public.cleanup_public_submission_limits() to service_role;
