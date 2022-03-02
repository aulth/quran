import React, {useContext} from 'react'
import { Link , useLocation} from 'react-router-dom'
import Modecontext from './context/Modecontext'
const Navbar = () => {
    const location = useLocation();
    const {mode, modeToggle} = useContext(Modecontext);
    document.body.style.background = mode==='light'?'white':'#26292b';
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${mode==='light'?'light':'dark'} bg-${mode==='light'?'light':'dark'}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Quran</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className={`nav-link ${location.pathname==='about'?'active':''} `}>About</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Select Juz
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link to="/1" className="dropdown-item ">1</Link></li>
                                    <li><Link to="/2" className="dropdown-item">2</Link></li>
                                    <li><Link to="/3" className="dropdown-item">3</Link></li>
                                    <li><Link to="/4" className="dropdown-item">4</Link></li>
                                    <li><Link to="/5" className="dropdown-item">5</Link></li>
                                    <li><Link to="/6" className="dropdown-item">6</Link></li>
                                    <li><Link to="/7" className="dropdown-item">7</Link></li>
                                    <li><Link to="/8" className="dropdown-item">8</Link></li>
                                    <li><Link to="/9" className="dropdown-item">9</Link></li>
                                    <li><Link to="/10" className="dropdown-item">10</Link></li>
                                    <li><Link to="/11" className="dropdown-item">11</Link></li>
                                    <li><Link to="/12" className="dropdown-item">12</Link></li>
                                    <li><Link to="/13" className="dropdown-item">13</Link></li>
                                    <li><Link to="/14" className="dropdown-item">14</Link></li>
                                    <li><Link to="/15" className="dropdown-item">15</Link></li>
                                    <li><Link to="/16" className="dropdown-item">16</Link></li>
                                    <li><Link to="/17" className="dropdown-item">17</Link></li>
                                    <li><Link to="/18" className="dropdown-item">18</Link></li>
                                    <li><Link to="/19" className="dropdown-item">19</Link></li>
                                    <li><Link to="/20" className="dropdown-item">20</Link></li>
                                    <li><Link to="/21" className="dropdown-item">21</Link></li>
                                    <li><Link to="/22" className="dropdown-item">22</Link></li>
                                    <li><Link to="/23" className="dropdown-item">23</Link></li>
                                    <li><Link to="/24" className="dropdown-item">24</Link></li>
                                    <li><Link to="/25" className="dropdown-item">25</Link></li>
                                    <li><Link to="/26" className="dropdown-item">26</Link></li>
                                    <li><Link to="/27" className="dropdown-item">27</Link></li>
                                    <li><Link to="/28" className="dropdown-item">28</Link></li>
                                    <li><Link to="/29" className="dropdown-item">29</Link></li>
                                    <li><Link to="/30" className="dropdown-item">30</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <i onClick={modeToggle} className={`bi bi-brightness-high${mode==='light'?'':'-fill text-light'}`}></i>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar