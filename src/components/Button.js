import { useMemo } from "react";

const Button = ({
  readMore,
  propBackgroundColor,
  propAlignSelf,
  propBorder,
  propFlex,
  propDisplay,
  propMinWidth,
}) => {
  const buttonStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      alignSelf: propAlignSelf,
      border: propBorder,
      flex: propFlex,
    };
  }, [propBackgroundColor, propAlignSelf, propBorder, propFlex]);

  const readMoreStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  return (
    <button
      className="cursor-pointer [border:none] py-5 px-[30px] bg-foundation-green-g900 rounded-xl overflow-hidden flex flex-row items-start justify-start whitespace-nowrap hover:bg-olive"
      style={buttonStyle}
    >
      <b
        className="relative text-5xl leading-[29px] inline-block font-body-b1 text-white text-center min-w-[117px]"
        style={readMoreStyle}
      >
        {readMore}
      </b>
    </button>
  );
};

export default Button;
