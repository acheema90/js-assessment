exports = (typeof window === 'undefined') ? global : window;

exports.modulesAnswers = {
  createModule : function(str1, str2) {
  	var greeting=str1;
  	var name=str2;
  	return{
      greeting:greeting,
      name:name,
  		sayIt: function (){
        return this.greeting+', '+this.name;
      } 
  	};
  }
};