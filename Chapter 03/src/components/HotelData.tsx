import React from "react";

export interface Hotel {
  name: string;
  location: string;
}

const hotelsData: Hotel[] = [
  {
    name: "Luxury Hotel",
    location: "New York"
  },
  {
    name: "Beach Resort",
    location: "Miami"
  },
  {
    name: "Mountain Lodge",
    location: "Aspen"
  },
  {
    name: "City View Hotel",
    location: "San Francisco"
  },
  {
    name: "Tropical Paradise",
    location: "Bali"
  },
  {
    name: "Historic Inn",
    location: "Boston"
  },
  {
    name: "Desert Oasis",
    location: "Dubai"
  },
  {
    name: "Seaside Retreat",
    location: "Sydney"
  },
  {
    name: "Cosy Cottage",
    location: "London"
  },
  {
    name: "Ski Resort",
    location: "Zermatt"
  }
];

export default hotelsData;
