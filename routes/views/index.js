var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';

	locals.whatIDo = [
		{
			title: 'Product Definition',
			image: 'product-definition.jpg',
			description: `Defining`
		},
		{
			title: 'Technical Management',
			image: 'technical-management.jpg',
			description: `Defining`
		},
		{
			title: 'Software Architecture/Design',
			image: 'architectural-design.jpg',
			description: `Defining`
		},
		{
			title: 'Software/Web Development',
			image: 'software-development.jpg',
			description: `Defining`
		},
		{
			title: 'Hybrid Mobile Development',
			image: 'mobile-development.jpg',
			description: `Defining`
		},
		{
			title: 'Fight Crime at Nights',
			image: 'fight-crime.jpg',
			description: `Defining`
		},
	];

	locals.projects = [
		{
			name: 'Backlog',
			items: [
				{
					name: 'Jupiter API',
					description: `REST API platform to serve multiple mobile and hardware clients to be integrated as an enterprise ERP system.`,
					stack: 'Related technologies: Node.js, express.js, Ionic Framework, AngularJS, Arduino',
				},
				{
					name: 'Greenhousify IoT',
					description: `IoT project to monitor and control domestic greenhouses.`,
					stack: 'Related technologies: Node.js, MQTT, Arduino, Ionic Framework',
				},
			]
		},
		{
			name: 'In Progress',
			items: [
				{
					name: 'GC Orders',
					description: `Platform and mobile application that enables sales department to easily capture and centralize orders from customers through a REST API platform.`,
					stack: 'Related technologies: Node.js, express.js, Ionic Framework, AngularJS, Heroku.',
				},
				{
					name: 'GC Orders Mobile',
					description: `Hybrid mobile application to perform as client of GC Orders.`,
					stack: 'Related technologies: Ionic Framework, ES6',
				},
			]
		},
		{
			name: 'Done',
			items: [
				{
					name: 'Cosmos IoT Prototype',
					description: `IoT end-to-end system for home/office automation, supervision and data acquisition of devices such as HVAC controls, lights and access control using MQTT protocol, Web/Mobile applications as integrating layer.`,
					stack: 'Related technologies: Node.js, Ionic Framework, Bluetooth, Raspberry Pi, Arduino.',
				},
				{
					name: 'Ritty',
					description: `Web enterprise application based on Node.js with expressJS and AngularJS as a Single Page Application with Angular Material Design to fit Google’s Material Design guidelines. In this project, backend’s business logic is served as RESTful API for Software As A Service architecture.`,
					stack: 'Related technologies: JavaScript, AngularJS, Angular Material Design, Node.js, Express.js, mocha.js, MySQL, Stylus, Grunt, Bower, npm.',
				},
				{
					name: 'Mantis UI v3',
					description: `New version from scratch. This new brand version was developed using Angular 2 with TypeScript to meet business logic requirements`,
					stack: 'Related technologies: Angular2, AngularJS, Node.js, TypeScript, RabbitMQ.',
				},
				{
					name: 'Mantis UI v2',
					description: `Platform application based in a legacy code using raw PHP Zend Framework. A major refactor work was required as a Single Page Application with a REST API backend using AngularJS and NodeJS`,
					stack: 'Related technologies: AngularJS, Node.js, PHP, Zend Framework, jQuery UI.',
				},
				{
					name: 'Vivint Skydome simulator',
					description: `Participating as software engineer in development of mobile application simulator of domotics/surveillance panel (for Android and iOS). The application has been developed as a simulator/demo to introduce new customers with the real device UI and functionalities.`,
					stack: 'Related technologies: Apache Cordova, JavaScript, jQuery UI, Android/iOS SDK.',
				},
			]
		},
	];

	// Render the view
	view.render('index');
};
