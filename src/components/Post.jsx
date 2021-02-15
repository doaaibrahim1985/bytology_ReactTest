import Categories from './Categories'
const Post = ({post}) => {
  return (
    <div className='Post'>
      <h3 key={post.id}>{post.title}</h3>
      <img src={post.author.avatar} alt="nophoto"></img>
       <h3>{post.author.name}</h3>
     <h3>{post.publishDate}</h3>
     <label readOnly >{post.summary}</label> 
     
    <h4><Categories Categories={post.categories}/></h4>
   
   </div>
  )
}

export default Post
