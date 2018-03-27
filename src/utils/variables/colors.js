// materialize colors: http://materializecss.com/color.html
const colors = {
  primary: 'hotpink',
  secondary: '#7b1fa2', // purple darken-2

  // standard colors
  blue: '#1e88e5', // blue darken-1
  green: '#43a047', // green darken-1
  orange: '#e65100', // orange darken-4
  warning: '#ffb300', // amber darken-1
  light: '#f8f9fa',
  lightenGrey: '#fafafa', // grey lighten-5
  lightGray: '#eeeeee', // grey lighten-3
  dark: '#2b2b2b',
  darker: '#1d1f27',
  black: '#000000',
  white: '#fffff',
}

export default {
  ...colors,
  primary: colors.primary,
  secondary: colors.secondary,
  success: colors.green,
  danger: colors.orange,
  warning: colors.warning,
  info: colors.primary,
  light: colors.primary,
  dark: colors.dark,
  white: colors.white,
  disabled: colors.lightGray,

  background: colors.primary,
  font: colors.dark,
  link: colors.dark,
  border: colors.primary,
}
