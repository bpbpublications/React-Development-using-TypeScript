import React, { useState } from "react";
import styled from "styled-components";
import { StockResponse } from "./types"; // Import the StockResponse interface

interface AddStockProps {
  onAddStock: (newStock: StockResponse) => void;
}

const FormContainer = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin: 20px;
  max-width: 400px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 18px;
  margin-bottom: 8px;
  font-weight: bold;
`;

const Input = styled.input`
  font-size: 16px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 90%;
`;

const TextArea = styled.textarea`
  font-size: 16px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  min-height: 100px;
  width: 90%;
`;

const SubmitButton = styled.button`
  font-size: 18px;
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const AddStock: React.FC<AddStockProps> = ({ onAddStock }) => {
  const [formData, setFormData] = useState<StockResponse>({
    id: 0,
    symbol: "",
    name: "",
    price: 0,
    change: "",
    description: "",
    marketCap: "",
    volume: "",
    peRatio: 0,
    dividendYield: "",
    earningsPerShare: 0,
    website: "",
    timeSeries: [],
    news: [],
    analystRatings: []
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Generate a unique ID for the new stock (replace this with your logic)
    const newStockId = Math.floor(Math.random() * 1000);
    const newStock = {
      ...formData,
      id: newStockId
    };
    // Call the callback function to add the new stock to the list
    onAddStock(newStock);
    // Clear the form
    setFormData({
      id: 0,
      symbol: "",
      name: "",
      price: 0,
      change: "",
      description: "",
      marketCap: "",
      volume: "",
      peRatio: 0,
      dividendYield: "",
      earningsPerShare: 0,
      website: "",
      timeSeries: [],
      news: [],
      analystRatings: []
    });
  };

  return (
    <FormContainer>
      <Title>Add New Stock</Title>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Symbol:</Label>
          <Input
            type="text"
            name="symbol"
            value={formData.symbol}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Name:</Label>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Price:</Label>
          <Input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Change:</Label>
          <Input
            type="text"
            name="change"
            value={formData.change}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Description:</Label>
          <TextArea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Market Cap:</Label>
          <Input
            type="text"
            name="marketCap"
            value={formData.marketCap}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Volume:</Label>
          <Input
            type="text"
            name="volume"
            value={formData.volume}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>P/E Ratio:</Label>
          <Input
            type="number"
            name="peRatio"
            value={formData.peRatio}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Dividend Yield:</Label>
          <Input
            type="text"
            name="dividendYield"
            value={formData.dividendYield}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Earnings Per Share:</Label>
          <Input
            type="number"
            name="earningsPerShare"
            value={formData.earningsPerShare}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Website:</Label>
          <Input
            type="url"
            name="website"
            value={formData.website}
            onChange={handleChange}
          />
        </FormGroup>
        <SubmitButton type="submit">Add Stock</SubmitButton>
      </Form>
    </FormContainer>
  );
};
