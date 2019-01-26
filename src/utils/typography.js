import Typography from 'typography';
import kirkhamTheme from 'typography-theme-kirkham';
kirkhamTheme.bodyFontFamily = ['Source Sans Pro', 'sans-serif']

const typography = new Typography(kirkhamTheme);
const { rhythm, scale } = typography;

export { rhythm, scale, typography as default };