(function()
{
	var app=angular
	.module('tbi',['ngAnimate', 'ui.router']);
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
		this.clicked = 0;
		this.currentPage = 0;
		this.selectPage = function(setPage) {
			this.currentPage = setPage;
		};
		this.selectTab = function(setTab) {
			if(this.tab==setTab && this.clicked==1)
				this.clicked = 0;
			else
				{
					this.tab=setTab;
					this.clicked = 1;
				}
		};
		this.isSelected = function(checkTab){
			return (this.tab === checkTab && this.clicked === 1);
		};
		this.onThisPage = function(checkPage){
			return (this.currentPage === checkPage&&this.clicked===0)|| (this.clicked === 1&&this.tab ===checkPage);
		};
	});
	
	app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	    
	    
	    
	    $urlRouterProvider.otherwise('/');
	        
	        // HOME STATES AND NESTED VIEWS ========================================
	        $stateProvider.state('home', {
	            url: '/',
	            templateUrl: 'templates/home.html'
	        })
	        
	        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
	        .state('about', {
	        	url: '/about',
	        	templateUrl: '/templates/about.html'
	            // we'll get to this in a bit       
	        })
	        .state('csrpartnership', {
	        	url: '/csrpartnership',
	        	templateUrl: '/templates/csrpartnership.html'
	            // we'll get to this in a bit       
	        })
	        .state('underincubation', {
	        	url: '/underincubation',
	        	templateUrl: '/templates/pui.html'
	            // we'll get to this in a bit       
	        })
	        .state('infrastructure', {
	        	url: '/infrastructure',
	        	templateUrl: '/templates/infrastructure.html'
	            // we'll get to this in a bit       
	        })
	        .state('funding', {
	        	url: '/funding',
	        	templateUrl: '/templates/funding.html'
	            // we'll get to this in a bit       
	        })
	        .state('mentoring', {
	        	url: '/mentoring',
	        	templateUrl: '/templates/mentoring.html'
	            // we'll get to this in a bit       
	        })
	        .state('projects', {
	        	url: '/projects',
	        	templateUrl: '/templates/projects.html'
	            // we'll get to this in a bit       
	        })
	        .state('training', {
	        	url: '/training',
	        	templateUrl: '/templates/training.html'
	            // we'll get to this in a bit       
	        })
	        .state('taxexemption', {
	        	url: '/taxexemption',
	        	templateUrl: '/templates/servicetax.html'
	            // we'll get to this in a bit       
	        })
	        .state('events', {
	        	url: '/events',
	        	templateUrl: '/templates/events.html'
	            // we'll get to this in a bit       
	        })
	        .state('apply', {
	        	url: '/apply',
	        	templateUrl: '/templates/apply.html'
	            // we'll get to this in a bit       
	        })
	        .state('talent', {
	        	url: '/talent',
	        	templateUrl: '/templates/talent.html'
	            // we'll get to this in a bit       
	        })
	        .state('graduated', {
	        	url: '/graduated',
	        	templateUrl: '/templates/gs.html'
	            // we'll get to this in a bit       
	        })
	        .state('anchorcompanies', {
	        	url: '/anchorcompanies',
	        	templateUrl: '/templates/ac.html'
	            // we'll get to this in a bit       
	        })
	        .state('landingsupport', {
	        	url: '/landingsupport',
	        	templateUrl: '/templates/softlanding.html'
	            // we'll get to this in a bit       
	        })
	        .state('iprcell', {
	        	url: '/iprcell',
	        	templateUrl: '/templates/ipr.html'
	            // we'll get to this in a bit       
	        });
	}]);
	app.controller('panelController',function(){
		this.tab=1;
		this.selectTab = function(setTab) {
			this.tab = setTab;
		};
		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};


	});	
	app.controller('puiController',function(){
		this.tab=1;
		this.selectTab = function(setTab) {
			this.tab = setTab;
		};
		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};
	});

})();
