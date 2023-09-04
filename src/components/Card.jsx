import tw from "tailwind-styled-components";

const CardContainer = tw.div` min-h-[50px] group hover:bg-rose-500 transition-colors flex items-center bg-rose-500 text-slate-950 p-2 rounded-md cursor-pointer font-semibold`;
const Card = ({ title, icon }) => {
  return (
    <CardContainer>
      <div className="w-10 flex justify-center items-center px-2 group-hover:text-slate-950">
        {icon}
      </div>
      <div className="flex-1 group-hover:text-slate-950">{title}</div>
    </CardContainer>
  );
};

export default Card;
