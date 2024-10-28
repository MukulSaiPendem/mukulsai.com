/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img, .skills__items',{delay: 200}); 
sr.reveal('.home__social-icon',{ interval: 100}); 
sr.reveal('.experience-content,.skills__data, skills__category, skills__items, .work__img, .contact__input',{interval: 100}); 


document.querySelectorAll('.company-item').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default anchor behavior

        // Remove 'selected' and 'active' from all items
        document.querySelectorAll('.company-item').forEach(el => el.classList.remove('selected'));
        document.querySelectorAll('.role-description').forEach(el => el.classList.remove('active'));

        // Add 'selected' to clicked item
        this.classList.add('selected');

        // Find the corresponding role description and activate it
        const id = this.getAttribute('data-id');
        document.querySelector(`.role-description[data-id="${id}"]`).classList.add('active');
    });
});


const projects = {
    elearning: {
        title: "E-Learning Web Application",
        description: "A responsive online platform for e-learning with features for both students and teachers.",
        tech: "React, Node.js, MongoDB, AWS",
        links: {
            github: "https://github.com/username/elearning",
            website: "https://elearning.example.com"
        }
    },
    facemask: {
        title: "Face Mask Detection System",
        description: "Real-time mask detection using OpenCV and machine learning.",
        tech: "Python, OpenCV, Streamlit",
        links: {
            github: "https://github.com/username/facemask",
            website: "https://facemaskdetection.example.com"
        }
    },
    cloudapp: {
        title: "Cloud-Based Web Application",
        description: "A scalable web application with CI/CD pipelines on Google Cloud Platform.",
        tech: "GCP, Docker, Kubernetes, Terraform",
    },
    productivity: {
        title: "Productivity App",
        description: "Task management and well-being tracking app, built with Flutter.",
        tech: "Flutter, Dart",
    },
    expensetracker: {
        title: "Automated Expense Tracker",
        description: "Expense tracking with Spring Boot backend, integrated with Splitwise.",
        tech: "Spring Boot, PostgreSQL, Java",
    },
    portfolio: {
        title: "Portfolio Website",
        description: "An interactive portfolio website showcasing various projects.",
        tech: "HTML, CSS, JavaScript",
        links: {
            github: "https://github.com/username/portfolio",
            website: "https://username.github.io"
        }
    },
    chatapp: {
        title: "Real-Time Chat Application",
        description: "Java-based chat application supporting messaging and file transfers.",
        tech: "Java, TCP/UDP Sockets",
    }
};

function openProjectDetails(projectId) {
    const project = projects[projectId];
    document.getElementById('projectTitle').innerText = project.title;
    document.getElementById('projectDescription').innerText = project.description;
    document.getElementById('projectTech').innerText = project.tech;
    
    const projectLinks = document.getElementById('projectLinks');
    projectLinks.innerHTML = ""; // Clear previous links

    if (project.links) {
        if (project.links.github) {
            projectLinks.innerHTML += `<a href="${project.links.github}" target="_blank" class="project__link">GitHub</a>`;
        }
        if (project.links.website) {
            projectLinks.innerHTML += `<a href="${project.links.website}" target="_blank" class="project__link">Website</a>`;
        }
    }

    document.getElementById('projectDetails').style.display = 'flex';
}

function closeProjectDetails() {
    document.getElementById('projectDetails').style.display = 'none';
}


