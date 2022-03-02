import React,{useState} from 'react'
import Modecontext from './Modecontext'
const Modestate = (props) => {
    const [mode, setMode] = useState(localStorage.getItem('mode')?localStorage.getItem('mode'):'light');
    const modeToggle = ()=>{
        localStorage.setItem('mode', mode==='light'?'dark':'light');
        setMode(mode==='light'?'dark':'light');
    }
  return (
    <Modecontext.Provider value={{mode, modeToggle}}>
        {props.children}
    </Modecontext.Provider>
  )
}

export default Modestate