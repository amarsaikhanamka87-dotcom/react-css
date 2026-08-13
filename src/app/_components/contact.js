export const Contacts = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className=" flex gap-8 text-black">
        <div className="bg-[#B9FF66] w-[229] h-[51]  text-black rounded-4xl text-3xl flex justify-center items-center">
          Contact Us
        </div>
        <p className="w-[323] h-[26] text-[20px]">
          Connect with Us: Let's Discuss Your Digital Marketing Needs
        </p>
      </div>

      <div className="w-[1230] h-[773] rounded-4xl bg-[#F3F3F3] flex pt-20 gap-20 text-black relative pl-20">
        <div className="w-[556] h-[58] flex flex-col gap-4">
          <div className="w-[400] h-[78] flex">
            <div className="w-[556] h-[92] flex gap-[5]">
              <div className="w-[28] h-[28]  border border-gray-400 rounded-2xl"></div>
              <h1 className="text-2xl">Say Hi</h1>
            </div>
            <div className="w-[600] h-[92] flex gap-[8]">
              <div className="w-[28] h-[28] border border-gray-400 rounded-2xl"></div>
              <h1 className="text-2xl">Get a Quote</h1>
            </div>
          </div>
          <div className="w-[556] h-[457] flex flex-col gap-5">
            <div className="w-[556] h-[223] flex gap-[8]">
              <div>
                <p>Name</p>
                <div className="w-[556] h-[59] border border-gray-400 rounded-2xl"></div>
              </div>
            </div>
            <div>
              <p>Email*</p>
              <div className="w-[556] h-[59] border border-gray-400 rounded-2xl"></div>
            </div>
            <div>
              <p>Message*</p>
              <div className="w-[556] h-[190] border border-gray-400 rounded-2xl"></div>
            </div>
          </div>
          <div className=" w-[350] bg-[#191A23] rounded-2xl flex justify-center items-center text-3xl text-amber-50">
            Send Message
          </div>
        </div>

        <img className="absolute left-225 top-15" src="/Mask group (3).png" />
      </div>
    </div>
  );
};
