const variants = {
  dark: "bg-[#191A23] text-white",
  white: "bg-[#F3F3F3] text-black ",
  green: "bg-[#B9FF66] text-black",
};

export const Button = (props) => {
  const bG = variants[props.variant];

  return <div className={`rounded-2xl py-5 px-8.5 ${bG}`}>{props.label}</div>;
};
