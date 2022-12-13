import {  MouseEventHandler, ReactNode } from "react";
import './button.css'
type Porps = {
    click: MouseEventHandler<HTMLDivElement>;
    Children?:ReactNode
}

function Button(props:Porps){
    const {click,Children} = props
    return(
        <div
        onClick={click}
        className={`flex  items-center bg-primary-purple w-52 h-14 rounded-full text-2xl  text-white buttonAnimate_iceEffect md:w-80 md:h-20 ${Children?' justify-evenly':'justify-center'}`}
      >
        GET START
        {Children}
        </div>
    )
}

export default Button