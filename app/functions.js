exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(null,arr);
  },

  speak : function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction : function(str) {
    return function(arg) {
      return str + ', ' + arg;
    };
  },

  makeClosures : function(arr, fn) {
    var foo=function(bar){
      return function(){return fn(bar);};
    };
    var result=[];
    for(var i=0;i<arr.length;i++){
      result.push(foo(arr[i]));
    }
    return result;
  },

  partial : function(fn, str1, str2) {
    return function(foo){
      return fn.call(null,str1,str2,foo);
    };
  },

  useArguments : function() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
  },

  callIt : function(fn) {
    var args = Array.prototype.slice.call(arguments, 1, arguments.length);
    fn.apply(null, args);
  },

  partialUsingArguments : function(fn) {
    var args = Array.prototype.slice.call(arguments, 1, arguments.length);
    return function() {
      var foo = args.concat(Array.prototype.slice.call(arguments));
      return fn.apply(null, foo);
    };
  },

  curryIt : function(fn) {

  }
};
