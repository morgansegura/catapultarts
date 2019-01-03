import Typography from 'typography'

const typography = new Typography({
    baseFontSize: '16px',
    baseLineHeight: 1.69,
    headerFontFamily: ['Source Sans Pro', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
    bodyFontFamily: ['Source Sans Pro', 'sans-serif'],
    // See below for the full list of options.
})

// Output CSS as string.
// typography.toString()

// Or insert styles directly into the <head> (works well for client-only
// JS web apps.
// typography.injectStyles()

export default typography