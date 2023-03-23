import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// context
import RecipeProvider from "./contexts/RecipeContext";

// components
import Navbar from "./components/navbar/Navbar";

// pages
import Home from "./pages/home/Home";
import ErrorPage from "./pages/errorPage/ErrorPage";
import Create from "./pages/create/Create";
import Search from "./pages/search/Search";
import Recipe from "./pages/recipe/Recipe";

function App() {
  return (
    <main>
      <RecipeProvider>
        <BrowserRouter>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create" element={<Create />} />
              <Route path="/search" element={<Search />} />
              <Route path="/recipe/:id" element={<Recipe />} />
              <Route path="/*" element={<ErrorPage />} />
            </Routes>
          </div>
        </BrowserRouter>
      </RecipeProvider>
    </main>
  );
}

export default App;
