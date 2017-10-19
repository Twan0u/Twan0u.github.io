var app = angular.module("myApp", ['ngRoute']); 

// Define all global informations that the website will use.
app.controller("globalCtrl", function($scope) {
	$scope.webTab = "Antoine Lambert";//here
	$scope.businessName="Antoine Lambert - Photographe"//here
	$scope.year="2017"//here
});

app.controller("menuCtrl", function($scope) {
    	$scope.tabs = [
		{title:"Home",link:"#/"},
		{title: "Portraits",link:"#/portrait"},
		{title: "Photographie Sportive",link:"#/sport"}//here
	];

});

app.config(['$routeProvider',function($routeProvider){
	$routeProvider
		.when('/',{templateUrl:'partials/home.html'})
		.when('/portrait',{templateUrl:'partials/portrait.html'})
		.when('/sport',{templateUrl:'partials/sport.html'})
		.when('/404',{templateUrl:'partials/404.html'})
		.otherwise({redirectTo:'/404'});
}]);

