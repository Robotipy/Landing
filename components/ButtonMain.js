"use client";

import config from "@/config";

// Use this button if chat is hidden on some routes. config.js has onlyShowOnRoutes set to ["/"] so it will be hidden on all routes except the home page.
// If Crisp is not enable, it will open the support email in the default email client.
const ButtonMain = ({ link, text, type = "primary", tooltipText=null, rounded=false }) => {
  const handleClick = () => {
    // open default email client in new window with "need help with ${config.appName}" as subject
    window.open(`${link}`, "_blank");
  };
  let buttonStyle;
  if (type === "primary") {
    buttonStyle = {
      backgroundColor: config.colors.main,
      color: "white",
      border: "none",
      cursor: "pointer",
      borderRadius: rounded ? "10px" : "0px",
    };    
  }else if(type === "secondary"){
    buttonStyle = {
      backgroundColor: "white",
      color: config.colors.main,
      border: "1px solid " + config.colors.main,
      cursor: "pointer",
    };
  }


  return (
    <button
      style={buttonStyle}
      onClick={handleClick}
      data-tooltip-id="tooltip"
      data-tooltip-content={tooltipText}
      title={text}
      className="px-3 py-2"
      
    >
      {text}
    </button>
  );
};

export default ButtonMain;
