import React, { useState } from "react";
import styled from "styled-components";
import { StockResponse } from "./types";
import { CandlestickChart } from "./CandlestickChart";

const StockContainer = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const StockTitle = styled.h2`
  font-size: 24px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const StockDescription = styled.p`
  font-size: 16px;
  margin-bottom: 5px;
`;

const StockInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 5px;
`;

const StockItem = styled.div`
  flex: 1;
  margin-right: 5px;
`;

const StockLabel = styled.span`
  font-weight: bold;
  display: block;
  margin-bottom: 5px;
`;

const StockValue = styled.span`
  font-size: 18px;
`;

const CollapsibleSection = styled.div`
  margin-bottom: 10px;
`;

const CollapsibleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  text-decoration: underline;
  font-size: 16px;
  color: #007bff;
`;

const CollapsibleContent = styled.div`
  display: ${(props: any) => (props.open ? "block" : "none")};
`;

const BuyButton = styled.button`
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 5px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #45a049; /* Darker green on hover */
  }
`;

const BuyStockForm = styled.div`
  background-color: #f2f2f2;
  padding: 5px;
  border-radius: 5px;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const FormControl = styled.div`
  margin-right: 10px;

  label {
    font-weight: bold;
  }

  input {
    width: 80px;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
`;

export const StockDetails: React.FC<{
  data: StockResponse;
  onBuyStock: any;
}> = ({ data, onBuyStock }) => {
  const [timeSeriesOpen, setTimeSeriesOpen] = useState(false);
  const [newsOpen, setNewsOpen] = useState(false);
  const [analystRatingsOpen, setAnalystRatingsOpen] = useState(false);

  const [quantity, setQuantity] = useState(0);
  const [purchasePrice, setPurchasePrice] = useState(0);

  const handleBuyStock = () => {
    if (quantity <= 0 || purchasePrice <= 0) {
      alert("Please enter valid quantity and purchase price.");
      return;
    }

    // Calculate total cost
    const totalCost = quantity * purchasePrice;

    // Create a new holding
    const newHolding = {
      symbol: data.symbol,
      name: data.name,
      quantity,
      purchasePrice,
      currentPrice: data.price
    };

    // Update holdings
    onBuyStock(newHolding, totalCost);

    // Reset input fields
    setQuantity(0);
    setPurchasePrice(0);
  };

  return (
    <StockContainer>
      <StockTitle>
        {data.name} ({data.symbol})
      </StockTitle>
      <StockDescription>{data.description}</StockDescription>
      <BuyStockForm>
        <FormControl>
          <label>
            Quantity:
            <input
              type="number"
              value={quantity}
              onChange={(e: any) => setQuantity(parseInt(e.target.value))}
            />
          </label>
        </FormControl>
        <FormControl>
          <label>
            Purchase Price:
            <input
              type="number"
              value={purchasePrice}
              onChange={(e: any) =>
                setPurchasePrice(parseFloat(e.target.value))
              }
            />
          </label>
        </FormControl>
        <BuyButton onClick={handleBuyStock}>Buy</BuyButton>
      </BuyStockForm>
      <StockInfo>
        <StockItem>
          <StockLabel>Price:</StockLabel>
          <StockValue>${data.price || "N/A"}</StockValue>
        </StockItem>
        <StockItem>
          <StockLabel>Change:</StockLabel>
          <StockValue>{data.change}</StockValue>
        </StockItem>
        <StockItem>
          <StockLabel>Market Cap:</StockLabel>
          <StockValue>{data.marketCap}</StockValue>
        </StockItem>
        <StockItem>
          <StockLabel>Volume:</StockLabel>
          <StockValue>{data.volume}</StockValue>
        </StockItem>
        <StockItem>
          <StockLabel>P/E Ratio:</StockLabel>
          <StockValue>{data.peRatio}</StockValue>
        </StockItem>
        <StockItem>
          <StockLabel>Dividend Yield:</StockLabel>
          <StockValue>{data.dividendYield}</StockValue>
        </StockItem>
        <StockItem>
          <StockLabel>Earnings Per Share:</StockLabel>
          <StockValue>${data.earningsPerShare}</StockValue>
        </StockItem>
      </StockInfo>

      <StockInfo>
        <StockItem>
          {data.news && (
            <CollapsibleSection>
              <CollapsibleButton onClick={() => setNewsOpen(!newsOpen)}>
                News
              </CollapsibleButton>
              <CollapsibleContent open={newsOpen}>
                <ul>
                  {data.news.map((item) => (
                    <li key={item.timestamp}>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.title}
                      </a>{" "}
                      - {item.source},{" "}
                      {new Date(item.timestamp).toLocaleString()}
                    </li>
                  ))}
                </ul>
              </CollapsibleContent>
            </CollapsibleSection>
          )}
        </StockItem>
        <StockItem>
          {data.analystRatings && (
            <CollapsibleSection>
              <CollapsibleButton
                onClick={() => setAnalystRatingsOpen(!analystRatingsOpen)}
              >
                Analyst Ratings
              </CollapsibleButton>
              <CollapsibleContent open={analystRatingsOpen}>
                <ul>
                  {data.analystRatings?.map((item) => (
                    <li key={item.rating}>
                      Rating: {item.rating}, Target Price: $
                      {item.targetPrice.toFixed(2)}, Analyst Count:{" "}
                      {item.analystCount}
                    </li>
                  ))}
                </ul>
              </CollapsibleContent>
            </CollapsibleSection>
          )}
        </StockItem>
      </StockInfo>
      {data.timeSeries && (
        <CollapsibleSection>
          <CollapsibleButton onClick={() => setTimeSeriesOpen(!timeSeriesOpen)}>
            Time Series
          </CollapsibleButton>
          <CollapsibleContent open={timeSeriesOpen}>
            <>
              <CandlestickChart data={data.timeSeries} />
            </>
          </CollapsibleContent>
        </CollapsibleSection>
      )}
    </StockContainer>
  );
};
