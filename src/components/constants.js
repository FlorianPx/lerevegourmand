export const devices = {
  mobile: 321,
  tablet: 481,
  desktop: 1024,
};

export const fluidFontSize = (value) =>
  `calc(${value}rem + ((1vw - 3.2px) * 1.70 ));`;
