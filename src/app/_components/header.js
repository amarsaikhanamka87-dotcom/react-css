export const Header = () => {
  return (
    <div className=" flex justify-center items-center  bg-gray-50 ">
      <div className=" flex gap-70   items-center  ">
        <div className="w-50 h-26 flex  items-center ">
          <img src="./Frame 9 (1).png" alt="Logo" />
        </div>
        <div className="text-black flex text-1xl items-center gap-10">
          <p>About Us</p>
          <p>Services</p>
          <p>Use Cases</p>
          <p>Pricing</p>
          <p>Blog</p>
          <div className="px-[8.75px] py-5 rounded-[14px] border border-b-black">
            Request a quote
          </div>
        </div>
      </div>
    </div>
  );
};
