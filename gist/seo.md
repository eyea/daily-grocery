### 需要Google、Bing等搜索引擎优化
```html
如果项目使用的是vue+webpack，那么你需要更改一下打包方式,在`webpack.prod.conf.js`文件里面
```
```javascript
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.build.assetsSubDirectory,
        // ignore: ['.*']
        ignore: ['seofiles/*']
      }, {
        from: path.resolve(__dirname, '../static/seofiles'),
        to: config.build.assetsRoot,
        ignore: ['.*']
      }
    ])
    // 所有的seo相关文件放到seofiles的文件夹下，此时可以运行
    // yarn build 来观察 dist 文件夹下的目录
```
### notes

1. 如果是多页面应用，并且此时服务器是用的nginx做转发，那么需要在nginx添加上配置，因为这些搜索引擎要访问你的网站根目录下的存放的他们的文件
