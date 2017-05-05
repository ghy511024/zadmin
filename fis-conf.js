
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
    release: "/dist/css/$1"
})
fis.match('*(*all*.js)', {
    release: "/dist/$1",
    optimizer: fis.plugin('uglify-js')
})

////############线上发布#################
fis.media('qa').match('*', {
    release: false,
}).match('*(*all*.js)', {
    release: "$1",
    deploy: fis.plugin('local-deliver', {
        to: "dist"
    }),
    optimizer: fis.plugin('uglify-js')
}).match('*(*all*.scss)', {
    release: "$1",
    deploy: fis.plugin('local-deliver', {
        to: "dist/css"
    })
})

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
