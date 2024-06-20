import React, { useState } from "react";
import styled from "styled-components";
import hotelsData, { Hotel } from "./HotelData";
import AddHotelPanel from "./AddHotelPanel";
import HotelItem from "./HotelItem";

const HotelListContainer = styled.div`
  padding: 10px;
`;

const SearchBox = styled.input`
  width: 95%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const HotelList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredHotels, setFilteredHotels] = useState<Hotel[]>(hotelsData);

  const handleAddHotel = (newHotel: Hotel) => {
    setFilteredHotels([newHotel, ...filteredHotels]);
  };

  // Debounce function to delay the filter action
  const debounce = (func: Function, delay: number) => {
    let timer: ReturnType<typeof setTimeout>;
    return function (this: any, ...args: any[]) {
      clearTimeout(timer);
      timer = setTimeout(() => func.apply(this, args), delay);
    };
  };

  const handleSearchDebounced = debounce((searchTerm: string) => {
    const filtered = hotelsData.filter((hotel) =>
      hotel.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredHotels(filtered);
  }, 300);

  return (
    <HotelListContainer>
      <AddHotelPanel onAddHotel={handleAddHotel} />

      <SearchBox
        type="text"
        placeholder="Search by location..."
        value={searchTerm}
        onChange={(e: any) => {
          setSearchTerm(e.target.value);
          handleSearchDebounced(e.target.value);
        }}
      />
      {/* Display message if no hotels found */}
      {filteredHotels.length === 0 && <p>No hotels found.</p>}

      {/* Hotel List */}
      {filteredHotels.map((hotel, index) => (
        <HotelItem key={index} hotel={hotel} />
      ))}
    </HotelListContainer>
  );
};

export default HotelList;
