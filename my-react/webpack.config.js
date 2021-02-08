const path = require('path')

module.exports = {
    context: path.resolve(__dirname, './'),
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,'build'),
        filename:'bundle.js'
    },
    resolve:{

    },
    devServer:{
        contentBase: path.resolve(__dirname, 'public'),
    },
    module:{
        rules:[
            {
               test:/\.js$/,
               use:['babel-loader']  
            }
        ]
    },
    devtool:'source-map'
}