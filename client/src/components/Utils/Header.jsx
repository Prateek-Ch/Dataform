import {Link} from 'react-router-dom';
import './Header.css'

function Header(){
    return(
      <nav className="navbar navbar-light navbar-expand-lg">
         <div className="container-fluid">
         <Link to="/" className="navbar-brand" style={{marginLeft:"4%"}}>dataform</Link>
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0" >
        <li className="nav-item">
          <Link to="/students" className="nav-link">Students</Link>
          </li>  
          <li className="nav-item">
          <Link to="/colleges" className="nav-link">Colleges</Link>
          </li>
          <li className="nav-item">
          <Link to="/create/college" className="nav-link">Add New College</Link>
          </li>
          <li className="nav-item">
          <Link to="/create/student" className="nav-link">Add New Student </Link>
          </li>
        </ul>
        </div>
        </div>
      </nav>
    );
}

export default Header;