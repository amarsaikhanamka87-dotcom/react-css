const cards = [
  {
    id: 1,
    h1: "Pay-per-click advertising",
    className: "bg-[#B9FF66] text-white",
    img: "/logo (3).png",
    p: "Learn more",
    //backgroundColor: "#B9FF66",
  },
  {
    id: 2,
    h1: "Pay-per-click advertising",
    color: "#B9FF66",
    img: "/a(3).png",
    p: "Learn more",
    backgroundColor: "#F3F3F3",
  },
  {
    id: 3,
    h1: "Social Media Marketing",
    className: "bg-[#B9FF66] text-white",
    color: "#191A23",
    img: "/a(4).png",
    p: "Learn more",
    backgroundColor: "#F3F3F3",
  },
  {
    id: 4,
    h1: "Email Marketing",
    className: "bg-[#B9FF66] text-white",
    color: "#F3F3F3",
    img: "/logo 4.png",
    p: "Learn more",
    backgroundColor: "#F3F3F3",
  },
  {
    id: 5,
    h1: "Content Creation",
    color: "#B9FF66",
    img: "/logo (5).png",
    p: "Learn more",
    backgroundColor: "#B9FF66",
  },
  {
    id: 6,
    h1: "Analytics and Tracking ",
    color: "#191A23",
    img: "/logo(6).png",
    p: "Learn more",
    backgroundColor: "#B9FF66",
  },
];

export const Card = () => {
  return (
    <div className="flex justify-center   bg-gray-50">
      <div className="grid grid-rows-3 grid-cols-2 gap-y-10  gap-x-10   bg-gray-50">
        {cards.map((item) => {
          return (
            <div
              key={item.id}
              style={{
                backgroundColor: item.color,
                width: "600px",
                height: "310px",
                border: "black solid 1px",
                borderRadius: "45px",
              }}
            >
              <div className="flex gap-15 justify-center items-center w-[600] h-[310]">
                <div className="flex flex-col gap-25 w-[197] h-[210] ">
                  <div className="text-2xl text-black bg-{item.className} w-[160] ">
                    {item.h1}
                  </div>
                
                  <div className="text-2xl text-[#0e0000] ">{item.p}</div>
                </div>
                <img src={item.img} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
