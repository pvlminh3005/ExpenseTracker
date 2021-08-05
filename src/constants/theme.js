import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

export const COLORS = {
    //base color
    primary: '#194868', //Dark Blue
    secondary: '#ff615f', //PEACH

    //colors
    black: '#1e1f28',
    white: '#fff',
    lightGray: '#f5f6f7',
    lightGray2: '#fafbfd',
    gray: '#bec1d2',
    blue: '#42b0ff',
    darkgray: '#898c95',
    yellow: '#fcd06a',
    lightBlue: '#95a9bb',
    darkgreen: '#008159',
    lightGreen: '#00a772',
    peach: '#ff615f',
    purple: '#8e44ad',
    red: '#ff0000',
    selected: '#f1f2f6',
}

export const SIZES = {
    //global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,
    padding2: 36,

    //font sizes
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 18,
    h4: 16,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,

    //app dimensions
    width,
    height
}

const appTheme = { COLORS, SIZES }

export default appTheme