import './Footer.scss'
<<<<<<< HEAD
import { Link } from '$routes'
import urlGenerator from '$ustoreinternal/services/urlGenerator'
=======

>>>>>>> fa6a0a54a97f2fe6a6eaa82d73c1f5bf322d9f9a
/**
 * This component represents the footer in the store
 */
const Footer = () => {
  return (
    <div className="footer">
<<<<<<< HEAD
      <div className="main">
        <ul className="footer_menu">
        <li className="header">General info</li>
        <li>
         <Link to={urlGenerator.get({page:"termsconditions"})}><a>Terms and Conditions</a></Link>
        </li>        
        <li>
         <Link to={urlGenerator.get({page:"policy"})}><a>Privacy Policy</a></Link>
        </li>
        <li>
         <Link to={urlGenerator.get({page:"catclasslist"})}><a>Cat class list</a></Link>
        </li>       
        </ul>
        <div id="copy">
        © 2020 Intel Corporation
        </div>
      </div>
=======
>>>>>>> fa6a0a54a97f2fe6a6eaa82d73c1f5bf322d9f9a
    </div>
  )
}

export default Footer
