import Button from "./Button";

const FrameComponent2 = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-29xl text-black font-body-b1">
      <div className="w-[1216px] flex flex-row items-end justify-start gap-[78px] max-w-full mq750:gap-[39px] mq450:gap-[19px] mq1050:flex-wrap">
        <div className="w-[542px] flex flex-col items-start justify-start gap-[17px] min-w-[542px] max-w-full mq750:min-w-full mq1050:flex-1">
          <h1 className="m-0 relative text-inherit leading-[58px] font-bold font-inherit mq450:text-10xl mq450:leading-[35px] mq1050:text-19xl mq1050:leading-[46px]">
            About Us
          </h1>
          <div className="self-stretch flex flex-col items-start justify-start gap-[31px] text-justify text-xl mq750:gap-[15px]">
            <div className="self-stretch relative leading-[120%] font-medium [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:11] [-webkit-box-orient:vertical] mq450:text-base mq450:leading-[19px]">
              <p className="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <Button readMore="Read More" />
          </div>
        </div>
        <img
          className="h-[395px] flex-1 relative rounded-xl max-w-full overflow-hidden object-cover min-w-[387px] mq750:min-w-full"
          loading="lazy"
          alt=""
          src="/rectangle-24@2x.png"
        />
      </div>
    </section>
  );
};

export default FrameComponent2;
