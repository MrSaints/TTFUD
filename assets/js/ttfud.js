var player = null;
var playerID = 'ttfud-player';
var playedVideos = [];
var videos = [
    'ihpG_NJ_T1g',
    'oI6uYJrIqaw',
    '7QLSRMoKKS0',
    'Fc1P-AEaEp8',
    'gqZOqxk_xtI',
    'nFAK8Vj62WM',
    'hpigjnKl7nI',
    'dgKGixi8bp8',
    'phnv3qwZKAo',
    'CdIT74L8hGI',
    'loWFypHb48k',
    'Wuc_zrg79IE',
    'Qs4iup1pj1o',
    '_X6VoFBCE9k',
    'blpe_sGnnP4',
    'isP5srWOz0c',
    'bSwdsCxvcLs',
    '_gR-e73EUbM',
    'SxHVhxbtrhY',
    'GEM3TNsxIQw',
    '4IzH1eURCjU',
    'zBJU9ndpH1Q',
    '1ZGnwfFHBGs',
    'G7RgN9ijwE4',
    'lqj-QNYsZFk',
    '-R7-cmOQDYs',
    'eqsAvKqqf2g',
    'DTZ2UGHLwu8',
    'bPWZ7ASnhiE',
    'K5tVbVu9Mkg',
    'jlSF0dtDRD8',
    'MiLszBaY7IU',
    'KZ6rJ-ra8zg',
    '5MRD273dz_8',
    'oLnB4UVNoUQ',
    'FzRH3iTQPrk',
    'Hc6J5rlKhIc',
    '6Y3fmsULu_U',
    '5cEL5mq-OOA',
    'n0rsrKfBfBw',
    'rY8DSFZ08JQ',
    'e6gqGRZI4nk',
    '3HrKTFTDLxA',
    'QYZfcFzcwxo',
    'EILbEFoqtm8',
    'Ej8EaLF382c',
    'X1q3zwYx_R0',
    'TWXZy2dOuBc',
    'A_DaizJnnJQ',
    '2RVZvUJDTUE'
]

var params = { allowScriptAccess: "always" };
var atts = { id: playerID };
swfobject.embedSWF("http://www.youtube.com/apiplayer?enablejsapi=1&version=3&playerapiid=" + playerID,
                   "js-swfobject", $(window).width(), $(window).height(), "8", null, null, params, atts);

var overlay = $('.overlay-wrapper');

function onYouTubePlayerReady (id) {
    player = player || document.getElementById(id);
    player.addEventListener("onStateChange", "onPlayerStateChange");
    player.addEventListener("onError", "onPlayerError");
    playRandom(id);
}

function onPlayerStateChange (newState) {
    if (newState === 0)
        overlay.fadeIn();
}

function onPlayerError (type) {
    console.log(type);
    playRandom(playerID);
}

function playRandom (id) {
    lastVideo = _.chain(videos)
                .reject(function (i) {
                    return _.indexOf(playedVideos, i) !== -1;
                })
                .sample()
                .value();

    playedVideos.push(lastVideo);

    if (videos.length === playedVideos.length)
        playedVideos = [];

    player = player || document.getElementById(id);
    player.cueVideoById(lastVideo);
    player.playVideo();
}

(function ($) {
    overlay.click(function () {
        playRandom(playerID);
        overlay.fadeOut();
    });

    $(window).smartresize(function () {
        $('#ttfud-player').width($(window).width()).height($(window).height());
    });
}(jQuery));