import {BiPhoneCall} from "react-icons/bi";
import {FaBars} from 'react-icons/fa';
import { useEffect, useRef, useState } from "react";
import {GrClose} from 'react-icons/gr';
import useClasses from "../hooks/useClasses";
import { motion } from "framer-motion";
export default function Navbar() {
    const [navBar,SetNavbar] = useState(false);
    let changeIcons = ()=>{
        SetNavbar(!navBar);
    }
    let styles = `fixed w-full duration-300 bg-[#f8f7f1] z-[2] flex items-center justify-between p-5 select-none lg:px-20 ${useClasses()}`;

  return (
    <div className="bg-[#f8f7f1] z-[2]" >
      <motion.div className={styles} >
        <h1 className="font-bold text-2xl first-letter:text-yellow-400 first-letter:text-4xl" >Abdellah</h1>
      <ul className={!navBar?"duration-300 absolute -right-[100%] top-[70px] bg-yellow-500 text-white font-semibold w-1/2 rounded-lg h-fit text-start p-5 my-li re-sp ":"duration-300  absolute top-[70px] bg-yellow-500 text-white font-semibold w-1/2 rounded-lg h-fit text-start p-5 my-li right-[2rem] re-sp"}>
        <li>services</li>
        <li>experience</li>
        <li>portfolio</li>
        <li>testimonials</li>
        <li className="flex items-center gap-2" >
        <span>+213 666 36 45 46</span>
        <BiPhoneCall size={25} />
        </li>
      </ul>
      {navBar?<GrClose onClick={changeIcons} className="cursor-pointer md:hidden "  size={20} />:<FaBars onClick={changeIcons} className="cursor-pointer md:hidden"  size={20} />
      }
    </motion.div>
    </div>
  )
}
