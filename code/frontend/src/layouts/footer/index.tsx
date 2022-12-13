import {  QqOutlined, TwitterOutlined, WechatOutlined } from '@ant-design/icons';
import FooterItem from "./footItem";

function Footer() { 

    return(
        <footer  className="flex w-full  flex-col  items-center text-2xl space-y-6 pt-10 pb-10 bg-sub-gray" >
            <div className='flex w-full flex-col items-center space-y-6 lg:flex-row lg:items-start lg:space-y-0 lg:pt-5 lg:h-52'>
                <div className=" flex w-full justify-center items-center space-x-6">
                    <span>Follow us</span>
                    <WechatOutlined className="hover:scale-110 hover:drop-shadow-lg hover:rounded-full hover:IconAnimate_changeColor" />
                    <TwitterOutlined className="hover:scale-110 hover:drop-shadow-lg hover:rounded-full hover:IconAnimate_changeColor" />
                    <QqOutlined className="hover:scale-110 hover:drop-shadow-lg hover:rounded-full hover:IconAnimate_changeColor"/>
                </div>
                <FooterItem title='Join us' datamsg={['social recruitment','campus recruitment','international recruitment']}></FooterItem>
                <FooterItem title='Contact us' datamsg={['GitHub','WeChat','TeleGram']}></FooterItem>  
            </div>
            <div className=" flex flex-col items-center font-sans text-lg text-primary-gray italic">
                <div>互联网ICP备案:  蜀ICP备2021031219号-1</div>
                <div>网上有害信息举报专区:  中国互联网违法和不良信息举报中心</div>
            </div>
        </footer>
    )
}

export default Footer