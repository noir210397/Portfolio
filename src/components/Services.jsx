import tw from "tailwind-styled-components";
import { BsFillBrushFill } from "react-icons/bs";
import { BiLogoReact } from "react-icons/bi";
import { BiLogoRedux } from "react-icons/bi";
import { VscDebugAlt } from "react-icons/vsc";
import Card from "./Card";

const Container = tw.div``;
const Span = tw.div`flex-1 h-[2px] w-full bg-white`;
const service = [
  {
    title: `Responsive Web Design and Development & User Interface (UI) and User Experience (UX) Design`,
    icon: <BsFillBrushFill fontSize={`25px`} />,
  },
  {
    title: `Front-end Development with React & Custom Web Application Development`,
    icon: <BiLogoReact fontSize={`25px`} />,
  },
  {
    title: `State Management with Redux`,
    icon: <BiLogoRedux fontSize={`25px`} />,
  },
  {
    title: `Debugging and Optimization,Third-party API Integration and Performance Tuning & Cross-browser Compatibility`,
    icon: <VscDebugAlt fontSize={`25px`} />,
  },
];

const Services = () => {
  return (
    <Container id="services">
      <h1 className="text-center text-xl font-extrabold p-2">My Services</h1>
      <div className="flex justify-center items-center max-w-xs mx-auto py-1">
        <Span></Span>
        <div className="text-rose-500 px-2">what i provide</div>
        <Span></Span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2">
        {service.map((item) => (
          <Card key={item.title} {...item} />
        ))}
      </div>
    </Container>
  );
};

export default Services;
