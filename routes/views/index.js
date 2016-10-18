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
					name: 'Jupiter API',
					description: `REST API platform to serve multiple mobile and hardware clients to be integrated as an enterprise ERP system.`,
					stack: 'Related technologies: Node.js, express.js, Ionic Framework, AngularJS, Arduino',
				},
			]
		},
		{
			name: 'In Progress',
			items: [
				{
					name: 'API',
					description: `REST API platform to serve multiple mobile and hardware clients to be integrated as an enterprise ERP system.`,
					stack: 'Related technologies: Node.js, express.js, Ionic Framework, AngularJS, Arduino',
				},
			]
		},
		{
			name: 'Done',
			items: [
				{
					name: 'Jupiter API',
					description: `REST API platform to serve multiple mobile and hardware clients to be integrated as an enterprise ERP system.`,
					stack: 'Related technologies: Node.js, express.js, Ionic Framework, AngularJS, Arduino',
				},
			]
		},
	];

	// Render the view
	view.render('index');
};
