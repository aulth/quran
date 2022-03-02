import React , {useContext} from 'react'
import Modecontext from './Modecontext'
const Spinner = () => {
    const {mode}=useContext(Modecontext)
    return (
        <>
            <div className={`spinner-border text-center container  ${mode==='light'?'':'text-light'}`} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </>
    )
}

export default Spinner