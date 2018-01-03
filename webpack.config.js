const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "[name].css",
    disable: process.env.NODE_ENV === "development"
});


module.exports = {
  	entry: {
  		main: './assets/js/index.js'
  	},
  	output: {
    	filename: '[name].js',
    	path: path.resolve(__dirname, 'public')
  	},

  	module: {
        rules: [
        	{
	            test: /\.scss$/,
	            use: extractSass.extract({
	                use: [{
	                    loader: "css-loader", options: {
		                    sourceMap: true
		                }
	                }, {
	            		loader: "resolve-url-loader"
	            	}, {
	                    loader: "sass-loader", options: {
		                    sourceMap: true
		                }
	                }],
	                // use style-loader in development
	                fallback: "style-loader"
            	})
	        },
	        {
            	test: /\.(png|svg|jpg|gif)$/,
	        	use: [
	            	'file-loader'
	        	]
	        },
	        {
	          	test: /\.(woff|woff2|eot|ttf|otf)$/,
	          	use: [
	            	'file-loader'
	          	]
	        }
		]
    },
    plugins: [
        extractSass
    ]
};

