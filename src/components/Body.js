import Button from "./Button";

const Body = () => {
  return (
    <section className="w-[1195px] flex flex-row items-start justify-end pt-0 px-6 pb-[201px] box-border max-w-full text-center text-29xl text-white font-body-b1 mq750:pb-[131px] mq750:box-border">
      <div className="flex-1 flex flex-col items-start justify-start gap-[67px] max-w-full lg:gap-[33px] mq750:gap-[17px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[25px] max-w-full">
          <h1 className="m-0 w-[903px] relative text-inherit leading-[120%] font-bold font-inherit inline-block max-w-full z-[1] mq450:text-10xl mq450:leading-[35px] mq1050:text-19xl mq1050:leading-[46px]">
            <p className="m-0">{`Tranformational Business Network (TBN) `}</p>
            <p className="m-0">Indonesia</p>
          </h1>
          <div className="self-stretch flex flex-row items-start justify-end max-w-full text-justify text-xl">
            <div className="w-[1097px] flex flex-row items-start justify-between max-w-full gap-[20px] mq1050:flex-wrap mq1050:justify-center">
              <div className="w-[802px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border max-w-full">
                <div className="self-stretch relative leading-[120%] font-medium [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical] z-[1] mq450:text-base mq450:leading-[19px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </div>
              </div>
              <img className="h-12 w-12 relative z-[1]" loading="lazy" alt="" />
            </div>
          </div>
        </div>
        <div className="w-[879px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <Button
            readMore="Read More"
            propBackgroundColor="#c9d32c"
            propAlignSelf="unset"
            propBorder="none"
            propFlex="unset"
            propDisplay="inline-block"
            propMinWidth="117px"
          />
        </div>
      </div>
    </section>
  );
};

export default Body;
