## 为何开发Ghost主题？
山然我刚从WordPress转入Ghost。WordPress是我使用了七八年的程序了，并不是WordPress不够好，这几年WordPress的进步是我们看得见的，反而是因为WordPress太好了，导致我已经不能纯粹的写博客了，看到WordPress我就忍不住折腾...
于是我转到了Ghost来，Ghost是WordPress开发团队另起的一个纯粹博客程序，Ghost能让我们更专注与创作。
但是嘛，Ghost在国内使用者是非常的少，所以导致Ghost没有几款符合国人习惯的主题，于是嘛...还是忍不住折腾的心，自己写一个吧！

## Mountain
Mountain是我的第一个Ghost主题，中文名`山`，还算是一款比较惊艳的双栏主题。先让我们来看看它吧！
dome:[www.ishanran.com](http://www.ishanran.com)

## 开发进度
1. 首页
2. post页面
3. page页面
4. tag页面
5. author页面
6. ~~友情链接页面~~
7. ~~关于我页面~~
8. 响应式
9. 自动识别body背景渐变色([grade](https://github.com/benhowdle89/grade))
10. 代码高亮(style来自于[淮城一只猫](https://iiong.com/))
11. 前端Ghost搜索([ghost-search V1.0](https://github.com/HauntedThemes/ghost-search))
12. 评论系统([Valine](https://valine.js.org/))
暂时就是这些，还有个友情链接和关于我页面没写好，实在是没有好的ider了！得好好构思一下，不然破坏了整体风格那就没意思了。

## 使用教程
1. 下载[releases](https://github.com/Ysnv1997/Mountain/releases)包
2. 修改 assets/js/app.js内容：`config`中的内容，对应填写即可
    ```
    var config = {
    Valine: {
                appId: 'r5Ex9Rj9hflHjRACQWPk5DJT-gzGzoHsz', //Valine appId 参考https://valine.js.org/quickstart.html#%E9%85%8D%E7%BD%AE
                appKey: 'y7MryUHGzDTvyBGiWjkV6tyB', //Valine appKey
                notify: false, // 邮件提醒!!! 默认为 false，启动请参考：https://github.com/xCss/Valine/wiki/Valine-%E8%AF%84%E8%AE%BA%E7%B3%BB%E7%BB%9F%E4%B8%AD%E7%9A%84%E9%82%AE%E4%BB%B6%E6%8F%90%E9%86%92%E8%AE%BE%E7%BD%AE
                verify: false //是否开启评论验证码
            },
            GhostApi: '1047ab24382f22d28d8ec07103' //ghost 后台Integrations 新建CUSTOM INTEGRATIONS  获取api
        }
    ```
3. 上传至Ghost即可
