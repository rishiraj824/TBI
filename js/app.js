(function()
{
	var app=angular
	.module('tbi',['ngAnimate']);
	app.controller('tbiController', function(){
		this.tab = 1;
		this.selectTab = function(setTab) {
			this.tab = setTab;
		};
		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};
	});

	app.controller('navController', function(){
		this.tab = 0;
		this.selectTab = function(setTab) {
			if(this.tab==setTab)
				this.tab = 0;
			else
				this.tab=setTab;
		};
		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};
	});

})();