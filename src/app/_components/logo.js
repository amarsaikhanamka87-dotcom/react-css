const navs = [
  <img src="/Company logo (1).png" />,
  <img src="/Company logo (2).png" />,
  <img src="/Company logo (3).png" />,
  <img src="/Company logo (4).png" />,
  <img src="/Company logo (5).png" />,
  <img src="/Company logo (6).png" />,
];

export const Logo = () => {
  return (
    <div className="flex  flex-col gap-28.75">
      <div className="flex gap-20 bg-gray-50 justify-center">
        {navs.map((item) => {
          return <div key={item}> {item}</div>;
        })}
      </div>
      <div className="flex justify-start gap-20 h-[60] bg-gray-50 ">
        <div className=" rounded-[14px]  bg-lime-500 w-44.5 h-12.7 text-black text-2xl flex justify-center items-center">
          Services
        </div>
        <h2 className="text-[19px] text-black w-145">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </h2>
      </div>
    </div>
  );
};
