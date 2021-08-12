import {AppBar} from '@material-ui/core';
import {Link} from 'react-router-dom';

function Header(){
    return(
    <AppBar positon="static" color="inherit" >
        <nav className="navbar navbar-light navbar-expand-lg" style={{background:"#e3f2fd"}}>
        <Link to="/" className="navbar-brand" style={{marginLeft:"4%"}}>dataform</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav ms-auto" style={{marginRight:"4%"}}>
        <li className="navbar-item">
          <Link to="/students" className="nav-link">Students</Link>
          </li>  
          <li className="navbar-item">
          <Link to="/colleges" className="nav-link">Colleges</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create/college" className="nav-link">Add New College</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create/student" className="nav-link">Add New Student </Link>
          </li>
        </ul>
        </div>
      </nav>
    </AppBar>           
    );
}

export default Header;