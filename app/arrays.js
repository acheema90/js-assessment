exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        return i;
      }
    }
    return -1;
  },

  sum : function(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  },

  remove : function(arr, item) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] !== item) {
        result.push(arr[i]);
      }
    }

    return result;
  },

  removeWithoutCopy : function(arr, item) {
    var len=arr.length;
    for (var i = 0; i < len; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i = i - 1;
        len = len - 1;
      }
    }
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift(arr);
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    arr.splice(index,0,item);
    return arr;
  },

  count : function(arr, item) {
    var count=0;
    for(var i=0;i<arr.length;i++){
      if(arr[i]===item){
        count++;
      }
    }
    return count;
  },

  duplicates : function(arr) {

  },

  square : function(arr) {
    var result=[];
    for(var i=0;i<arr.length;i++){
      result.push(arr[i]*arr[i]);
    }
    return result;
  },

  findAllOccurrences : function(arr, target) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        result.push(i);
      }
    }
    return result;
  }
};
