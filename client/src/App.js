import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';
import BabyHome from './components/BabyHome';
import NavBar from './components/NavBar';
import PostDetails from './components/PostDetails';
import Login from './components/Login'
import SignUp from './components/Signup'
import Dashboard from './components/Dashboard'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <NavBar/>
          <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/dashboard" element={< Dashboard />} />
          <Route path="/dashboard/babies" exact element={<BabyHome />}/>
          <Route path="/dashboard/babies/add" element={<CreatePost />}/>
          <Route path="/dashboard/babies/edit/:id" element={<EditPost />}/>
          <Route path="/dashboard/babies/post/:id" element={<PostDetails />}/>
          </Routes>
          </div>
      </BrowserRouter>
 
    );
  }
}

export default App;