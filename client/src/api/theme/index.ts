import { MantineThemeOverride } from '@mantine/core';

export const defaultTheme: MantineThemeOverride = {
    colorScheme: 'light',
    focusRing: 'auto',
    fontFamily: 'Open Sans, sans-serif',
    colors: {
        'deep-blue': ['#64b4ed', '#468ec2', '#2f78ad', '#1a5178', '#1a6499', '#167fc9', '#0c609c', '#07426b', '#034f85', '#012c4a'],
        'bright-pink': ['#F0BBDD', '#ED9BCF', '#EC7CC3', '#ED5DB8', '#F13EAF', '#F71FA7', '#FF00A1', '#E00890', '#C50E82', '#AD1374'],
        'ocean-blue': ['#7AD1DD', '#5FCCDB', '#44CADC', '#2AC9DE', '#1AC2D9', '#11B7CD', '#09ADC3', '#0E99AC', '#128797', '#147885'],
        'dark': ['#C1C2C5', '#A6A7AB', '#909296', '#5C5F66', '#373A40', '#2C2E33', '#25262B', '#1A1B1E', '#141517', '#101113'],
        'gray': ['#F8F9FA', '#A6A7AB', '#909296', '#5C5F66', '#373A40', '#2C2E33', '#25262B', '#1A1B1E', '#141517', '#6F6E73'],
        'gold': ['#FFF9DB', '#FFF3BF', '#FFEC99', '#FFE066', '#FFD43B', '#FCC419', '#FAB005', '#F59F00', '#F08C00', '#FFCC32'],
        'lime': ['#F4FCE3', '#E9FAC8', '#D8F5A2', '#C0EB75', '#A9E34B', '#94D82D', '#82C91E', '#74B816', '#66A80F', '#5C940D'],
    },

    primaryColor: 'gold',


    shadows: {
        md: '1px 1px 3px rgba(0,0,0,.25)',
        xl: '5px 5px 3px rgba(0,0,0,.25)',
    },

    headings: {
        fontFamily: 'Open Sans, sans-serif',
        sizes: {
            h1: { fontSize: 40 },
            h2: { fontSize: 40 },
        },
    },
}
