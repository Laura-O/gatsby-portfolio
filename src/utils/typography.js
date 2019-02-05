import Typography from 'typography';
import irvingTheme from 'typography-theme-irving'
// kirkhamTheme.bodyFontFamily = ['Source Sans Pro', 'sans-serif']

const typography = new Typography(irvingTheme);
const { rhythm, scale } = typography;

export { rhythm, scale, typography as default };