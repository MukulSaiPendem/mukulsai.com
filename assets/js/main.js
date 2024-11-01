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



const projectsData = [
        {
          title: "E-Learning Web Application",
          shortDescription: "An interactive platform for students and teachers.",
          description: "An interactive platform for students and teachers with course registration and video content, similar to Coursera but customized for college courses.",
          githubLink: "https://github.com/yourusername/elearning-app",
          websiteLink: "https://elearning-app.com"
        },
        {
          title: "Face Mask Detection System",
          shortDescription: "A real-time mask detection tool leveraging OpenCV.",
          description: "A real-time mask detection tool leveraging OpenCV and machine learning, deployed as a Streamlit web app.",
          githubLink: "https://github.com/yourusername/facemask-detector",
          websiteLink: "https://facemask-detector.com"
        },
        {
          title: "Cloud-Based Web Application",
          shortDescription: "A scalable cloud application using CI/CD.",
          description: "Developed a cloud application using GCP with CI/CD pipelines for automated deployment and scaling.",
          githubLink: "https://github.com/yourusername/cloud-app",
          websiteLink: "https://cloud-app.com"
        },
        {
          title: "Productivity App",
          shortDescription: "A mobile app focused on task management.",
          description: "A mobile app focused on task management, well-being, and productivity tracking, built using Flutter.",
          githubLink: "https://github.com/yourusername/productivity-app",
          websiteLink: "https://productivity-app.com"
        },
        {
          title: "Automated Expense Tracker",
          shortDescription: "A Spring Boot app for expense tracking.",
          description: "A Spring Boot application to track and categorize expenses with integrated support for Splitwise data.",
          githubLink: "https://github.com/yourusername/expense-tracker",
          websiteLink: "https://expense-tracker.com"
        },
        {
          title: "Portfolio Website",
          shortDescription: "An interactive personal website.",
          description: "An interactive personal website with project highlights, built using HTML, CSS, and JavaScript.",
          githubLink: "https://github.com/yourusername/portfolio-website",
          websiteLink: "https://portfolio-website.com"
        },
        {
          title: "Real-Time Chat Application",
          shortDescription: "A Java-based chat app for messaging.",
          description: "A real-time chat application using Java, TCP, and UDP sockets, supporting messaging and file transfer for 50+ concurrent users.",
          githubLink: "https://github.com/yourusername/chat-app",
          websiteLink: "https://chat-app.com"
        },
        {
          title: "Augmented Reality Campus Map",
          shortDescription: "An AR app for campus navigation.",
          description: "An AR map app for campus navigation, providing navigation assistance, building labels, and points of interest using AR technology.",
          githubLink: "https://github.com/yourusername/ar-campus-map",
          websiteLink: "https://ar-campus-map.com"
        },
        {
          title: "Green Revolution Data Visualization",
          shortDescription: "A data visualization project on sustainable farming.",
          description: "Data analysis and storytelling on sustainable farming, educating museum-goers about the Green Revolution's impact on agriculture and emissions.",
          githubLink: "https://github.com/yourusername/green-revolution",
          websiteLink: "https://green-revolution.com"
        },
        {
          title: "Tee Designer",
          shortDescription: "An interactive t-shirt designer app.",
          description: "An interactive t-shirt designer using React.js and Three.js, allowing custom logo and print options with AI-generated patterns.",
          githubLink: "https://github.com/yourusername/tee-designer",
          websiteLink: "https://tee-designer.com"
        },
        {
          title: "Corn Quest Project",
          shortDescription: "Data simulation for sustainable farming.",
          description: "A project to simulate the impact of crop management practices on yield and nutrient loss, showcased at the Cade Museum.",
          githubLink: "https://github.com/yourusername/corn-quest",
          websiteLink: "https://corn-quest.com"
        }
      
    // Add more projects as needed
  ];
  
  document.addEventListener("DOMContentLoaded", () => {
    const masonryContainer = document.getElementById("masonryContainer");
    const modal = document.getElementById("projectModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");
    const modalGithubLink = document.getElementById("modalGithubLink");
    const modalWebsiteLink = document.getElementById("modalWebsiteLink");
    const closeModal = document.getElementById("closeModal");
  
    // Render projects
    projectsData.forEach((project, index) => {
      const projectCard = document.createElement("div");
      projectCard.innerHTML = `<h3>${project.title}</h3><p>${project.shortDescription}</p>`;
      projectCard.dataset.index = index;
      projectCard.addEventListener("click", () => openModal(index));
      masonryContainer.appendChild(projectCard);
    });
  
    // Handle Masonry layout using Flexbox with JavaScript for equal height columns
    const numCols = 3;
    const colHeights = Array(numCols).fill(0);
    Array.from(masonryContainer.children).forEach((child, i) => {
      const order = i % numCols;
      child.style.order = order;
      colHeights[order] += parseFloat(child.clientHeight);
    });
    masonryContainer.style.height = Math.max(...colHeights) + "px";
  
    // Open modal and populate details
    function openModal(index) {
      const project = projectsData[index];
      modalTitle.innerText = project.title;
      modalDescription.innerText = project.description;
      modalGithubLink.href = project.githubLink;
      modalWebsiteLink.href = project.websiteLink;
      modal.style.display = "flex";
      masonryContainer.classList.add("blur");
    }
  
    // Close modal
    closeModal.addEventListener("click", closeProjectModal);
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeProjectModal();
    });
  
    function closeProjectModal() {
      modal.style.display = "none";
      masonryContainer.classList.remove("blur");
    }
  });
  
