"use client";
import React, { useEffect, useState } from "react";
import LocationMap from "../../../components/LocationMap";
type Props = {};
type room = {
  id: number;
  property_name: string;
  type: string;
  guests: number;
  bedrooms: number;
  bathrooms: number;
  veds: number;
  location: string;
  long: string;
  lat: string;
  images: string;
  price: number;
  distance: number;
};
export default function page({}: Props) {
  const [data, setdata] = useState<room[]>([]);
  useEffect(() => {
    fetch("http://localhost:8000/api/rooms/search/france")
      .then((response) => response.json())
      .then((data) => {
        setdata(data.data);
      });
  }, []);

  return (
    <div>
      <LocationMap data={data} />
      {/* <LocationMap2 /> */}
    </div>
  );
}
