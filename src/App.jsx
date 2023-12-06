import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import IsPrivate from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";
import HomePage from "./pages/HomePage";
import ArticleListPage from "./pages/ArticleListPage";
import ArticleDetailsPage from "./pages/ArticleDetailsPage";
import EditArticlePage from "./pages/EditArticlePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";


function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>      
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/articles" element={ <IsPrivate> <ArticleListPage /> </IsPrivate> }  />
        <Route exact path="/articles/:articleId" element={ <IsPrivate> <ArticleDetailsPage /> </IsPrivate> } />
        <Route exact path="/articles/edit/:articleId" element={ <IsPrivate> <EditArticlePage /> </IsPrivate> }  />    
        <Route path="/signup" element={<IsAnon> <SignupPage /> </IsAnon>} />
        <Route path="/login" element={<IsAnon> <LoginPage /> </IsAnon>} />
      </Routes>
    </div>
  );
}

export default App;
