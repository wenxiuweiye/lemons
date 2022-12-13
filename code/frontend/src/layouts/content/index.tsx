import { CSSProperties, ReactNode } from "react";

type Props = { children: ReactNode,className?:string };
function Content(props: Props) {
  const { children,className } = props;
  return <div className={`flex w-full flex-col  ${className}`}>
    {children}
    </div>;
}

export default Content;
