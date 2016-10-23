var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';

	locals.whatIDo = [
		// {
		// 	title: 'Product Definition',
		// 	image: 'product-definition.jpg',
		// 	description: `<p>Turning a bright idea into a real product is not an easy task, it requires a diligent effort 
		// 	in order to translate all the business logic needs into technical features.</p>
		// 	<p>Define a product implies the discovery of features as well as to know how to translate those features in
		// 	technological tools.</p>
		// 	<p>Through my yeas of experience as consultant in different companies and as freelance, I have helped to turn 
		// 	bright ideas into real and profitable products for different industries such health care, domotics, 
		// 	automotive and commerce.</p>`
		// },
		{
			title: 'Technical Management',
			image: 'technical-management.jpg',
			description: `<p>Everything in the universe tends entropy, specially Software related projects because its
			nature of being in constant change due internal design or changes in the market that targets to reach.</p>
			<p>Taking a project up to become a real and valuable product requires a persevering Technical Management that 
			takes cares of the technical architecture and quality at the same time that it keeps it sights on the 
			product's goals and targets.</p>
			<p>As Technical Manager I've participated leading projects aiming to meet both technical and business
			requirements.</p>`
		},
		{
			title: 'Software Architecture/Design',
			image: 'architectural-design.jpg',
			description: `<p>Did you say "microservices" or "Web components"?</p>
			<p>Turn a list of requirements and specifications into a reliable and valuable product requires
			an exhaustive and intelligent design in order to achieve quality, scalability, maintainability and stability.</p>
			<p>During the last years I've been involved in the passionate task of designing Software applications and 
			platforms helping products to become into valuable products.</p>`
		},
		{
			title: 'Software Engineering',
			image: 'software-development.jpg',
			description: `<p>A software developer begins a project by coding first, a software engineer begins by 
			designing first.</p>
			<p>Design patterns, standards, conventions, unit testing are just few of the targets of every decent
			Software Engineer.</p>
			<p>With five years of experience as Software Engineer I've participated in multiple projects of diverse 
			architectures and platforms such as EMR (Electronic Medical Records), ERP (Enterprise Resource Planning), 
			CRM (Customer Relationship Management), CMS (Content Management System) Etc.</p>`
		},
		{
			title: 'Hybrid Mobile Development',
			image: 'mobile-development.jpg',
			description: `<p>With the increasing demand of mobile applications and the raise of new and more efficient 
			Frontend technologies, hybrid mobile applications are taking the stage of mobile development.</p>
			<p>An hybrid mobile application allows to achieve presence in mobile platforms in record times with proven
			performance and qualify by developing once and deploying in multiple platforms.</p>
			<p>During the last five years I've been developing mobile applications for iOS and Android platforms for
			multiple purposes such as SaaS (Software as a Service) platforms and hardware connectivity (Internet of Things projects).</p>`
		},
		{
			title: 'Fight Crime at Nights',
			image: 'fight-crime.jpg',
			description: `<p>And why not? After all listed above, why not also be taking some free time at nights to fight crime from
			the streets under the name of "El gato justiciero".</p>
			<p>A Software Engineer during the day... A fighter of justice at nights.</p>`
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
