import React from "react";
import ReactTooltip from "react-tooltip";

const Tooltip = ({ children, content }) => (
  <>
    <span data-tip data-for={`${children}Tip`}>
      {children}
    </span>
    <ReactTooltip id={`${children}Tip`} place='top' effect='solid'>
      {content}
    </ReactTooltip>
  </>
);

export default Tooltip;
