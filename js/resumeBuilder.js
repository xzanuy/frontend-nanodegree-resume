


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

		$("#topContacts").append(formattedMobile);
		$("#topContacts").append(formattedEmail);
		$("#topContacts").append(formattedTwitter);
		$("#topContacts").append(formattedGithub);
		$("#topContacts").append(formattedLocation);

		var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
		var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		
		$("#header").append(formattedBioPic);
		$("#header").append(formattedWelcomeMsg);
		$("#header").append(HTMLskillsStart);
		for(skill in bio.skills){
			var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkills);
		}

		$("#footerContacts").append(formattedMobile);
		$("#footerContacts").append(formattedTwitter);
		$("#footerContacts").append(formattedGithub);
		$("#footerContacts").append(formattedLocation)
	}
}


var education ={
		 "schools" : [{
		 	 "name": "UOC",
		     "location": "Barcelona",
		     "degree": "Grado Multimedia",
		     "majors": "sample",
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

			$("#education").append(HTMLschoolStart);
			for(school in education.schools){
			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);

			$(".education-entry").append(formattedSchoolNameDegree);
			$(".education-entry").append(formattedSchoolDates);
			$(".education-entry").append(formattedSchoolLocation);
			$(".education-entry").append(formattedSchoolMajor);
			}

			$(".education-entry").append(HTMLonlineClasses)

			for(onlineCourse in education.onlineCourses){
			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
			var formattedOnlineTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
			var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
			var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);

			$(".education-entry").append(formattedOnlineTitleSchool);
			$(".education-entry").append(formattedOnlineDates);
			$(".education-entry").append(formattedOnlineURL);
			}
		}	
}


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
		for(job in work.jobs){

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
}


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
		for(project in projects.projects){
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[0].title);
		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[0].dates);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[0].description);
		


		
		$(".project-entry").append(formattedProjectTitle);
		$(".project-entry").append(formattedProjectDates);
		$(".project-entry").append(formattedProjectDescription);

			for(image in projects.projects[project].images){
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry").append(formattedProjectImage);
			}
		}
	  }
}


bio.display();
work.display();
projects.display();
education.display();


$("#mapDiv").append(googleMap);
