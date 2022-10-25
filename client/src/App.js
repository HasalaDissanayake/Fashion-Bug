import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import BabiesCreatePost from './components/BabiesCreatePost';
import BabiesEditPost from './components/BabiesEditPost';
import BabiesHome from './components/BabiesHome';
import BabiesPostDetails from './components/BabiesPostDetails';
import Login from './components/Login'
import SignUp from './components/Signup'
import Dashboard from './components/Dashboard'
import MenCreatePost from './components/menCreatePost';
import MenEditPost from './components/menEditPost';
import MenHome from './components/menHome';
import MenPostDetails from './components/menPostDetails';
import WomenCreatePost from './components/womenCreatePost';
import WomenEditPost from './components/womenEditPost';
import WomenHome from './components/womenHome';
import WomenPostDetails from './components/womenPostDetails';
import KidsCreatePost from './components/kidsCreatePost';
import KidsEditPost from './components/kidsEditPost';
import KidsHome from './components/kidsHome';
import KidsPostDetails from './components/kidsPostDetails';
import AccessoriesCreatePost from './components/accessoriesCreatePost';
import AccessoriesEditPost from './components/accessoriesEditPost';
import AccessoriesHome from './components/accessoriesHome';
import AccessoriesPostDetails from './components/accessoriesPostDetails';


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
          <Route path="/dashboard/babies" element={<BabiesHome />}/>
          <Route path="/dashboard/babies/add" element={<BabiesCreatePost />}/>
          <Route path="/dashboard/babies/edit/:id" element={<BabiesEditPost />}/>
          <Route path="/dashboard/babies/post/:id" element={<BabiesPostDetails />} />
          <Route path="/dashboard/men" element={<MenHome />}/>
          <Route path="/dashboard/men/add" element={<MenCreatePost />}/>
          <Route path="/dashboard/men/edit/:id" element={<MenEditPost />}/>
          <Route path="/dashboard/men/post/:id" element={<MenPostDetails />} />
          <Route path="/dashboard/women" element={<WomenHome />}/>
          <Route path="/dashboard/women/add" element={<WomenCreatePost />}/>
          <Route path="/dashboard/women/edit/:id" element={<WomenEditPost />}/>
          <Route path="/dashboard/women/post/:id" element={<WomenPostDetails />} />
          <Route path="/dashboard/kids" element={<KidsHome />}/>
          <Route path="/dashboard/kids/add" element={<KidsCreatePost />}/>
          <Route path="/dashboard/kids/edit/:id" element={<KidsEditPost />}/>
          <Route path="/dashboard/kids/post/:id" element={<KidsPostDetails />} />
          <Route path="/dashboard/accessories" element={<AccessoriesHome />}/>
          <Route path="/dashboard/accessories/add" element={<AccessoriesCreatePost />}/>
          <Route path="/dashboard/accessories/edit/:id" element={<AccessoriesEditPost />}/>
          <Route path="/dashboard/accessories/post/:id" element={<AccessoriesPostDetails />}/>
          </Routes>
          </div>
      </BrowserRouter>
 
    );
  }
}

export default App;