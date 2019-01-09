import Typography from 'typography'

const typography = new Typography({
    baseFontSize: '16px',
    baseLineHeight: 1.7,
    headerFontFamily: ['Hind', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
    bodyFontFamily: ['Rubik', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
    // See below for the full list of options.

    googleFonts: [
        {
            name: 'Rubik',
            styles: [
                '300',
                '400',
                '500',
                '700',
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