import React from 'react';
import navRight from '../../assets/navRight.svg'
const SelectItem:React.FC = () => {
    const datas = ['index','read','music','game','login'];
    const items = datas.map(val => {
        return <li key={val.toString()} className="  flex justify-between items-center  md:bg-inherit p-5 md:p-5 md:hover:pt-3 md:hover:border-t-8 md:hover:border-primary-purple">
                    <span className=" ">{val}</span>
                    {window.innerWidth<=768?(
                        <img src={navRight} className=' mr-10'></img>
                    ):(
                        null
                    )}
                </li>
    })
    return(
        <ul className="flex w-5/6 flex-col space-y-1 font-sans text-lg text-primary-purple font-bold md:text-primary-gray md:w-1/3 md:flex-row md:justify-evenly  md:space-y-0">
                {items}
        </ul>
    )
}

export default SelectItem