import { useState, useEffect } from 'react'
import Posts from './Posts'
import Pagination from './Pagination'
import Header from './Header';
import MultiSelect from './MultiSelect'
import Category from './Category';
const App = () => {
  const [posts, setPosts] = useState([]);
  const[backUpPosts,setbackUpPosts]=useState([]);
  const[loading,setloading]=useState(false);
  const[currentpage,setcurrentpage]=useState(1);
  const[postsperpage,setpostsperpage]=useState(5);
  const[allcategories,setallcategories]=useState([]);

  //fetch  data in post 
  useEffect(() => {
    const getPosts = async () => {
      setloading(true);
      const postsFromServer = await fetchPosts()
      setPosts(postsFromServer);
      setbackUpPosts(postsFromServer);
       //console.log(allcategories)
      setloading(false);
      
    }
    

    getPosts()}, []);
  //get data from mock APi
  const fetchPosts = async () => {
    const res = await fetch('api/posts');
    const data = await res.json();
    const backcategories=[];
     data.posts.map((post) => {
      if(post.categories!=null){
       post.categories.map((cat)=>{
         if(cat.id!=null) {
             if(backcategories.length>0){
               if(backcategories.filter((onecat)=>(onecat.label===cat.name)).length<=0)
               {
                backcategories.push({value:cat.id,label:cat.name})
               }
             }
            else{
              backcategories.push({value:cat.id,label:cat.name})
          }
         }
        
       });
     
      }
     });
     setallcategories({allcategories:backcategories})
    return data.posts
  }
 //search  something like title or name
  const onChange=async(e)=>
  {
    const data=posts;
    if (e.target.value==="" ||e.target.value==null){
      setPosts(backUpPosts);
    }else{
    setPosts(posts.filter((post)=>(post.author.name.includes(e.target.value.trim()) ||post.title.includes( e.target.value.trim()) )))
 // console.log(allcategories)
 
    }
  }
  //multiselect 
 const onChangeSelect=async(e)=>
 {
   var filterPosts=[];
   if( e.length == 0 ) {
     filterPosts = backUpPosts
   }
   for(let i=0; i<e.length;i++)
   {
     for(let j=0; j<backUpPosts.length;j++)
     {
       for(let k=0; k<backUpPosts[j].categories.length; k++ )
       {
         if(e[i].label==backUpPosts[j].categories[k].name)
         {
                 filterPosts.push(backUpPosts[j])
                 k=backUpPosts[j].categories.length;
         }
       }
     }
     
  }
  setPosts(filterPosts);
   
   
 }
    
  //page consts
  const indexOfLastPost=currentpage*postsperpage;
  const indexOfFirstPost=indexOfLastPost-postsperpage;
  const currentPosts=posts.slice(indexOfFirstPost,indexOfLastPost);
   // Change page
   const paginate = pageNumber => setcurrentpage(pageNumber);

 
  return (
  
      <div className='container'>
        <Header title="Posts..."/>
        
        <input 
          type="text" 
          name="search" 
          style={{ flex: '10',width: '100%', padding: '5px' }}
          placeholder="search ..."
          onChange={onChange}/>
          <MultiSelect  onChange={onChangeSelect}  allcategories={allcategories.allcategories} />
         <Posts onChange={onChange} loading={loading} posts={currentPosts}/>
         <Pagination 
        postsPerPage={postsperpage}  totalPosts={posts.length}
        paginate={paginate} />

      </div>
  )
}

export default App
