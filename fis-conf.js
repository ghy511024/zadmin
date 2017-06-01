
fis.match('*', {
    release: false,
})
//===================== css 编译处理  ===================
fis.match('/src/(**.scss)', {
    rExt: '.css',
    parser: fis.plugin('node-sass', {// ����scss
    }),
   release: "/dist/css/$1",
    optimizer: fis.plugin('clean-css'),
    postprocessor: fis.plugin("autoprefixer", {
        "browsers": ['Firefox >= 20', 'Safari >= 6', 'Explorer >= 8', 'Chrome >= 12', "ChromeAndroid >= 2.0"],
        "flexboxfixer": true,
        "gradientfixer": true
    }),
})

// 发布规则
fis.match('*(*all*.js)', {
    release: "/dist/$1",
    optimizer: fis.plugin('uglify-js')
}).match('/src/page/(**)', {
    release: "/page/$1",
}).match('*(*all*.scss)', {
    release: "/dist/css/$1",
})
// jsptpl 模版
fis.match("*(*.tpl)", {
    parser: fis.plugin('jsptpl'),
    rExt: '.js',
//    release: "/jstpl/$1"
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
