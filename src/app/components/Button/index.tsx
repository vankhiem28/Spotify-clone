import React from "react";

interface PropsBtn {
  leftIcon?: JSX.Element;
  boxIcon?: JSX.Element;
  boxIconClass?: string;
  overlay?: boolean;
  onClick?: () => void;
  children?: string | JSX.Element;
}

function Button({ leftIcon, boxIcon, boxIconClass, overlay, onClick, children }: PropsBtn) {
  return (
    <div className="group flex items-center gap-4 py-2 px-4 rounded cursor-pointer">
      {leftIcon ? <span>{leftIcon}</span> : ""}
      {boxIcon ? (
        <span
          className={`w-6 h-6 bg-primary rounded-sm flex items-center justify-center relative ${boxIconClass}`}
        >
          <span className="z-50">{boxIcon}</span>
          {overlay ? (
            <span className="before:absolute before:w-full before:h-full before:top-0 before:left-0 before:content-'' before:bg-overlay before:group-hover:bg-inherit before:transition-all before:duration-300"></span>
          ) : (
            ""
          )}
        </span>
      ) : (
        ""
      )}
      <button className="font-circular-sp text-sm font-bold text-primary group-hover:text-white transition-all duration-300">
        {children}
      </button>
    </div>
  );
}

export default Button;
