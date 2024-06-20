import React from "react";
import StockMarketDashboard from "./components/StockMarketDashboard";
import styled from "styled-components";

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

const Subtitle = styled.h2`
  font-size: 24px;
  margin-bottom: 5px;
  color: #555;
`;

const Description = styled.p`
  font-size: 18px;
  text-align: center;
  margin-bottom: 5px;
`;

const App: React.FC = () => {
  return (
    <div className="App">
      <HomePageContainer>
        <Subtitle>Welcome to StockWise - Your Stock Market Companion</Subtitle>

        <Description>
          Get started today by exploring our comprehensive stock profiles, news
          articles, and interactive charts.
        </Description>
        <>
          <StockMarketDashboard />
        </>
      </HomePageContainer>
    </div>
  );
};

export default App;
