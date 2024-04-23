import Button from "./Button";

const FrameComponent = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-29xl text-black font-body-b1">
      <div className="w-[1216px] flex flex-col items-start justify-start gap-[82px] max-w-full mq750:gap-[41px] mq450:gap-[20px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px]">
          <h1 className="m-0 relative text-inherit leading-[58px] font-bold font-inherit mq450:text-10xl mq450:leading-[35px] mq1050:text-19xl mq1050:leading-[46px]">
            Events
          </h1>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-[18px] box-border max-w-full">
          <div className="flex-1 flex flex-row items-start justify-start max-w-full">
            <div className="w-[1180px] flex flex-col items-start justify-start pt-[39.5px] px-0 pb-0 box-border max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[100.5px] max-w-full lg:gap-[50px] mq750:gap-[25px]">
                <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq1050:flex-wrap">
                  <div className="h-[371px] w-[343px] shadow-[0px_2px_29px_6px_rgba(0,_0,_0,_0.12)] rounded-xl bg-foundation-green-g300 max-w-full" />
                  <div className="h-[371px] w-[343px] shadow-[0px_2px_29px_6px_rgba(0,_0,_0,_0.12)] rounded-xl bg-foundation-green-g300 max-w-full" />
                </div>
                <Button
                  readMore="View All Events"
                  propBackgroundColor="#dedede"
                  propAlignSelf="stretch"
                  propBorder="none"
                  propFlex="unset"
                  propDisplay="unset"
                  propMinWidth="unset"
                />
              </div>
            </div>
            <div className="h-[450px] w-[433.9px] relative shadow-[0px_2px_29px_6px_rgba(0,_0,_0,_0.12)] rounded-xl bg-foundation-green-g300 max-w-full ml-[-807px]" />
          </div>
        </div>
        <div className="w-[1194px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <h1 className="m-0 relative text-inherit leading-[58px] font-bold font-inherit mq450:text-10xl mq450:leading-[35px] mq1050:text-19xl mq1050:leading-[46px]">
            Our Partners
          </h1>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[50px] pl-[51px] box-border max-w-full lg:pl-[25px] lg:pr-[25px] lg:box-border">
          <div className="flex-1 flex flex-row flex-wrap items-start justify-center gap-[50px] max-w-full mq750:gap-[25px]">
            <textarea
              className="[border:none] bg-gainsboro h-[97px] w-auto [outline:none] flex-1 relative rounded-xl min-w-[179px] max-w-[183px]"
              rows={5}
              cols={9}
            />
            <textarea
              className="[border:none] bg-gainsboro h-[97px] w-auto [outline:none] flex-1 relative rounded-xl min-w-[179px] max-w-[183px]"
              rows={5}
              cols={9}
            />
            <textarea
              className="[border:none] bg-gainsboro h-[97px] w-auto [outline:none] flex-1 relative rounded-xl min-w-[179px] max-w-[183px]"
              rows={5}
              cols={9}
            />
            <textarea
              className="[border:none] bg-gainsboro h-[97px] w-auto [outline:none] flex-1 relative rounded-xl min-w-[179px] max-w-[183px]"
              rows={5}
              cols={9}
            />
            <textarea
              className="[border:none] bg-gainsboro h-[97px] w-auto [outline:none] flex-1 relative rounded-xl min-w-[179px] max-w-[183px]"
              rows={5}
              cols={9}
            />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[51px] max-w-full mq750:gap-[25px]">
          <div className="w-[1186px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <h1 className="m-0 relative text-inherit leading-[58px] font-bold font-inherit mq450:text-10xl mq450:leading-[35px] mq1050:text-19xl mq1050:leading-[46px]">
              Lorem Ipsum
            </h1>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
            <img
              className="h-[606px] flex-1 relative rounded-xl max-w-full overflow-hidden object-cover"
              alt=""
              src="/social-icon@2x.png"
            />
            <img
              className="h-[737px] w-[1162px] absolute !m-[0] bottom-[-131px] left-[4px] rounded-xl object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/image-39@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
