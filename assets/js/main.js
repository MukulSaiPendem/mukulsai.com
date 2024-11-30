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

const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58; // Adjust offset as needed
        const sectionId = current.getAttribute("id");
        const sectionsClass = document.querySelector(
            `.nav__menu a[href*='${sectionId}']`
        );

        // Ensure sectionsClass exists before accessing classList
        if (sectionsClass) {
            if (
                scrollDown > sectionTop &&
                scrollDown <= sectionTop + sectionHeight
            ) {
                sectionsClass.classList.add("active-link");
            } else {
                sectionsClass.classList.remove("active-link");
            }
        }
    });
};

window.addEventListener("scroll", scrollActive);

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
sr.reveal('.experience-content,.skills__data, skills__category, skills__items, .work__img, .projects, .masonry-with-columns, .card,.contact__input',{interval: 100}); 


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



// Define project details in a JavaScript array with Markdown descriptions
const projects = [
    {
        id: 1,
        title: "E-Learning Web Application",
        description: `
- **Responsive** online learning platform for **students** and **professors**
- Built with **Node.js**, **React.js**, and **MongoDB**
- Integrated and managed **50GB+** of multimedia content on **AWS S3**
- Hosted on **AWS EC2** with **OAuth** and **SSL** for secure authentication
- Achieved **100% uptime** during testing, ensuring high availability
    `,
        technologies: [ "React.js", "MongoDb","Node.js","AWS" ],
        githubLink: "https://github.com/INFO-6150/e_learning",
        websiteLink: null,
        imageUrl: null
    }
    ,
    {
        id: 2,
        title: "Real-time Face Mask Detection",
        description: `
- Utilized **MobileNetV2** for training a robust face mask detection model.
- Designed and implemented real-time detection with **OpenCV** and **Streamlit** for an interactive user interface.
- Preprocessed datasets with **image augmentation** techniques to enhance model accuracy.
- Achieved seamless deployment by integrating pre-trained models into a web application.
        `,
        technologies: [ "TensorFlow", "OpenCV","Streamlit","Python", "ML" ],
        githubLink: "https://github.com/MukulSaiPendem/RealTime-Mask-Recognition.git",
        websiteLink: null,
        imageUrl: null
    }
    ,
    {
        id: 3,
        title: "Cloud-Based Web Application",
        description: `

- **Scalable Deployment**: Developed and deployed a web application using **Spring Boot** on **Google Cloud Platform**.
- **Serverless Email Verification**: Implemented a **Cloud Function** to handle user email verification seamlessly.
- **Infrastructure as Code**: Used **Terraform** for automated infrastructure deployment and management on GCP.
- **Custom Image Creation**: Utilized **Packer** to build reusable images for efficient instance provisioning.
- **Autoscaling and High Availability**: Configured **Managed Instance Groups** with **autoscaling** to handle varying traffic loads, ensuring performance and reliability.
- **CI/CD Pipeline**: Designed and implemented a **GitHub Workflow** for **Continuous Integration** and **Continuous Deployment**, enabling automated builds, testing, and deployments directly to GCP.

      `,
      technologies: [ "Spring boot", "Java","GCP","Serverless", "CI/CD","Git Actions","Packer", "Terraform" ],
        githubLink: "https://github.com/orgs/cloud-orgz/repositories",
        websiteLink: null,
        imageUrl: null
    }
    ,
    {
        id: 4,
        title: "Calderon Bulldogs",
        description: `
- **CMS-Driven Platform**: Transformed a static business website into a dynamic application with a robust **Content Management System (CMS)**.
- **Admin Features**: Enabled the business to manage customer relationships, content updates, and e-commerce operations seamlessly.
- **Media Management**: Integrated **AWS S3** for secure image and file storage to support high-quality media uploads.
- **High Performance**: Built with **Next.js** for server-side rendering and optimized performance.
- **Database Management**: Utilized **PostgreSQL** with **Prisma** for efficient and scalable data handling.
- **tRPC Integration**: Enabled type-safe API communication between the frontend and backend for a seamless developer experience.
        `,
        technologies: [ "Next.js", "TypeScript","AWS S3", "Tailwind CSS", "PostgreSQL", "Prisma", "tRPC" ],
        githubLink: "https://github.com/altitud-initiative/calderon-bulldogs",
        websiteLink: null,
        imageUrl: null
    }
    
    ,
    {
        id: 5,
        title: "Cyber Unbound Platform Development",
        description: `
- **Secure Hiring Platform**: Built a platform for hiring cybersecurity professionals, emphasizing data integrity and security.
- **High-Performance**: Developed with **Next.js** for server-side rendering and fast loading times.
- **Scalable Database**: Integrated **MongoDB** to handle dynamic data storage with high reliability.
- **Data Integrity**: Ensured data accuracy and consistency across the platform using robust validation mechanisms.
- **User-Friendly Interface**: Designed an intuitive and responsive UI for seamless navigation.
    
        `,
        technologies: [ "Next.js", "JavaScript","AWS" ],
        githubLink: null,
        websiteLink: null,
        imageUrl: null
    }
    ,
    {
        id: 6,
        title: "SIM Activation Application",
        description: `
- **Efficient SIM Activation**: Engineered a web application that reduced SIM activation time by **40%**, streamlining the activation process for customers.
- **Reduced Support Tickets**: Enhanced user experience and resolved common pain points, resulting in a **25% reduction** in support tickets.
- **Robust Backend**: Developed with **Spring Boot**, ensuring scalable and reliable backend services.
- **Interactive Frontend**: Built with **AngularJS**, providing a responsive and dynamic user interface for seamless activation workflows.
- **Data Security**: Integrated security measures to protect sensitive customer data during the activation process.

        `,
        technologies: [ "Java", "Spring Boot","Angular.js", "TypeScript" ],
        githubLink: null,
        websiteLink: null,
        imageUrl: null
    }
    ,
    {
        id: 7,
        title: "Task Manager Application",
        description: `
    
- **Cross-Platform Compatibility**: Developed a task management app using **React Native**, ensuring seamless performance on both iOS and Android devices.
- **Real-Time Data Sync**: Integrated **Firebase** for real-time task updates and synchronization across devices.
- **Secure Authentication**: Implemented user authentication via **Firebase Auth**, ensuring data security and privacy.
- **State Management**: Utilized **Redux** to manage application state efficiently, ensuring a smooth user experience.
- **Offline Support**: Enabled offline task creation and syncing once the device reconnects.
        `,
        technologies: [ "React Native", "JavaScript","FireBase" ],
        githubLink: null,
        websiteLink: null,
        imageUrl: null
    }
    ,
    {
        id: 8,
        title: "Job Search GPT",
        description: `

- **AI-Powered Job Search**: Leveraged **Tavily.ai** and **OpenAI-powered agents** to curate personalized and relevant job listings.
- **Enhanced Search Accuracy**: Improved the relevance of search results by analyzing job descriptions and user preferences with AI models.
- **Custom API Development**: Built a RESTful API to fetch and deliver curated job listings efficiently.
- **Seamless Integration**: Designed the API to integrate easily with job boards, career platforms, and user-facing applications.

        `,
        technologies: [ "Python", "AI Agents","OpenAI", "Tavily.ai" ],
        githubLink: "https://github.com/MukulSaiPendem/job-search-gpt",
        websiteLink: null,
        imageUrl: null
    }    
    ,
    {
        id: 9,
        title: "Tee Graphic Designer",
        description: `
- **Custom T-Shirt Designer**: Upload images, add text, and create unique t-shirt designs.
- **AI-Powered Creativity**: Generate logos, patterns, and designs using OpenAI's **DALL-E API**.
- **Real-Time Editing**: Drag, resize, and rotate designs effortlessly for a seamless user experience.
- **Responsive UI**: Built with **Tailwind CSS**, optimized for all devices.
- **Blazing-Fast Development**: Powered by **Vite** for fast builds and improved performance.

        `,
        technologies: [ "Vite.js", "Node.js","OpenAI", "Dall-e","Three.js", "Tailwind CSS" ],
        githubLink: "https://github.com/MukulSaiPendem/tee-designer",
        websiteLink: null,
        imageUrl: null
    }
    
];

function openModalById(projectId) {
    const isMobile = window.innerWidth <= 768;
    const project = projects.find(p => p.id === projectId);
    if (!project) {
        console.error("Project not found");
        return;
    }

    // If it's mobile, redirect to the GitHub repository
    if (isMobile) {
        if (project.githubLink) {
            window.open(project.githubLink, "_blank"); // Redirect to GitHub
        } else {
            console.warn("No GitHub link provided for this project.");
        }
        return;
    }
    // Set the modal title
    document.getElementById("modal-title").innerText = project.title;

    // Render Markdown description
    const converter = new showdown.Converter();
    document.getElementById("modal-description").innerHTML = converter.makeHtml(project.description);

    // Set GitHub link
    const githubLink = document.getElementById("modal-github-link");
    if (project.githubLink) {
        githubLink.href = project.githubLink;
        githubLink.style.display = "inline-block";
    } else {
        githubLink.style.display = "none";
    }

    // Handle optional website link
    const websiteLink = document.getElementById("modal-website-link");
    if (project.websiteLink) {
        websiteLink.href = project.websiteLink;
        websiteLink.style.display = "inline-block";
    } else {
        websiteLink.style.display = "none";
    }

    console.log("Technologies Array:", project.technologies);

    // Populate technologies as buttons
    const technologiesContainer = document.getElementById("modal-technologies");
    technologiesContainer.innerHTML = ""; // Clear previous content
    if (project.technologies && Array.isArray(project.technologies)) {
        project.technologies.forEach((tech) => {
            const button = document.createElement("a");
            button.className = "tech-button";
            button.textContent = tech; // Updated to use the string directly
            technologiesContainer.appendChild(button);
        });
    } else {
        console.warn("No technologies found for this project");
    }

    // Handle optional image
    const modalImage = document.getElementById("modal-image");
    if (project.imageUrl) {
        modalImage.src = project.imageUrl;
        modalImage.style.display = "block";
    } else {
        modalImage.style.display = "none";
    }

    // Show the modal and overlay
    document.getElementById("modal-overlay").classList.add("active");
    document.getElementById("modal").classList.add("active");

    // Add blur effect and disable scrolling
    document.getElementById("main-content").classList.add("blur");
    document.body.classList.add("no-scroll");
}


function closeModal() {
    document.getElementById("modal-overlay").classList.remove("active");
    document.getElementById("modal").classList.remove("active");

    // Remove blur effect and enable scrolling
    document.getElementById("main-content").classList.remove("blur");
    document.body.classList.remove("no-scroll");
}



// Add event listeners for project cards
document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
        const projectId = parseInt(card.getAttribute("data-id")); // Retrieve project ID from data-id
        openModalById(projectId); // Call the function with the project ID
    });
});

