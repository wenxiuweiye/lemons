import { Outlet, useLocation } from "react-router-dom";
import Navigator from "../../components/navigator/navigator";
import Panel from "./panel";
import Layout from "../../layouts";
import { Footer , Content} from '../../layouts';
import ReadIntroduce from "./readIntroduce";
import MusicIntroduce from './musicIntroduce';

import LEMONS from '../../assets/Msg/LEMONS.svg';
import EVERYWHERE from '../../assets/Msg/EVERYWHERE.svg';
function App() {
  let loc = useLocation()  
  function click(){
    console.log('clk')
}
  return ( 
    loc.pathname === '/'? 
    (
      <Layout>
      <Navigator></Navigator>
      <Content className=' space-y-20 '>
        <Panel click={click} data={[LEMONS,EVERYWHERE,'Dreams never stop','The road is under your feet']}></Panel>
        <ReadIntroduce></ReadIntroduce>
        <MusicIntroduce></MusicIntroduce>
      </Content>
      <Footer></Footer>  
    </Layout>
    ):
    (
      <Outlet></Outlet>
    )
  );
}

export default App;
