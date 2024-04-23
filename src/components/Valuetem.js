import { useMemo } from "react";

const ValueItem = ({ collaboration, propDisplay, propMinWidth }) => {
  const collaborationStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  return (
    <div className="flex flex-col items-end justify-start gap-[65px] text-center text-5xl text-black font-body-b1">
      <div className="w-[150px] h-[150px] relative rounded-98xl bg-foundation-green-g900 z-[1]" />
      <div className="flex flex-row items-start justify-end py-0 pr-0.5 pl-[3px]">
        <b
          className="relative leading-[29px] z-[1] mq450:text-lgi mq450:leading-[23px]"
          style={collaborationStyle}
        >
          {collaboration}
        </b>
      </div>
    </div>
  );
};

export default ValueItem;
