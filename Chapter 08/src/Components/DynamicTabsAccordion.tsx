import React, { useState } from "react";
import { useCustomId } from "./useCustomId"; // Import the useCustomId hook
import styled from "styled-components";

const TabContainer = styled.div`
  display: flex;
`;

const TabButton = styled.button`
  background-color: ${(props: { isActive: any }) =>
    props.isActive ? "#3498db" : "#f1f1f1"};
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: bold;
  color: ${(props: { isActive: any }) => (props.isActive ? "#fff" : "#333")};
  border-radius: 5px 5px 0 0;
  transition: background-color 0.3s, color 0.3s;

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const TabContent = styled.div`
  display: ${(props: { isActive: any }) => (props.isActive ? "block" : "none")};
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 0 0 5px 5px;
`;

const HorizontalTabs: React.FC = () => {
  const tabItems = [
    {
      title: "Featured Products",
      content:
        "Discover our latest featured products that are trending in the market. Stay up-to-date with the latest tech and innovations."
    },
    {
      title: "Customer Reviews",
      content:
        "Read what our satisfied customers have to say about their experience with our products and services. Their feedback matters to us."
    },
    {
      title: "Support Center",
      content:
        "Explore our comprehensive support center for answers to common questions, troubleshooting guides, and how-to tutorials."
    }
  ];

  const [activeTab, setActiveTab] = useState(0); // State to track the active tab

  return (
    <div>
      <h2>Horizontal Tabs Example - useId, useCustomId (Custom hook)</h2>
      <TabContainer>
        {tabItems.map((item, index) => {
          const tabId = useCustomId(); // Generate a unique ID for the tab button

          const isActive = index === activeTab; // Determine if the tab is active

          return (
            <TabButton
              key={index}
              isActive={isActive}
              aria-controls={`tab-content-${index}`}
              id={tabId}
              onClick={() => setActiveTab(index)} // Set the active tab on click
            >
              {item.title}
            </TabButton>
          );
        })}
      </TabContainer>
      <div>
        {tabItems.map((item, index) => {
          const contentId = `tab-content-${index}`;
          const isActive = index === activeTab;

          return (
            <TabContent
              key={index}
              isActive={isActive}
              id={contentId}
              role="tabpanel"
              aria-labelledby={`tab-${index}`}
            >
              {item.content}
            </TabContent>
          );
        })}
      </div>
    </div>
  );
};

export default HorizontalTabs;
