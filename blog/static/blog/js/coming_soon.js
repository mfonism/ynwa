// flipclock

$(function () {
    'use strict'

    $(document).ready(function() {
        var date = new Date(2020, 2, 29);
        var now = new Date();
        var diff = (date.getTime()/1000) - (now.getTime()/1000);

        var clock = $('#flipClock').FlipClock(diff, {
            clockFace: "DailyCounter",
            countdown: true
        });
    });
})
