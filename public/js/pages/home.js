$(document).ready(function () {

    $("body").css({
        "opacity": "1"
    });

    var tag = document.createElement('script');
    tag.id = 'iframe-demo';
    tag.src = 'https://www.youtube.com/iframe_api';
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    var player;

    function onYouTubeIframeAPIReady() {
        player = new YT.Player('youtube-iframe', {
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
    }

    function onPlayerReady(event) {

    }

    function changeBorderColor(playerStatus) {
        var color;
        if (playerStatus == -1) {
            color = "#37474F"; // unstarted = gray
        } else if (playerStatus == 0) {
            color = "#FFFF00"; // ended = yellow
        } else if (playerStatus == 1) {
            color = "#33691E"; // playing = green
        } else if (playerStatus == 2) {
            color = "#DD2C00"; // paused = red
        } else if (playerStatus == 3) {
            color = "#AA00FF"; // buffering = purple
        } else if (playerStatus == 5) {
            color = "#FF6DOO"; // video cued = orange
        }
        if (color) {
            document.getElementById('youtube-iframe').style.borderColor = color;
        }
    }

    function onPlayerStateChange(event) {
        changeBorderColor(event.data);
    }

    $('#btn-openModal').click(function () {
        $('#qMB_IntroVideo').fadeIn();
    });

    $('#btn-closeModal').click(function () {
        $('.youtubevideo').each(function () {
            this.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
        });
        $('#qMB_IntroVideo').fadeOut();
    });
})