import Button from "./Button";

const FrameComponent1 = () => {
  return (
    <div className="w-[1400px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-29xl text-black font-body-b1">
      <div className="w-[1176px] flex flex-row items-start justify-start gap-[79px] max-w-full lg:gap-[39px] mq750:gap-[20px] mq1050:flex-wrap">
        <img
          className="h-[395px] flex-1 relative rounded-xl max-w-full overflow-hidden object-cover min-w-[387px] mq750:min-w-full"
          loading="lazy"
          alt=""
          src="/rectangle-31@2x.png"
        />
        <div className="w-[501px] flex flex-col items-start justify-start gap-[82px] min-w-[501px] max-w-full mq750:gap-[41px] mq750:min-w-full mq450:gap-[20px] mq1050:flex-1">
          <h1 className="m-0 relative text-inherit leading-[58px] font-bold font-inherit mq450:text-10xl mq450:leading-[35px] mq1050:text-19xl mq1050:leading-[46px]">
            How Can We Help You?
          </h1>
          <div className="self-stretch flex flex-col items-start justify-start gap-[44px] max-w-full mq750:gap-[22px]">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch rounded-xl flex flex-row items-start justify-start max-w-full">
              <Button
                readMore="Investment"
                propBackgroundColor="#c9d32c"
                propAlignSelf="unset"
                propBorder="unset"
                propFlex="1"
                propDisplay="inline-block"
                propMinWidth="122px"
              />
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch rounded-xl flex flex-row items-start justify-start max-w-full">
              <Button
                readMore="Advisory"
                propBackgroundColor="#c9d32c"
                propAlignSelf="unset"
                propBorder="unset"
                propFlex="1"
                propDisplay="inline-block"
                propMinWidth="96px"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
