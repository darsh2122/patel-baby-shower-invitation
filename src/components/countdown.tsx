"use client";
import { useEffect, useState } from "react";
const target = new Date("2026-12-13T09:00:00-05:00").getTime();
function remaining(now:number){const distance=Math.max(0,target-now);return {days:Math.floor(distance/86400000),hours:Math.floor(distance%86400000/3600000),minutes:Math.floor(distance%3600000/60000),seconds:Math.floor(distance%60000/1000)}}
export default function Countdown(){const [now,setNow]=useState(0);useEffect(()=>{setNow(Date.now());const id=window.setInterval(()=>setNow(Date.now()),1000);return()=>window.clearInterval(id)},[]);const t=remaining(now);return <div className="count-grid" aria-label="Countdown to the baby shower">{Object.entries(t).map(([label,value])=><div className="count-cell" key={label}><span className="count-num">{String(value).padStart(2,"0")}</span><span className="count-label">{label}</span></div>)}</div>}
