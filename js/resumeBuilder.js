/*$("#main").append(["Xavier "]);


var awesomeThoughts= "I am fucking awesome";

var funThoughts = awesomeThoughts.replace("awesome","fun")

console.log(funThoughts);
$("#main").append([funThoughts]);

var name="Xavier";
var role="Front-End Developer"

var formatedRole = HTMLheaderRole.replace("%data%", role)
var formatedName = HTMLheaderName.replace("%data%",name)

$("#header").prepend([formatedRole]);
$("#header").prepend([formatedName]);
$("#header").append([bio.name]);
$("#header").append(work.position);
$("#header").append(education.name);
*/


var bio = {
	"name": "Xavier Zanuy",
	"role": "UX Developer",
	"contacts": {
		"mobile": "602843983",
		"email": "xzanuy@gmail.com",
		"github": "xzanuy",
		"twitter": "xavivax",
		"location": "Barcelona"
		},
	"welcomeMessage": "Hello There, I need your Bike",
	"skills": ["HTML5", "CSS", "Javascript", "Jquery", "Bootstrap", "github"],
	"biopic": "https://media.licdn.com/mpr/mpr/shrink_100_100/AAEAAQAAAAAAAAQLAAAAJDdjZjc5NDQ3LTFhNjUtNDQ4NC05NzIwLTBiY2U2M2ZkODExZA.jpg",
	"display": function(){

		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
		var formattedTwitter = HTMLemail.replace("%data%",bio.contacts.twitter);
		var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
		var  formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);

		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);

		$("#topContacts").append(formattedMobile);
		$("#topContacts").append(formattedTwitter);
		$("#topContacts").append(formattedGithub);
		$("#topContacts").append(formattedLocation);

		var HTMLbioPic = '<img src="%data%" class="biopic">';
		var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

		var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>';
		var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

		var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
		var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		var formattedSkills = HTMLskills.replace("%data%", bio.skills);


		$("#header").append(formattedBioPic);
		$("#header").append(formattedWelcomeMsg);
		$("#header").append(HTMLskillsStart);
		$("#header").append(formattedSkills);

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
		     "degree": "Grado",
		     "majors": "sample",
		     "dates": "2012-2016",
		     "url": "http://estudios.uoc.edu/es/grados/multimedia/presentacion"
		 }
		 ],
		 "onlineCourses": [{
		     "title": "Front End NanoDegree",
		     "school": "Udacity",
		     "date": "Mar 16",
		     "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		}
		],
			
		"display": function(){

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[0].name);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[0].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[0].dates);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[0].location);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[0].majors);

			$("#education").append(HTMLschoolStart);
			$(".education-entry").append(formattedSchoolName);
			$(".education-entry").append(formattedSchoolDegree);
			$(".education-entry").append(formattedSchoolDates);
			$(".education-entry").append(formattedSchoolLocation);
			$(".education-entry").append(formattedSchoolMajor);


			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[0].title);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[0].school);
			var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[0].dates);
			var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[0].url);

			$(".education-entry").append(HTMLonlineClasses);
			$(".education-entry").append(formattedOnlineTitle);
			$(".education-entry").append(formattedSchoolDegree);
			$(".education-entry").append(formattedOnlineSchool);
			$(".education-entry").append(formattedOnlineDates);
			$(".education-entry").append(formattedOnlineURL);

		}

	
}

var work ={
	"jobs":[{
		 "employer": "Talentier" ,
	     "title": "UX Developer" ,
	     "location": "Barcelona" ,
	     "dates": "in progress" ,
	     "description": "Doing" 

	},{
		"employer": "SocialBro" ,
	     "title": "Technical Support" ,
	     "location": "London" ,
	     "dates": "2014" ,
	     "description": "Doing ya" 
	},
	{
		 "employer": "Universal Didactics" ,
	     "title": "Web developer" ,
	     "location": "Barcelona" ,
	     "dates": "in progress" ,
	     "description": "Doing" 

	}],
	"display": function(){
		$("#workExperience").append(HTMLworkStart);
		for(job in work.jobs){

		var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

		
		$(".work-entry").append(formattedWorkEmployer);
		$(".work-entry").append(formattedWorkTitle);
		$(".work-entry").append(formattedWorkDates);
		$(".work-entry").append(formattedWorkLocation);
		$(".work-entry").append(formattedWorkDescription);
		}
	}
}



var projects={
	"projects": [{
      "title": "string" ,
      "dates": "string" ,
      "description": "string",
      "images": "array with string urls"
      }],
"display": function(){

	var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[0].title);
	var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[0].dates);
	var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[0].description);
	var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[0].images);


	$("#projects").append(HTMLprojectStart);
	$(".project-entry").append(formattedProjectTitle);
	$(".project-entry").append(formattedProjectDates);
	$(".project-entry").append(formattedProjectDescription);
	$(".project-entry").append(formattedProjectImage);
}


}












bio.display();
work.display();
projects.display();
education.display();


$("#mapDiv").append(googleMap);




/*var HTMLemail.replace("%data%","bio.");
var HTMLtwitter.replace("%data%","bio.");
var HTMLgithub.replace("%data%","bio.");
var HTMLblog.replace("%data%","bio.");
var HTMLlocation.replace("%data%","bio.");



/*


$("#workExperience").append();
$("#projects").append();
$("#education").append();


/*if(bio.skills.length > 0){
	$("#header").append(HTMLskillStart);
	var formattedSkill = HTMLskills.replace("%data%,bio.skills[0]");

	$("#skills").append(bio.skills);
}

*/