import React from 'react'
import Nav from '../nav/Nav'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';
import './home.scss'
const Home = () => {

  return (
   
    <div>


        <div className="home">
        <Nav></Nav>
        <div className="home__wrapper">
            <div className="home__info">
                <motion.div 
                 initial={{ opacity: 0, scale: 0.5 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 1 }}
                className="home__title">
                SO, YOU WANT TO TRAVEL TO 
                </motion.div>

                <h1 className="home__space">
                    SPACE
                </h1>

                <div className="home__descr">
                Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
                </div>
            </div>


            
          <motion.div
           initial={{ opacity: 0, scale: 0.5 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1 }}
          className="button__wrapper">
          <div className="button">
          <Link to={'/destination'}>
           <div 
       
           className="home__button">
           
           <span>EXPLORE</span>
               
                </div>
                <div className="home__button-wrapper">
                  
           </div>
           </Link>
           </div>
          </motion.div>
        </div>
        </div>
      
    </div>
  )
}

export default Home