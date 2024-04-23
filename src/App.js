import FrameComponent3 from "./components/FrameComponent3";
import Body from "./components/Body";
import FrameComponent2 from "./components/FrameComponent2";
import ValuesContent from "./components/ValuesContent";
import FrameComponent1 from "./components/FrameComponent1";
import FrameComponent from "./components/FrameComponent";

const WireframeLandingPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start pt-0 px-0 pb-[908px] box-border gap-[102px] leading-[normal] tracking-[normal] text-center text-5xl text-white font-body-b1 mq750:gap-[51px] mq450:gap-[25px]">
      <img
        className="w-full h-[767px] absolute !m-[0] top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden shrink-0 object-cover"
        alt=""
        src="/content-block@2x.png"
      />
      <div className="rounded-xl bg-foundation-green-g900 overflow-hidden hidden flex-row items-center justify-center py-5 px-[30px] whitespace-nowrap z-[1]">
        <b className="relative leading-[29px] inline-block min-w-[117px]">
          Read More
        </b>
      </div>
      <FrameComponent3 />
      <Body />
      <FrameComponent2 />
      <img
        className="w-full h-[311px] absolute !m-[0] top-[2498px] right-[0px] left-[0px] max-w-full overflow-hidden shrink-0 object-cover"
        alt=""
        src="/content-block@2x.png"
      />
      <section className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[88px] box-border gap-[102px] max-w-full mq750:gap-[51px] mq750:pb-[37px] mq750:box-border mq450:gap-[25px] mq1050:pb-[57px] mq1050:box-border">
        <ValuesContent />
        <FrameComponent1 />
      </section>
      <section className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[58px] box-border max-w-full text-center text-29xl text-black font-body-b1">
        <div className="w-[1216px] flex flex-col items-end justify-start gap-[11px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px] box-border max-w-full">
            <h1 className="m-0 w-[891px] relative text-inherit leading-[58px] inline-block italic font-bold font-inherit shrink-0 max-w-full z-[1] mq450:text-10xl mq450:leading-[35px] mq1050:text-19xl mq1050:leading-[46px]">
              “Collaboration for a sustainable future”
            </h1>
          </div>
          <div className="self-stretch relative text-xl leading-[120%] font-medium text-white z-[1] mq450:text-base mq450:leading-[19px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </section>
      <FrameComponent />
    </div>
  );
};

export default WireframeLandingPage;
