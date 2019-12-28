export default {
    makeId,
    getTime
};

function makeId(length = 4) {
    var text = '';
    var possible =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}

function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  function getTime(){
    var now = new Date();
    var h = now.getHours();
    var m = now.getMinutes();
    m = checkTime(m);
    var time = h+":"+m;
    return time;
  }