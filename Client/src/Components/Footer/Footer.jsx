import React from 'react'
import Style from './Fotter.module.css'
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FaFacebookSquare,FaInstagram, FaTwitter  } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={Style.mainFooter}>
      <Link to="/"><h1 className={Style.Titulo}>
        EVEN<b>TOO</b>
      </h1></Link>
      <div>
        <motion.ul className={Style.MenuItem}>
          <li>
            <NavLink to="/about-us">ABOUT US</NavLink>
          </li>
          <li>
            <NavLink to="/contact">CONTACT</NavLink>
          </li>
          <li>
            <NavLink to="/faq">FAQ</NavLink>
          </li>
        </motion.ul>
      </div>
      <div >

      <span className={Style.socialIcon} aria-hidden="true"><FaFacebookSquare size={30}/></span>
      <span className={Style.socialIcon} aria-hidden="true"><FaInstagram size={30}/></span>
      <span className={Style.socialIcon} aria-hidden="true"><FaTwitter size={30}/></span>

      </div>
    </footer>
  )
}

export default Footer