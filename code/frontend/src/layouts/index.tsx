import { ReactNode } from "react"
import Content from "./content"
import Footer from "./footer"


interface Props{
        children:ReactNode
}

function Layout(props:Props){
    const { children } = props
    return(
        <div  className="flex w-full flex-col items-center" >
            {children}
        </div>
    )
}


export {  Footer , Content}
export default Layout


