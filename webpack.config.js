var appsPath = './public/js/apps/';
var jsPath = './public/js/';
module.exports = {
    entry: {
      'DUApp': appsPath + 'DUApp',
    },
    resolve: {
	extensions: ['', '.webpack.js', '.web.js', '.js']
    },
    output: {
	path: './',
	filename: jsPath + '[name].js'
    }
}
