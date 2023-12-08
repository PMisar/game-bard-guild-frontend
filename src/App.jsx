// App.jsx

import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import CustomNavbar from "./components/Navbar";
import IsPrivate from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ArticleListPage from "./pages/ArticleListPage";
import ArticleDetailsPage from "./pages/ArticleDetailsPage";
import EditArticlePage from "./pages/EditArticlePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import Profile from "./pages/Profile";
// import ReviewsPage from "./pages/ReviewsPage";
// import News from "./pages/NewsPage";
// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <CustomNavbar />

      <Routes>      
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/articles" element={ <IsPrivate> <ArticleListPage /> </IsPrivate> }  />
        <Route exact path="/articles/:articleId" element={ <IsPrivate> <ArticleDetailsPage /> </IsPrivate> } />
        <Route exact path="/articles/edit/:articleId" element={ <IsPrivate> <EditArticlePage /> </IsPrivate> }  />    
        {/* <Route exact path="/reviews" element={<IsPrivate> <ReviewsPage /> </IsPrivate>} /> */}
        <Route exact path="/signup" element={<IsAnon> <SignupPage /> </IsAnon>} />
        <Route exact path="/login" element={<IsAnon> <LoginPage /> </IsAnon>} />
        {/* <Route exact path="/news" element={<IsAnon> <NewsPage /> </IsAnon>} /> */}
        <Route exact path="/profile" element={<IsPrivate> <Profile /> </IsPrivate>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
