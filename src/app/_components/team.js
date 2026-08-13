const employees = [
  {
    name: "John Smith",
    img: "/Picture.png",
    mist: "CEO and Founder",
    p: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
  },
  {
    name: "Jane Doe",
    img: "/Picture (1).png",
    mist: "Director of Operations",
    p: "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
  },
  {
    name: "Michael Brown",
    img: "/Picture (2).png",
    mist: "Senior SEO Specialist",
    p: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
  },
  {
    name: "Emily Johnson",
    img: "/Picture (3).png",
    mist: "PPC Manager",
    p: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
  },
  {
    name: "Brian Williams",
    img: "/Picture (4).png",
    mist: "Social Media Specialist",
    p: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
  },
  {
    name: "Sarah Kim",
    img: "/Picture (5).png",
    mist: "Content Creator",
    p: "2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries",
  },
];

export const Team = () => {
  return (
    <div className="flex flex-col gap-20">
      <div className="flex gap-10 ">
        <div className="w-[115] h-[51] bg-[#B9FF66] rounded-2xl text-black text-4xl flex justify-center items-center">
          Team
        </div>
        <p className="w-[473] h-[46] text-black text-[20px]">
          Meet the skilled and experienced team behind our successful digital
          marketing strategies
        </p>
      </div>

      <div className="grid grid-rows-2 grid-cols-3 gap-5 ">
        {employees.map((e) => {
          return (
            <div
              key={e}
              style={{
                width: "387px",
                height: "331px",
                border: "solid 2px black ",
                borderRadius: "25px",
                position: "relative",
              }}
            >
              <div className="flex justify-center items-center w-[387] h-[331] ">
                <div className="w-[317] h-[250] flex flex-col  gap-15 text-black">
                  <div className="h-[102] flex gap-5 items-end">
                    <img src={e.img} />
                    <div>
                      <h1 className="  text-black font-bold text-2xl">
                        {e.name}
                      </h1>
                      <h2 className="  text-black">{e.mist}</h2>
                    </div>
                  </div>
                  <p className="h-[69] text-1xl  text-black">{e.p}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-[269] h-[68] bg-[#191A23] rounded-3xl text-white text-2xl flex items-center justify-center absolute right-130 bottom-[-4400]">
        See all team
      </div>
    </div>
  );
};
