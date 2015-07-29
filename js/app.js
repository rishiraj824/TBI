(function()
{
	var app=angular
	.module('tbi',[]);
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
	app.controller('MainCtrl', function($scope) {
	  $scope.show1 = false;
	  $scope.show2 = false;
	  $scope.show3 = false;
	});


})();