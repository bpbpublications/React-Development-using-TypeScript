import React, { useState, useContext } from "react";
import styled from "styled-components";

// Create a context to manage the shared document state
const DocumentContext = React.createContext<string>("");

const DocumentContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

const DocumentTextArea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: vertical;
`;

const CollaboratorDisplay: React.FC = () => {
  // Consume the document state from the DocumentContext
  const documentText = useContext(DocumentContext);

  return (
    <div>
      <h3>Collaborator View</h3>
      <p>{documentText}</p>
    </div>
  );
};

const CollaborativeDocumentEditor: React.FC = () => {
  const [documentText, setDocumentText] = useState<string>("");

  // Use the DocumentContext to provide and consume the document state
  return (
    <DocumentContext.Provider value={documentText}>
      <DocumentContainer>
        <h2>Collaborative Document Editor - useContext </h2>
        <DocumentTextArea
          value={documentText}
          onChange={(e: any) => setDocumentText(e.target.value)}
          placeholder="Start typing your document..."
        />
        <CollaboratorDisplay />
      </DocumentContainer>
    </DocumentContext.Provider>
  );
};

export default CollaborativeDocumentEditor;
