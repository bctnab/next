export const UNIT = 8;

export const LIGHT_COLORS: {
  [key: string]: any
} = {
  text: 'rgb(10, 12, 16)',
  background: '#fff',
  fillBackground: '#f2f5f8',
  // 主题色
  primary: 'rgb(50, 115, 220)',
  error: 'rgb(249, 7, 88)',
  // 圆角
  boxRadius: '0.5rem',
  // 边框阴影
  boxShadow: '0 4px 10px rgba(0,2, 4, 0.06),0 0 1px rgba(0, 2, 4, 0.11)',
  decorative: 'rgb(140 205 236)',

  gray: {
    '100': 'rgb(240, 241, 246)',
    '200': 'rgb(226, 228, 234)',
    '300': 'rgb(200, 202, 209)',
    '400': 'rgb(173, 176, 185)',
    '500': 'rgb(146, 150, 161)',
    // Accessible:
    '600': 'rgb(109, 118, 147)',
    '700': 'rgb(90, 96, 115)',
    '900': 'rgb(39, 45, 64)',
    '1000': 'rgb(33, 36, 44)',
  },
};

LIGHT_COLORS.subtleFloating = LIGHT_COLORS.background;
LIGHT_COLORS.subtleBackground = LIGHT_COLORS.gray[100];

export const BREAKPOINT_SIZES: {
  xs: number,
  sm: number,
  md: number,
  lg: number,
  xl: number,
} = {
  xs: 320,
  sm: 563,
  md: 768,
  lg: 1024,
  xl: 1440,
};

export const BREAKPOINTS: {
  [key: string]: any
} = {
  xs: `(max-width: ${ BREAKPOINT_SIZES.xs}px)`,
  sm: `(min-width: ${ BREAKPOINT_SIZES.xs}px and max-width: ${ BREAKPOINT_SIZES.sm}px)`,
  md: `(min-width: ${ BREAKPOINT_SIZES.sm}px and max-width: ${ BREAKPOINT_SIZES.md}px)`,
  lg: `(min-width: ${ BREAKPOINT_SIZES.md}px and max-width: ${ BREAKPOINT_SIZES.lg}px)`,
  xl: `(min-width: ${ BREAKPOINT_SIZES.lg}px and max-width: ${ BREAKPOINT_SIZES.xl}px)`,
  xsAndSmaller: `(max-width: ${ BREAKPOINT_SIZES.xs}px)`,
  smAndSmaller: `(max-width: ${ BREAKPOINT_SIZES.sm}px)`,
  mdAndSmaller: `(max-width: ${ BREAKPOINT_SIZES.md}px)`,
  lgAndSmaller: `(max-width: ${ BREAKPOINT_SIZES.lg}px)`,
  xlAndSmaller: `(max-width: ${ BREAKPOINT_SIZES.xl}px)`,
  xsAndLarger: `(min-width: ${ BREAKPOINT_SIZES.xs + 1}px)`,
  smAndLarger: `(min-width: ${ BREAKPOINT_SIZES.sm + 1}px)`,
  mdAndLarger: `(min-width: ${ BREAKPOINT_SIZES.md + 1}px)`,
  lgAndLarger: `(min-width: ${ BREAKPOINT_SIZES.lg + 1}px)`,
  xlAndLarger: `(min-width: ${ BREAKPOINT_SIZES.xl + 1}px)`,
  mobile: `(max-width: ${ BREAKPOINT_SIZES.md}px)`,
  desktop: `(min-width: ${ BREAKPOINT_SIZES.md + 1}px)`,
};

export const SPRINGS = {
  default: {
    tension: 170,
    friction: 26,
  },
  light: {
    tension: 170,
    friction: 18,
  },
  springy: {
    tension: 300,
    friction: 10,
  },
  lush: {
    tension: 170,
    friction: 50,
  },
  molasses: {
    tension: 170,
    friction: 75,
  },
};

// This key is used in localStorage to remember theme preferences
export const THEME = {
  unit: UNIT,
  breakpoints: BREAKPOINTS,
};

export const PREFERS_DARK_KEY = 'prefers-dark';
export const PREFERS_DARK_CSS_PROP = `--${PREFERS_DARK_KEY}`;
export const COLOR_SWAP_TRANSITION_DURATION = 350;

export const TIGHT_SPRING = {
  tension: 450,
  friction: 25,
};