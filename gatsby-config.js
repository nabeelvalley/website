module.exports = {
    plugins: [
        {
            resolve: 'gatsby-plugin-postcss',
            options: {
                postCssPlugins: [require('postcss-preset-env')({ stage: 0 })]
            }
        },
        {
            resolve: 'gatsby-plugin-nprogress',
            options: {
                color: '#e44d90',
                showSpinner: false,
            }
        }
    ]
}