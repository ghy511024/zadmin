
fis.match('*', {
    release: false,
})



//===================== css 编译处理  ===================
fis.match('*(*all*.scss)', {
    rExt: '.css',
    parser: fis.plugin('node-sass', {// ����scss
    }),
    sourceMap: true,
    // 启用图片插件 (必须 启用 fis-spriter-csssprites 这个插件才能使用此功能)
//    useSprite: true,
//    release: "/static/css/$1",// 迁移项目不能这么设置，需要兼容项目以前引用路径
    // css3 前缀自动补全
    postprocessor: fis.plugin("autoprefixer", {
        "browsers": ['Firefox >= 20', 'Safari >= 6', 'Explorer >= 8', 'Chrome >= 12', "ChromeAndroid >= 2.0"],
        "flexboxfixer": true,
        "gradientfixer": true
    }),
})








// 发布规则
fis.match('*(*all*.js)', {
    release: "$1",
    optimizer: fis.plugin('uglify-js')
}).match('*(*test*.js)', {
    release: "/js/$1",
    optimizer: fis.plugin('uglify-js')
}).match('*(*all*.scss)', {
    release: "/css/$1",
})


// jsptpl 模版
fis.match("*(*.tpl)", {
    parser: fis.plugin('jsptpl'),
    rExt: '.js',
    release: "/jstpl/$1"
})




//// vue 文件
//fis.match('vue/(*.vue)', {
//    isMod: true,
//    rExt: 'js',
//    useSameNameRequire: true,
//    parser: [
//        fis.plugin('vue-component', {runtimeOnly: true, // vue@2.x 有润timeOnly模式，为ture时，template会在构建时转为render方法 
//            // styleNameJoin 
//            styleNameJoin: '', // 样式文件命名连接符 `component-xx-a.css` 
//            extractCSS: false, // 是否将css生成新的文件, 如果为false, 则会内联到js中 
//            // css scoped 
//            cssScopedIdPrefix: '_v-', // hash前缀：_v-23j232jj 
//            cssScopedHashType: 'sum', // hash生成模式，num：使用`hash-sum`, md5: 使用`fis.util.md5` 
//            cssScopedHashLength: 8, // hash 长度，cssScopedHashType为md5时有效 
//            cssScopedFlag: '__vuec__', // 兼容旧的ccs scoped模式而存在，此例子会将组件中所有的`__vuec__`替换为 `scoped id`，不需要设为空 
//        })
//    ],
//    release: "vue/$1"
//});

//fis.hook('module', {
//    mode: 'mod'
//});

//fis.match('vue/**.vue:js', {
//    isMod: true,
//    rExt: 'js',
//    useSameNameRequire: true,
//    parser: [
//        fis.plugin('babel-6.x', {
////            presets: ['es2015-loose', 'react', 'stage-3']
//        }),
//        fis.plugin('translate-es3ify', null, 'append')
//    ]
//});
//// 模块文件
//fis.match('vue/(**.js)', {
////    isMod: true,
//    release: "vue/$1",
////     useSameNameRequire: true
//    parser: [
//        fis.plugin('babel-6.x', {
////            presets: ['es2015-loose', 'react', 'stage-3']
//        }),
//        fis.plugin('translate-es3ify', null, 'append')
//    ]
//});

// jsptpl 模版
//fis.match("**plug2.js", {
//    release: "/demotest/jsptpl/plug2.js",
//})

//===================== 忽略规则  ===================
fis.set('project.ignore', [
    '**/nbproject/**',
    'dist/**',
    '**/bat/**',
    'node_modules/**',
    '.git/**',
    '.svn/**',
    "**conf.js",
    '**.bat'
]);
