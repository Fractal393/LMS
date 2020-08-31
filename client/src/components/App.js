import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer"


import PostPage from "./views/PostPage/PostPage";
import BlogPage from "./views/BlogPage/BLogPage";
import CreateBlogPage from "./views/BlogPage/Section.js/CreatePage";
import Explor from './views/FileExplorer/FileExplorer.js';

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
      <div  >
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />  
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/blog" component={Auth(BlogPage, null)} />
          <Route exact path="/blog/create" component={Auth(CreateBlogPage, true)} />
          <Route exact path="/blog/post/:postId" component={Auth(PostPage, null)} />
          <Route exact path="/blog/file" component={Auth(Explor, null)} /> 
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
