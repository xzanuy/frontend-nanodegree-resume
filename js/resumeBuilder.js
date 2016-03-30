

var bio = {
	'name': 'Xavier Zanuy',
	'role': 'Front End Engineer',
	'contacts': {
		'mobile': '602843983',
		'email': 'xzanuy@gmail.com',
		'github': 'xzanuy',
		'twitter': '@xavivax',
		'location': 'Barcelona'
		},
	"welcomeMessage": "Hello There, I need your Bike..",
	"skills": ["HTML5", "CSS", "Javascript", "Jquery", "Bootstrap", "github"],
	"biopic": "images/me.jpg",
	"display": function(){

		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
		var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
		var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
		var  formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);

		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);

		$("#topContacts").append(formattedMobile, formattedEmail, formattedTwitter, formattedGithub, formattedLocation);
		
		var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
		var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		
		$("#header").append(formattedBioPic, formattedWelcomeMsg, HTMLskillsStart);

		for(var skill = 0; skill < bio.skills.length; skill++){
			var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkills);
		}

		$("#footerContacts").append(formattedMobile, formattedTwitter, formattedGithub, formattedLocation);
	
	}
};


var education ={
		 "schools" : [{
		 	 "name": "UOC",
		     "location": "Barcelona",
		     "degree": "Grado Multimedia",
		     "majors": ["sample","Sample 2"],
		     "dates": "2012 - 2016",
		     "url": "http://estudios.uoc.edu/es/grados/multimedia/presentacion"
		 }
		 ],
		 "onlineCourses": [{
		     "title": "Front End NanoDegree",
		     "school": "Udacity",
		     "date": "Mar 16",
		     "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		},{
			"title": "Tech Entrepreneur Nanodegree",
		     "school": "Udacity",
		     "date": "Mar 15",
		     "url": "https://www.udacity.com/course/tech-entrepreneur-nanodegree--nd007"
		}
		],
			
		"display": function(){

			
			for(var school = 0; school < education.schools.length; school++){

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);

			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(formattedSchoolNameDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
				for(var major = 0; major < education.schools[school].majors.length; major++){
					var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
					$(".education-entry:last").append(formattedSchoolMajor);
				}
			}

			$("#education").append(HTMLonlineClasses);

				for(var onlineCourse = 0; onlineCourse < education.onlineCourses.length; onlineCourse++){
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
				var formattedOnlineTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
				$("#education").append(HTMLschoolStart);
				$(".education-entry:last").append(formattedOnlineTitleSchool);
				$(".education-entry:last").append(formattedOnlineDates);
				$(".education-entry:last").append(formattedOnlineURL);
				}
		}	
};


var work ={
	"jobs":[{
		 "employer": "Talentier" ,
	     "title": "UX Developer" ,
	     "location": "Barcelona" ,
	     "dates": "in progress" ,
	     "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque maximus elit ut lacus imperdiet iaculis. Nunc ac elit et tortor viverra imperdiet" 

	},{
		"employer": "SocialBro" ,
	     "title": "Technical Support" ,
	     "location": "London" ,
	     "dates": "2014" ,
	     "description": "Aenean lectus augue, laoreet id feugiat quis, congue nec mauris. Praesent ipsum nulla, pharetra ut justo id, feugiat tristique sem" 
	},
	{
		 "employer": "Universal Didactics" ,
	     "title": "Web developer" ,
	     "location": "Barcelona" ,
	     "dates": "2013 - 2014" ,
	     "description": "ligula a lobortis posuere, mi turpis venenatis orci, sit amet posuere est ipsum non ligula. Praesent ac velit in turpis consectetur blandit. Morbi sit amet venenatis sem. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus " 

	}],
	"display": function(){
		$("#workExperience").append(HTMLworkStart);
		for(var job = 0; job < work.jobs.length;job++){

		var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
		var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

		
		$(".work-entry").append(formattedEmployerTitle);
		$(".work-entry").append(formattedWorkDates);
		$(".work-entry").append(formattedWorkLocation);
		$(".work-entry").append(formattedWorkDescription);
		}
	}
};


var projects={
	"projects": [{
      "title": "Sample Project 1" ,
      "dates": "2014" ,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis viverra nisi nisl, non faucibus tellus ornare quis. Vivamus orci libero, pellentesque vitae ante quis, ullamcorper sodales dolor.",
      "images": [
      			  "images/qr-code-156717_640.png",
      			  "images/imac-606765_640.jpg"
      			  ]
      }],
	  "display": function(){

		$("#projects").append(HTMLprojectStart);
		for(var project = 0; project < projects.projects.length; project++){
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[0].title);
		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[0].dates);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[0].description);
		


		
		$(".project-entry").append(formattedProjectTitle);
		$(".project-entry").append(formattedProjectDates);
		$(".project-entry").append(formattedProjectDescription);

			for(var image = 0; image < projects.projects[project].images.length; image++){
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry").append(formattedProjectImage);
			}
		}
	  }
};


bio.display();
work.display();
projects.display();
education.display();


$("#mapDiv").append(googleMap);
