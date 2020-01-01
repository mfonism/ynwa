// flipclock

$(function () {
    'use strict'

    $(document).ready(function() {
        var launch_date = new Date(2020, 1, 29);
        var now = new Date();
        var diff = (launch_date.getTime()/1000) - (now.getTime()/1000);

        var clock = $('#flipClock').FlipClock(diff, {
            clockFace: "DailyCounter",
            countdown: true
        });
    });
})
