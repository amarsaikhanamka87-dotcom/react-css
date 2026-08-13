const navs = [
  {
    h1: "02",
    h2: "Research and Strategy Development",
    img: "/Ellipse 30.png",
  },
  {
    h1: "03",
    h2: "Implementation",
    img: "/Ellipse 30.png",
  },
  {
    h1: "04",
    h2: "Monitoring and Optimization",
    img: "/Ellipse 30.png",
  },
  {
    h1: "05",
    h2: "Reporting and Communication",
    img: "/Ellipse 30.png",
  },
  {
    h1: "06",
    h2: "Continual Improvement",
    img: "/Ellipse 30.png",
  },
];

export const OurWork = () => {
  return (
    <div className="flex flex-col gap-20">
      <div className="flex gap-10  text-black ">
        <div className="text-3xl bg-[#B9FF66] w-[412] h-[51] rounded-2xl flex items-center justify-center">
          Our Working Process
        </div>
        <p className="w-[292] h-[46] text-[20px]">
          Step-by-Step Guide to Achieving Your Business Goals
        </p>
      </div>

      <div className=" w-[1234] h-[274] bg-[#B9FF66] rounded-4xl border-black flex flex-col items-center justify-center gap-10 text-black ">
        <div className=" w-[1117] h-[77] flex gap-[357] justify-center items-center  ">
          <div className=" flex gap-10 justify-center items-center relative">
            <h1 className="text-7xl w-[65] h-[77]">01</h1>
            <h2 className="w-[612] h-[38] text-3xl">Consultation</h2>
            <div className="absolute text-5xl text-black right-[-400] bottom-4">
              +
            </div>
          </div>
          <img src="/Ellipse 30.png" />
        </div>
        <p className="w-[1114] h-[60]">
          During the initial consultation, we will discuss your business goals
          and objectives, target audience, and current marketing efforts. This
          will allow us to understand your needs and tailor our services to best
          fit your requirements.
        </p>
      </div>
      <div className="flex flex-col gap-10">
        {navs.map((j) => {
          return (
            <div
              key={j.h1}
              style={{
                width: "1234px",
                height: "159px",
                border: "black solid 3px",
                borderRadius: "45px",
                backgroundColor: "#f3f3f3",
                color: "black",
              }}
            >
              <div className=" flex gap-[357] justify-center items-center h-[159]">
                <div className="flex gap-10 justify-center items-center relative">
                  <div className="text-6xl w-[65] h-[77]">{j.h1}</div>
                  <div className="w-[612] h-[38] text-3xl">{j.h2}</div>
                  <div className="absolute text-5xl text-black right-[-400] bottom-4">
                    +
                  </div>
                </div>
                <div>
                  <img src={j.img} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
