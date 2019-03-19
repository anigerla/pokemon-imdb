//A function that converts the timestamp intervals to user friendly figures like 3 minutes ago, 2 hours ago and subtracts the last logged in time from current time to show the time ago
//Source: https://stackoverflow.com/questions/3177836/how-to-format-time-since-xxx-e-g-4-minutes-ago-similar-to-stack-exchange-site

function timeSince(date) {

    let seconds = Math.floor((new Date() - date) / 1000);

    let interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
        return interval + " years";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
        return interval + " months";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
        return interval + " days";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        return interval + " hours";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
        return interval + " minutes";
    }
    return Math.floor(seconds) + " seconds";
}

//in real time the aDay will be picked up from a backend function that will collect the timestamp of the last user login
let aDay = 24 * 60 * 60 * 1000
let timeSince2 = timeSince(new Date(Date.now() - aDay));

//Simple alerts that act on click for the navbar and other buttons like the edit one
function myFunction() {
    alert("Placeholder for buttons");
}

//A function that populates user's name, last login, links his/hers social media accounts and self description

//** Notes to the approach taken: I have used hard-coded data that in real time would be received from the database/API/outside server using fetch requests in the backend and then translated to the front-end either through a front-end fetch request (at least in React) or another way.

let userData = [
    {
        "name": "Pikachu",
        "lastLogin": "2 hrs",
        "img": "./Images/pikachu_avatar.jpg",
        "facebook": "https://www.facebook.com",
        "twitter": "https://www.twitter.com",
        "linkedIn": "https://www.linkedin.com",
        "instagram": "https://www.instagram.com/explore/tags/pikachu/?hl=en",
        "about": "Pikachu are a species of Pokémon licensed by The Pokémon Company, a Japanese corporation. They are yellow rodent-like creatures with powerful electrical abilities."
    }
]

for (let i = 0; i <= userData.length - 1; i++) {
    userInfo(userData[i]);

    function userInfo(userData) {
        //setting user name
        let nameOfUser = document.getElementById('name_of_user');
        nameOfUser.innerHTML = userData.name;
        //last login time is displayed - this information is picked up from the first function above
        let timeAgo = document.getElementById('time_ago');
        timeAgo.innerHTML = timeSince2;
        //setting user profile picture
        let userImg = document.getElementById('user_img');
        userImg.src = userData.img;
        //setting user social media accounts (the links would be account specific in real website)
        document.getElementById('facebook').href=userData.facebook;
        document.getElementById('twitter').href = userData.twitter;
        document.getElementById('linkedIn').href = userData.linkedIn;
        document.getElementById('instagram').href = userData.instagram;
        //setting user profile information
        let aboutUser = document.getElementById('about');
        aboutUser.innerHTML = userData.about;
    }
}

//Data that emulates the stored input that has been entered earlier by the user through input fields on the website (data has been written in simple collection of objects (no JSON) since at this point JS works fine with either formats.
let jobData = [
        {
            dateStart: "July 1998",
            dateEnd: "November 1999",
            dates: "July 1998 – November 1999",
            employer: "Mewtwo Strikes Back",
            title: "1st Movie"
        },
        {
            dateStart: "July 1999",
            dateEnd: "July 2000",
            dates: "July 1999 – July 2000",
            employer: "Pokémon: The Movie 2000",
            title: "2nd Movie"
        },
        {
            dateStart: "July 2000 ",
            dateEnd: "April 2001",
            dates: "July 2000 – April 2001",
            employer: "Spell of the Unknown",
            title: "3rd Movie"
        },
    ]

//A function that calculates the total time between Japanese and North American movie release dates (it has been assumed that the user either enters dates that can be understood by code or that they have been already converted as there can be a multitude of ways to enter dates)

//For loop that goes through every movie release date, converts to milliseconds and subtracts to get the time between release dates
for (let i = 0; i <= jobData.length - 1; i++) {
    function daysBetween(jobData){
        let one_day = 1000 * 60 * 60 * 24;
        let start = new Date(jobData.dateStart).getTime();
        let end = new Date(jobData.dateEnd).getTime();
        let timeWorked = (end - start);
        let timeWorkedYears = (timeWorked / one_day /365).toFixed(2);

        let expDetails = document.getElementById('exp_details');
        let timeWorked2 = document.createElement('div');
        let timeWorkedTotal = document.createElement('span');
        expDetails.appendChild(timeWorked2);
        timeWorked2.appendChild(timeWorkedTotal);
        timeWorked2.classList.add('time_worked');
        timeWorkedTotal.classList.add('time_worked_total');

        //condition checks the length of time between release dates and assigns proper "year/years"
        if(timeWorkedYears < 1.00) {
            timeWorkedTotal.innerHTML = ("less than a year") 
        } else if (timeWorkedYears == 1.00) {
            timeWorkedTotal.innerHTML = (Math.round(timeWorkedYears) + " year")
        } else if(timeWorkedYears > 1.00 && timeWorkedYears < 2.00) {
            timeWorkedTotal.innerHTML = (Math.round(timeWorkedYears) + "+ year")
        } else if(timeWorkedYears >= 2.00) {
            timeWorkedTotal.innerHTML = (Math.round(timeWorkedYears) + "+ years")
        }
    }
}

//innerText; outerText; textContent;

//A function that creates html elements for and displays user input data related to Pokemon experience information
for (let i = 0; i <= jobData.length - 1; i++) {
    experienceData(jobData[i]);
    daysBetween(jobData[i]);

    function experienceData(jobData) {
        let expDetails = document.getElementById('exp_details');
        // empty div is created below that will hold all the of the data for job history
        let jobDiv = document.createElement('div');
        // new div is appended to the existing parent div
        expDetails.appendChild(jobDiv);
        // children of the jobDiv are created to hold dates and movie name
        let jobDates = document.createElement('span');
        let employer = document.createElement('span');
        let title = document.createElement('span');
        // all children are appended to their respective parents
        jobDiv.appendChild(jobDates);
        jobDiv.appendChild(employer);
        jobDiv.appendChild(title);
        //class names are added to newly created elements in order to apply styling to them
        jobDiv.classList.add('job_parent');
        jobDates.classList.add('job_dates');
        employer.classList.add('employer');
        title.classList.add('job_title');
        //empty elements pick up information from the provided data file
        jobDates.innerHTML = jobData.dates;
        employer.innerHTML = jobData.employer;
        title.innerHTML = jobData.title;
    }
}

//Following parts of the general profile display follow the same for loop and html element creation mechanism as above

//Availability section
let availability = [
    {
        day: "mondays",
        times: ["09 am", "05 am"]
    },
    {
        day: "tuesdays",
        times: "off"
    }, 
    { 
        day: "wednesdays",
        times: ["05 am", "05 am"]
    }, 
    {
        day: "thursdays",
        times: ["05 am", "05 am"]
    },
    { 
        day: "fridays",
        times: ["05 am", "05 am"]
    },
    { 
        day: "saturdays",
        times: "all day"
    }, 
    {
        day:"sundays",
        times: "all day"
    }
];

for (let i = 0; i <= availability.length - 1; i++) {
    availabTime(availability[i]);

    function availabTime(availability) {
        //code that picks up days of the week
        let okTimes = document.getElementById('times_availab');
        let okTimesChild = document.createElement('div');
        okTimes.appendChild(okTimesChild);
        okTimesChild.classList.add('ok_times_child');
        let dayOfWeek = document.createElement('span');
        okTimesChild.appendChild(dayOfWeek);
        dayOfWeek.classList.add('day');
        dayOfWeek.innerHTML = availability.day;
        // if elseif else statement that creates html elements based on the times and daily availability that the user picked
        if (availability.times == "all day") {
            let allDay = document.createElement('span');
            okTimesChild.appendChild(allDay);
            allDay.classList.add('all_day_availab');
            allDay.innerHTML = availability.times;
                }
        else if (availability.times == "off") { 
            let offDay = document.createElement('span');
            okTimesChild.appendChild(offDay);
            offDay.classList.add('off_day');
            offDay.innerHTML = availability.times;
        }        
        else {
            let amTime = document.createElement('span');
            let pmTime = document.createElement('span');
            okTimesChild.appendChild(amTime);
            okTimesChild.appendChild(pmTime);
            amTime.classList.add('am_time');
            pmTime.classList.add('pm_time');
            amTime.innerHTML = availability.times[0];
            pmTime.innerHTML = availability.times[1];
        }
    }
}

//Equipment section
let jobPreferences = ["light ball", "surfboard", "balloons"];

for(let i=0; i <= jobPreferences.length - 1; i++) {
    preferredJob(jobPreferences[i]);

    function preferredJob(jobPreferences) {
        let jobPref = document.getElementById('job_pref');
        let jobPrefChild = document.createElement('span');
        jobPref.appendChild(jobPrefChild);
        jobPrefChild.classList.add('job_pref_child');
        jobPrefChild.innerHTML = jobPreferences;
    }
}

//Languages section
let languagesSpoken = ["English", "German", "Japanese"];

for (let i = 0; i <= languagesSpoken.length - 1; i++) {
    knownLanguages(languagesSpoken[i]);

    function knownLanguages(languagesSpoken) {
        let languages = document.getElementById('languages');
        let languagesChild = document.createElement('div');
        languages.appendChild(languagesChild);
        languagesChild.classList.add('languages_child');
        languagesChild.innerHTML = languagesSpoken;
    }
}

//Skills and Abilities section
let skillsCertificates = ["Static", "Lightning Rod", "Thunder Jolt"];    

for (let i = 0; i <= skillsCertificates.length - 1; i++) {
    skills(skillsCertificates[i]);

    function skills(skillsCertificates) {
        let skillsCert = document.getElementById('skills_cert');
        let skillsCertChild = document.createElement('div');
        skillsCert.appendChild(skillsCertChild);
        skillsCertChild.classList.add('skills_cert_child');
        skillsCertChild.innerHTML = skillsCertificates;
    }
}