import { color } from "./constants";

const {
  FIERY_COLOR,
  TROLLEY_GREY,
  OUTER_SPACE,
  WHITE,
  REGISTRATION_BLACK
} = color;

const BRAND_COLOR = FIERY_COLOR;
const TEXT_COLOR = REGISTRATION_BLACK;
const SECONDARY_TEXT_COLOR = TROLLEY_GREY;

const THEME = {
  color: {
    brand: BRAND_COLOR,
    bg: WHITE,
    primaryText: TEXT_COLOR,
    secondaryText: SECONDARY_TEXT_COLOR,
    borderDark: REGISTRATION_BLACK,
    borderLight: OUTER_SPACE,
    primaryButton: TROLLEY_GREY,
    error: "red"
  }
};

export default THEME;
