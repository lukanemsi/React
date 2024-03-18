import logo from "./logo.svg";
import "./App.css";
import Header from "./components/layout/Header";
import Navigation from "./components/layout/Navigation";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { picture, user, navigation, cards, artists,artistsInfo, projects } from "./data/data";

import Dashboard from "./components/pages/Dashboard";
import Artists from "./components/pages/Artists";
import Projects from "./components/pages/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard cards={cards} />,
  },
  {
    path: "/artists",
    element: <Artists artists={artistsInfo}/>,
  },
  {
    path: "/projects",
    element: <Projects projects={projects}/>,
  },
  {
    path: "/logout",
    element: <><h1>LOG OUT</h1></>,
  },
]);

function App() {
  return (
    <React.StrictMode>
      <div className="flex justify-between">
        <div className="width-10-p">
          <Navigation navigation={navigation} />
        </div>
        <div className="width-90-p">
          <Header picture={picture} user={user} />
          <RouterProvider router={router} />
        </div>
      </div>
    </React.StrictMode>
  );
}

export default App;
