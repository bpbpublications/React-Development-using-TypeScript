import React, { useState, useEffect } from "react";
import styled from "styled-components";

interface Message {
  id: number;
  text: string;
  sender: string;
  timestamp: string;
}

const MessagingContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

const MessageList = styled.ul`
  list-style: none;
  padding: 0;
`;

const MessageItem = styled.li<{ isUser: boolean }>`
  background-color: ${(props) => (props.isUser ? "#3498db" : "#fff")};
  color: ${(props) => (props.isUser ? "#fff" : "#333")};
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const MessageForm = styled.form`
  display: flex;
  margin-top: 20px;

  input[type="text"] {
    flex: 1;
    padding: 10px;
    border: none;
    border-radius: 5px 0 0 5px;
    background-color: #fff;
  }

  button {
    background-color: #27ae60;
    color: white;
    border: none;
    border-radius: 0 5px 5px 0;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #219652;
    }
  }
`;

const MAX_MESSAGES = 2;

const RealTimeMessagingApp: React.FC = () => {
  // State for storing messages and new messages
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");

  // useEffect to simulate real-time messaging and manage side effects
  useEffect(() => {
    // Simulate real-time messaging with setTimeout
    const interval = setInterval(() => {
      const timestamp = new Date().toLocaleTimeString();
      const newMessage: Message = {
        id: Date.now(),
        text: `New message at ${timestamp}`,
        sender: "User",
        timestamp
      };

      setMessages((prevMessages) => {
        if (prevMessages.length >= MAX_MESSAGES) {
          return [...prevMessages.slice(1), newMessage];
        }
        return [...prevMessages, newMessage];
      });
    }, 5000);
    // Clean up the interval when the component unmounts or when the dependencies change
    return () => clearInterval(interval);
  }, []);

  // Function to send a new message
  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const timestamp = new Date().toLocaleTimeString();
      const message: Message = {
        id: Date.now(),
        text: newMessage,
        sender: "User",
        timestamp
      };

      setMessages((prevMessages) => {
        if (prevMessages.length >= MAX_MESSAGES) {
          return [...prevMessages.slice(1), message];
        }
        return [...prevMessages, message];
      });

      setNewMessage("");
    }
  };

  return (
    <MessagingContainer>
      <h2>Real-Time Messaging App - useEffect</h2>
      <MessageList>
        {messages.map((message) => (
          <MessageItem key={message.id} isUser={message.sender === "User"}>
            <p>{message.text}</p>
            <p>Timestamp: {message.timestamp}</p>
          </MessageItem>
        ))}
      </MessageList>
      <MessageForm onSubmit={sendMessage}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </MessageForm>
    </MessagingContainer>
  );
};

export default RealTimeMessagingApp;
