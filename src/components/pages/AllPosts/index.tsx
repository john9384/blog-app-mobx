import React from 'react'

import {observer} from 'mobx-react'
import {BlogStore} from '../../store/BlogStore'
import BlogCard from './components/BlogCard'
import { BlogForm } from './components/BlogForm'


export const AllPosts:React.FC = observer(()=>{
  const blogStore = BlogStore

  const blogPosts = blogStore.allPosts


  const handleOnSubmit = (e: any, data: any, resetForm: any )=>{
    e.preventDefault()
    blogStore.createPost(data.title, data.content)

    resetForm()
  }

  return <div>
    <h1>All post</h1>
   <BlogForm handleOnSubmit={handleOnSubmit}/>

    <div>
      {blogPosts.map(blog => <BlogCard key={blog.id} blog={blog}/>)}
    </div>
  </div>
})



