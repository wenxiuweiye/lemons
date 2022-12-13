import Button from "../../../components/basic/button";
import readLogo from "../../../assets/readLogo.svg";
import LEMONS_READ from "../../../assets/Msg/LEMONS_READ.svg";
import Card from "./card";
function ReadIntroduce() {
  function click() {
    console.log("clk");
  }

  return (
    <div className="flex w-full flex-col items-center font-sans space-y-10 md:space-y-32">
      <div className="  font-bold text-primary-green text-5xl md:text-6xl fontAnimate">
        <img src={LEMONS_READ} alt="" />
      </div>
      <Card
        dataMsg={[
          "【精心打磨的阅读体验】",
          "支持EPUB和TXT格式，你还可以随心个性化你的专属阅读风格。精心打磨，只为给你极致体验。",
        ]}
      ></Card>
      <Card
        dataMsg={[
          "【和好友讨论交流碰撞】",
          "在阅读中与好友的想法邂逅，跟好友交流你的阅读感想，碰撞出更多火花。这一次，让阅读不再孤单。",
        ]}
      ></Card>
      <div className=" flex">
        <Button
          Children={<img className={``} src={readLogo}></img>}
          click={click}
        ></Button>
      </div>
    </div>
  );
}

export default ReadIntroduce;
