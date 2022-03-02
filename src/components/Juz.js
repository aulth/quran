import React, {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom';
import Spinner from './context/Spinner';
const Juz = (props) => {
    const location = useLocation();
    const [ayahs, setAyahs] = useState();
    const [loading, setLoading] = useState(false)
    const {juz} = props;
    const fetchJuz = async (juz) =>{
        setLoading(true)
        const url =  `https://api.alquran.cloud/v1/juz/${juz}/quran-uthmani`;
        const response = await fetch(url,{
            method:'GET'
        })
        const data = await response.json();
        setAyahs(data.data.ayahs)
        setLoading(false)
    }
    useEffect(() => {
      fetchJuz(juz)
      //eslint-disable-next-line
    }, [location])
    
  return (
    <>
    {loading && <div className='container text-center'><Spinner/></div>}
    {!loading && ayahs && ayahs.map((ayah, index)=>{
        return <span   key={index}>{ayah.text}</span>
    })}
    </>
  )
}

export default Juz