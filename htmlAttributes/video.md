## video PC端
日常使用video标签的时候，用于引入视频资源，需要对引入的视频资源进行一些个性话的定制。此时就需要我们使用一些方法或者技术来达到我们的目的。<br>
> 快速在此文找到你需要的信息，使用下搜索功能哦
### issue1
```javascript
Uncaught SecurityError: Failed to execute 'toDataURL' on 'HTMLCanvasElement': Tainted canvases may not be exported.
```
来自一个链接的[解释](https://stackoverflow.com/questions/22710627/tainted-canvases-may-not-be-exported) <br>
主要提到了<code>crossOrigin="anonymous"</code>这个属性。

## Html5的video标签自动填充满父div的大小
video能够自动的填满父div的大小，只要给<code>video</code>标签加上
```css
  width= 100%;
  height=100%;
  object-fit: fill
```


### others
更多的关于<code>HTML5</code>捕捉音频和视频：<br>
* [HTML 5捕捉音频与视频信息](http://blog.csdn.net/llingma2010/article/details/8882071)
* [详细讲解HTML 5中视频和音频核心事件](http://blog.csdn.net/u013267266/article/details/52154914)
* [使用HTML5捕捉音频与视频信息概述及实例](http://blog.csdn.net/vbLittleBoy/article/details/38702533)
