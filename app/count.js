exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
  	var timeOut;
    function run () {
      console.log(start++);
      if (start <= end) {
        timeOut = setTimeout(run, 100);
      }
    }
    run();
    return {
      cancel : function () {
        timeOut && clearTimeout(timeOut);
      }
    };
  }
};
