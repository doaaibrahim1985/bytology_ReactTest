import PropTyepes from 'prop-types'

const Button = ({color,text,onClick}) => {

  return (
    <div>
       <button className='btn' onClick={onClick} style={{backgroundColor:color}}>{text}</button>
    </div>
  )
}
Button.propTyepes={
  text:PropTyepes.string.isRequired,
  color:PropTyepes.string.isRequired,
  onClick:PropTyepes.function
}
export default Button
