import Typography from 'typography'

const typography = new Typography({
    baseFontSize: '16px',
    baseLineHeight: 1.69,
    headerFontFamily: ['Hind','Source Sans Pro', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
    bodyFontFamily: ['Source Sans Pro', 'sans-serif'],
    // See below for the full list of options.

    googleFonts: [
        {
            name: 'Source+Sans+Pro',
            styles: [
                '300',
                '400',
                '600',
                '700',
                '900',
            ],
        },
        {
            name: 'Hind',
            styles: [
                '300',
                '400',
                '500',
                '600',
                '700',
                // '900',
            ],
        },
    ],    
})

// Output CSS as string.
// typography.toString()

// Or insert styles directly into the <head> (works well for client-only
// JS web apps.
// typography.injectStyles()

export default typography