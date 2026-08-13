const navs = [
  {
    p: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
    item: "Learn more",
  },
  {
    p: "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
    item: "Learn more",
  },
  {
    p: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
    item: "Learn more",
  },
];

export const CaseBlock = () => {
  return (
    <div className="bg-gray-50 flex justify-center ">
      <div className="flex justify-center items-center gap-10 bg-[#191A23] w-[1250] h-[326] rounded-4xl ">
        {navs.map((i) => {
          return (
            <div key={i}>
              <div className="flex flex-col gap-5 w-[286] h-[163]">
                <div className="h-[115]">{i.p}</div>
                <div className="text-green-500 w-[140] h-[28]">{i.item}</div>
                <div className="1px bg-white"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
