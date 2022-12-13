import { CaretDownOutlined, CaretRightOutlined } from "@ant-design/icons"
import { useEffect, useState } from "react"


type Props = {
    title:string,
    datamsg:string[]
}
function FooterItem(props:Props){
    const {datamsg,title} = props
    const [ ulstate , setulstate ] = useState(false)

    function click(){
        setulstate(!ulstate)
    }
    return(
        <div className=" flex w-full justify-center  ">
            <div className=" w-60">
                <span>{title}</span>
                <ul className={`text-lg text-primary-gray italic ${ulstate?'block':'hidden'}`}>
                   {datamsg.map(val=>{
                    return(
                        <li  key={val}>{val}</li>
                    )
                   })}
                </ul>
            </div>
            {ulstate?(<CaretDownOutlined onClick={click}/>):(<CaretRightOutlined onClick={click}/>)}        
        </div>
    )
}
export default FooterItem