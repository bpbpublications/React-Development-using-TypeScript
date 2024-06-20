import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./styles.css";
import ECommerceMarketplace from "./Components/ECommerceMarketplace";
import RealTimeMessagingApp from "./Components/RealTimeMessagingApp";
import CollaborativeDocumentEditor from "./Components/CollaborativeDocumentEditor";
import TaskManagementBoard from "./Components/TaskManagementBoard";
import OnlineMultiplayerGame from "./Components/OnlineMultiplayerGame";
import FitnessTrackingDashboard from "./Components/FitnessTrackingDashboard";
import CustomScrollBehavior from "./Components/CustomScrollBehavior";
import ModeComponent from "./Components/ModeComponent";
import DynamicTabsAccordion from "./Components/DynamicTabsAccordion";

export default function App() {
  return (
    <Router>
      <div className="App">
        <nav className="horizontal-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/ecommerce">E-Commerce Marketplace</Link>
            </li>
            <li>
              <Link to="/realtime">Real-Time Messaging App</Link>
            </li>
            <li>
              <Link to="/collaborative">Collaborative Document Editor</Link>
            </li>
            <li>
              <Link to="/taskmanagement">Task Management Board</Link>
            </li>
            <li>
              <Link to="/multiplayer">Online Multiplayer Game</Link>
            </li>
            <li>
              <Link to="/fitness">Fitness Tracking Dashboard</Link>
            </li>
            <li>
              <Link to="/tabsaccordion">Dynamic Tabs & Accordion</Link>
            </li>
            <li>
              <Link to="/scrollbehavior">Custom Scroll Behavior</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Routes>
          <Route path="/" element={<ModeComponent />} />
          <Route path="/ecommerce" element={<ECommerceMarketplace />} />
          <Route path="/realtime" element={<RealTimeMessagingApp />} />
          <Route
            path="/collaborative"
            element={<CollaborativeDocumentEditor />}
          />
          <Route path="/taskmanagement" element={<TaskManagementBoard />} />
          <Route path="/multiplayer" element={<OnlineMultiplayerGame />} />
          <Route path="/fitness" element={<FitnessTrackingDashboard />} />
          <Route path="/tabsaccordion" element={<DynamicTabsAccordion />} />
          <Route path="/scrollbehavior" element={<CustomScrollBehavior />} />
        </Routes>
      </div>
    </Router>
  );
}
/*import "./styles.css";
import ECommerceMarketplace from "./Components/ECommerceMarketplace";
import RealTimeMessagingApp from "./Components/RealTimeMessagingApp";
import CollaborativeDocumentEditor from "./Components/CollaborativeDocumentEditor";
import TaskManagementBoard from "./Components/TaskManagementBoard";
import OnlineMultiplayerGame from "./Components/OnlineMultiplayerGame";
import FitnessTrackingDashboard from "./Components/FitnessTrackingDashboard";
import CustomScrollBehavior from "./Components/CustomScrollBehavior";
import ModeComponent from "./Components/ModeComponent";
import DynamicTabsAccordion from "./Components/DynamicTabsAccordion";

export default function App() {
  return (
    <div className="App">
      <ModeComponent />
      <hr />
      <ECommerceMarketplace />
      <hr />
      <RealTimeMessagingApp />
      <hr />
      <CollaborativeDocumentEditor />
      <hr />
      <TaskManagementBoard />
      <hr />
      <OnlineMultiplayerGame />
      <hr />
      <FitnessTrackingDashboard />
      <hr />
      <DynamicTabsAccordion />
      <hr />
      <CustomScrollBehavior />
    </div>
  );
} */
