import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from "./Components/Signup-Login/Login";
import Signup from "./Components/Signup-Login/Signup";
import Protected from "./Components/Protected/protected"
import BasicInfo from "./Components/AddNewProperty/basicinfo";
import LocationInfo from "./Components/AddNewProperty/locationinfo";
import GeneralInfo from "./Components/AddNewProperty/generalinfo";
import PropertyDetails from "./Components/AddNewProperty/propertydetails";
import Property from "./Components/property/Property";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login/>} />
    <Route path="/Signup" element={<Signup/>} />
    <Route
          path="/property"
          element={
            <Protected>
              <Property />
            </Protected>
          }
        ></Route>
      <Route
          path="/basicinfo"
          element={
            <Protected>
              <BasicInfo />
            </Protected>
          }
        ></Route>
        <Route
          path="/propertydeatils"
          element={
            <Protected>
              <PropertyDetails />
            </Protected>
          }
        ></Route>
        <Route
          path="/generalinfo"
          element={
            <Protected>
              <GeneralInfo />
            </Protected>
          }
        ></Route>
        <Route
          path="/locationinfo"
          element={
            <Protected>
              <LocationInfo />
            </Protected>
          }
        ></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;