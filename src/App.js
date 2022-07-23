import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import LoginPage from "./components/LoginPage";
import SubscriberForm from "./components/SubscribeForm";
import FolderPrompt from "./components/FolderPrompt";
import Assist from "./components/Assist";
import NotFound from "./components/NotFound";
import NavigationBar from "./components/NavigationBar";

const App = () => (
  <>
    <NavigationBar />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/inscriptions/new" element={<SubscriberForm />} />
        <Route path="/inscriptions/update" element={<FolderPrompt />} />
        <Route path="/effects/file" element={<FolderPrompt />} />
        <Route path="/effects/quitus" element={<FolderPrompt />} />
        <Route path="/assist" element={<Assist />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  </>
);

export default App;
