import { Button } from "./button.js/";

export const Hero = () => {
  return (
    <div className=" flex gap-25 items-center  text-black bg-gray-50 ">
      <div className="flex-1 flex flex-col gap-8.75 ">
        <h1 className="text-6xl ">
          Navigating the digital landscape for success
        </h1>
        <p className="text-[20px]">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>
        <Button label="Book a consultation-1" variant="dark" />
      </div>
      <div className="flex-1  ">
        <img src="/logo.png" />
      </div>
    </div>
  );
};
