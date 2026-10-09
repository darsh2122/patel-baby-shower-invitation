export const event = {
  parents: "Priyanka Patel & Darshit Patel",
  dateISO: "2026-12-13",
  dateLabel: "Sunday, December 13, 2026",
  timeLabel: "9:00 AM – 1:00 PM Eastern",
  startISO: "2026-12-13T09:00:00-05:00",
  endISO: "2026-12-13T13:00:00-05:00",
  venue: "Maryhill Heritage Park Community Centre",
  address: "58 St Charles St E, Woolwich, ON N0B 2B0",
  rsvpDeadlineISO: "2026-11-22",
  rsvpDeadlineLabel: "November 22, 2026",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Maryhill+Heritage+Park+Community+Centre%2C+58+St+Charles+St+E%2C+Woolwich%2C+ON+N0B+2B0",
  mapEmbedUrl: "https://maps.google.com/maps?q=Maryhill+Heritage+Park+Community+Centre%2C+58+St+Charles+St+E%2C+Woolwich%2C+ON+N0B+2B0&z=15&output=embed",
  hostsShort: "Priyanka & Darshit",
  hostsFull: "Priyanka & Darshit Patel",
  dressCode: "Traditional / Festive Attire",
  dressNote: "Feel free to wear what makes you comfortable",
  funLine: "Come ready to play. There will be games, laughter and a little friendly competition for everyone!",
};

/**
 * Photos for the Our Story and gallery sections.
 * Drop image files into /public/photos and put the path here (e.g. "/photos/story.jpg").
 * A tile with src: null shows an elegant illustrated placeholder instead.
 */
export const photos: {
  story: string | null;
  gallery: { src: string | null; alt: string; icon: "heart" | "baby" | "shoes" | "camera" | "flower" | "sparkles" }[];
} = {
  story: null,
  gallery: [
    { src: null, alt: "The two of us", icon: "heart" },
    { src: null, alt: "Tiny shoes for our little one", icon: "shoes" },
    { src: null, alt: "Our first glimpse", icon: "camera" },
    { src: null, alt: "Small hands, big love", icon: "baby" },
    { src: null, alt: "Waiting with open hearts", icon: "flower" },
    { src: null, alt: "Little one, coming soon", icon: "sparkles" },
  ],
};
export function calendarUrl() {
  const start = "20261213T140000Z"; // 9:00 AM EST
  const end = "20261213T180000Z"; // 1:00 PM EST
  const p = new URLSearchParams({ action:"TEMPLATE", text:"Patel Baby Shower", dates:`${start}/${end}`, details:`Join us to celebrate Priyanka and Darshit.
Get ready to join in the fun — we’ll have games for everyone!`, location:`${event.venue}, ${event.address}` });
  return `https://calendar.google.com/calendar/render?${p.toString()}`;
}
export function icsContent() {
  return ["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//Patel Baby Shower//EN","CALSCALE:GREGORIAN","BEGIN:VEVENT","UID:patel-baby-shower-20261213@invitation.local","DTSTAMP:20261009T120000Z","DTSTART:20261213T140000Z","DTEND:20261213T180000Z","SUMMARY:Patel Baby Shower","LOCATION:Maryhill Heritage Park Community Centre\, 58 St Charles St E\, Woolwich\, ON N0B 2B0","DESCRIPTION:Celebrate Priyanka and Darshit. Get ready to join in the fun - games for everyone!","END:VEVENT","END:VCALENDAR"].join("\r\n");
}
