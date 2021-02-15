
import PropTyepes from 'prop-types'
const Header = ({title}) => {
 
  return (
    <div>
      <header className='header'>
      <h1>{title}</h1>
      </header>
    </div>
  ) 
}
Header.PropTyepes={
  title:PropTyepes.string.isRequired
}

export default Header
