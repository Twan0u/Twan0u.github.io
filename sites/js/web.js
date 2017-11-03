var app = angular.module("myApp", ['ngRoute']); 

// Define all global informations that the website will use.
app.controller("globalCtrl", function($scope) {
	$scope.webTab = "Freelance - web";//here
	$scope.businessName="Antoine Lambert"//here
	$scope.year="2017"//here
});

app.controller("menuCtrl", function($scope) {
    $scope.tabs = [
		{title:"Home",link:"#/!"},//here
        {title:"Blog",link:"#!blog1"},
		{title: "About",link:"#!about"},//here
        {title:"Contact",link:"#!contact"},//here
		{title: "FAQ",link:"#!faq"}//here
	];
});

app.config(['$routeProvider',function($routeProvider){
	$routeProvider
		.when('/',{templateUrl:'partials/home.html', controller:"homeCtrl"})
        .when('/blog1',{templateUrl:'partials/blog1.html', controller:"blog1Ctrl"})
        .when('/faq',{templateUrl:'partials/faq.html', controller:"faqCtrl"})
		.when('/about',{templateUrl:'partials/about.html', controller:"aboutCtrl"})
        .when('/contact',{templateUrl:'partials/contact.html', controller:"contactCtrl"})
		.otherwise({templateUrl:'partials/404.html'});
}]);

app.controller("homeCtrl", function($scope) {
	$scope.home={	img:"img/home.jpg",
			header:"Pourquoi choisir un Webmaster Freelance ?"}
    $scope.cards=[	{ico:"thumbs-up", title:"Facile", btn:"En apprendre plus", link:"#!", body:"Créer un site est était jusqu'à aujourd'hui une tache longue et difficile. Cette époque est maintenant révolue."},
			        {ico:"bolt", title:"Rapide", btn:"En apprendre plus", link:"#!", body:"Une ébauche de votre site sous 48h"},
                    {ico:"coffee", title:"Prix", btn:"En apprendre plus", link:"#!", body:"Offrez vous un site complet pour le prix de 2 cafés par mois"},
                    {ico:"cogs", title:"Maintenance", btn:"En apprendre plus", link:"#!", body:"La maintenance est gratuite pour toute intervention de moins de 1h"},
                    {ico:"graduation-cap", title:"SEO", btn:"En apprendre plus", link:"#!", body:"Le meilleur endroit pour cacher un cadavre est la deuxième page des recherches google car personne n'y va jamais. c'est pourquoi le référencement est une chose essentielle pour votre site et votre business"}
			    ];
	$scope.folioheading="Powered by"
	$scope.folio=[
			{img:"data:image/png;base64,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", link:"https://aws.amazon.com/"},
			{img:"data:image/png;base64,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", link:"https://www.ovh.com/be/"}
	];

	$scope.features={header:"FEATURES",textup:"Lorem ipsum dolor sit admet",list:["feature1","feature 2"],textdown:"Lorem ipsum dolor sit admet", img:"http://placehold.it/700x450"}
	$scope.hide={img:false, title:false, marketing:false, folio:false, features:true};
});

app.controller("aboutCtrl", function($scope) {
	$scope.presentation={img:"http://placehold.it/750x450",title:"TITLE"};
	$scope.paragraphs=[
		{text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptate nihil eum consectetur similique? Consectetur, quod, incidunt, harum nisi dolores delectus reprehenderit voluptatem perferendis dicta dolorem non blanditiis ex fugiat."},
		{text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, magni, aperiam vitae illum voluptatum aut sequi impedit non velit ab ea pariatur sint quidem corporis eveniet. Odit, temporibus reprehenderit dolorum!"},
		{text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti eum ratione ex ea praesentium quibusdam? Aut, in eum facere corrupti necessitatibus perspiciatis quis?"}];
	$scope.title2="OUR TEAM";
	$scope.team=[
		{ name:"Antoine Lambert", img:"http://placehold.it/750x450", jobtitle:"developper", bio:"Jeune étudiant en informatique",facebook:"#",linkedin:"#",twitter:"#",},
	]; 
	$scope.customerstitle="OUR CUSTOMERS";
	$scope.customers=[	{img:"http://placehold.it/500x300"},
				{img:"http://placehold.it/500x300"},
				{img:"http://placehold.it/500x300"}
	];
	$scope.hide={presentation:false, team:false, customers:false};
});

app.controller("contactCtrl", function($scope) {
    $scope.details={title:"Contact Details", part1:"3481 Melrose Place", part2:"Beverly Hills, CA 90210"};
    $scope.mail="ant.lamb.al@gmail.com";
    $scope.tel="0032498194975";
    $scope.time="Monday - Friday: 9:00 AM to 5:00 PM";
    $scope.facebook="#";
    $scope.google="#";
    $scope.linkedin="#";
    $scope.twitter="#";
});

app.controller("faqCtrl", function($scope) {
	$scope.title="FAQ";
	$scope.subtitle="Frequently asked questions";
	$scope.questions=[
		{id:"0", q:"Does it work ?",r:"yes"},
        {id:"1",q:"Is it easy",r:"yes"},
		{id:"2",q:"why it's so easy?",r:"Beaucause i'm a genius"}
		];
});

app.controller("blog1Ctrl", function($scope) {
	$scope.title="title";
	$scope.subtitle="subtitle";
	$scope.subtitleCat="Blog Categories";
	$scope.category=[
        {link:"#", name:"category"},
        {link:"#", name:"category"},
        {link:"#", name:"category"},
        {link:"#", name:"category"},
        {link:"#", name:"category"},
        {link:"#", name:"category"},
        {link:"#", name:"category"},
        {link:"#", name:"category"}


    ];
	$scope.side={title:"Hello",text:"welcome on this new blog version"};
	$scope.blogPosts=[
		{title:"Post Title", link:"http://www.google.com", date:"August 30, 2017 at 08:51 PM",
			authorName:"Antoine Lambert", authorLink:"http://www.google.com",
			img:"http://placehold.it/900x300", btn:"Read More",
			descript:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, veritatis, tempora, necessitatibus inventore nisi quam quia repellat ut tempore laborum possimus eum dicta id animi corrupti debitis ipsum officiis rerum."
		},
        {title:"Post Title2", link:"http://www.google.com", date:"August 31, 2017 at 08:51 PM",
            authorName:"BOB", authorLink:"http://www.google.com",
            img:"http://placehold.it/900x300", btn:"Read More",
            descript:"Coucou, je suis du texte en commentaire"
        },
	 {title:"Post Title2", link:"http://www.google.com", date:"August 31, 2017 at 08:51 PM",
            authorName:"BOB", authorLink:"http://www.google.com",
            img:"http://placehold.it/900x300", btn:"Read More",
            descript:"Coucou, je suis du texte en commentaire"
        }
			];

});

app.controller("blogPostCtrl", function($scope) {
    $scope.title="title";
    $scope.authorLink="#";
    $scope.authorName="Antoine Lambert";
    $scope.date="August 24, 2013 at 9:00 PM";
    $scope.img="http://placehold.it/900x300";
    $scope.alt="blank image"

    $scope.subtitle="subtitle";
    $scope.subtitleCat="Blog Categories";
    $scope.category=[
        {link:"#", name:"category"},
        {link:"#", name:"category"},
        {link:"#", name:"category"},
        {link:"#", name:"category"},
        {link:"#", name:"category"},
        {link:"#", name:"category"},
        {link:"#", name:"category"},
        {link:"#", name:"category"}


    ];
    $scope.side={title:"Hello",text:"welcome on this new blog version"};
    $scope.blogPosts=[
        {title:"Post Title", link:"http://www.google.com", date:"August 30, 2017 at 08:51 PM",
            authorName:"Antoine Lambert", authorLink:"http://www.google.com",
            img:"http://placehold.it/900x300", btn:"Read More",
            descript:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, veritatis, tempora, necessitatibus inventore nisi quam quia repellat ut tempore laborum possimus eum dicta id animi corrupti debitis ipsum officiis rerum."
        },
        {title:"Post Title2", link:"http://www.google.com", date:"August 31, 2017 at 08:51 PM",
            authorName:"BOB", authorLink:"http://www.google.com",
            img:"http://placehold.it/900x300", btn:"Read More",
            descript:"Coucou, je suis du texte en commentaire"
        }
    ];

});

