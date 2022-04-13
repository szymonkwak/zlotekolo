import { MantineThemeOverride } from '@mantine/core';

export const defaultTheme: MantineThemeOverride = {
    colorScheme: 'light',
    focusRing: 'auto',
    fontFamily: 'Greycliff CF, sans-serif',
    colors: {
        'deep-blue': ['#64b4ed', '#468ec2', '#2f78ad', '#1a5178', '#1a6499', '#167fc9', '#0c609c', '#07426b', '#034f85', '#012c4a'],
        'bright-pink': ['#F0BBDD', '#ED9BCF', '#EC7CC3', '#ED5DB8', '#F13EAF', '#F71FA7', '#FF00A1', '#E00890', '#C50E82', '#AD1374'],
        'ocean-blue': ['#7AD1DD', '#5FCCDB', '#44CADC', '#2AC9DE', '#1AC2D9', '#11B7CD', '#09ADC3', '#0E99AC', '#128797', '#147885'],
        'gray': ['#6F6E73', '#6F6E73', '#6F6E73', '#6F6E73', '#6F6E73', '#6F6E73', '#6F6E73', '#6F6E73', '#6F6E73', '#6F6E73'],
        'gold': ['#FFCC32', '#FFCC32', '#FFCC32', '#FFCC32', '#FFCC32', '#FFCC32', '#FFCC32', '#FFCC32', '#FFCC32', '#FFCC32'],
    },

    primaryColor: 'gold',

    shadows: {
        md: '1px 1px 3px rgba(0,0,0,.25)',
        xl: '5px 5px 3px rgba(0,0,0,.25)',
    },

    headings: {
        fontFamily: 'Greycliff CF, sans-serif',
        sizes: {
            h1: { fontSize: 40 },
        },
    },
}