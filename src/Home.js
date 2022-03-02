import React, {useContext} from 'react'
import Juz from './components/Juz'
import { useParams , Link} from 'react-router-dom'
import Modecontext from './components/context/Modecontext'
const Home = () => {
    const {mode} = useContext(Modecontext)
   let {juz} = useParams();
   juz = juz?juz:1;
   const isJuz = juz>0 && juz<=30;
  return (
    <>
    <div style={{width:'100%'}} className={`container ${mode==='light'?'':'text-light'}`}>
        <div  style={{width:'100%'}}  className="container text-center">
            <h1>{isJuz?<>Quran Juz {juz}</>:<>Please choose the Juz between 1 and 30</>}</h1>
        </div>
        {isJuz && <Juz juz={juz}/>}
    <div className="container d-flex justify-content-sm-between my-2">
        <Link to={`/${parseInt(juz)+1}`} style={{display:parseInt(juz)>=30?'none':''}} className="btn btn-primary">
        <i className="bi bi-arrow-left"></i>  Next {parseInt(juz)+1}
        </Link>
        <Link to={`/${parseInt(juz)-1}`} style={{display:parseInt(juz)<=1 ? 'none':''}} className="btn btn-primary">
        Previous{parseInt(juz)-1} <i className="bi bi-arrow-right"></i> 
        </Link>
    </div>
    </div>
    </>
  )
}

export default Home