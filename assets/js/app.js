"use strict";
var config = {
    Valine: {
        appId: 'r5Ex9Rj9hflHjRACQWPk5DJT-gzGzoHsz', //Valine appId
        appKey: 'y7MryUHGzDTvyBGiWjkV6tyB', //Valine appKey
        notify: false, // 邮件提醒!!! 默认为 false，启动请参考：https://github.com/xCss/Valine/wiki/Valine-%E8%AF%84%E8%AE%BA%E7%B3%BB%E7%BB%9F%E4%B8%AD%E7%9A%84%E9%82%AE%E4%BB%B6%E6%8F%90%E9%86%92%E8%AE%BE%E7%BD%AE
        verify: false //是否开启评论验证码
    },
    GhostApi: '1047ab24382f22d28d8ec07103'
}

$(document).ready(function () {
    //   Valine配置
    new Valine({
        el: '#vcomment',
        appId: config.Valine.appId,
        appKey: config.Valine.appKey,
        placeholder: 'ヾﾉ≧∀≦)o来啊，快活啊!',
        notify: config.Valine.notify,
        verify: config.Valine.verify,
        avatar: 'monsterid',
    })
    // ghost 搜索配置
    new GhostSearch({
        host: 'http://ghost.ishanran.com', //[location.protocol, '//', location.host].join('')
        version: 'v3',
        key: config.GhostApi,
        url: 'http://ghost.ishanran.com', //[location.protocol, '//', location.host].join('')
        trigger: 'focus',
        defaultValue: '',
        options: {
            keys: ['title', 'published_at', 'url']
        },
        api: {
            parameters: {
                fields: ['title', 'published_at', 'url']
            }
        },
        template: function (results) {
            const time = parseTime(new Date(results.published_at), '{y}-{m}-{d}');
            return '' +
                '<a href="' + results.url + '" class="ghost-search-item">' +
                '<h2>' + results.title + '</h2>' +
                '<span>发布日期：' + time + '</span>' +
                '</a>';
        },
        on: {
            afterDisplay: function (result) {
                const mate = $('.search-meta');
                let text = mate.attr('data-no-results-text');
                text = text.replace('[results]', result.total);
                mate.text(text).show();
            }
        }
    });
    // 首页毒鸡汤
    $.ajax({
        type: 'get',
        url: 'https://v1.alapi.cn/api/soul',
        dataType: "json",
        success: function (response) {
            var text_content = response.data.title;
            $('#index_djt').text(text_content)
        }
    });
})
