
import Post from './Post'

const Posts = ({posts,onChange,loading}) => {
 if(loading){
   <h2>loading...</h2>
 }
  return (
    <div onChange={onChange} >
        {posts.map((post)=>(
 <Post key={post.id} post={post} />

 ))}      
     
     
    </div>
  )
}

export default Posts
