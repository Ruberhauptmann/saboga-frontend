/*
primary-content	--color-primary-content

secondary	--color-secondary	Secondary brand color, The optional, secondary color of your brand
secondary-content	--color-secondary-content	Foreground content color to use onsecondarycolor

accent	--color-accent	Accent brand color, The optional, accent color of your brand
accent-content	--color-accent-content	Foreground content color to use onaccentcolor

neutral	--color-neutral	Neutral dark color, For not-saturated parts of UI
neutral-content	--color-neutral-content	Foreground content color to use on neutral color

base-100	--color-base-100	Base surface color of page, used for blank backgrounds
base-200	--color-base-200	Base color, darker shade, to create elevations
base-300	--color-base-300	Base color, even more darker shade, to create elevations
base-content	--color-base-content	Foreground content color to use onbasecolor

info	--color-info	Info color, For informative/helpful messages
info-content	--color-info-content	Foreground content color to use oninfocolor
success	--color-success	Success color, For success/safe messages
success-content	--color-success-content	Foreground content color to use onsuccesscolor
warning	--color-warning	Warning color, For warning/caution messages
warning-content	--color-warning-content	Foreground content color to use onwarningcolor
error	--color-error	Error color, For error/danger/destructive messages
error-content	--color-error-content	Foreground content color to use onerrorcolor
 */

export type colorType = {
  primary: string;
  primaryContent: string;
  secondary: string;
  secondaryContent: string;
  accent: string;
  accentContent: string;
  neutral: string;
  neutralContent: string;
  base100: string;
  base200: string;
  base300: string;
  baseContent: string;
  info: string;
  infoContent: string;
  success: string;
  successContent: string;
  warning: string;
  warningContent: string;
  error: string;
  errorContent: string;
};

export const emptyColors: colorType = {
  primary: "",
  primaryContent: "",
  secondary: "",
  secondaryContent: "",
  accent: "",
  accentContent: "",
  neutral: "",
  neutralContent: "",
  base100: "",
  base200: "",
  base300: "",
  baseContent: "",
  info: "",
  infoContent: "",
  success: "",
  successContent: "",
  warning: "",
  warningContent: "",
  error: "",
  errorContent: "",
};

export function getColors(): colorType {
  return {
    primary: getComputedStyle(document.documentElement).getPropertyValue(
      "--color-primary",
    ),
    primaryContent: getComputedStyle(document.documentElement).getPropertyValue(
      "--color-primary-content",
    ),
    secondary: getComputedStyle(document.documentElement).getPropertyValue(
      "--color-secondary",
    ),
    secondaryContent: getComputedStyle(
      document.documentElement,
    ).getPropertyValue("--color-secondary-content"),
    accent: getComputedStyle(document.documentElement).getPropertyValue(
      "--color-accent",
    ),
    accentContent: getComputedStyle(document.documentElement).getPropertyValue(
      "--color-accent-content",
    ),
    neutral: getComputedStyle(document.documentElement).getPropertyValue(
      "--color-neutral",
    ),
    neutralContent: getComputedStyle(document.documentElement).getPropertyValue(
      "--color-neutral-content",
    ),
    base100: getComputedStyle(document.documentElement).getPropertyValue(
      "--color-base-100",
    ),
    base200: getComputedStyle(document.documentElement).getPropertyValue(
      "--color-base-200",
    ),
    base300: getComputedStyle(document.documentElement).getPropertyValue(
      "--color-base-300",
    ),
    baseContent: getComputedStyle(document.documentElement).getPropertyValue(
      "--color-base-content",
    ),
    info: getComputedStyle(document.documentElement).getPropertyValue(
      "--color-info",
    ),
    infoContent: getComputedStyle(document.documentElement).getPropertyValue(
      "--color-info-content",
    ),
    success: getComputedStyle(document.documentElement).getPropertyValue(
      "--color-success",
    ),
    successContent: getComputedStyle(document.documentElement).getPropertyValue(
      "--color-success-content",
    ),
    warning: getComputedStyle(document.documentElement).getPropertyValue(
      "--color-warning",
    ),
    warningContent: getComputedStyle(document.documentElement).getPropertyValue(
      "--color-warning-content",
    ),
    error: getComputedStyle(document.documentElement).getPropertyValue(
      "--color-error",
    ),
    errorContent: getComputedStyle(document.documentElement).getPropertyValue(
      "--color-error-content",
    ),
  };
}
