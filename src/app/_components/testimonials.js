export const Testimonials = () => {
  return (
    <div className=" flex flex-col gap-10">
      <div className="flex gap-4">
        <div className="bg-[#B9FF66] w-[255] h-[51] text-black rounded-4xl text-3xl flex justify-center items-center">
          Testimonials
        </div>
        <p className=" w-[473] h-[46] text-black text-[19px]">
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
          about Our Digital Marketing Services
        </p>
      </div>
      <div className=" w-[1240] h-[625] bg-[#191A23] rounded-4xl flex flex-col gap-25 items-center justify-center relative overflow-hidden">
        <div className=" flex  gap-10 ">
          <div className=" w-[606] h-[335] absolute left-[-328] ">
            <div className=" w-[606] h-[250]  border border-green-600 rounded-3xl flex justify-center items-center ">
              <p className=" w-[502] h-[138]">
                We have been working with Positivus for the past year and have
                seen a significant increase in website traffic and leads as a
                result of their efforts. The team is professional, responsive,
                and truly cares about the success of our business. We highly
                recommend Positivus to any company looking to grow their online
                presence."
              </p>
            </div>
          </div>
          <div className=" w-[606] h-[335] flex flex-col  items-end gap-10 ">
            <div className=" w-[606] h-[266] border border-green-600 rounded-3xl flex justify-center items-center flex-col gap-10">
              <p className=" w-[502] h-[138]">
                "We have been working with Positivus for the past year and have
                seen a significant increase in website traffic and leads as a
                result of their efforts. The team is professional, responsive,
                and truly cares about the success of our business. We highly
                recommend Positivus to any company looking to grow their online
                presence."
              </p>
            </div>
            <div className="w-[550]">
              <h1 className="font-bold text-[#B9FF66] ">John Smith</h1>
              <p>Marketing Director at XYZ Corp</p>
            </div>
          </div>
          <div className=" w-[606] h-[335] flex flex-col  items-end gap-10 absolute left-240">
            <div className=" w-[606] h-[266]  border border-green-600 rounded-3xl flex justify-center items-center ">
              <p className=" w-[502] h-[138]">
                "We have been working with Positivus for the past year and have
                seen a significant increase in website traffic and leads as a
                result of their efforts. The team is professional, responsive,
                and truly cares about the success of our business. We highly
                recommend Positivus to any company looking to grow their online
                presence."
              </p>
            </div>
            <div className="w-[550]">
              <h1 className="font-bold text-[#B9FF66] ">John Smith</h1>
              <p>Marketing Director at XYZ Corp</p>
            </div>
          </div>
        </div>

        <div className="w-[500] h-[14]  flex gap-5 justify-center">
          <div className="bg-green-500 rounded-2xl w-[14] h-[14] "></div>
          <div className="bg-white rounded-2xl w-[14] h-[14] "></div>
          <div className="bg-white rounded-2xl w-[14] h-[14] "></div>
          <div className="bg-white rounded-2xl w-[14] h-[14] "></div>
        </div>
      </div>
    </div>
  );
};
