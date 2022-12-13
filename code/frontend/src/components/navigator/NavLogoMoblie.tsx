import React, { MouseEventHandler } from "react";
import logo from "../../assets/logo.png";


type Props = {
  click: MouseEventHandler<HTMLOrSVGElement>;
};

const NavLogo: React.FC<Props> = (props) => {
  const { click } = props;
  return (
    <div className=" container flex justify-between flex-row">
      <img className="ml-5" src={logo}></img>
      <svg
        className=" hover:navListconAnimate mr-5"
        onClick={click}
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50 38.6213V34.8976C50 30.5858 46.5045 27.0903 42.1927 27.0903H36.8771H33.5548H27.2425V35.4515V41.4716C27.2425 46.1817 31.0608 50 35.771 50H38.6213C44.9056 50 50 44.9056 50 38.6213Z"
          fill="#7F7F7F"
        />
        <path
          d="M38.6213 0H35.1021C30.7614 0 27.2425 3.51883 27.2425 7.85953V13.2107V16.5552V22.9097H35.5482H41.5282C46.2071 22.9097 50 19.1168 50 14.4379V11.3787C50 5.09443 44.9056 0 38.6213 0Z"
          fill="#7F7F7F"
        />
        <path
          d="M1.90735e-06 11.3787V15.1024C1.90735e-06 19.4142 3.49545 22.9097 7.80731 22.9097L13.1229 22.9097H16.4452H22.7575V14.5485V8.52843C22.7575 3.81831 18.9392 0 14.229 0H11.3787C5.09443 0 1.90735e-06 5.09442 1.90735e-06 11.3787Z"
          fill="#7F7F7F"
        />
        <path
          d="M11.3787 50H14.8979C19.2386 50 22.7575 46.4812 22.7575 42.1405L22.7575 36.7893V33.4448V27.0903H14.4518L8.47176 27.0903C3.79294 27.0903 1.90735e-06 30.8832 1.90735e-06 35.5621L1.90735e-06 38.6213C1.90735e-06 44.9056 5.09444 50 11.3787 50Z"
          fill="#7F7F7F"
        />
      </svg>
    </div>
  );
};

export default NavLogo;
