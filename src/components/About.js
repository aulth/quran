import React, {useContext} from 'react'
import Modecontext from './context/Modecontext'
const About = () => {
    const {mode}=useContext(Modecontext)
  return (
   <>
   <div className={`container my-2 ${mode==='light'?'':'text-light'}`}>
       Complete Quran
       <br />
       This app is created by <a href="https://aulth.github.io/usman">Mohd Uman</a>
   </div>
   </>
  )
}

export default About