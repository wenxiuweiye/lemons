import {useEffect,useState} from 'react';

function useResize(){
    const [width,setWidth] = useState(window.innerWidth)
    useEffect(()=>{
        window.addEventListener('resize',()=>{
            setWidth(window.innerWidth)
        })
    },[])
}

export default useResize