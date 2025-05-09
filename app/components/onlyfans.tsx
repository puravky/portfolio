"use client"
import { useEffect, useState } from 'react';
import { Loader2 } from "lucide-react"

type GeoInfo = {
  ip: string;
  city: string;
  region: string;
  country_name: string;
  org: string;
  timezone: string;
};

export default function Onlyfans() {
  const [info, setInfo] = useState<GeoInfo | null>(null);

  useEffect(() => {
    fetch('https://ipapi.co/json')
      .then(res => res.json())
      .then(data => setInfo(data));
  }, []);

  return (
    <div className="h-[300px] lg:h-[450px] flex flex-col items-center justify-center text-center tracking-tighter">
      <p className='text-2xl mb-10'>just caught you :haha</p>
      {info ? (
        <>
          <p className="text-lg text-red-500">Your IP: <span className="tracking-tighter">{info.ip}</span></p>
          <p className="mt-2 text-lg">City: {info.city}</p>
          <p className="text-lg">Region: {info.region}</p>
          <p className="text-lg">Country: {info.country_name}</p>
          <p className="text-lg">ISP: {info.org}</p>
          <p className="text-lg">Timezone: {info.timezone}</p>
        </>
      ) : (
        <Loader2 className="animate-spin" />
      )}
    </div>
  );
}

