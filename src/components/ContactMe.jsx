import { Email, LocationOn, Person } from "@mui/icons-material";
import tw from "tailwind-styled-components";

const Container = tw.div` bg-slate-950 py-2 px-2`;
const FormContainer = tw.div` px-4 bg-white max-w-lg lg:max-w-4xl flex lg:flex-row flex-col  mx-auto rounded-lg justify-center items-center`;

const Span = tw.div`flex-1 h-[2px] w-full bg-white`;
const Form = tw.form`rounded-lg max-w-lg p-2 mx-auto flex-1  `;
const Input = tw.input` w-full p-2 border border-slate-950 rounded-md`;

const ContactMe = () => {
  return (
    <Container id="contact">
      <h1 className="text-center text-xl font-extrabold p-2 text-white">
        Contact Me
      </h1>
      <div className="flex justify-center items-center max-w-xs mx-auto py-1">
        <Span></Span>
        <div className="text-rose-500 px-2">get in touch</div>
        <Span></Span>
      </div>
      <FormContainer>
        <div className="flex-1 p-2 max-w-lg">
          <h3 className="font-semibold">Get in touch</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio nisi
            velit inventore similique ipsum sapiente esse laudantium
            perspiciatis earum et?
          </p>
          <div className="flex justify-center items-center">
            <div className="w-10 text-rose-500">
              <Person />
            </div>
            <div className="flex-1">
              <div className="font-semibold">Name</div>
              <div>Kobe Bryant</div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-10 text-rose-500">
              <LocationOn />
            </div>
            <div className="flex-1">
              <div className="font-semibold">Address</div>
              <div>156 willshere drive</div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-10 text-rose-500">
              <Email />
            </div>
            <div className="flex-1">
              <div className="font-semibold">Email</div>
              <div>abc@gmail.com</div>
            </div>
          </div>
        </div>
        <Form>
          <h2 className="text-center  font-extrabold p-2">Message Me</h2>
          <div className="grid grid-cols-2 gap-2 my-2">
            <div>
              <Input placeholder="Name" />
            </div>
            <div>
              <Input placeholder="Email" type="email" />
            </div>
          </div>
          <div className="my-2">
            <Input placeholder="Subject" />
          </div>
          <div className="my-2">
            <textarea
              name=""
              id=""
              cols="30"
              rows="8"
              className="p-2 border border-black w-full rounded-md"
              placeholder="Message"
            ></textarea>
          </div>
          <button className="bg-rose-500 text-white p-2 rounded-sm">
            Send Message
          </button>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default ContactMe;
