import ValueItem from "./Valuetem";

const ValuesContent = () => {
  return (
    <div className="self-stretch bg-gainsboro flex flex-col items-center justify-start pt-[31px] px-5 pb-[97px] box-border gap-[52px] max-w-full text-center text-29xl text-black font-body-b1 mq750:gap-[26px] mq750:pt-5 mq750:pb-[63px] mq750:box-border">
      <div className="w-[1440px] h-[482px] relative bg-gainsboro hidden max-w-full" />
      <div className="w-[970px] flex flex-row items-start justify-center max-w-full">
        <h1 className="m-0 relative text-inherit leading-[58px] font-bold font-inherit z-[1] mq450:text-10xl mq450:leading-[35px] mq1050:text-19xl mq1050:leading-[46px]">
          Our Values
        </h1>
      </div>
      <div className="w-[970px] flex flex-row items-start justify-between gap-[20px] max-w-full text-5xl mq750:flex-wrap mq750:justify-center">
        <ValueItem collaboration="Collaboration" />
        <div className="flex flex-col items-start justify-start gap-[65px]">
          <div className="flex flex-row items-start justify-start py-0 pr-1 pl-[3px]">
            <div className="h-[150px] w-[150px] relative rounded-98xl bg-foundation-green-g900 z-[1]" />
          </div>
          <b className="relative leading-[29px] z-[1] mq450:text-lgi mq450:leading-[23px]">
            Empowerment
          </b>
        </div>
        <ValueItem
          collaboration="Restoration"
          propDisplay="inline-block"
          propMinWidth="125px"
        />
      </div>
    </div>
  );
};

export default ValuesContent;
