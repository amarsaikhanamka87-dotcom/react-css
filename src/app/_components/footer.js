export const Footer = () => {
  return (
    <div className="w-[1241] h-[514] rounded-4xl bg-[#191A23] flex gap-[50] flex-col justify-center items-center">
      <div className="flex gap-10 flex-col justify-center items-center">
        <div className="w-[1121] h-[30] flex gap-[155]">
          <img src="/logo (4).png" />
          <div className="w-[501] h-[23] flex gap-4">
            <p>About us</p>
            <p>Services</p>
            <p>Use Cases</p>
            <p>Pricing</p>
            <p>Blog</p>
          </div>
          <div className="w-[130] h-[30] flex gap-4">
            <img src="Social icon.png" />
            <img src="Social icon (1).png" />
            <img src="Social icon (2).png" />
          </div>
        </div>
        <div className="flex gap-[120]">
          <div className="w-[332] h-[185] flex flex-col gap-7">
            <h1 className="w-[126] h-[26] bg-[#B9FF66] text-black text-2xl rounded-2xl flex  justify-center items-center">
              Contact us:
            </h1>
            <div className="w-[332] h-[132] flex flex-col gap-4">
              <p>Email: info@positivus.com</p>
              <p>Phone: 555-567-8901</p>
              <p>Address: 1234 Main St Moonstone City, Stardust State 12345</p>
            </div>
          </div>
          <div className="w-[634] h-[184] flex gap-5 justify-center items-center ">
            <div className="w-[249] h-[68] rounded-2xl border border-amber-50 flex  justify-center items-center">
              Email
            </div>
            <div className="w-[249] h-[68] bg-[#B9FF66] text-black rounded-2xl flex  justify-center items-center ">
              Subscribe to news
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-20">
        <div className="w-[1100] h-[1] bg-amber-50"></div>
        <div className="w-[1100] h-[28] flex gap-7 text-white">
          <p>© 2023 Positivus. All Rights Reserved.</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};
