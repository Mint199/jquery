
$(document)['ready'](function () {
        $('#change2')['html']('<a href="http://blogger1dev.blogspot.com" rel="dofollow" target="_blank">مطور بلوجر</a>');
        setInterval(function () {
                if (!$('#change2:visible')['length']) {
                  window['location']['href'] = 'http://blogger1dev.blogspot.com';
                };
            }, 3000);
    });
