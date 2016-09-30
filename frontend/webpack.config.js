const path = require('path'); //ходить по папкам
const webpack = require('webpack'); //сам вебпак
const argv = require('yargs').argv; //профайлы

const ExtractTextPlugin = require('extract-text-webpack-plugin'); //загрузка стилей
const HtmlWebpackPlugin = require('html-webpack-plugin'); //сборка html
const autoprefixer = require('autoprefixer'); //css prefixes

/**
 * Webpack Constants
 */
const settings = argv.profile ? require(`./config/${argv.profile}`) : require('./config/development'); //текущая настройка

/**
 * Webpack configuration
 *
 * See: http://webpack.github.io/docs/configuration.html#cli
 */
const config = {
    entry: {
        vendor: [],
        app: [
            './vendor/angular.src.js',
            './src/app.js'
        ]
    },
    
    /**
     * Options affecting the output of the compilation.
     *
     * See: http://webpack.github.io/docs/configuration.html#output
     */
    output: {
        /**
         * The output directory as absolute path (required).
         *
         * See: http://webpack.github.io/docs/configuration.html#output-path
         */
        path: './dest',
        
        /**
         * Specifies the name of each output file on disk.
         * IMPORTANT: You must not specify an absolute path here!
         *
         * See: http://webpack.github.io/docs/configuration.html#output-filename
         */
        filename: '[name].js?[hash]',

        /** The filename of non-entry chunks as relative path
         * inside the output.path directory.
         *
         * See: http://webpack.github.io/docs/configuration.html#output-chunkfilename
         */
        chunkFilename: '[id].chunk.js?[chunkhash]'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                include: path.resolve('src')
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss!less?sourceMap')
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url?limit=32768'
            },
            {
                test: /\.html$/,
                loader: 'ng-cache?prefix=[dir]/[dir]'
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file'
            }
        ],
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'eslint',
                include: path.resolve('src')
            }
        ],
        noParse: [
            /angular\.src\.js/
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css', 'style.css?[contenthash]', {allChunks: true}),
        new HtmlWebpackPlugin({
            template: path.resolve('src', 'index.ejs'),
            inject: 'body',
            favicon: path.resolve('src', 'favicon.ico')
        }),
        /**
         * Plugin: DefinePlugin
         * Description: Define free variables.
         * Useful for having development builds with debug logging or adding global constants.
         *
         * Environment helpers
         *
         * See: https://webpack.github.io/docs/list-of-plugins.html#defineplugin
         */
        new webpack.DefinePlugin({
            // для использования переменных из конфига
            SERVER_URL: JSON.stringify(settings.SERVER_URL)
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.bundle.js?[hash]'
        })
    ],
    resolve: {
        modulesDirectories: ['node_modules', 'src'],
        extensions: ['', '.js']
    },
    resolveLoader: {
        modulesDirectories: ['node_modules'],
        moduleTemplates: ['*-loader'],
        extensions: ['', '.js']
    },

    /**
     * Developer tool to enhance debugging
     *
     * See: http://webpack.github.io/docs/configuration.html#devtool
     * See: https://github.com/webpack/docs/wiki/build-performance#sourcemaps
     */
    devtool: settings.SOURCE_MAP,

    /**
     * Webpack Development Server configuration
     * Description: The webpack-dev-server is a little node.js Express server.
     * The server emits information about the compilation state to the client,
     * which reacts to those events.
     *
     * See: https://webpack.github.io/docs/webpack-dev-server.html
     */
    devServer: {
        historyApiFallback: true,
        stats: {
            chunkModules: false,
            colors: true
        },
        contentBase: './src',
        proxy: [{
            context: '/api',
            target: settings.REMOTE_URL || 'http://localhost:8090/',
            pathRewrite: {
                '^api': '/'
            }
        }]
    },

    /**
     * Static analysis linter for JavaScript advanced options configuration
     * Description: An extensible linter for the JavaScript language.
     *
     * See: https://github.com/wbuchwalter/eslint-loader
     */
    eslint: {
        configFile: 'src/.eslintrc'
    }
};

if (settings.MINIFY) {
    console.log('This build will be minimized using UglifyJsPlugin.');
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }));
    config.devtool = 'source-map';
} else {
    config.devtool = 'eval-source-map';
}

module.exports = config;