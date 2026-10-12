import{Link} from 'react-router-dom'
function Header(){
    return (
        <div className ='Header'>
          <Link to ="/">Home</Link>
          <Link to ="About">About</Link>
          <Link to ="/Contact">Contact</Link>
        </div>
    )
  }
  export default Header;  
          