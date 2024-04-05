export default function ExperienceComponent() {
  var jobs = [
    {
      id: 1,
      title: "Product designer",
      company: "Figma",
      age: "2023-Present",
    },
    {
      id: 2,
      title: "UI/UX Designer",
      company: "Google",
      age: "2020-2023",
    },
    {
      id: 3,
      title: "Frontend Developer",
      company: "Microsoft",
      age: "2018-2020",
    },
    {
      id: 4,
      title: "Graphic Designer",
      company: "Apple",
      age: "2016-2018",
    },
    {
      id: 5,
      title: "Intern",
      company: "Facebook",
      age: "2015-2016",
    },
  ];
  return (
    <section
      id="jobs"
      className="sm:row-start-5 sm:row-end-6 sm:col-start-1 sm:col-end-13 2xl:row-start-3 2xl:row-end-6 rounded-md 2xl:col-start-1 2xl:col-end-7 border px-8 py-2 border-gray-800 bg-secondary"
    >
      <h2 className=" font-semibold text-4xl mt-5 mb-14">
        <span>
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
        </span>{" "}
        Resent work
      </h2>
      <ul>
        {jobs.map((job) => {
          return (
            <li
              key={job.id}
              className=" mb-4 flex items-center justify-between gap-4"
            >
              <div>
                <h3 className=" font-semibold text-xl">{job.title}</h3>
                <p className=" text-gray-600">{job.age}</p>
              </div>
              <h4 className=" font-semibold text-lg">{job.company}</h4>
            </li>
          );
        })}
      </ul>
      
    </section>
  );
}
