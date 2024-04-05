/* eslint-disable @next/next/no-img-element */
// eslint-disable-next-line @next/next/no-img-element

import { Children } from "react";

// eslint-disable-next-line @next/next/no-img-element
export default function ProductComponent({
  title,
  text,
  img,
  styles,
  children
}: {
    title: string;
    text: string;
    img?: string;
    styles?: string;
    children?: React.ReactNode;
}) {
  return (
    <section
      className={
        styles +
        " rounded-md border flex flex-col justify-between border-gray-800 bg-secondary"
      }
    >
      <div className="flex p-10 justify-between items-center">
        <div className="">
          <h2 className=" font-semibold text-xl">{title}</h2>
          <p>{text}</p>
        </div>
        <div>
          <button className="w-12 h-12 rounded-full bg-primary p-3 ">
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 362 307"
                version="1.1"
                style={{
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 2,
                  color: "white",
                }}
                fill="#1B1B1B"
              >
                <g transform="matrix(1,0,0,1,-579.139,-153.48)">
                  <path
                    fillRule="evenodd"
                    d="M595.639,425.955L579.139,389.339L858.895,246.332L704.439,193.441C704.439,193.441 692.683,180.565 696.296,168.748C698.116,162.797 703.834,157.114 716.916,153.48C739.699,160.532 924.722,222.101 924.722,222.101C924.722,222.101 943.03,229.409 939.992,246.332C934.64,262.387 870.164,455.075 870.164,455.075C865.409,458.001 856.546,461.098 848.447,459.21C838.981,457.004 833.471,447.047 830.59,441.742C838.365,414.8 881.581,284.611 881.581,284.611L595.639,425.955Z"
                  />
                </g>
              </svg>
            </a>
          </button>
        </div>
      </div>
      <div className=" mb-20 static flex flex-col justify-center items-center">
        {children}
      </div>
    </section>
  );
}
