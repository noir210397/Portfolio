import tw from "tailwind-styled-components";

const Container = tw.div` bg-slate-950 text-white`;
const FlexContainer = tw.div`p-3 flex justify-center gap-4 lg:flex-row flex-col items-center`;
const Span = tw.div`flex-1 h-[2px] w-full bg-white`;
const AboutMe = () => {
  return (
    <Container id="about">
      <p className="text-center text-xl font-extrabold p-2">About Me</p>
      <div className="flex justify-center items-center max-w-xs mx-auto">
        <Span></Span>
        <span className="px-2">Who I Am</span>
        <Span></Span>
      </div>
      <FlexContainer>
        <div className="flex-1 max-w-[300px]  rounded-lg">
          <img
            src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="w-full  object-cover  rounded-lg "
          />
        </div>
        <div className="flex-1 p-2 max-w-lg">
          <h1 className="text-xl font-extrabold py-2">
            I am Kobe Bryant a <span className="text-rose-500">Developer</span>
          </h1>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            quas, magnam ipsam aspernatur veniam ullam porro facere ab adipisci,
            incidunt minima ratione laborum ea quia quasi rerum ducimus placeat
            labore! Vero veniam numquam ad dolorum non doloremque.
            Necessitatibus, cum porro. Ratione, amet nobis aperiam autem aliquam
            id. Laborum explicabo ipsa, quidem aliquam commodi consequuntur
            eaque! Hic, similique porro deserunt repellat nihil ex officia ipsa
            qui unde magni rem laboriosam suscipit! Qui, laborum quam. Maiores
            totam, natus sint repellendus dolor explicabo!
          </div>
          <button className="p-2 bg-rose-500 text-white rounded my-2">
            Download CV
          </button>
        </div>
      </FlexContainer>
    </Container>
  );
};

export default AboutMe;
