"use strict";
var config = {
    Valine: {
        appId: 'r5Ex9Rj9hflHjRACQWPk5DJT-gzGzoHsz', //Valine appId
        appKey: 'y7MryUHGzDTvyBGiWjkV6tyB', //Valine appKey
        notify: false, // 邮件提醒!!! 默认为 false，启动请参考：https://github.com/xCss/Valine/wiki/Valine-%E8%AF%84%E8%AE%BA%E7%B3%BB%E7%BB%9F%E4%B8%AD%E7%9A%84%E9%82%AE%E4%BB%B6%E6%8F%90%E9%86%92%E8%AE%BE%E7%BD%AE
        verify: false //是否开启评论验证码
    },
    GhostApi: '89c0265e233338dbc72e197be4'
}

$(document).ready(function() {
    function colorfulImg(imgEl) {
        var blockSize = 5, // only visit every 5 pixels
            canvas = document.createElement('canvas'),
            context = canvas.getContext && canvas.getContext('2d'),
            data, width, height,
            i = -4,
            length,
            rgb = { r: 0, g: 0, b: 0 },
            count = 0
        if (!context) {
            return false;
        }
        height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
        width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;
        context.drawImage(imgEl, 0, 0);
        try {
            data = context.getImageData(0, 0, width, height);
        } catch (e) {
            return false;
        }
        length = data.data.length;
        while ((i += blockSize * 4) < length) {
            ++count;
            rgb.r += data.data[i];
            rgb.g += data.data[i + 1];
            rgb.b += data.data[i + 2];
        }
        // ~~ used to floor values
        rgb.r = ~~(rgb.r / count);
        rgb.g = ~~(rgb.g / count);
        rgb.b = ~~(rgb.b / count);
        if (rgb.r == 0 && rgb.g == 0 && rgb.b == 0) return false;
        return rgb;
    }
    // 根据图片替换网站颜色
    var full_img = document.getElementById('full_img')
    if (full_img) {
        var full_rgb = colorfulImg(full_img)
        if (full_rgb) {
            var rgb = 'rgb(' + full_rgb.r + ',' + full_rgb.g + ',' + full_rgb.b + ')',
                p = 15,
                rgbp = 'rgb(' + full_rgb.r + p + ',' + full_rgb.g + p + ',' + full_rgb.b + p + ')',

                linear_gradient = "linear-gradient(135deg, " + rgb + " 0%, " + rgbp + " 100%)"
            $('body').css("background", linear_gradient);
        }
    }


    //  重载导航因为pjax失焦事件
    function nav_click_active() {
        var nav_li = $('#navbar-nav li')
        nav_li.on('click', function() {
            nav_li.each(function() {
                $(this).removeClass('active');
            })
            $(this).addClass('active')
        })
    }

    //   Valine配置
    new Valine({
        el: '#vcomment',
        appId: config.Valine.appId,
        appKey: config.Valine.appKey,
        placeholder: 'ヾﾉ≧∀≦)o来啊，快活啊!',
        notify: config.Valine.notify,
        verify: config.Valine.verify
    })



    //搜索配置

    // 初始化
    // eslint-disable-next-line no-undef
    new GhostSearch({
        host: [location.protocol, '//', location.host].join(''),
        version: 'v3',
        key: config.GhostApi,
        url: [location.protocol, '//', location.host].join(''),
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
        template: function(results) {
            const time = parseTime(new Date(results.published_at), '{y}-{m}-{d}');
            return '' +
                '<a href="' + results.url + '" class="ghost-search-item">' +
                '<h2>' + results.title + '</h2>' +
                '<span>发布日期：' + time + '</span>' +
                '</a>';
        },
        on: {
            afterDisplay: function(result) {
                const mate = $('.search-meta');
                let text = mate.attr('data-no-results-text');
                text = text.replace('[results]', result.total);
                mate.text(text).show();
            }
        }
    });

    // pjax配置
    // $(document).pjax('a[target!=_blank]', '#pjax-container', {fragment:'#pjax-container', timeout:6000});    
    // $(document).on('pjax:send', function() {
    //     nav_click_active()
    //   });
    // $(document).on('pjax:end', function() {
    //     public_bg_color();
    //   });


})