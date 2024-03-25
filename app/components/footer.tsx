export default function FooterComponent() {
  return (
    <footer
      id="footer"
      className="2xl:flex-row col-start-1 col-end-13 border sm:flex-col-reverse sm:gap-4 flex items-center justify-between py-8 px-10 rounded-md border-gray-800 bg-secondary "
    >
      <div>
        <h4 className=" text-xl font-semibold">Portfolio 2024</h4>
      </div>
      <div>
        <nav className="text-lg gap-4 flex ">
          <a className="hover:text-primary" href="">
            Twiter
          </a>
          <a className="hover:text-primary" href="">
            Instagram
          </a>
          <a className="hover:text-primary" href="">
            LinkedIn
          </a>
        </nav>
      </div>
      <div>
        <p className="uppercase bg-red-400 py-1 px-4 rounded-full">
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
    </footer>
  );
}
