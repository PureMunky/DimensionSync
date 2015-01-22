var AutoManager = (function () {
    var that = {},
        time = new Date();

    // Executes the communication plan.
    function writeSaying(saying, author) {
        document.getElementById('outSaying').innerText = saying;
        document.getElementById('outAuthor').innerText = author;

    }

    function intervalTick() {
        time = new Date();

        writeSaying(time, 'Synced');

        setTimeout(intervalTick, 100);
    }

    // Bestows wisdom.
    that.AdviseMe = function () {
        intervalTick();
    };

    return that;
}());
