const FrameComponent3 = () => {
    return (
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-5 box-border top-[0] z-[99] sticky max-w-full">
        <header className="flex-1 flex flex-row items-start justify-between pt-5 pb-[19.3px] pr-[141px] pl-[130px] box-border relative max-w-full gap-[20px] z-[1] mq750:pl-[65px] mq750:pr-[70px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]" />
          <div className="w-[153px] flex flex-col items-start justify-start p-2.5 box-border z-[1]">
            <img
              className="self-stretch h-[40.7px] relative max-w-full overflow-hidden shrink-0 object-contain"
              loading="lazy"
              alt=""
              src="/rectangle-3@2x.png"
            />
          </div>
          <nav className="m-0 w-[449px] flex flex-col items-start justify-start pt-[18px] px-0 pb-0 box-border max-w-full mq750:hidden">
            <nav className="m-0 self-stretch flex flex-row items-start justify-between gap-[20px] text-left text-xl text-white font-body-b1">
              <div className="relative leading-[120%] font-medium text-foundation-green-g900 inline-block min-w-[54px] z-[1]">
                Home
              </div>
              <div className="relative leading-[120%] font-medium inline-block min-w-[50px] whitespace-nowrap z-[1]">{`Event `}</div>
              <div className="relative leading-[120%] font-medium inline-block min-w-[83px] whitespace-nowrap z-[1]">
                About Us
              </div>
              <div className="relative leading-[120%] font-medium inline-block min-w-[112px] whitespace-nowrap z-[1]">
                Impact Trips
              </div>
            </nav>
          </nav>
        </header>
      </section>
    );
  };
  
  export default FrameComponent3;
  