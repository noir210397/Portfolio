import {
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";
import tw from "tailwind-styled-components";

const Container = tw.div`min-h-screen  flex justify-center items-center flex-col relative bg-slate-950 text-white`;
const Button = tw.button`w-full py-2 px-4 border-2 border-rose-500 hover:bg-rose-500 hover:text-white  rounded hover:translate-y-2 transition-all  `;

const HomeContainer = () => {
  return (
    <Container id="home">
      <div className="p-2 text-xl">My Name is Kobe Bean Bryant</div>
      <div className="text-4xl font-extrabold">I'm A Developer</div>
      <div className="flex gap-4 p-2">
        <div className="flex justify-center items-center">
          <Twitter />
        </div>
        <div>
          <GitHub />
        </div>
        <div>
          <LinkedIn />
        </div>
        <div>
          <WhatsApp />
        </div>
      </div>
      <div className=" h-[256px] w-64 rounded-t-full ">
        <img
          src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="w-full h-full object-cover rounded-t-full "
        />
      </div>
      <div className="max-w-xl p-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam odio
        voluptatum quisquam asperiores dolore quos exercitationem molestiae
        blanditiis nisi nesciunt.
      </div>
      <div className="grid grid-cols-2 gap-2">
        <Button>Lets Talk</Button>
        <Button> My Work</Button>
      </div>
      {/* <div className="gap-2 flex flex-col absolute left-4 ">
        <LinkedIn />
        <Instagram />
        <Facebook />
        <Twitter />
      </div> */}
    </Container>
  );
};

export default HomeContainer;
