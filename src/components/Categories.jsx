import Category from './Category'

const Categories = ({Categories}) => {
 // console.log(Categories)
  return (
    <div className='post'>
     {Categories.map((cat) => (
        <Category key={cat.id} category={cat} />
       
      ))}
    </div>
  )
}

export default Categories
