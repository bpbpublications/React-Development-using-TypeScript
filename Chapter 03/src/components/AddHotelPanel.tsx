import React, { useState } from "react";
import styled from "styled-components";

interface Hotel {
  name: string;
  location: string;
}

const initialNewHotelState: Hotel = {
  name: "",
  location: ""
};

const AddHotelPanelContainer = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 97%;

  label {
    font-weight: bold;
    margin-right: 10px;
  }

  input {
    flex: 1;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-right: 10px;
  }
`;

const AddHotelButton = styled.button`
  padding: 10px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 150px;

  &:not(:disabled) {
    background-color: #007bff;
    cursor: pointer;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const AddHotelPanel: React.FC<{ onAddHotel: (hotel: Hotel) => void }> = ({
  onAddHotel
}) => {
  const [newHotel, setNewHotel] = useState<Hotel>(initialNewHotelState);

  const handleAddHotel = () => {
    // Check if both name and location are filled before adding the hotel
    if (newHotel.name.trim() === "" || newHotel.location.trim() === "") {
      alert("Please fill in both hotel name and location.");
      return;
    }

    onAddHotel(newHotel);
    setNewHotel(initialNewHotelState);
  };

  return (
    <AddHotelPanelContainer>
      <div>
        <label htmlFor="name">Hotel Name</label>
        <input
          type="text"
          id="name"
          value={newHotel.name}
          onChange={(e) => setNewHotel({ ...newHotel, name: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          value={newHotel.location}
          onChange={(e) =>
            setNewHotel({ ...newHotel, location: e.target.value })
          }
        />
      </div>
      <AddHotelButton
        onClick={handleAddHotel}
        disabled={!newHotel.name || !newHotel.location}
      >
        Add Hotel
      </AddHotelButton>
    </AddHotelPanelContainer>
  );
};

export default AddHotelPanel;
