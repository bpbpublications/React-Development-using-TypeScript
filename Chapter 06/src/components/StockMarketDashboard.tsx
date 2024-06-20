import React, { useEffect, useState } from "react";
import ApiService from "../services/ApiService"; // Import the generic Axios service class
import { StockResponse, UserProfile, Holding } from "./types";
import { StockDetails } from "./StockDetails";
import { AddStock } from "./AddStock";
import { Modal } from "./Modal";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StockList = styled.div`
  flex: 1;
  margin-left: 30px; /* Add margin for spacing */
`;

const HoldingsContainer = styled.div`
  background-color: #f2f2f2;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
`;

const HoldingsList = styled.ul`
  list-style: none;
  padding: 0;
`;

const HoldingItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const HoldingSymbol = styled.span`
  font-weight: bold;
`;

const UserProfileContainer = styled.div`
  background-color: #f2f2f2;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
`;

const AddStockButton = styled.button`
  font-size: 18px;
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const UserProfileAndHoldings: React.FC<{
  user: UserProfile | undefined;
  holdings: Holding[] | undefined;
}> = ({ user, holdings }) => {
  const renderUserInformation = () => {
    if (!user) {
      return <p>Loading user profile...</p>;
    }

    return (
      <>
        <h2>User Profile</h2>
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Country:</strong> {user.country}
        </p>
        <h2>Investment Information</h2>
        <p>
          <strong>Total Invested Amount:</strong> $
          {user.totalInvestedAmount.toFixed(2)}
        </p>
        <p>
          <strong>Total Return Amount:</strong> $
          {user.totalReturnAmount.toFixed(2)}
        </p>
        <p>
          <strong>Total Profit Percentage:</strong> {user.totalProfitPercentage}
          %
        </p>
      </>
    );
  };

  const renderHoldings = () => {
    if (!Array.isArray(holdings) || holdings.length === 0) {
      return <p>No holdings to display.</p>;
    }

    return (
      <>
        <h2>My Holdings</h2>
        <HoldingsList>
          {holdings.map((holding, index) => (
            <HoldingItem key={index}>
              <div>
                <HoldingSymbol>
                  {holding.name} - {holding.symbol}
                </HoldingSymbol>
                <p>Quantity: {holding.quantity}</p>
                <p>Purchase Price: ${holding.purchasePrice.toFixed(2)}</p>
                <p>Current Price: ${holding.currentPrice.toFixed(2)}</p>
              </div>
            </HoldingItem>
          ))}
        </HoldingsList>
      </>
    );
  };

  return (
    <div>
      <UserProfileContainer>{renderUserInformation()}</UserProfileContainer>
      <HoldingsContainer>{renderHoldings()}</HoldingsContainer>
    </div>
  );
};

const StockMarketDashboard: React.FC = () => {
  const [stocks, setStocks] = useState<StockResponse[]>([]);
  const [profile, setProfile] = useState<UserProfile>();
  const [holdings, setHoldings] = useState<Holding[]>([]);
  const [isAddStockModalOpen, setAddStockModalOpen] = useState(false);

  const openAddStockModal = () => {
    setAddStockModalOpen(true);
  };

  const closeAddStockModal = () => {
    setAddStockModalOpen(false);
  };
  useEffect(() => {
    // Function to fetch stock data from Alpha Vantage API
    const fetchStockData = async () => {
      try {
        const response = await ApiService.get<StockResponse[]>("/stocks");

        setStocks(response);
      } catch (error) {
        console.error("Error fetching stock data:", error);
      }
    };

    const fetchUserProfile = async () => {
      try {
        const userProfile = await ApiService.get<UserProfile>("/userProfile");
        setProfile(userProfile);
      } catch (error) {
        console.error("Error fetching stock data:", error);
      }
    };
    const fetchHoldings = async () => {
      try {
        const holdings = await ApiService.get<Holding[]>("/userHoldings");
        setHoldings(holdings);
      } catch (error) {
        console.error("Error fetching stock data:", error);
      }
    };
    fetchStockData();
    fetchUserProfile();
    fetchHoldings();
  }, []);

  const addStock = async (stock: StockResponse) => {
    try {
      const newStock = await ApiService.post<any, StockResponse>(
        "/stocks",
        stock
      );
      setStocks([newStock, ...stocks]);
    } catch (error) {
      console.error("Error adding stock data:", error);
    }
  };

  const onBuyStock = async (holding: Holding, totalCost: number) => {
    try {
      const newHolding = await ApiService.post<any, Holding>(
        "/userHoldings",
        holding
      );

      // Create a copy of the existing holdings
      const updatedHoldings = [...holdings];

      // Check if the holding for the same symbol already exists
      const existingHoldingIndex = updatedHoldings.findIndex(
        (h) => h.symbol === holding.symbol
      );

      if (existingHoldingIndex !== -1) {
        // If the holding for the same symbol exists, update the quantity and purchase price
        const existingHolding = updatedHoldings[existingHoldingIndex];
        existingHolding.quantity += holding.quantity;
        existingHolding.purchasePrice =
          (existingHolding.purchasePrice * existingHolding.quantity +
            holding.purchasePrice * holding.quantity) /
          (existingHolding.quantity + holding.quantity);
      } else {
        // If the holding for the same symbol does not exist, add it to the holdings
        updatedHoldings.push(holding);
      }

      setHoldings(updatedHoldings);
    } catch (error) {
      console.error("Error adding holding data:", error);
    }
  };

  return (
    <div>
      <AddStockButton onClick={openAddStockModal}>Add Stock</AddStockButton>
      <Container>
        <UserProfileAndHoldings user={profile} holdings={holdings} />

        <StockList>
          {stocks.map((stock, index) => (
            <StockDetails key={index} data={stock} onBuyStock={onBuyStock} />
          ))}
        </StockList>
        <Modal isOpen={isAddStockModalOpen} onClose={closeAddStockModal}>
          <AddStock onAddStock={addStock} />
        </Modal>
      </Container>
    </div>
  );
};

export default StockMarketDashboard;
