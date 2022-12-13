import React,{useState,useEffect} from "react";

import useResize from '../../hooks/useResize';

import logo from '../../assets/logo.png'
import SelectItem from "./selectItem";
import NavLogoMoblie from './NavLogoMoblie';

const Navigator: React.FC = () => {
    

    //使用自定义hooks, 在窗口发生变化时改变大小
    useResize()
    
    //滚动时收起下拉菜单,改变标题以及导航栏颜色
    const [selectItem,setselectItem] = useState<React.ReactElement|null>(null)
    const [navMsg,setnavMsg] = useState('text-white')
    useEffect(()=>{
        window.addEventListener('scroll',() => {
            window.scrollY>720?setnavMsg('text-primary-gray'):setnavMsg('text-white')
            if(window.scrollY != 0){
                setselectItem(null)
                return
            }
        })
    },[])

    //导航栏下拉菜单
    function click(){
        if(selectItem === null){
            setselectItem(<SelectItem></SelectItem>)
            return
        }
        setselectItem(null)
    }


  return (
    <div className={`w-full  fixed ${navMsg}`}>
        {window.innerWidth<=768 ?
        //移动端
        (
            <div className={`flex w-full flex-col items-center space-y-1`}>
                <NavLogoMoblie click={click}></NavLogoMoblie>
                {selectItem}
            </div>
        ) :
        //PC端
        (
            <div className={`flex w-full justify-between`}>
               <div className="flex items-center space-x-2 ml-5  font-bold font-sans text-lg italic">
                <img src={logo}></img>
                <span>Lemons</span>
               </div>
               <SelectItem></SelectItem>
            </div>
        )}
    </div>
  );
};

export default Navigator;
