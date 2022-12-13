import React, { useEffect ,useRef , } from 'react';

enum DarkOrLight{
    'dark','light'
}

type DataAndOptions = {
    data: string,

    options?:{
        textColor : string | 'black',
        darkOrLight: DarkOrLight ,
    }
}
export const Reader:React.FC<DataAndOptions> = (props:DataAndOptions)=>{
    const {data  ,options} = props
    const canvasEle = useRef(null)
    useEffect(()=>{
        
        const canvas =  canvasEle.current as unknown as HTMLCanvasElement
        const ctx = canvas.getContext('2d')
        if(ctx){
            ctx.fillText(data,50,20)
            ctx.font = "12px serif";
        }
    },[props])                          
    
    return(
        <div>
            <canvas 
            ref={canvasEle}
            className=' w-full h-40'
            ></canvas>
        </div>
    )
}

