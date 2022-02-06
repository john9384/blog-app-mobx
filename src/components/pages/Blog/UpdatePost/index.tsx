import React, {useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import {observer} from 'mobx-react'
import { IBlogForm } from '../../AllPosts/components/BlogForm';
import { BlogStore } from '../../../store/BlogStore';




export const UpdatePost:React.FC<IBlogForm> = observer(()=>{
   let { id } = useParams();
  const blogStore = BlogStore
  const blog = blogStore.postById(id)

  const navigate = useNavigate()

  const [state, setState] = useState({
    title: blog?.title || '',
    content: blog?.content || ''
  })

  const handleOnChange = (e:any)=>{
    setState({...state, [e.target.name]: e.target.value})
  }

  const handleOnSubmit = (e: any )=>{
    e.preventDefault()
    blogStore.updatePost(blog?.id || -1, state.title, state.content)
    return  navigate(`/blog/${blog?.id}`)
  }

  return <div>
   <form>
      <div>
        <input name="title" type="text" value={state.title} onChange={handleOnChange} placeholder="title"/>
      </div>

      <div>
        <textarea name="content" value={state.content} onChange={handleOnChange} placeholder="title">
        </textarea>
      </div>

      <div><button onClick={handleOnSubmit}>Submit</button></div>
    </form>
  </div>
})



