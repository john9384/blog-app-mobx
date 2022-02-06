import {makeObservable, observable, action, computed} from "mobx"

export interface BlogPost {
  id: number;
  title: string;
  content: string;
}

export class BlogStoreImpl {
  posts: BlogPost[] = []

  constructor(){
    makeObservable(this, {
      posts: observable,
      createPost: action,
      updatePost: action,
      deletePost: action,
      allPosts: computed,
      postById: action
    })
  }

  createPost(title: string, content: string){
    const post: BlogPost = {
      id: Math.floor(1000 + Math.random() * 9000),
      title,
      content
    }
    this.posts.push(post)
  }

  updatePost(id: number | undefined, title: string, content:string){
    const index = this.posts.findIndex(post => post.id === id)
    if(index > -1){
      this.posts[index].title = title
      this.posts[index].content = content
    }
  }

  deletePost(id:number | undefined){
    const index = this.posts.findIndex(post => post.id === id)
    if(index > -1) this.posts.splice(index,1)
  }

  get allPosts(){
    return this.posts
  }
  
  postById(id: string | undefined ){
    if(id === undefined) return null

    const index = this.posts.findIndex(item => item.id === parseInt(id))
    if(index > -1) return this.posts[index]
    
    return null
  }

}

export const BlogStore = new BlogStoreImpl()