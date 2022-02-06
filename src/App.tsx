import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {AllPosts} from './components/pages/AllPosts'
import Blog from './components/pages/Blog'
import { UpdatePost } from './components/pages/Blog/UpdatePost/index';


function App() {
  return (<div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllPosts/>}/>
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/blog/update/:id" element={<UpdatePost />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
