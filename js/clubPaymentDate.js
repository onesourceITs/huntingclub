function htmlHeadingTwo() {
    var heading = document.createElement('h2');
    heading.setAttribute('class', 'text-white');
    heading.innerHTML = 'The Due Date Ended.';

    return heading;
}

var countDownTo = new Date("2020-04-30T13:00:00").getTime();

var handleCount = setInterval(function () {
    var now = new Date().getTime();
    var timeleft = countDownTo - now;
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    var showCount = `${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds  until offer expires!`;
    document.getElementById('placeCountDown').innerHTML = showCount;

    if (timeleft < 0) {
        clearInterval(handleCount);
        document.getElementById('placeCountDown').appendChild(htmlHeadingTwo())
    }

}, 1000);