"use client";

import { Link } from "@/i18n/routing";
import config from "@/config";

const isExternalUrl = (link) => /^(https?:)?\/\//i.test(link) || /^(mailto:|tel:)/i.test(link);

const getButtonStyle = (type, rounded) => {
  if (type === "primary" || type === "primary-sm") {
    return {
      backgroundColor: config.colors.background,
      color: "white",
      border: "1px solid " + config.colors.secondary,
      cursor: "pointer",
      borderRadius: rounded ? "10px" : "0px",
    };
  }
  if (type === "secondary") {
    return {
      backgroundColor: "transparent",
      color: "white",
      border: "none",
      cursor: "pointer",
    };
  }
  if (type === "tertiary") {
    return {
      backgroundColor: "transparent",
      border: "none",
      cursor: "pointer",
      padding: ".3rem 0",
    };
  }
  if (type === "quaternary") {
    return {
      backgroundColor: "transparent",
      color: "white",
      border: "1px solid " + config.colors.secondary,
      cursor: "pointer",
    };
  }
  return {};
};

const ButtonMain = ({
  link,
  text,
  type = "primary",
  tooltipText = null,
  rounded = false,
  noblank = false,
  className,
  onClick,
  ...props
}) => {
  const buttonStyle = getButtonStyle(type, rounded);
  if (type.includes("sm")) {
    buttonStyle.padding = ".6rem";
  }

  const handleMouseEnter = (event) => {
    event.currentTarget.style.borderColor = config.colors.main;
  };
  const handleMouseLeave = (event) => {
    event.currentTarget.style.borderColor = config.colors.secondary;
  };

  const sharedClassName =
    "px-3 lg:px-6 py-2 lg:py-4 text-white rounded-lg" +
    (className ? ` ${className}` : "");

  const sharedProps = {
    style: buttonStyle,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    title: tooltipText || undefined,
    className: sharedClassName,
    ...props,
  };

  // No link → render a <button>. Caller is responsible for onClick semantics.
  if (!link) {
    return (
      <button type="button" onClick={onClick} {...sharedProps}>
        {text}
      </button>
    );
  }

  const opensNewTab = !noblank;
  const externalProps = opensNewTab
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
  const newTabHint = opensNewTab ? " (opens in new tab)" : "";

  // External URL or non-http scheme: plain <a>.
  if (isExternalUrl(link)) {
    return (
      <a
        href={link}
        onClick={onClick}
        aria-label={opensNewTab ? `${text}${newTabHint}` : undefined}
        {...externalProps}
        {...sharedProps}
      >
        {text}
      </a>
    );
  }

  // Internal path that should open in a new tab: still <a> (Link does not
  // play well with target=_blank because of locale prefixing + prefetch).
  if (opensNewTab) {
    return (
      <a
        href={link}
        onClick={onClick}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${text} (opens in new tab)`}
        {...sharedProps}
      >
        {text}
      </a>
    );
  }

  // Internal same-tab navigation: use the i18n Link for SPA routing.
  return (
    <Link href={link} onClick={onClick} {...sharedProps}>
      {text}
    </Link>
  );
};

export default ButtonMain;
