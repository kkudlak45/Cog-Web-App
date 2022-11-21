import React from "react"; //using react
import "./index.css"; //import css idex
import "./css/FamilyCard.css"
import Home from "./routes/Home" //import pages of the website
import About from "./routes/About"
import Updates from "./routes/Updates"
import Contact from "./routes/Contact"
import Account from "./routes/Account"
import Login from "./routes/Login"
import Signup from "./routes/Signup"
import Games from "./routes/Games"
import FFC_Edit from "./routes/FFC_Edit"
import FFC_Select from "./routes/FFC_Select"
import Profile from "./routes/Profile"
import FamilyCard from "./games/FamilyCard"

import Navbar from "./components/Navbar.js";

import { Route, Routes } from "react-router-dom";
import UploadToS3Button from "./s3/UploadToS3Button";
import DeckList from "./components/Flashcards/DeckList";
import CardList from "./components/Flashcards/CardList";


//We will be using Router which essentially is the standard libary of routes
// for routing in react. This means it enables navigation among components and
// and can allows the us (users) to change the browser url

function App() {
  const SAMPLE_FLASHCARDS = [
    {
      id: 1,
      name: 'Kryzstof',
      picture: "https://cog-web-app-public-assets.s3.amazonaws.com/Headshots/KJK.png",
      relationship: 'grandson'
    }
  ]

  return (
    // The Routes tag includes all the pages that can be accessed in the app. To add a new page, do the following
    // 1. Create a new .js file somewhere (conventionally in the games or routes folder) and write code for that page (see any other page for an example)
    // 2. At the top of this file, write...
    //        import name-of-page from "relative-path-to-page"
    //
    // 3. In the routes tag, write... 
    //        <Route path="name-in-url" element={<name-of-page/>} />
    // Now while the app is running, in the URL, add the "name-in-url" and your new page should appear
    // Hope this helps :)
    //
    <>
      <Navbar></Navbar>
      <Routes> 
        <Route path="/" element={<Home />} /> 
        <Route path="/updates" element={<Updates />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/account" element={<Account />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/games" element={<Games />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/FFC_Edit" element={<FFC_Edit />} />
        <Route path="/FFC_Select" element={<FFC_Select />} />
        <Route path="/decks" element={<DeckList />} />
        <Route path="/edit/cards" element={<CardList />} />
        <Route path="/play/deck" element={<FamilyCard flashcard= {SAMPLE_FLASHCARDS[0]} />} />
      </Routes>
    </>
  );
}


export default App;
