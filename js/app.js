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
/*app.config(function($stateProvider, $urlRouterProvider) {
	    
	    $urlRouterProvider.otherwise('/home');
	    
	    $stateProvider
	        
	        // HOME STATES AND NESTED VIEWS ========================================
	        .state('home', {
	            url: '/home',
	            templateUrl: 'partial-home.html'
	        })
	        
	        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
	        .state('about', {
	            // we'll get to this in a bit       
	});*/