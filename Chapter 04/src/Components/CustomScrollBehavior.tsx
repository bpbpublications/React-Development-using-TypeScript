import React, { useRef } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 400px;
  overflow: auto;
  border: 1px solid #ccc;
  padding: 10px;
`;

const ScrollableContent = styled.div`
  width: 100%;
  height: 1000px;
  background-color: #f5f5f5;
`;

const ScrollToTopButton = styled.button`
  position: fixed;
  bottom: 40px;
  right: 40px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const CustomScrollBehavior: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const scrollToTop = () => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  };

  return (
    <div>
      <Container ref={containerRef}>
        <ScrollableContent>
          <div>
            <h2>Custom Scroll Behavior - useRef</h2>
            <p>
              React hooks are a powerful feature introduced in React 16.8 that
              allow you to manage stateful logic in functional components. They
              provide a cleaner and more concise way to handle things like
              state, side effects, context, and more.
            </p>
            <p>
              useState hook is used to manage state within functional
              components, allowing you to easily add and update state variables.
              useEffect hook helps you manage side effects, such as data
              fetching, DOM manipulation, and more, in a more organized manner.
            </p>
            <p>
              useContext hook simplifies the usage of context in your
              components, making it easier to share data between different parts
              of your application. useReducer hook is an alternative to useState
              for more complex state management scenarios where state
              transitions can be defined using a reducer function.
            </p>
            <p>
              useRef hook provides a way to hold references to DOM elements or
              values across renders, useful for accessing or modifying elements
              directly. Custom hooks allow you to encapsulate and reuse logic
              across components, promoting reusability and maintaining a clean
              codebase.
            </p>
            <p>
              Whether you're building an e-commerce marketplace, a real-time
              messaging app, a collaborative document editor, or any other
              application, React hooks offer a flexible and efficient way to
              handle a variety of functionalities while enhancing code
              readability and maintainability.
            </p>
          </div>
        </ScrollableContent>
      </Container>
      <ScrollToTopButton onClick={() => scrollToTop()}>
        Scroll to Top
      </ScrollToTopButton>
    </div>
  );
};

export default CustomScrollBehavior;
