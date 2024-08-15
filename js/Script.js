document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  const projectsContainer = document.querySelector(".projects-container");
  const projects = [
    {
      title: "Social-Media-App",
      description: "Social Media App: A full-stack MERN social media platform featuring user sign-up, login, and profile customization. Users can post updates, like, and comment on content, with upcoming features including enhanced user exploration and connectivity",
      image: "images/Social-Media.png",
      Link:"https://social-media-front-end-gilt.vercel.app",
    },
    {
      title: "Personal Finance Tracker",
      description: "Personal Finance Tracker: A user-friendly tool that allows you to manage your finances by adding income and expenses. It provides a comprehensive summary of your current financial status, helping you make informed decisions",
      image: "images/F-Tracker.png",
      Link:"https://github.com/TanishqRathi12/Personal-Finance-Tracker",
    },
    {
      title: "Habit Tracker",
      description: "Habit Tracker: An interactive tool to help you establish and maintain habits. Add new habits, mark them as done, monitor your progress with a visual progress meter, and easily remove habits as needed",
      image: "images/H-Tracker.png",
      Link:"https://habit-tracker-opal-pi.vercel.app",
    },
    {
      title: "Recipe App",
      description: "Recipe App: A dynamic platform for managing and viewing your recipes. Add new recipes and explore them with engaging interactive animations for an enhanced user experience",
      image: "images/R-App.png",
      Link:"https://github.com/TanishqRathi12/React-Recipe-App",
    },
    {
      title: "Weather App",
      description: "Weather App: is a web application created using HTML, CSS, and JavaScript that allows users to check the current temperature and weather conditions of any city or country globally. It features a simple search functionality where users can enter the name of a location to retrieve real-time weather data, including temperature in Celsius",
      image: "images/W-App.png",
      Link:"https://tanishqrathi12.github.io/Weather-App",
    },
    {
      title: "News App",
      description: "News App: Stay updated with the latest headlines from around the world. Explore global news, tech updates, business insights, and entertainment stories, all in one place",
      image: "images/News-App.png",
      Link:"https://tanishqrathi12.github.io/News-App-UI",
    },
    {
        title: "Quiz App",
        description: "Quiz App: Test your knowledge with a fun and interactive quiz application. answer questions, and receive instant feedback on your performance",
        image: "images/Quiz-App.png",
        Link: "https://github.com/TanishqRathi12/Quiz-App"
    },
    {
      title: "Minsweeper Game",
      description: "A Minesweeper game that challenges players to clear a grid without detonating hidden mines. With logic and strategy, players reveal tiles and mark suspected mines, aiming to complete the board safely Minesweeper game that challenges players to clear a grid without detonating hidden mines. With logic and strategy, players reveal tiles and mark suspected mines, aiming to complete the board safely",
      image: "images/M-game.png",
      Link: "https://github.com/TanishqRathi12/Minesweeper-game"
    },
  ];

  const displayProjects = (filteredProjects) => {
    projectsContainer.innerHTML = "";
    filteredProjects.forEach((project) => {
      const projectElement = document.createElement("div");
      projectElement.classList.add("project");
      projectElement.innerHTML = `
                  <h3>${project.title}</h3>
                  <img src="${project.image}" alt="${project.title}" class="project-image">
                  <p class="project-description" >${project.description}</p>
                  <p><a href="${project.Link}" target="_blank" class="project-link">View Project</a></p>
              `;
      projectsContainer.appendChild(projectElement);
    });
  };

  displayProjects(projects);


  const searchInput = document.querySelector("#search");
  searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredProjects = projects.filter(
      (project) =>
        project.title.toLowerCase().includes(searchTerm) ||
        project.description.toLowerCase().includes(searchTerm)
    );
    displayProjects(filteredProjects);
  });

 
  const contactForm = document.querySelector("form");
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;

    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields");
    } else {
      alert("Message sent");
      contactForm.reset();
    }
  });
});
