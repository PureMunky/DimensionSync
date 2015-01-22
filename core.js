var DimSync = (function () {
    var that = {},
        time = new Date();

    // Executes the communication plan.
    function writeSaying(saying, author) {
        document.getElementById('outSaying').innerText = saying;
        document.getElementById('outAuthor').innerText = author;
    }

    function formatTime(time) {
        var pad = '000',
            mili = '' + time.getMilliseconds();

        return time.getFullYear()
            + '/'
            + (time.getMonth() + 1)
            + '/'
            + time.getDate()
            + ' '
            + time.getHours()
            + ':'
            + time.getMinutes()
            + ':'
            + time.getSeconds()
            + '.'
            + pad.substring(0, pad.length - mili.length) + mili;
    }

    function intervalTick() {
        time = new Date();

        writeSaying(formatTime(time), 'Synced');

        setTimeout(intervalTick, 10);
    }

    // Bestows wisdom.
    that.AdviseMe = function () {
        intervalTick();
    };

    that.Init = function () {
        intervalTick();
    }

    return that;
}());
