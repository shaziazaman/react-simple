var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var webpack = require('webpack')

var locals = {
    path: [
        '/'
    ]
}
module.exports = ({
    entry: {
        main: './index.js',
        css: './scss/app.scss'
    },
    output: {
        filename: 'index.js',
        path: 'dist',
        libraryTarget: 'umd'
    },
    loaders: [
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {presets: ['es2015', 'react']},
        }
        ,
        {
            test: /\.scss$/,
            exclude: /node_modules/,
            loader: ExtractTextPlugin.extract(
                'style-loader', '!css-loader!sass-loader'
            )
        }
    ],
    plugins: [
        new StaticSiteGeneratorPlugin('main',locals.paths, locals),
        new ExtractTextPlugin('style.css', {allChunks: true}),
        new webpack.NoErrorsPlugin()
    ],
    watch: true
})
