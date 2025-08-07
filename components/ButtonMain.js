"use client";

import config from "@/config";


// Use this button if chat is hidden on some routes. config.js has onlyShowOnRoutes set to ["/"] so it will be hidden on all routes except the home page.
// If Crisp is not enable, it will open the support email in the default email client.
const ButtonMain = ({ link, text, type = "primary", tooltipText=null, rounded=false, noblank=false, ...props }) => {
  const handleClick = () => {
    console.log(noblank)
    // open default email client in new window with "need help with ${config.appName}" as subject
    window.open(`${link}`, noblank ? "_self" : "_blank");
  };
  const handleMouseEnter = (event) => {
    event.target.style.borderColor = config.colors.main;
    console.log(event.target.style.borderColor);
  };
  const handleMouseLeave = (event) => {
    event.target.style.borderColor = config.colors.secondary;
    console.log(event.target.style.borderColor);
  };
  let buttonStyle;
  if (type === "primary") {
    buttonStyle = {
      backgroundColor: config.colors.background,
      color: "white",
      border: "1px solid " + config.colors.secondary,
      cursor: "pointer",
      borderRadius: rounded ? "10px" : "0px",
    };    
  }else if(type === "secondary"){
    buttonStyle = {
      backgroundColor: "transparent",
      color: "white",
      border: "none",
      cursor: "pointer",
    };
  }else if(type === "tertiary"){
    buttonStyle = {
      backgroundColor: "transparent",
      // color: config.colors.main,
      border: "none",
      cursor: "pointer",
      padding: ".3rem 0",
    };
  }else if(type === "quaternary"){
    buttonStyle = {
      backgroundColor: "transparent",
      color: "white",
      border: "1px solid " + config.colors.secondary,
      cursor: "pointer",
    };
  }


  return (
    <button
      style={buttonStyle}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      data-tooltip-id="tooltip"
      data-tooltip-content={tooltipText}
      title={text}
      className="px-6 py-4 text-white rounded-lg"
      {...props}
      
    >
      {text}
    </button>
  );
};

export default ButtonMain;
