module.exports = [
	{
		firstName: "Remy",
		lastName: "Carpinito",
		name: "Remy Carpinito",
		email: "remy@snhu.edu",
		schoolInfo: {
			schoolId: 0, 
			major: "Computer Science", 
			minor: "Spanish", 
			grad: "2011", 
			degree: "Bachelor of Science"
		},
		mentor: true,
		avatarUrl: "https://www.filepicker.io/api/file/hDvuYs7eSNKDdWDwy4Mr",
		backgroundUrl: "http://www.bostonlogic.com/wp-content/uploads/2015/03/photodune-2705436-boston-waterfront-m1.jpg",
		name: "Remy Carpinito",
		schools: [
			{name: "Suffolk University", year: "2014", major: "Entrepreneurship", minor: "Spanish", degree: "Bachelor of Arts"},
			{name: "Emerson College", year: "2015", major: "Finance", degree: "Graduate Degree"}
		],
		experience: [
			{company: "CampusTap", startYear: "2014", position: "CEO"},
			{company: "Fidelity", startYear: "2013", endYear: "2014", position: "Systems Analyst Intern"},
		],
		city: "Reading",
		state: "MA",
		description: "I am a Senior at CampusTap University and I am candidate for a Bachelor of Science degree in Economics-Finance with a minor in Computer Information Systems. I have an interest in finance, wealth management and asset management. I am involved with the CampusTap Investment Group and the club hockey team. I am looking for advice on applying to full time investment banking positions post graduation.",
		bestAdvice: "Shoreditch yr taxidermy, retro kale chips roof party lumbersexual normcore bicycle rights selvage brooklyn neutra +1 williamsburg street art. Synth humblebrag vegan squid tote bag, neutra next level gluten-free +1 seitan tilde viral microdosing tofu tacos.",
		triumphs: ["Founded company at age 19", "Named Boston's Top 20 Under 20", "Graduated College at age 16"],
		tags: [
			{label: "boston", match: true}, 
			{label: "history", match: false}, 
			{label: "wellness", match: false}, 
			{label: "dance", match: false}, 
			{label: "technology", match: true}, 
			{label: "running", match: true}, 
			{label: "biotechnology", match: false}, 
			{label: "business", match: true}, 
			{label: "data", match: false}, 
			{label: "research", match: true}, 
			{label: "jazz", match: false}, 
			{label: "engineering", match: true}, 
			{label: "health", match: true}
		],
		areasOfExpertise: ["Resume Reviews", "Informational Interviews", "General Career Advice"],
		currentStatus: "CEO of CampusTap",
		timeline: [
			{
				type: "post", 
				posted: "1d", 
				content: "Hello everyone! I am a Corporate Finance and Accounting major, class of 2017. I am looking for mentors within the tech space, as I am trying to launch and app and am in need of someone with a background in app development to help me out. If you, or someone you know is an experienced developer/coder please ask me for contact information and I would be more than happy to share that with you.",
				favoriteCount: 13,
				commentCount: 3,
				comments: [
					{name: "Jackie Judy", avatarUrl: "https://randomuser.me/api/portraits/med/women/53.jpg", posted: "5d", content: "Hello everyone! I am a Corporate Finance and Accounting major, class of 2017. I am looking for mentors within the tech space, as I am trying to launch and app and am in need of someone with a background in app development to help me out."},
					{name: "John Judy", avatarUrl: "https://randomuser.me/api/portraits/med/men/53.jpg", posted: "3d", content: "Hello everyone! I am a Corporate Finance and Accounting major, class of 2017."},
					{name: "Jake Doe", avatarUrl: "https://randomuser.me/api/portraits/med/men/43.jpg", posted: "1d", content: "Great post."},
				],
			},
			{
				type: "comment",
				posted: "3d",
				content: "Hello everyone! I am a Corporate Finance and Accounting major, class of 2017. I am looking for mentors within the tech space, as I am trying to launch and app and am in need of someone with a background in app development to help me out. If you, or someone you know is an experienced developer/coder please ask me for contact information and I would be more than happy to share that with you."
			},
			{
				type: "post", 
				posted: "5d", 
				content: "https://www.youtube.com/embed/zNdkrtfZP8I",
				favoriteCount: 3,
				commentCount: 0,
				comments: [
					{name: "Jackie Judy", avatarUrl: "https://randomuser.me/api/portraits/med/women/53.jpg", posted: "5d", content: "Hello everyone! I am a Corporate Finance and Accounting major, class of 2017. I am looking for mentors within the tech space, as I am trying to launch and app and am in need of someone with a background in app development to help me out."},
					{name: "John Judy", avatarUrl: "https://randomuser.me/api/portraits/med/men/53.jpg", posted: "3d", content: "Hello everyone! I am a Corporate Finance and Accounting major, class of 2017."},
					{name: "Jake Doe", avatarUrl: "https://randomuser.me/api/portraits/med/men/43.jpg", posted: "1d", content: "Great post."},
				],
			},
		],
		documents: [
			{
				title: "Remy Carpinito's Resume",
				type: "resume",
				uploadedDate: "6/15/16",
				image: "https://s3-us-west-1.amazonaws.com/ctap-testing/resume.jpg",
				description: "Hello everyone! I am a Corporate Finance and Accounting major, class of 2017. I am looking for mentors within the tech space, as I am trying to launch and app and am in need of someone with a background in app development to help me out. If you, or someone you know is an experienced developer/coder please ask me for contact information and I would be more than happy to share that with you.",
				document: "/path/to/doc.pdf"
			},
			{
				title: "Remy Carpinito's Cover Letter",
				type: "cover-letter",
				uploadedDate: "6/15/16",
				image: "https://s3-us-west-1.amazonaws.com/ctap-testing/coverLetter.jpg",
				description: "Hello everyone! I am a Corporate Finance and Accounting major, class of 2017. I am looking for mentors within the tech space, as I am trying to launch and app and am in need of someone with a background in app development to help me out. If you, or someone you know is an experienced developer/coder please ask me for contact information and I would be more than happy to share that with you.",
				document: "/path/to/doc.pdf"
			},
			{
				title: "Twitter Redesign Project",
				type: "project",
				uploadedDate: "5/12/16",
				image: "https://s3-us-west-1.amazonaws.com/ctap-testing/twitterredesign.png",
				description: "This is a project I made for CS 560 as my final project.",
				document: "/path/to/doc.pdf"
			},
			{
				title: "Connect4 Python Project",
				type: "project",
				uploadedDate: "5/21/16",
				image: "https://nulogy.com/wp-content/uploads/2014/11/javascript-function-redux-es6-2.jpg",
				description: "This is a project I made for CS 587. It is a working Connect4 game made in Python.",
				document: "/path/to/doc.pdf"
			},
			{
				title: "Digital Marketing Project",
				type: "other",
				uploadedDate: "4/11/16",
				image: "https://s3-us-west-1.amazonaws.com/ctap-testing/marketingthing.jpg",
				description: "This is my final digital marketing project for MKT 610.",
				document: "/path/to/doc.pdf"
			}
		],
		connections : [
			{id: 0, name: "John Doe", major: "Accounting", grad: "2010", image: "https://randomuser.me/api/portraits/med/men/83.jpg"},
			{id: 1, name: "Sam Smith", major: "Marketing", grad: "2015", image: "https://randomuser.me/api/portraits/med/men/53.jpg"},
			{id: 2, name: "Jim James", major: "Finance", grad: "2011", image: "https://randomuser.me/api/portraits/med/men/23.jpg"},
			{id: 3, name: "Sam Torrez", major: "International Relations", grad: "2012", image: "https://randomuser.me/api/portraits/med/women/53.jpg"},
			{id: 4, name: "James Jones", major: "Entrepreneurship", grad: "2015", image: "https://randomuser.me/api/portraits/med/men/93.jpg"},
			{id: 5, name: "Bob Barker", major: "Marketing", grad: "2017", image: "https://randomuser.me/api/portraits/med/men/13.jpg"},
			{id: 6, name: "Geno Smith", major: "Business Administration", grad: "2018", image: "https://randomuser.me/api/portraits/med/men/33.jpg"},
			{id: 7, name: "Jane Jones", major: "Entrepreneurship", grad: "2015", image: "https://randomuser.me/api/portraits/med/women/93.jpg"},
			{id: 8, name: "Bobby Barker", major: "Marketing", grad: "2017", image: "https://randomuser.me/api/portraits/med/women/13.jpg"},
			{id: 9, name: "Jennie Smith", major: "Business Administration", grad: "2018", image: "https://randomuser.me/api/portraits/med/women/33.jpg"},
		],
		groups : [
			{id: 0, name: "Accounting Majors", image: "http://cypresstxcpa.com/media/slider9/bookkeeping.png", members: 46},
			{id: 1, name: "Baseball Team", image: "http://dailybaseballdata.com/dbd/images/Baseball-Ball.ico", members: 16},
			{id: 2, name: "Marketing Club", image: "http://static1.squarespace.com/static/55e3cd18e4b06cf73ad26938/t/56f854c090634097447fd4c8/1459225399777/Online+Marketing+Santa+Barbara", members: 13},
			{id: 3, name: "LGBTQ Guidance", image: "https://s3.amazonaws.com/campustapstaging/2vi484CGQuCrlBUlQLdA_16e8b888982a4ac9833b78b1b6de55fd.png", members: 346},
			{id: 4, name: "Management 101", image: "https://s3.amazonaws.com/campustapstaging/YmYDZi2jTXe8iu9qhh09_cb71012be3614486a6bac85f286fa007.png", members: 41},
			{id: 5, name: "Alumni Job Openings", image: "https://s3.amazonaws.com/campustapstaging/GLNMD1XuSgWqVnMbwCNU_d8bead46b947463c89e6ad8e8c2231d7.png", members: 90},
			{id: 6, name: "Advertising Internships", image: "https://s3.amazonaws.com/campustapstaging/Pf5EayhISPKuwrp5Ml9y_5b0ae10bafe343e1b9bc1a7602cc9c9b.png", members: 46},
		],
	},
	{
		firstName: "Bill",
		lastName: "Walton",
		name: "Remy Carpinito",
		email: "remy@snhu.edu",
		schoolInfo: {
			schoolId: 0, 
			major: "Computer Science", 
			minor: "Spanish", 
			grad: "2011", 
			degree: "Bachelor of Science"
		},
		mentor: true,
		avatarUrl: "https://randomuser.me/api/portraits/men/84.jpg",
		backgroundUrl: "http://trunkweed.com/uploads/posts/images/359029-large-computer-wallpaper.jpg",
		name: "Remy Carpinito",
		schools: [
			{name: "Boston University", year: "2011", major: "Marketing", minor: "Spanish", degree: "Bachelor of Arts"},
			{name: "Emerson College", year: "2015", major: "Finance", degree: "Graduate Degree"}
		],
		experience: [
			{company: "Oracle", startYear: "2014", position: "VP of Marketing"},
			{company: "Fidelity", startYear: "2013", endYear: "2014", position: "Systems Analyst Intern"},
		],
		city: "South Boston",
		state: "MA",
		description: "I am a Senior at CampusTap University and I am candidate for a Bachelor of Science degree in Economics-Finance with a minor in Computer Information Systems. I have an interest in finance, wealth management and asset management. I am involved with the CampusTap Investment Group and the club hockey team. I am looking for advice on applying to full time investment banking positions post graduation.",
		bestAdvice: "Shoreditch yr taxidermy, retro kale chips roof party lumbersexual normcore bicycle rights selvage brooklyn neutra +1 williamsburg street art. Synth humblebrag vegan squid tote bag, neutra next level gluten-free +1 seitan tilde viral microdosing tofu tacos.",
		triumphs: ["Founded company at age 19", "Named Boston's Top 20 Under 20", "Graduated College at age 16"],
		tags: [
			{label: "boston", match: true}, 
			{label: "history", match: false}, 
			{label: "wellness", match: false}, 
			{label: "dance", match: false}, 
			{label: "technology", match: true}, 
			{label: "running", match: true}, 
			{label: "biotechnology", match: false}, 
			{label: "business", match: true}, 
			{label: "data", match: false}, 
			{label: "research", match: true}, 
			{label: "jazz", match: false}, 
			{label: "engineering", match: true}, 
			{label: "health", match: true}
		],
		areasOfExpertise: ["Resume Reviews", "Informational Interviews", "General Career Advice"],
		currentStatus: "CEO of CampusTap",
		timeline: [
			{
				type: "post", 
				posted: "1d", 
				content: "Hello everyone! I am a Corporate Finance and Accounting major, class of 2017. I am looking for mentors within the tech space, as I am trying to launch and app and am in need of someone with a background in app development to help me out. If you, or someone you know is an experienced developer/coder please ask me for contact information and I would be more than happy to share that with you.",
				favoriteCount: 13,
				commentCount: 3,
				comments: [
					{name: "Jackie Judy", avatarUrl: "https://randomuser.me/api/portraits/med/women/53.jpg", posted: "5d", content: "Hello everyone! I am a Corporate Finance and Accounting major, class of 2017. I am looking for mentors within the tech space, as I am trying to launch and app and am in need of someone with a background in app development to help me out."},
					{name: "John Judy", avatarUrl: "https://randomuser.me/api/portraits/med/men/53.jpg", posted: "3d", content: "Hello everyone! I am a Corporate Finance and Accounting major, class of 2017."},
					{name: "Jake Doe", avatarUrl: "https://randomuser.me/api/portraits/med/men/43.jpg", posted: "1d", content: "Great post."},
				],
			},
			{
				type: "comment",
				posted: "3d",
				content: "Hello everyone! I am a Corporate Finance and Accounting major, class of 2017. I am looking for mentors within the tech space, as I am trying to launch and app and am in need of someone with a background in app development to help me out. If you, or someone you know is an experienced developer/coder please ask me for contact information and I would be more than happy to share that with you."
			},
			{
				type: "post", 
				posted: "5d", 
				content: "https://www.youtube.com/embed/zNdkrtfZP8I",
				favoriteCount: 3,
				commentCount: 0,
				comments: [
					{name: "Jackie Judy", avatarUrl: "https://randomuser.me/api/portraits/med/women/53.jpg", posted: "5d", content: "Hello everyone! I am a Corporate Finance and Accounting major, class of 2017. I am looking for mentors within the tech space, as I am trying to launch and app and am in need of someone with a background in app development to help me out."},
					{name: "John Judy", avatarUrl: "https://randomuser.me/api/portraits/med/men/53.jpg", posted: "3d", content: "Hello everyone! I am a Corporate Finance and Accounting major, class of 2017."},
					{name: "Jake Doe", avatarUrl: "https://randomuser.me/api/portraits/med/men/43.jpg", posted: "1d", content: "Great post."},
				],
			},
		],
		documents: [
			{
				title: "Remy Carpinito's Resume",
				type: "resume",
				uploadedDate: "6/15/16",
				image: "https://s3-us-west-1.amazonaws.com/ctap-testing/resume.jpg",
				description: "Hello everyone! I am a Corporate Finance and Accounting major, class of 2017. I am looking for mentors within the tech space, as I am trying to launch and app and am in need of someone with a background in app development to help me out. If you, or someone you know is an experienced developer/coder please ask me for contact information and I would be more than happy to share that with you.",
				document: "/path/to/doc.pdf"
			},
			{
				title: "Remy Carpinito's Cover Letter",
				type: "cover-letter",
				uploadedDate: "6/15/16",
				image: "https://s3-us-west-1.amazonaws.com/ctap-testing/coverLetter.jpg",
				description: "Hello everyone! I am a Corporate Finance and Accounting major, class of 2017. I am looking for mentors within the tech space, as I am trying to launch and app and am in need of someone with a background in app development to help me out. If you, or someone you know is an experienced developer/coder please ask me for contact information and I would be more than happy to share that with you.",
				document: "/path/to/doc.pdf"
			},
			{
				title: "Twitter Redesign Project",
				type: "project",
				uploadedDate: "5/12/16",
				image: "https://s3-us-west-1.amazonaws.com/ctap-testing/twitterredesign.png",
				description: "This is a project I made for CS 560 as my final project.",
				document: "/path/to/doc.pdf"
			},
			{
				title: "Connect4 Python Project",
				type: "project",
				uploadedDate: "5/21/16",
				image: "https://nulogy.com/wp-content/uploads/2014/11/javascript-function-redux-es6-2.jpg",
				description: "This is a project I made for CS 587. It is a working Connect4 game made in Python.",
				document: "/path/to/doc.pdf"
			},
			{
				title: "Digital Marketing Project",
				type: "other",
				uploadedDate: "4/11/16",
				image: "https://s3-us-west-1.amazonaws.com/ctap-testing/marketingthing.jpg",
				description: "This is my final digital marketing project for MKT 610.",
				document: "/path/to/doc.pdf"
			}
		],
		connections : [
			{id: 0, name: "John Doe", major: "Accounting", grad: "2010", image: "https://randomuser.me/api/portraits/med/men/83.jpg"},
			{id: 1, name: "Sam Smith", major: "Marketing", grad: "2015", image: "https://randomuser.me/api/portraits/med/men/53.jpg"},
			{id: 2, name: "Jim James", major: "Finance", grad: "2011", image: "https://randomuser.me/api/portraits/med/men/23.jpg"},
			{id: 3, name: "Sam Torrez", major: "International Relations", grad: "2012", image: "https://randomuser.me/api/portraits/med/women/53.jpg"},
			{id: 4, name: "James Jones", major: "Entrepreneurship", grad: "2015", image: "https://randomuser.me/api/portraits/med/men/93.jpg"},
			{id: 5, name: "Bob Barker", major: "Marketing", grad: "2017", image: "https://randomuser.me/api/portraits/med/men/13.jpg"},
			{id: 6, name: "Geno Smith", major: "Business Administration", grad: "2018", image: "https://randomuser.me/api/portraits/med/men/33.jpg"},
			{id: 7, name: "Jane Jones", major: "Entrepreneurship", grad: "2015", image: "https://randomuser.me/api/portraits/med/women/93.jpg"},
			{id: 8, name: "Bobby Barker", major: "Marketing", grad: "2017", image: "https://randomuser.me/api/portraits/med/women/13.jpg"},
			{id: 9, name: "Jennie Smith", major: "Business Administration", grad: "2018", image: "https://randomuser.me/api/portraits/med/women/33.jpg"},
		],
		groups : [
			{id: 0, name: "Accounting Majors", image: "http://cypresstxcpa.com/media/slider9/bookkeeping.png", members: 46},
			{id: 1, name: "Baseball Team", image: "http://dailybaseballdata.com/dbd/images/Baseball-Ball.ico", members: 16},
			{id: 2, name: "Marketing Club", image: "http://static1.squarespace.com/static/55e3cd18e4b06cf73ad26938/t/56f854c090634097447fd4c8/1459225399777/Online+Marketing+Santa+Barbara", members: 13},
			{id: 3, name: "LGBTQ Guidance", image: "https://s3.amazonaws.com/campustapstaging/2vi484CGQuCrlBUlQLdA_16e8b888982a4ac9833b78b1b6de55fd.png", members: 346},
			{id: 4, name: "Management 101", image: "https://s3.amazonaws.com/campustapstaging/YmYDZi2jTXe8iu9qhh09_cb71012be3614486a6bac85f286fa007.png", members: 41},
			{id: 5, name: "Alumni Job Openings", image: "https://s3.amazonaws.com/campustapstaging/GLNMD1XuSgWqVnMbwCNU_d8bead46b947463c89e6ad8e8c2231d7.png", members: 90},
			{id: 6, name: "Advertising Internships", image: "https://s3.amazonaws.com/campustapstaging/Pf5EayhISPKuwrp5Ml9y_5b0ae10bafe343e1b9bc1a7602cc9c9b.png", members: 46},
		],
	},
	{
		firstName: "Jill",
		lastName: "Smith",
		name: "Remy Carpinito",
		email: "remy@snhu.edu",
		schoolInfo: {
			schoolId: 0, 
			major: "Computer Science", 
			minor: "Spanish", 
			grad: "2011", 
			degree: "Bachelor of Science"
		},
		mentor: true,
		avatarUrl: "https://randomuser.me/api/portraits/women/84.jpg",
		backgroundUrl: "https://upload.wikimedia.org/wikipedia/commons/c/cc/ESC_large_ISS022_ISS022-E-11387-edit_01.JPG",
		name: "Remy Carpinito",
		schools: [
			{name: "Purdue University", year: "2015", major: "Finance", minor: "Spanish", degree: "Bachelor of Arts"},
			{name: "Emerson College", year: "2015", major: "Finance", degree: "Graduate Degree"}
		],
		experience: [
			{company: "Bank of America", startYear: "2016", position: "Account Executive"},
			{company: "Fidelity", startYear: "2013", endYear: "2014", position: "Systems Analyst Intern"},
		],
		city: "Springfield",
		state: "MO",
		description: "I am a Senior at CampusTap University and I am candidate for a Bachelor of Science degree in Economics-Finance with a minor in Computer Information Systems. I have an interest in finance, wealth management and asset management. I am involved with the CampusTap Investment Group and the club hockey team. I am looking for advice on applying to full time investment banking positions post graduation.",
		bestAdvice: "Shoreditch yr taxidermy, retro kale chips roof party lumbersexual normcore bicycle rights selvage brooklyn neutra +1 williamsburg street art. Synth humblebrag vegan squid tote bag, neutra next level gluten-free +1 seitan tilde viral microdosing tofu tacos.",
		triumphs: ["Founded company at age 19", "Named Boston's Top 20 Under 20", "Graduated College at age 16"],
		tags: [
			{label: "boston", match: true}, 
			{label: "history", match: false}, 
			{label: "wellness", match: false}, 
			{label: "dance", match: false}, 
			{label: "technology", match: true}, 
			{label: "running", match: true}, 
			{label: "biotechnology", match: false}, 
			{label: "business", match: true}, 
			{label: "data", match: false}, 
			{label: "research", match: true}, 
			{label: "jazz", match: false}, 
			{label: "engineering", match: true}, 
			{label: "health", match: true}
		],
		areasOfExpertise: ["Resume Reviews", "Informational Interviews", "General Career Advice"],
		currentStatus: "CEO of CampusTap",
		timeline: [
			{
				type: "post", 
				posted: "1d", 
				content: "Hello everyone! I am a Corporate Finance and Accounting major, class of 2017. I am looking for mentors within the tech space, as I am trying to launch and app and am in need of someone with a background in app development to help me out. If you, or someone you know is an experienced developer/coder please ask me for contact information and I would be more than happy to share that with you.",
				favoriteCount: 13,
				commentCount: 3,
				comments: [
					{name: "Jackie Judy", avatarUrl: "https://randomuser.me/api/portraits/med/women/53.jpg", posted: "5d", content: "Hello everyone! I am a Corporate Finance and Accounting major, class of 2017. I am looking for mentors within the tech space, as I am trying to launch and app and am in need of someone with a background in app development to help me out."},
					{name: "John Judy", avatarUrl: "https://randomuser.me/api/portraits/med/men/53.jpg", posted: "3d", content: "Hello everyone! I am a Corporate Finance and Accounting major, class of 2017."},
					{name: "Jake Doe", avatarUrl: "https://randomuser.me/api/portraits/med/men/43.jpg", posted: "1d", content: "Great post."},
				],
			},
			{
				type: "comment",
				posted: "3d",
				content: "Hello everyone! I am a Corporate Finance and Accounting major, class of 2017. I am looking for mentors within the tech space, as I am trying to launch and app and am in need of someone with a background in app development to help me out. If you, or someone you know is an experienced developer/coder please ask me for contact information and I would be more than happy to share that with you."
			},
			{
				type: "post", 
				posted: "5d", 
				content: "https://www.youtube.com/embed/zNdkrtfZP8I",
				favoriteCount: 3,
				commentCount: 0,
				comments: [
					{name: "Jackie Judy", avatarUrl: "https://randomuser.me/api/portraits/med/women/53.jpg", posted: "5d", content: "Hello everyone! I am a Corporate Finance and Accounting major, class of 2017. I am looking for mentors within the tech space, as I am trying to launch and app and am in need of someone with a background in app development to help me out."},
					{name: "John Judy", avatarUrl: "https://randomuser.me/api/portraits/med/men/53.jpg", posted: "3d", content: "Hello everyone! I am a Corporate Finance and Accounting major, class of 2017."},
					{name: "Jake Doe", avatarUrl: "https://randomuser.me/api/portraits/med/men/43.jpg", posted: "1d", content: "Great post."},
				],
			},
		],
		documents: [
			{
				title: "Remy Carpinito's Resume",
				type: "resume",
				uploadedDate: "6/15/16",
				image: "https://s3-us-west-1.amazonaws.com/ctap-testing/resume.jpg",
				description: "Hello everyone! I am a Corporate Finance and Accounting major, class of 2017. I am looking for mentors within the tech space, as I am trying to launch and app and am in need of someone with a background in app development to help me out. If you, or someone you know is an experienced developer/coder please ask me for contact information and I would be more than happy to share that with you.",
				document: "/path/to/doc.pdf"
			},
			{
				title: "Remy Carpinito's Cover Letter",
				type: "cover-letter",
				uploadedDate: "6/15/16",
				image: "https://s3-us-west-1.amazonaws.com/ctap-testing/coverLetter.jpg",
				description: "Hello everyone! I am a Corporate Finance and Accounting major, class of 2017. I am looking for mentors within the tech space, as I am trying to launch and app and am in need of someone with a background in app development to help me out. If you, or someone you know is an experienced developer/coder please ask me for contact information and I would be more than happy to share that with you.",
				document: "/path/to/doc.pdf"
			},
			{
				title: "Twitter Redesign Project",
				type: "project",
				uploadedDate: "5/12/16",
				image: "https://s3-us-west-1.amazonaws.com/ctap-testing/twitterredesign.png",
				description: "This is a project I made for CS 560 as my final project.",
				document: "/path/to/doc.pdf"
			},
			{
				title: "Connect4 Python Project",
				type: "project",
				uploadedDate: "5/21/16",
				image: "https://nulogy.com/wp-content/uploads/2014/11/javascript-function-redux-es6-2.jpg",
				description: "This is a project I made for CS 587. It is a working Connect4 game made in Python.",
				document: "/path/to/doc.pdf"
			},
			{
				title: "Digital Marketing Project",
				type: "other",
				uploadedDate: "4/11/16",
				image: "https://s3-us-west-1.amazonaws.com/ctap-testing/marketingthing.jpg",
				description: "This is my final digital marketing project for MKT 610.",
				document: "/path/to/doc.pdf"
			}
		],
		connections : [
			{id: 0, name: "John Doe", major: "Accounting", grad: "2010", image: "https://randomuser.me/api/portraits/med/men/83.jpg"},
			{id: 1, name: "Sam Smith", major: "Marketing", grad: "2015", image: "https://randomuser.me/api/portraits/med/men/53.jpg"},
			{id: 2, name: "Jim James", major: "Finance", grad: "2011", image: "https://randomuser.me/api/portraits/med/men/23.jpg"},
			{id: 3, name: "Sam Torrez", major: "International Relations", grad: "2012", image: "https://randomuser.me/api/portraits/med/women/53.jpg"},
			{id: 4, name: "James Jones", major: "Entrepreneurship", grad: "2015", image: "https://randomuser.me/api/portraits/med/men/93.jpg"},
			{id: 5, name: "Bob Barker", major: "Marketing", grad: "2017", image: "https://randomuser.me/api/portraits/med/men/13.jpg"},
			{id: 6, name: "Geno Smith", major: "Business Administration", grad: "2018", image: "https://randomuser.me/api/portraits/med/men/33.jpg"},
			{id: 7, name: "Jane Jones", major: "Entrepreneurship", grad: "2015", image: "https://randomuser.me/api/portraits/med/women/93.jpg"},
			{id: 8, name: "Bobby Barker", major: "Marketing", grad: "2017", image: "https://randomuser.me/api/portraits/med/women/13.jpg"},
			{id: 9, name: "Jennie Smith", major: "Business Administration", grad: "2018", image: "https://randomuser.me/api/portraits/med/women/33.jpg"},
		],
		groups : [
			{id: 0, name: "Accounting Majors", image: "http://cypresstxcpa.com/media/slider9/bookkeeping.png", members: 46},
			{id: 1, name: "Baseball Team", image: "http://dailybaseballdata.com/dbd/images/Baseball-Ball.ico", members: 16},
			{id: 2, name: "Marketing Club", image: "http://static1.squarespace.com/static/55e3cd18e4b06cf73ad26938/t/56f854c090634097447fd4c8/1459225399777/Online+Marketing+Santa+Barbara", members: 13},
			{id: 3, name: "LGBTQ Guidance", image: "https://s3.amazonaws.com/campustapstaging/2vi484CGQuCrlBUlQLdA_16e8b888982a4ac9833b78b1b6de55fd.png", members: 346},
			{id: 4, name: "Management 101", image: "https://s3.amazonaws.com/campustapstaging/YmYDZi2jTXe8iu9qhh09_cb71012be3614486a6bac85f286fa007.png", members: 41},
			{id: 5, name: "Alumni Job Openings", image: "https://s3.amazonaws.com/campustapstaging/GLNMD1XuSgWqVnMbwCNU_d8bead46b947463c89e6ad8e8c2231d7.png", members: 90},
			{id: 6, name: "Advertising Internships", image: "https://s3.amazonaws.com/campustapstaging/Pf5EayhISPKuwrp5Ml9y_5b0ae10bafe343e1b9bc1a7602cc9c9b.png", members: 46},
		],
	},
	{
		firstName: "Sarah",
		lastName: "Stone",
		name: "Remy Carpinito",
		email: "remy@snhu.edu",
		schoolInfo: {
			schoolId: 0, 
			major: "Computer Science", 
			minor: "Spanish", 
			grad: "2011", 
			degree: "Bachelor of Science"
		},
		mentor: true,
		avatarUrl: "https://randomuser.me/api/portraits/women/24.jpg",
		backgroundUrl: "http://wallpapercraze.com/images/wallpapers/large_rock_moat_w1.jpeg",
		name: "Remy Carpinito",
		schools: [
			{name: "Massachusetts Institute of Technology", year: "2013", major: "Computer Science", minor: "Spanish", degree: "Bachelor of Arts"},
			{name: "Emerson College", year: "2015", major: "Finance", degree: "Graduate Degree"}
		],
		experience: [
			{company: "Fidelity", startYear: "2016", position: "Marketing Manager"},
			{company: "Fidelity", startYear: "2013", endYear: "2014", position: "Systems Analyst Intern"},
		],
		city: "Boston",
		state: "MA",
		description: "I am a Senior at CampusTap University and I am candidate for a Bachelor of Science degree in Economics-Finance with a minor in Computer Information Systems. I have an interest in finance, wealth management and asset management. I am involved with the CampusTap Investment Group and the club hockey team. I am looking for advice on applying to full time investment banking positions post graduation.",
		bestAdvice: "Shoreditch yr taxidermy, retro kale chips roof party lumbersexual normcore bicycle rights selvage brooklyn neutra +1 williamsburg street art. Synth humblebrag vegan squid tote bag, neutra next level gluten-free +1 seitan tilde viral microdosing tofu tacos.",
		triumphs: ["Founded company at age 19", "Named Boston's Top 20 Under 20", "Graduated College at age 16"],
		tags: [
			{label: "boston", match: true}, 
			{label: "history", match: false}, 
			{label: "wellness", match: false}, 
			{label: "dance", match: false}, 
			{label: "technology", match: true}, 
			{label: "running", match: true}, 
			{label: "biotechnology", match: false}, 
			{label: "business", match: true}, 
			{label: "data", match: false}, 
			{label: "research", match: true}, 
			{label: "jazz", match: false}, 
			{label: "engineering", match: true}, 
			{label: "health", match: true}
		],
		areasOfExpertise: ["Resume Reviews", "Informational Interviews", "General Career Advice"],
		currentStatus: "CEO of CampusTap",
		timeline: [
			{
				type: "post", 
				posted: "1d", 
				content: "Hello everyone! I am a Corporate Finance and Accounting major, class of 2017. I am looking for mentors within the tech space, as I am trying to launch and app and am in need of someone with a background in app development to help me out. If you, or someone you know is an experienced developer/coder please ask me for contact information and I would be more than happy to share that with you.",
				favoriteCount: 13,
				commentCount: 3,
				comments: [
					{name: "Jackie Judy", avatarUrl: "https://randomuser.me/api/portraits/med/women/53.jpg", posted: "5d", content: "Hello everyone! I am a Corporate Finance and Accounting major, class of 2017. I am looking for mentors within the tech space, as I am trying to launch and app and am in need of someone with a background in app development to help me out."},
					{name: "John Judy", avatarUrl: "https://randomuser.me/api/portraits/med/men/53.jpg", posted: "3d", content: "Hello everyone! I am a Corporate Finance and Accounting major, class of 2017."},
					{name: "Jake Doe", avatarUrl: "https://randomuser.me/api/portraits/med/men/43.jpg", posted: "1d", content: "Great post."},
				],
			},
			{
				type: "comment",
				posted: "3d",
				content: "Hello everyone! I am a Corporate Finance and Accounting major, class of 2017. I am looking for mentors within the tech space, as I am trying to launch and app and am in need of someone with a background in app development to help me out. If you, or someone you know is an experienced developer/coder please ask me for contact information and I would be more than happy to share that with you."
			},
			{
				type: "post", 
				posted: "5d", 
				content: "https://www.youtube.com/embed/zNdkrtfZP8I",
				favoriteCount: 3,
				commentCount: 0,
				comments: [
					{name: "Jackie Judy", avatarUrl: "https://randomuser.me/api/portraits/med/women/53.jpg", posted: "5d", content: "Hello everyone! I am a Corporate Finance and Accounting major, class of 2017. I am looking for mentors within the tech space, as I am trying to launch and app and am in need of someone with a background in app development to help me out."},
					{name: "John Judy", avatarUrl: "https://randomuser.me/api/portraits/med/men/53.jpg", posted: "3d", content: "Hello everyone! I am a Corporate Finance and Accounting major, class of 2017."},
					{name: "Jake Doe", avatarUrl: "https://randomuser.me/api/portraits/med/men/43.jpg", posted: "1d", content: "Great post."},
				],
			},
		],
		documents: [
			{
				title: "Remy Carpinito's Resume",
				type: "resume",
				uploadedDate: "6/15/16",
				image: "https://s3-us-west-1.amazonaws.com/ctap-testing/resume.jpg",
				description: "Hello everyone! I am a Corporate Finance and Accounting major, class of 2017. I am looking for mentors within the tech space, as I am trying to launch and app and am in need of someone with a background in app development to help me out. If you, or someone you know is an experienced developer/coder please ask me for contact information and I would be more than happy to share that with you.",
				document: "/path/to/doc.pdf"
			},
			{
				title: "Remy Carpinito's Cover Letter",
				type: "cover-letter",
				uploadedDate: "6/15/16",
				image: "https://s3-us-west-1.amazonaws.com/ctap-testing/coverLetter.jpg",
				description: "Hello everyone! I am a Corporate Finance and Accounting major, class of 2017. I am looking for mentors within the tech space, as I am trying to launch and app and am in need of someone with a background in app development to help me out. If you, or someone you know is an experienced developer/coder please ask me for contact information and I would be more than happy to share that with you.",
				document: "/path/to/doc.pdf"
			},
			{
				title: "Twitter Redesign Project",
				type: "project",
				uploadedDate: "5/12/16",
				image: "https://s3-us-west-1.amazonaws.com/ctap-testing/twitterredesign.png",
				description: "This is a project I made for CS 560 as my final project.",
				document: "/path/to/doc.pdf"
			},
			{
				title: "Connect4 Python Project",
				type: "project",
				uploadedDate: "5/21/16",
				image: "https://nulogy.com/wp-content/uploads/2014/11/javascript-function-redux-es6-2.jpg",
				description: "This is a project I made for CS 587. It is a working Connect4 game made in Python.",
				document: "/path/to/doc.pdf"
			},
			{
				title: "Digital Marketing Project",
				type: "other",
				uploadedDate: "4/11/16",
				image: "https://s3-us-west-1.amazonaws.com/ctap-testing/marketingthing.jpg",
				description: "This is my final digital marketing project for MKT 610.",
				document: "/path/to/doc.pdf"
			}
		],
		connections : [
			{id: 0, name: "John Doe", major: "Accounting", grad: "2010", image: "https://randomuser.me/api/portraits/med/men/83.jpg"},
			{id: 1, name: "Sam Smith", major: "Marketing", grad: "2015", image: "https://randomuser.me/api/portraits/med/men/53.jpg"},
			{id: 2, name: "Jim James", major: "Finance", grad: "2011", image: "https://randomuser.me/api/portraits/med/men/23.jpg"},
			{id: 3, name: "Sam Torrez", major: "International Relations", grad: "2012", image: "https://randomuser.me/api/portraits/med/women/53.jpg"},
			{id: 4, name: "James Jones", major: "Entrepreneurship", grad: "2015", image: "https://randomuser.me/api/portraits/med/men/93.jpg"},
			{id: 5, name: "Bob Barker", major: "Marketing", grad: "2017", image: "https://randomuser.me/api/portraits/med/men/13.jpg"},
			{id: 6, name: "Geno Smith", major: "Business Administration", grad: "2018", image: "https://randomuser.me/api/portraits/med/men/33.jpg"},
			{id: 7, name: "Jane Jones", major: "Entrepreneurship", grad: "2015", image: "https://randomuser.me/api/portraits/med/women/93.jpg"},
			{id: 8, name: "Bobby Barker", major: "Marketing", grad: "2017", image: "https://randomuser.me/api/portraits/med/women/13.jpg"},
			{id: 9, name: "Jennie Smith", major: "Business Administration", grad: "2018", image: "https://randomuser.me/api/portraits/med/women/33.jpg"},
		],
		groups : [
			{id: 0, name: "Accounting Majors", image: "http://cypresstxcpa.com/media/slider9/bookkeeping.png", members: 46},
			{id: 1, name: "Baseball Team", image: "http://dailybaseballdata.com/dbd/images/Baseball-Ball.ico", members: 16},
			{id: 2, name: "Marketing Club", image: "http://static1.squarespace.com/static/55e3cd18e4b06cf73ad26938/t/56f854c090634097447fd4c8/1459225399777/Online+Marketing+Santa+Barbara", members: 13},
			{id: 3, name: "LGBTQ Guidance", image: "https://s3.amazonaws.com/campustapstaging/2vi484CGQuCrlBUlQLdA_16e8b888982a4ac9833b78b1b6de55fd.png", members: 346},
			{id: 4, name: "Management 101", image: "https://s3.amazonaws.com/campustapstaging/YmYDZi2jTXe8iu9qhh09_cb71012be3614486a6bac85f286fa007.png", members: 41},
			{id: 5, name: "Alumni Job Openings", image: "https://s3.amazonaws.com/campustapstaging/GLNMD1XuSgWqVnMbwCNU_d8bead46b947463c89e6ad8e8c2231d7.png", members: 90},
			{id: 6, name: "Advertising Internships", image: "https://s3.amazonaws.com/campustapstaging/Pf5EayhISPKuwrp5Ml9y_5b0ae10bafe343e1b9bc1a7602cc9c9b.png", members: 46},
		],
	},
	{
		firstName: "Jess",
		lastName: "Stone",
		name: "Jess Stone",
		email: "remy@snhu.edu",
		schoolInfo: {
			schoolId: 0, 
			major: "Computer Science", 
			minor: "Spanish", 
			grad: "2017", 
			degree: "Bachelor of Science"
		},
		mentor: false,
		avatarUrl: "https://randomuser.me/api/portraits/women/25.jpg",
		backgroundUrl: "http://wallpapercraze.com/images/wallpapers/large_rock_moat_w1.jpeg",
		schools: [
			{name: "Southern New Hampshire University", year: "2020", major: "Computer Science", minor: "Spanish", degree: "Bachelor of Arts"},
		],
		city: "Boston",
		state: "MA",
		description: "I am a Senior at CampusTap University and I am candidate for a Bachelor of Science degree in Economics-Finance with a minor in Computer Information Systems. I have an interest in finance, wealth management and asset management. I am involved with the CampusTap Investment Group and the club hockey team. I am looking for advice on applying to full time investment banking positions post graduation.",
		bestAdvice: "Shoreditch yr taxidermy, retro kale chips roof party lumbersexual normcore bicycle rights selvage brooklyn neutra +1 williamsburg street art. Synth humblebrag vegan squid tote bag, neutra next level gluten-free +1 seitan tilde viral microdosing tofu tacos.",
		triumphs: ["Founded company at age 19", "Named Boston's Top 20 Under 20", "Graduated College at age 16"],
		tags: [
			{label: "boston", match: true}, 
			{label: "history", match: false}, 
			{label: "wellness", match: false}, 
			{label: "dance", match: false}, 
			{label: "technology", match: true}, 
			{label: "running", match: true}, 
			{label: "biotechnology", match: false}, 
			{label: "business", match: true}, 
			{label: "data", match: false}, 
			{label: "research", match: true}, 
			{label: "jazz", match: false}, 
			{label: "engineering", match: true}, 
			{label: "health", match: true}
		],
		areasOfExpertise: ["Resume Reviews", "Informational Interviews", "General Career Advice"],
		currentStatus: "CEO of CampusTap",
		timeline: [
			{
				type: "post", 
				posted: "1d", 
				content: "Hello everyone! I am a Corporate Finance and Accounting major, class of 2017. I am looking for mentors within the tech space, as I am trying to launch and app and am in need of someone with a background in app development to help me out. If you, or someone you know is an experienced developer/coder please ask me for contact information and I would be more than happy to share that with you.",
				favoriteCount: 13,
				commentCount: 3,
				comments: [
					{name: "Jackie Judy", avatarUrl: "https://randomuser.me/api/portraits/med/women/53.jpg", posted: "5d", content: "Hello everyone! I am a Corporate Finance and Accounting major, class of 2017. I am looking for mentors within the tech space, as I am trying to launch and app and am in need of someone with a background in app development to help me out."},
					{name: "John Judy", avatarUrl: "https://randomuser.me/api/portraits/med/men/53.jpg", posted: "3d", content: "Hello everyone! I am a Corporate Finance and Accounting major, class of 2017."},
					{name: "Jake Doe", avatarUrl: "https://randomuser.me/api/portraits/med/men/43.jpg", posted: "1d", content: "Great post."},
				],
			},
			{
				type: "comment",
				posted: "3d",
				content: "Hello everyone! I am a Corporate Finance and Accounting major, class of 2017. I am looking for mentors within the tech space, as I am trying to launch and app and am in need of someone with a background in app development to help me out. If you, or someone you know is an experienced developer/coder please ask me for contact information and I would be more than happy to share that with you."
			},
			{
				type: "post", 
				posted: "5d", 
				content: "https://www.youtube.com/embed/zNdkrtfZP8I",
				favoriteCount: 3,
				commentCount: 0,
				comments: [
					{name: "Jackie Judy", avatarUrl: "https://randomuser.me/api/portraits/med/women/53.jpg", posted: "5d", content: "Hello everyone! I am a Corporate Finance and Accounting major, class of 2017. I am looking for mentors within the tech space, as I am trying to launch and app and am in need of someone with a background in app development to help me out."},
					{name: "John Judy", avatarUrl: "https://randomuser.me/api/portraits/med/men/53.jpg", posted: "3d", content: "Hello everyone! I am a Corporate Finance and Accounting major, class of 2017."},
					{name: "Jake Doe", avatarUrl: "https://randomuser.me/api/portraits/med/men/43.jpg", posted: "1d", content: "Great post."},
				],
			},
		],
		documents: [
			{
				title: "Remy Carpinito's Resume",
				type: "resume",
				uploadedDate: "6/15/16",
				image: "https://s3-us-west-1.amazonaws.com/ctap-testing/resume.jpg",
				description: "Hello everyone! I am a Corporate Finance and Accounting major, class of 2017. I am looking for mentors within the tech space, as I am trying to launch and app and am in need of someone with a background in app development to help me out. If you, or someone you know is an experienced developer/coder please ask me for contact information and I would be more than happy to share that with you.",
				document: "/path/to/doc.pdf"
			},
			{
				title: "Remy Carpinito's Cover Letter",
				type: "cover-letter",
				uploadedDate: "6/15/16",
				image: "https://s3-us-west-1.amazonaws.com/ctap-testing/coverLetter.jpg",
				description: "Hello everyone! I am a Corporate Finance and Accounting major, class of 2017. I am looking for mentors within the tech space, as I am trying to launch and app and am in need of someone with a background in app development to help me out. If you, or someone you know is an experienced developer/coder please ask me for contact information and I would be more than happy to share that with you.",
				document: "/path/to/doc.pdf"
			},
			{
				title: "Twitter Redesign Project",
				type: "project",
				uploadedDate: "5/12/16",
				image: "https://s3-us-west-1.amazonaws.com/ctap-testing/twitterredesign.png",
				description: "This is a project I made for CS 560 as my final project.",
				document: "/path/to/doc.pdf"
			},
			{
				title: "Connect4 Python Project",
				type: "project",
				uploadedDate: "5/21/16",
				image: "https://nulogy.com/wp-content/uploads/2014/11/javascript-function-redux-es6-2.jpg",
				description: "This is a project I made for CS 587. It is a working Connect4 game made in Python.",
				document: "/path/to/doc.pdf"
			},
			{
				title: "Digital Marketing Project",
				type: "other",
				uploadedDate: "4/11/16",
				image: "https://s3-us-west-1.amazonaws.com/ctap-testing/marketingthing.jpg",
				description: "This is my final digital marketing project for MKT 610.",
				document: "/path/to/doc.pdf"
			}
		],
		connections : [
			{id: 0, name: "John Doe", major: "Accounting", grad: "2010", image: "https://randomuser.me/api/portraits/med/men/83.jpg"},
			{id: 1, name: "Sam Smith", major: "Marketing", grad: "2015", image: "https://randomuser.me/api/portraits/med/men/53.jpg"},
			{id: 2, name: "Jim James", major: "Finance", grad: "2011", image: "https://randomuser.me/api/portraits/med/men/23.jpg"},
			{id: 3, name: "Sam Torrez", major: "International Relations", grad: "2012", image: "https://randomuser.me/api/portraits/med/women/53.jpg"},
			{id: 4, name: "James Jones", major: "Entrepreneurship", grad: "2015", image: "https://randomuser.me/api/portraits/med/men/93.jpg"},
			{id: 5, name: "Bob Barker", major: "Marketing", grad: "2017", image: "https://randomuser.me/api/portraits/med/men/13.jpg"},
			{id: 6, name: "Geno Smith", major: "Business Administration", grad: "2018", image: "https://randomuser.me/api/portraits/med/men/33.jpg"},
			{id: 7, name: "Jane Jones", major: "Entrepreneurship", grad: "2015", image: "https://randomuser.me/api/portraits/med/women/93.jpg"},
			{id: 8, name: "Bobby Barker", major: "Marketing", grad: "2017", image: "https://randomuser.me/api/portraits/med/women/13.jpg"},
			{id: 9, name: "Jennie Smith", major: "Business Administration", grad: "2018", image: "https://randomuser.me/api/portraits/med/women/33.jpg"},
		],
		groups : [
			{id: 0, name: "Accounting Majors", image: "http://cypresstxcpa.com/media/slider9/bookkeeping.png", members: 46},
			{id: 1, name: "Baseball Team", image: "http://dailybaseballdata.com/dbd/images/Baseball-Ball.ico", members: 16},
			{id: 2, name: "Marketing Club", image: "http://static1.squarespace.com/static/55e3cd18e4b06cf73ad26938/t/56f854c090634097447fd4c8/1459225399777/Online+Marketing+Santa+Barbara", members: 13},
			{id: 3, name: "LGBTQ Guidance", image: "https://s3.amazonaws.com/campustapstaging/2vi484CGQuCrlBUlQLdA_16e8b888982a4ac9833b78b1b6de55fd.png", members: 346},
			{id: 4, name: "Management 101", image: "https://s3.amazonaws.com/campustapstaging/YmYDZi2jTXe8iu9qhh09_cb71012be3614486a6bac85f286fa007.png", members: 41},
			{id: 5, name: "Alumni Job Openings", image: "https://s3.amazonaws.com/campustapstaging/GLNMD1XuSgWqVnMbwCNU_d8bead46b947463c89e6ad8e8c2231d7.png", members: 90},
			{id: 6, name: "Advertising Internships", image: "https://s3.amazonaws.com/campustapstaging/Pf5EayhISPKuwrp5Ml9y_5b0ae10bafe343e1b9bc1a7602cc9c9b.png", members: 46},
		],
	},
	{
		firstName: "Ryan",
		lastName: "Stone",
		name: "Ryan Smith",
		email: "remy@snhu.edu",
		schoolInfo: {
			schoolId: 0, 
			major: "Computer Science", 
			minor: "Spanish", 
			grad: "2011", 
			degree: "Bachelor of Science"
		},
		mentor: false,
		avatarUrl: "https://randomuser.me/api/portraits/women/26.jpg",
		backgroundUrl: "http://wallpapercraze.com/images/wallpapers/large_rock_moat_w1.jpeg",
		schools: [
			{name: "Southern New Hampshire University", year: "2019", major: "Biology", minor: "Spanish", degree: "Bachelor of Arts"},
		],
		city: "Salem",
		state: "NH",
		description: "I am a Senior at CampusTap University and I am candidate for a Bachelor of Science degree in Economics-Finance with a minor in Computer Information Systems. I have an interest in finance, wealth management and asset management. I am involved with the CampusTap Investment Group and the club hockey team. I am looking for advice on applying to full time investment banking positions post graduation.",
		bestAdvice: "Shoreditch yr taxidermy, retro kale chips roof party lumbersexual normcore bicycle rights selvage brooklyn neutra +1 williamsburg street art. Synth humblebrag vegan squid tote bag, neutra next level gluten-free +1 seitan tilde viral microdosing tofu tacos.",
		triumphs: ["Founded company at age 19", "Named Boston's Top 20 Under 20", "Graduated College at age 16"],
		tags: [
			{label: "boston", match: true}, 
			{label: "history", match: false}, 
			{label: "wellness", match: false}, 
			{label: "dance", match: false}, 
			{label: "technology", match: true}, 
			{label: "running", match: true}, 
			{label: "biotechnology", match: false}, 
			{label: "business", match: true}, 
			{label: "data", match: false}, 
			{label: "research", match: true}, 
			{label: "jazz", match: false}, 
			{label: "engineering", match: true}, 
			{label: "health", match: true}
		],
		areasOfExpertise: ["Resume Reviews", "Informational Interviews", "General Career Advice"],
		currentStatus: "CEO of CampusTap",
		timeline: [
			{
				type: "post", 
				posted: "1hr", 
				content: "Hello! I just created the event \"Networking for Young Professionals Weekly Meetup\". The event will be held at a different bar around Greater Boston each week so make sure to check the page frequently. I've invited all alumni. Hope to see you all there!",
				favoriteCount: 21,
				commentCount: 5,
				comments: [
					{name: "Jackie Judy", avatarUrl: "https://randomuser.me/api/portraits/med/women/53.jpg", posted: "5d", content: "Hello everyone! I am a Corporate Finance and Accounting major, class of 2017. I am looking for mentors within the tech space, as I am trying to launch and app and am in need of someone with a background in app development to help me out."},
					{name: "John Judy", avatarUrl: "https://randomuser.me/api/portraits/med/men/53.jpg", posted: "3d", content: "Hello everyone! I am a Corporate Finance and Accounting major, class of 2017."},
					{name: "Jake Doe", avatarUrl: "https://randomuser.me/api/portraits/med/men/43.jpg", posted: "1d", content: "Great post."},
				],
			},
			{
				type: "comment",
				posted: "3d",
				content: "Hello everyone! I am a Corporate Finance and Accounting major, class of 2017. I am looking for mentors within the tech space, as I am trying to launch and app and am in need of someone with a background in app development to help me out. If you, or someone you know is an experienced developer/coder please ask me for contact information and I would be more than happy to share that with you."
			},
			{
				type: "post", 
				posted: "5d", 
				content: "https://www.youtube.com/embed/zNdkrtfZP8I",
				favoriteCount: 3,
				commentCount: 0,
				comments: [
					{name: "Jackie Judy", avatarUrl: "https://randomuser.me/api/portraits/med/women/53.jpg", posted: "5d", content: "Hello everyone! I am a Corporate Finance and Accounting major, class of 2017. I am looking for mentors within the tech space, as I am trying to launch and app and am in need of someone with a background in app development to help me out."},
					{name: "John Judy", avatarUrl: "https://randomuser.me/api/portraits/med/men/53.jpg", posted: "3d", content: "Hello everyone! I am a Corporate Finance and Accounting major, class of 2017."},
					{name: "Jake Doe", avatarUrl: "https://randomuser.me/api/portraits/med/men/43.jpg", posted: "1d", content: "Great post."},
				],
			},
		],
		documents: [
			{
				title: "Remy Carpinito's Resume",
				type: "resume",
				uploadedDate: "6/15/16",
				image: "https://s3-us-west-1.amazonaws.com/ctap-testing/resume.jpg",
				description: "Hello everyone! I am a Corporate Finance and Accounting major, class of 2017. I am looking for mentors within the tech space, as I am trying to launch and app and am in need of someone with a background in app development to help me out. If you, or someone you know is an experienced developer/coder please ask me for contact information and I would be more than happy to share that with you.",
				document: "/path/to/doc.pdf"
			},
			{
				title: "Remy Carpinito's Cover Letter",
				type: "cover-letter",
				uploadedDate: "6/15/16",
				image: "https://s3-us-west-1.amazonaws.com/ctap-testing/coverLetter.jpg",
				description: "Hello everyone! I am a Corporate Finance and Accounting major, class of 2017. I am looking for mentors within the tech space, as I am trying to launch and app and am in need of someone with a background in app development to help me out. If you, or someone you know is an experienced developer/coder please ask me for contact information and I would be more than happy to share that with you.",
				document: "/path/to/doc.pdf"
			},
			{
				title: "Twitter Redesign Project",
				type: "project",
				uploadedDate: "5/12/16",
				image: "https://s3-us-west-1.amazonaws.com/ctap-testing/twitterredesign.png",
				description: "This is a project I made for CS 560 as my final project.",
				document: "/path/to/doc.pdf"
			},
			{
				title: "Connect4 Python Project",
				type: "project",
				uploadedDate: "5/21/16",
				image: "https://nulogy.com/wp-content/uploads/2014/11/javascript-function-redux-es6-2.jpg",
				description: "This is a project I made for CS 587. It is a working Connect4 game made in Python.",
				document: "/path/to/doc.pdf"
			},
			{
				title: "Digital Marketing Project",
				type: "other",
				uploadedDate: "4/11/16",
				image: "https://s3-us-west-1.amazonaws.com/ctap-testing/marketingthing.jpg",
				description: "This is my final digital marketing project for MKT 610.",
				document: "/path/to/doc.pdf"
			}
		],
		connections : [
			{id: 0, name: "John Doe", major: "Accounting", grad: "2010", image: "https://randomuser.me/api/portraits/med/men/83.jpg"},
			{id: 1, name: "Sam Smith", major: "Marketing", grad: "2015", image: "https://randomuser.me/api/portraits/med/men/53.jpg"},
			{id: 2, name: "Jim James", major: "Finance", grad: "2011", image: "https://randomuser.me/api/portraits/med/men/23.jpg"},
			{id: 3, name: "Sam Torrez", major: "International Relations", grad: "2012", image: "https://randomuser.me/api/portraits/med/women/53.jpg"},
			{id: 4, name: "James Jones", major: "Entrepreneurship", grad: "2015", image: "https://randomuser.me/api/portraits/med/men/93.jpg"},
			{id: 5, name: "Bob Barker", major: "Marketing", grad: "2017", image: "https://randomuser.me/api/portraits/med/men/13.jpg"},
			{id: 6, name: "Geno Smith", major: "Business Administration", grad: "2018", image: "https://randomuser.me/api/portraits/med/men/33.jpg"},
			{id: 7, name: "Jane Jones", major: "Entrepreneurship", grad: "2015", image: "https://randomuser.me/api/portraits/med/women/93.jpg"},
			{id: 8, name: "Bobby Barker", major: "Marketing", grad: "2017", image: "https://randomuser.me/api/portraits/med/women/13.jpg"},
			{id: 9, name: "Jennie Smith", major: "Business Administration", grad: "2018", image: "https://randomuser.me/api/portraits/med/women/33.jpg"},
		],
		groups : [
			{id: 0, name: "Accounting Majors", image: "http://cypresstxcpa.com/media/slider9/bookkeeping.png", members: 46},
			{id: 1, name: "Baseball Team", image: "http://dailybaseballdata.com/dbd/images/Baseball-Ball.ico", members: 16},
			{id: 2, name: "Marketing Club", image: "http://static1.squarespace.com/static/55e3cd18e4b06cf73ad26938/t/56f854c090634097447fd4c8/1459225399777/Online+Marketing+Santa+Barbara", members: 13},
			{id: 3, name: "LGBTQ Guidance", image: "https://s3.amazonaws.com/campustapstaging/2vi484CGQuCrlBUlQLdA_16e8b888982a4ac9833b78b1b6de55fd.png", members: 346},
			{id: 4, name: "Management 101", image: "https://s3.amazonaws.com/campustapstaging/YmYDZi2jTXe8iu9qhh09_cb71012be3614486a6bac85f286fa007.png", members: 41},
			{id: 5, name: "Alumni Job Openings", image: "https://s3.amazonaws.com/campustapstaging/GLNMD1XuSgWqVnMbwCNU_d8bead46b947463c89e6ad8e8c2231d7.png", members: 90},
			{id: 6, name: "Advertising Internships", image: "https://s3.amazonaws.com/campustapstaging/Pf5EayhISPKuwrp5Ml9y_5b0ae10bafe343e1b9bc1a7602cc9c9b.png", members: 46},
		],
	},
	{
		firstName: "Brandon",
		lastName: "Stone",
		name: "Brandon Florence",
		email: "remy@snhu.edu",
		schoolInfo: {
			schoolId: 0, 
			major: "Computer Science", 
			minor: "Spanish", 
			grad: "2009", 
			degree: "Bachelor of Science"
		},
		mentor: false,
		avatarUrl: "https://randomuser.me/api/portraits/men/15.jpg",
		backgroundUrl: "http://wallpapercraze.com/images/wallpapers/large_rock_moat_w1.jpeg",
		schools: [
			{name: "Southern New Hampshire University", year: "2019", major: "Finance", minor: "Spanish", degree: "Bachelor of Arts"},
		],
		city: "Las Vegas",
		state: "NV",
		description: "I am a Senior at CampusTap University and I am candidate for a Bachelor of Science degree in Economics-Finance with a minor in Computer Information Systems. I have an interest in finance, wealth management and asset management. I am involved with the CampusTap Investment Group and the club hockey team. I am looking for advice on applying to full time investment banking positions post graduation.",
		bestAdvice: "Shoreditch yr taxidermy, retro kale chips roof party lumbersexual normcore bicycle rights selvage brooklyn neutra +1 williamsburg street art. Synth humblebrag vegan squid tote bag, neutra next level gluten-free +1 seitan tilde viral microdosing tofu tacos.",
		triumphs: ["Founded company at age 19", "Named Boston's Top 20 Under 20", "Graduated College at age 16"],
		tags: [
			{label: "boston", match: true}, 
			{label: "history", match: false}, 
			{label: "wellness", match: false}, 
			{label: "dance", match: false}, 
			{label: "technology", match: true}, 
			{label: "running", match: true}, 
			{label: "biotechnology", match: false}, 
			{label: "business", match: true}, 
			{label: "data", match: false}, 
			{label: "research", match: true}, 
			{label: "jazz", match: false}, 
			{label: "engineering", match: true}, 
			{label: "health", match: true}
		],
		areasOfExpertise: ["Resume Reviews", "Informational Interviews", "General Career Advice"],
		currentStatus: "CEO of CampusTap",
		timeline: [
			{
				type: "post", 
				posted: "1d", 
				content: "The Entrepreneurship in Boston group is looking for a place to host our annual fundraising dinner. The venue must be able to accommodate at least 500 attendees. Anyone have suggestions?",
				favoriteCount: 1,
				commentCount: 13,
				comments: [
					{name: "Jackie Judy", avatarUrl: "https://randomuser.me/api/portraits/med/women/53.jpg", posted: "5d", content: "Hello everyone! I am a Corporate Finance and Accounting major, class of 2017. I am looking for mentors within the tech space, as I am trying to launch and app and am in need of someone with a background in app development to help me out."},
					{name: "John Judy", avatarUrl: "https://randomuser.me/api/portraits/med/men/53.jpg", posted: "3d", content: "Hello everyone! I am a Corporate Finance and Accounting major, class of 2017."},
					{name: "Jake Doe", avatarUrl: "https://randomuser.me/api/portraits/med/men/43.jpg", posted: "1d", content: "Great post."},
				],
			},
			{
				type: "comment",
				posted: "3d",
				content: "Hello everyone! I am a Corporate Finance and Accounting major, class of 2017. I am looking for mentors within the tech space, as I am trying to launch and app and am in need of someone with a background in app development to help me out. If you, or someone you know is an experienced developer/coder please ask me for contact information and I would be more than happy to share that with you."
			},
			{
				type: "post", 
				posted: "5d", 
				content: "https://www.youtube.com/embed/zNdkrtfZP8I",
				favoriteCount: 3,
				commentCount: 0,
				comments: [
					{name: "Jackie Judy", avatarUrl: "https://randomuser.me/api/portraits/med/women/53.jpg", posted: "5d", content: "Hello everyone! I am a Corporate Finance and Accounting major, class of 2017. I am looking for mentors within the tech space, as I am trying to launch and app and am in need of someone with a background in app development to help me out."},
					{name: "John Judy", avatarUrl: "https://randomuser.me/api/portraits/med/men/53.jpg", posted: "3d", content: "Hello everyone! I am a Corporate Finance and Accounting major, class of 2017."},
					{name: "Jake Doe", avatarUrl: "https://randomuser.me/api/portraits/med/men/43.jpg", posted: "1d", content: "Great post."},
				],
			},
		],
		documents: [
			{
				title: "Remy Carpinito's Resume",
				type: "resume",
				uploadedDate: "6/15/16",
				image: "https://s3-us-west-1.amazonaws.com/ctap-testing/resume.jpg",
				description: "Hello everyone! I am a Corporate Finance and Accounting major, class of 2017. I am looking for mentors within the tech space, as I am trying to launch and app and am in need of someone with a background in app development to help me out. If you, or someone you know is an experienced developer/coder please ask me for contact information and I would be more than happy to share that with you.",
				document: "/path/to/doc.pdf"
			},
			{
				title: "Remy Carpinito's Cover Letter",
				type: "cover-letter",
				uploadedDate: "6/15/16",
				image: "https://s3-us-west-1.amazonaws.com/ctap-testing/coverLetter.jpg",
				description: "Hello everyone! I am a Corporate Finance and Accounting major, class of 2017. I am looking for mentors within the tech space, as I am trying to launch and app and am in need of someone with a background in app development to help me out. If you, or someone you know is an experienced developer/coder please ask me for contact information and I would be more than happy to share that with you.",
				document: "/path/to/doc.pdf"
			},
			{
				title: "Twitter Redesign Project",
				type: "project",
				uploadedDate: "5/12/16",
				image: "https://s3-us-west-1.amazonaws.com/ctap-testing/twitterredesign.png",
				description: "This is a project I made for CS 560 as my final project.",
				document: "/path/to/doc.pdf"
			},
			{
				title: "Connect4 Python Project",
				type: "project",
				uploadedDate: "5/21/16",
				image: "https://nulogy.com/wp-content/uploads/2014/11/javascript-function-redux-es6-2.jpg",
				description: "This is a project I made for CS 587. It is a working Connect4 game made in Python.",
				document: "/path/to/doc.pdf"
			},
			{
				title: "Digital Marketing Project",
				type: "other",
				uploadedDate: "4/11/16",
				image: "https://s3-us-west-1.amazonaws.com/ctap-testing/marketingthing.jpg",
				description: "This is my final digital marketing project for MKT 610.",
				document: "/path/to/doc.pdf"
			}
		],
		connections : [
			{id: 0, name: "John Doe", major: "Accounting", grad: "2010", image: "https://randomuser.me/api/portraits/med/men/83.jpg"},
			{id: 1, name: "Sam Smith", major: "Marketing", grad: "2015", image: "https://randomuser.me/api/portraits/med/men/53.jpg"},
			{id: 2, name: "Jim James", major: "Finance", grad: "2011", image: "https://randomuser.me/api/portraits/med/men/23.jpg"},
			{id: 3, name: "Sam Torrez", major: "International Relations", grad: "2012", image: "https://randomuser.me/api/portraits/med/women/53.jpg"},
			{id: 4, name: "James Jones", major: "Entrepreneurship", grad: "2015", image: "https://randomuser.me/api/portraits/med/men/93.jpg"},
			{id: 5, name: "Bob Barker", major: "Marketing", grad: "2017", image: "https://randomuser.me/api/portraits/med/men/13.jpg"},
			{id: 6, name: "Geno Smith", major: "Business Administration", grad: "2018", image: "https://randomuser.me/api/portraits/med/men/33.jpg"},
			{id: 7, name: "Jane Jones", major: "Entrepreneurship", grad: "2015", image: "https://randomuser.me/api/portraits/med/women/93.jpg"},
			{id: 8, name: "Bobby Barker", major: "Marketing", grad: "2017", image: "https://randomuser.me/api/portraits/med/women/13.jpg"},
			{id: 9, name: "Jennie Smith", major: "Business Administration", grad: "2018", image: "https://randomuser.me/api/portraits/med/women/33.jpg"},
		],
		groups : [
			{id: 0, name: "Accounting Majors", image: "http://cypresstxcpa.com/media/slider9/bookkeeping.png", members: 46},
			{id: 1, name: "Baseball Team", image: "http://dailybaseballdata.com/dbd/images/Baseball-Ball.ico", members: 16},
			{id: 2, name: "Marketing Club", image: "http://static1.squarespace.com/static/55e3cd18e4b06cf73ad26938/t/56f854c090634097447fd4c8/1459225399777/Online+Marketing+Santa+Barbara", members: 13},
			{id: 3, name: "LGBTQ Guidance", image: "https://s3.amazonaws.com/campustapstaging/2vi484CGQuCrlBUlQLdA_16e8b888982a4ac9833b78b1b6de55fd.png", members: 346},
			{id: 4, name: "Management 101", image: "https://s3.amazonaws.com/campustapstaging/YmYDZi2jTXe8iu9qhh09_cb71012be3614486a6bac85f286fa007.png", members: 41},
			{id: 5, name: "Alumni Job Openings", image: "https://s3.amazonaws.com/campustapstaging/GLNMD1XuSgWqVnMbwCNU_d8bead46b947463c89e6ad8e8c2231d7.png", members: 90},
			{id: 6, name: "Advertising Internships", image: "https://s3.amazonaws.com/campustapstaging/Pf5EayhISPKuwrp5Ml9y_5b0ae10bafe343e1b9bc1a7602cc9c9b.png", members: 46},
		],
	},
	{
		firstName: "Chris",
		lastName: "Stone",
		name: "Chris Stone",
		email: "remy@snhu.edu",
		schoolInfo: {
			schoolId: 0, 
			major: "Computer Science", 
			minor: "Spanish", 
			grad: "2011", 
			degree: "Bachelor of Science"
		},
		mentor: false,
		avatarUrl: "https://randomuser.me/api/portraits/men/25.jpg",
		backgroundUrl: "http://wallpapercraze.com/images/wallpapers/large_rock_moat_w1.jpeg",
		schools: [
			{name: "Southern New Hampshire University", year: "2018", major: "Information Systems", minor: "Spanish", degree: "Bachelor of Arts"},
		],
		city: "Atlantic City",
		state: "NJ",
		description: "I am a Senior at CampusTap University and I am candidate for a Bachelor of Science degree in Economics-Finance with a minor in Computer Information Systems. I have an interest in finance, wealth management and asset management. I am involved with the CampusTap Investment Group and the club hockey team. I am looking for advice on applying to full time investment banking positions post graduation.",
		bestAdvice: "Shoreditch yr taxidermy, retro kale chips roof party lumbersexual normcore bicycle rights selvage brooklyn neutra +1 williamsburg street art. Synth humblebrag vegan squid tote bag, neutra next level gluten-free +1 seitan tilde viral microdosing tofu tacos.",
		triumphs: ["Founded company at age 19", "Named Boston's Top 20 Under 20", "Graduated College at age 16"],
		tags: [
			{label: "boston", match: true}, 
			{label: "history", match: false}, 
			{label: "wellness", match: false}, 
			{label: "dance", match: false}, 
			{label: "technology", match: true}, 
			{label: "running", match: true}, 
			{label: "biotechnology", match: false}, 
			{label: "business", match: true}, 
			{label: "data", match: false}, 
			{label: "research", match: true}, 
			{label: "jazz", match: false}, 
			{label: "engineering", match: true}, 
			{label: "health", match: true}
		],
		areasOfExpertise: ["Resume Reviews", "Informational Interviews", "General Career Advice"],
		currentStatus: "CEO of CampusTap",
		timeline: [
			{
				type: "post", 
				posted: "1d", 
				content: "Hello everyone! I am a Corporate Finance and Accounting major, class of 2017. I am looking for mentors within the tech space, as I am trying to launch and app and am in need of someone with a background in app development to help me out. If you, or someone you know is an experienced developer/coder please ask me for contact information and I would be more than happy to share that with you.",
				favoriteCount: 13,
				commentCount: 3,
				comments: [
					{name: "Jackie Judy", avatarUrl: "https://randomuser.me/api/portraits/med/women/53.jpg", posted: "5d", content: "Hello everyone! I am a Corporate Finance and Accounting major, class of 2017. I am looking for mentors within the tech space, as I am trying to launch and app and am in need of someone with a background in app development to help me out."},
					{name: "John Judy", avatarUrl: "https://randomuser.me/api/portraits/med/men/53.jpg", posted: "3d", content: "Hello everyone! I am a Corporate Finance and Accounting major, class of 2017."},
					{name: "Jake Doe", avatarUrl: "https://randomuser.me/api/portraits/med/men/43.jpg", posted: "1d", content: "Great post."},
				],
			},
			{
				type: "comment",
				posted: "3d",
				content: "Hello everyone! I am a Corporate Finance and Accounting major, class of 2017. I am looking for mentors within the tech space, as I am trying to launch and app and am in need of someone with a background in app development to help me out. If you, or someone you know is an experienced developer/coder please ask me for contact information and I would be more than happy to share that with you."
			},
			{
				type: "post", 
				posted: "5d", 
				content: "https://www.youtube.com/embed/zNdkrtfZP8I",
				favoriteCount: 3,
				commentCount: 0,
				comments: [
					{name: "Jackie Judy", avatarUrl: "https://randomuser.me/api/portraits/med/women/53.jpg", posted: "5d", content: "Hello everyone! I am a Corporate Finance and Accounting major, class of 2017. I am looking for mentors within the tech space, as I am trying to launch and app and am in need of someone with a background in app development to help me out."},
					{name: "John Judy", avatarUrl: "https://randomuser.me/api/portraits/med/men/53.jpg", posted: "3d", content: "Hello everyone! I am a Corporate Finance and Accounting major, class of 2017."},
					{name: "Jake Doe", avatarUrl: "https://randomuser.me/api/portraits/med/men/43.jpg", posted: "1d", content: "Great post."},
				],
			},
		],
		documents: [
			{
				title: "Remy Carpinito's Resume",
				type: "resume",
				uploadedDate: "6/15/16",
				image: "https://s3-us-west-1.amazonaws.com/ctap-testing/resume.jpg",
				description: "Hello everyone! I am a Corporate Finance and Accounting major, class of 2017. I am looking for mentors within the tech space, as I am trying to launch and app and am in need of someone with a background in app development to help me out. If you, or someone you know is an experienced developer/coder please ask me for contact information and I would be more than happy to share that with you.",
				document: "/path/to/doc.pdf"
			},
			{
				title: "Remy Carpinito's Cover Letter",
				type: "cover-letter",
				uploadedDate: "6/15/16",
				image: "https://s3-us-west-1.amazonaws.com/ctap-testing/coverLetter.jpg",
				description: "Hello everyone! I am a Corporate Finance and Accounting major, class of 2017. I am looking for mentors within the tech space, as I am trying to launch and app and am in need of someone with a background in app development to help me out. If you, or someone you know is an experienced developer/coder please ask me for contact information and I would be more than happy to share that with you.",
				document: "/path/to/doc.pdf"
			},
			{
				title: "Twitter Redesign Project",
				type: "project",
				uploadedDate: "5/12/16",
				image: "https://s3-us-west-1.amazonaws.com/ctap-testing/twitterredesign.png",
				description: "This is a project I made for CS 560 as my final project.",
				document: "/path/to/doc.pdf"
			},
			{
				title: "Connect4 Python Project",
				type: "project",
				uploadedDate: "5/21/16",
				image: "https://nulogy.com/wp-content/uploads/2014/11/javascript-function-redux-es6-2.jpg",
				description: "This is a project I made for CS 587. It is a working Connect4 game made in Python.",
				document: "/path/to/doc.pdf"
			},
			{
				title: "Digital Marketing Project",
				type: "other",
				uploadedDate: "4/11/16",
				image: "https://s3-us-west-1.amazonaws.com/ctap-testing/marketingthing.jpg",
				description: "This is my final digital marketing project for MKT 610.",
				document: "/path/to/doc.pdf"
			}
		],
		connections : [
			{id: 0, name: "John Doe", major: "Accounting", grad: "2010", image: "https://randomuser.me/api/portraits/med/men/83.jpg"},
			{id: 1, name: "Sam Smith", major: "Marketing", grad: "2015", image: "https://randomuser.me/api/portraits/med/men/53.jpg"},
			{id: 2, name: "Jim James", major: "Finance", grad: "2011", image: "https://randomuser.me/api/portraits/med/men/23.jpg"},
			{id: 3, name: "Sam Torrez", major: "International Relations", grad: "2012", image: "https://randomuser.me/api/portraits/med/women/53.jpg"},
			{id: 4, name: "James Jones", major: "Entrepreneurship", grad: "2015", image: "https://randomuser.me/api/portraits/med/men/93.jpg"},
			{id: 5, name: "Bob Barker", major: "Marketing", grad: "2017", image: "https://randomuser.me/api/portraits/med/men/13.jpg"},
			{id: 6, name: "Geno Smith", major: "Business Administration", grad: "2018", image: "https://randomuser.me/api/portraits/med/men/33.jpg"},
			{id: 7, name: "Jane Jones", major: "Entrepreneurship", grad: "2015", image: "https://randomuser.me/api/portraits/med/women/93.jpg"},
			{id: 8, name: "Bobby Barker", major: "Marketing", grad: "2017", image: "https://randomuser.me/api/portraits/med/women/13.jpg"},
			{id: 9, name: "Jennie Smith", major: "Business Administration", grad: "2018", image: "https://randomuser.me/api/portraits/med/women/33.jpg"},
		],
		groups : [
			{id: 0, name: "Accounting Majors", image: "http://cypresstxcpa.com/media/slider9/bookkeeping.png", members: 46},
			{id: 1, name: "Baseball Team", image: "http://dailybaseballdata.com/dbd/images/Baseball-Ball.ico", members: 16},
			{id: 2, name: "Marketing Club", image: "http://static1.squarespace.com/static/55e3cd18e4b06cf73ad26938/t/56f854c090634097447fd4c8/1459225399777/Online+Marketing+Santa+Barbara", members: 13},
			{id: 3, name: "LGBTQ Guidance", image: "https://s3.amazonaws.com/campustapstaging/2vi484CGQuCrlBUlQLdA_16e8b888982a4ac9833b78b1b6de55fd.png", members: 346},
			{id: 4, name: "Management 101", image: "https://s3.amazonaws.com/campustapstaging/YmYDZi2jTXe8iu9qhh09_cb71012be3614486a6bac85f286fa007.png", members: 41},
			{id: 5, name: "Alumni Job Openings", image: "https://s3.amazonaws.com/campustapstaging/GLNMD1XuSgWqVnMbwCNU_d8bead46b947463c89e6ad8e8c2231d7.png", members: 90},
			{id: 6, name: "Advertising Internships", image: "https://s3.amazonaws.com/campustapstaging/Pf5EayhISPKuwrp5Ml9y_5b0ae10bafe343e1b9bc1a7602cc9c9b.png", members: 46},
		],
	}
];