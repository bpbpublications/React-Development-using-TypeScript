import React from "react";
import styled from "styled-components";

interface Hotel {
  name: string;
  location: string;
}

const HotelItemContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px;
  margin-bottom: 5px;
`;

const HotelItem: React.FC<{ hotel: Hotel }> = ({ hotel }) => {
  return (
    <HotelItemContainer>
      <h2>{hotel.name}</h2>
      <p>Location: {hotel.location}</p>
    </HotelItemContainer>
  );
};

export default HotelItem;
