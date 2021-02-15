
import Select from 'react-select'
const MultiSelect = ({allcategories,onChange}) => {
  
  return (
    <div>
      <Select isMulti onChange={onChange} options={allcategories}></Select>
      {/* <select>
        {allcategories.map((e)=> (
         
        <option>{e.name}</option>
))}
      </select> */}
         </div>
  )
}

export default MultiSelect
