type Props = {
  dataMsg: string[];
};
function Card(props: Props) {
  const { dataMsg } = props;

  return (
    <div className=" transition-all container grid grid-cols-4 grid-rows-4 justify-items-center items-center text-xl  m-5 lg:grid-rows-2 lg:grid-cols-5 drop-shadow-2xl lg:justify-items-start hover:readCardIconAnimate ">
      <div className=" col-start-1 col-end-5 row-span-1 font-bold lg:row-span-1 lg:col-start-2 lg:col-end-4  text-primary-purple">
        <div className=" ">{dataMsg[0]}</div>
      </div>
      <div className="row-span-3 col-span-2  lg:row-start-1 lg:row-end-3 lg:col-start-1 lg:col-end-2">
        <svg
          width="210"
          height="210"
          viewBox="0 0 210 210"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 162.407V153.148V42.037V32.7778C5 27.5065 8.96356 23.0781 14.2026 22.496L163.384 5.92026C167.803 5.42934 171.667 8.88787 171.667 13.3333V23.5185V134.63V143.889C171.667 149.16 167.703 153.589 162.464 154.171L14.2026 170.644C9.29343 171.19 5 167.347 5 162.407Z"
            fill="white"
          />
          <path
            d="M30 130L146.667 117.037M30 96.6667L146.667 80M30 58.7037L146.667 42.037M5 162.407V162.407C5 167.347 9.29343 171.19 14.2026 170.644L162.464 154.171C167.703 153.589 171.667 149.16 171.667 143.889V143.889V134.63V23.5185V13.3333V13.3333C171.667 8.88787 167.803 5.42934 163.384 5.92026L14.2026 22.496C8.96356 23.0781 5 27.5065 5 32.7778V32.7778V42.037V153.148V162.407Z"
            stroke="#1F1D1D"
            stroke-width="10"
          />
          <path
            d="M21.6667 179.074V169.815V58.7037V49.4445C21.6667 44.1731 25.6302 39.7448 30.8693 39.1627L180.051 22.5869C184.469 22.096 188.333 25.5545 188.333 30V40.1852V151.296V160.556C188.333 165.827 184.37 170.255 179.131 170.837L30.8693 187.311C25.9601 187.856 21.6667 184.014 21.6667 179.074Z"
            fill="white"
          />
          <path
            d="M46.6667 146.667L163.333 133.704M46.6667 113.333L163.333 96.6667M46.6667 75.3704L163.333 58.7037M21.6667 179.074V179.074C21.6667 184.013 25.9601 187.856 30.8693 187.311L179.131 170.837C184.37 170.255 188.333 165.827 188.333 160.556V160.556V151.296V40.1852V30V30C188.333 25.5545 184.469 22.096 180.051 22.5869L30.8693 39.1627C25.6302 39.7448 21.6667 44.1731 21.6667 49.4445V49.4445V58.7037V169.815V179.074Z"
            stroke="#1F1D1D"
            stroke-width="10"
          />
          <path
            d="M38.3333 195.741V186.481V75.3704V66.1111C38.3333 60.8398 42.2969 56.4114 47.536 55.8293L196.718 39.2536C201.136 38.7627 205 42.2212 205 46.6667V56.8518V167.963V177.222C205 182.494 201.036 186.922 195.797 187.504L47.536 203.977C42.6268 204.523 38.3333 200.68 38.3333 195.741Z"
            fill="white"
          />
          <path
            d="M63.3333 163.333L180 150.37M63.3333 130L180 113.333M63.3333 92.037L180 75.3704M38.3333 195.741V195.741C38.3333 200.68 42.6268 204.523 47.536 203.978L195.797 187.504C201.036 186.922 205 182.494 205 177.222V177.222V167.963V56.8518V46.6667V46.6667C205 42.2212 201.136 38.7627 196.718 39.2536L47.536 55.8293C42.2969 56.4114 38.3333 60.8398 38.3333 66.1111V66.1111V75.3704V186.481V195.741Z"
            stroke="#1F1D1D"
            stroke-width="10"
          />
        </svg>
      </div>
      <div className=" row-span-3 col-span-2 lg:row-span-1 lg:col-start-2 lg:col-end-6  text-primary-gray ">
        <div className=" m-5">{dataMsg[1]}</div>
      </div>
    </div>
  );
}
export default Card;
