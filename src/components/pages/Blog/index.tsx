import React from 'react'
import { Link, useParams } from 'react-router-dom';
import {observer} from 'mobx-react'
import { BlogStore } from './../../store/BlogStore';



const Blog: React.FC = observer(()=>{
  let { id } = useParams();
  const blogStore = BlogStore
  const blog = blogStore.postById(id)


  const handleDelete = (id: number | undefined) =>{
    blogStore.deletePost(id)
  }

  return <div>
  <h3>{blog?.title}</h3>
  <p>{blog?.content}</p>
  <div>
    <Link to={`/blog/update/${blog?.id}`}><button>update</button></Link>
    <button onClick={()=> handleDelete(blog?.id)}>delete</button>
  </div>
</div>
})

export default Blog