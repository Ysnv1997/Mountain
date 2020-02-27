$(document).ready(function() { 
    function colorfulImg(imgEl){
        var blockSize = 5, // only visit every 5 pixels
            defaultRGB = {r:0,g:0,b:0}, // for non-supporting envs
            canvas = document.createElement('canvas'),
            context = canvas.getContext && canvas.getContext('2d'),
            data, width, height,
            i = -4,
            length,
            rgb = {r:0,g:0,b:0},
            count = 0
        
        if (!context) {
            return defaultRGB;
        }
        height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
        width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;
        context.drawImage(imgEl, 0, 0);
        try {
            data = context.getImageData(0, 0, width, height);
        } catch(e) {
            alert('security error, img on diff domain');
            return defaultRGB;
        }
        length = data.data.length;
        while ( (i += blockSize * 4) < length ) {
            ++count;
            rgb.r += data.data[i];
            rgb.g += data.data[i+1];
            rgb.b += data.data[i+2];
        }
        // ~~ used to floor values
        rgb.r = ~~(rgb.r/count);
        rgb.g = ~~(rgb.g/count);
        rgb.b = ~~(rgb.b/count);
        return rgb;
    }
    // 根据图片替换网站颜色
    function public_bg_color() { 
        var full_img = document.getElementById('full_img');
        if(full_img){
            var full_rgb = colorfulImg(full_img),
            rgb = 'rgb('+full_rgb.r+','+full_rgb.g+','+full_rgb.b+')',
            p = 15,
            rgbp = 'rgb('+full_rgb.r+p+','+full_rgb.g+p+','+full_rgb.b+p+')',
            
            linear_gradient = "linear-gradient(135deg, "+rgb+" 0%, "+rgbp+" 100%)"
            $('body').css("background",linear_gradient);
        }
     }
     public_bg_color();


    //  重载导航因为pjax失焦事件
     function nav_click_active() { 
         var nav_li = $('#navbar-nav li')
            nav_li.on('click',function () { 
                nav_li.each(function () { 
                    $(this).removeClass('active');
                 })
                $(this).addClass('active')
             })
      }
      
    // pjax配置
    // $(document).pjax('a[target!=_blank]', '#pjax-container', {fragment:'#pjax-container', timeout:6000});    
    // $(document).on('pjax:send', function() {
    //     nav_click_active()
    //   });
    // $(document).on('pjax:end', function() {
    //     public_bg_color();
    //   });
    

 })