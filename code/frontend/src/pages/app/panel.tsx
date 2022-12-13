import React, { MouseEventHandler } from "react";
import bigLemon from "../../assets/bigLemon.svg";
import Button from "../../components/basic/button";

type Props = {
  data: string[];
  click: MouseEventHandler<HTMLDivElement>;
};

const Panel: React.FC<Props> = (props) => {
  const { data, click } = props;
  return (
    <div className="  flex w-full h-hei-45 bg-gradient-to-b from-primary-green to-sub-green flex-col items-center pt-20 md:pt-0 md:flex-row md:justify-evenly">
      <div className="flex container h-1/2 flex-col justify-center items-center space-y-6  md:w-1/2 md:h-full md:space-y-10">
        <div className="flex container flex-col items-center justify-center space-y-3 font-sans  text-white italic font-bold text-5xl md:item-start md:text-6xl">
          <div className="md:container"><img src={data[0]} alt="" /></div>
          <div className="md:container"><img src={data[1]} alt="" /></div>
        </div>
        <div className=" container flex flex-col items-center space-y-2 mb-10 font-serif text-primary-gray font-bold text-lg">
          <div className="md:container ">{data[2]}</div>
          <div className="md:container ">{data[3]}</div>
        </div>
        <div className="md:container">
          <Button click={click}></Button>
        </div>
      </div>

      <img src={bigLemon} className="transition-all" />
    </div>
  );
};

export default Panel;
