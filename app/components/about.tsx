/* eslint-disable @next/next/no-img-element */
// eslint-disable-next-line @next/next/no-img-element
// eslint-disable-next-line @next/next/no-img-element
"use client"
import { useState } from 'react';
export default function AboutComponent() {
  const [email, setEmail] = useState("Copy Email");

  function copiarAlPortapapeles(texto: string) {
    // Crea un elemento de texto temporal e invisible
    const elemento = document.createElement("textarea");
    elemento.value = texto;
    document.body.appendChild(elemento);

    // Selecciona el contenido del elemento
    elemento.select();
    elemento.setSelectionRange(0, 99999); // Para dispositivos móviles

    // Copia el texto seleccionado al portapapeles
    document.execCommand("copy");

    // Elimina el elemento temporal
    document.body.removeChild(elemento);

    // Opcional: muestra un mensaje o realiza una acción después de copiar
    console.log("Texto copiado al portapapeles: " + texto);
    setEmail("Copied!");
  }  

  return (
    <section
      id="About"
      className="flex sm:flex-col-reverse  2xl:flex-row justify-between col-start-1 col-end-13 w-full 2xl:h-96 px-12 py-9 border border-gray-800 2xl:bg-secondary rounded-lg"
    >
      <div className="flex flex-col items-stretch justify-around 2xl:gap-20 sm:gap-2">
        <h2 className="text-2xl text-gray-300 font-bold">Ui/Ux Designer</h2>
        <section>
          <h1 className=" font-bold text-4xl">I&apos;m Zainab Nisa</h1>
          <p className=" text-xl w-4/5">
            I desing digital products for great experience.
          </p>
          <div className="flex gap-4 mt-10">
            <button className=" shadow-lg flex border border-gray-800 shadow-yellow-900 bg-primary rounded-md ">
              <p className="py-2 mx-3">hire me </p>
              <span className=" flex items-center content-center p-1 justify-center px-2 h-full border-gray-800 border-l-2">
                {" "}
                <svg
                  className="h-5 w-5  "
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  viewBox="0 0 68 68"
                  version="1.1"
                  style={{
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    strokeLinecap: "round",
                    strokeMiterlimit: 1.5,
                  }}
                >
                  <g transform="matrix(1,0,0,1,-911.513,-206.294)">
                    <path
                      d="M945.274,210.05L945.274,270.06"
                      style={{
                        fill: "none",
                        stroke: "white",
                        strokeWidth: "4.17px",
                      }}
                    />
                    <g transform="matrix(6.12323e-17,-1,1,6.12323e-17,705.219,1185.33)">
                      <path
                        d="M945.274,210.05L945.274,270.06"
                        style={{
                          fill: "none",
                          stroke: "white",
                          strokeWidth: "4.17px",
                        }}
                      />
                    </g>
                  </g>
                </svg>
              </span>
            </button>
            <button onClick={()=>copiarAlPortapapeles("¡Hola, este es un texto de prueba!")} className="border flex items-center justify-center rounded-md px-4 py-0">
              <p className="mr-5">{email}</p>
              <span className="pl-3 flex items-center border-l-2 h-full ">
                <svg
                  className="h-5 w-5 inline-block"
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  viewBox="0 0 108 104"
                  version="1.1"
                  style={{
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 2,
                  }}
                >
                  <g transform="matrix(1,0,0,1,-700.002,-234.203)">
                    <g transform="matrix(1,0,0,1,22.4175,-8.22205)">
                      <path
                        d="M768.117,270.154C768.117,262.159 761.626,255.669 753.632,255.669L692.07,255.669C684.075,255.669 677.585,262.159 677.585,270.154L677.585,331.716C677.585,339.71 684.075,346.201 692.07,346.201L753.632,346.201C761.626,346.201 768.117,339.71 768.117,331.716L768.117,270.154ZM763.95,270.154L763.95,331.716C763.95,337.411 759.327,342.034 753.632,342.034L692.07,342.034C686.375,342.034 681.751,337.411 681.751,331.716C681.751,331.716 681.751,270.154 681.751,270.154C681.751,264.459 686.375,259.835 692.07,259.835C692.07,259.835 753.632,259.835 753.632,259.835C759.327,259.835 763.95,264.459 763.95,270.154Z"
                        style={{ fill: "white" }}
                      />
                    </g>
                    <g transform="matrix(1,0,0,1,-73.8391,2.67564)">
                      <path
                        d="M790.534,248.771L845.888,248.771C853.883,248.771 860.373,250.225 860.373,263.256L860.373,322.059L866.581,322.059C874.576,322.059 881.066,315.569 881.066,307.574L881.066,246.012C881.066,238.017 874.576,231.527 866.581,231.527L805.019,231.527C797.025,231.527 790.534,238.017 790.534,246.012L790.534,248.771ZM794.797,244.604C795.483,239.575 799.802,235.694 805.019,235.694L866.581,235.694C872.276,235.694 876.9,240.317 876.9,246.012C876.9,246.012 876.9,307.574 876.9,307.574C876.9,313.269 872.276,317.892 866.581,317.892L864.54,317.892C864.54,317.892 864.54,263.256 864.54,263.256C864.54,254.874 862.023,250.373 858.65,247.81C855.367,245.315 850.894,244.604 845.888,244.604L794.797,244.604Z"
                        style={{ fill: "white" }}
                      />
                    </g>
                  </g>
                </svg>
              </span>
            </button>
          </div>
        </section>
      </div>
      <div className="flex flex-col items-center justify-evenly 2xl:gap-20 sm:gap-5 sm:mb-4">
        <div className=" bg-red-400 py-1 px-4 rounded-full">
          <p className="uppercase">
            <span className="mr-2">
              <svg
                className="h-4 w-4 inline-block"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="100%"
                height="100%"
                viewBox="0 0 68 68"
                version="1.1"
                xmlSpace="preserve"
                style={{
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 2,
                }}
              >
                <g transform="matrix(1,0,0,1,-540,-252.697)">
                  <g transform="matrix(1,0,0,1,0,6)">
                    <circle
                      cx="573.828"
                      cy="280.526"
                      r="33.828"
                      style={{ fill: "rgb(228 63 33)" }}
                    />
                  </g>
                </g>
              </svg>
            </span>
            available for job
          </p>
        </div>
        <div
          id="img"
          className=" rounded-full h-40 w-40 border-gray-700 overflow-hidden border-8"
        >
          <img
            className="w-full h-full object-cover"
            src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg"
            alt="zainab"
          />
        </div>
      </div>
    </section>
  );
}
