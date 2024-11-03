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
      title: "KnackX (Social Media App)",
      description: "KnackX(Social Media App): A full-stack MERN social media platform that allows users to sign up, log in, and customize their profiles. Users can create posts, like and comment on content, and follow/unfollow other users to enhance connectivity. The application features real-time updates, user profiles displaying follower counts, and an interactive feed for exploring posts from other users",
      image: "images/KnackX.png",
      Link:"https://social-media-front-end-seven.vercel.app",
    },
    {
      title: "Expirify App",
      description: "It's a smart product management system that helps you keep track of your products' expiration dates effortlessly! 🎯📆 Here are the highlights: ✨ Manually add product details like the name, manufacturing date, and expiry date. 📝 ⚡ Scan products easily with your smartphone camera to automatically detect details! 📱📸 🎨 Get notified via Gmail if a product is expiring within the next month! 📨🔔",
      image: "images/Expirify.png",
      Link: "https://expirify-front-end.vercel.app"
    },
    {
      title: "Personal Finance Tracker",
      description: "Personal Finance Tracker: A user-friendly tool that allows you to manage your finances by adding income and expenses. It provides a comprehensive summary of your current financial status, helping you make informed decisions",
      image: "images/F-Tracker.png",
      Link:"https://github.com/TanishqRathi12/Personal-Finance-Tracker",
    },
    {
      title: "My Blogging App",
      description: "My Blogging App: A full-stack MERN blogging platform that enables users to create, edit, and delete blog posts. User authentication and enhanced post management",
      image: "images/Blog-App.png",
      Link:"https://express-blog-server.onrender.com/",
    },
    {
      title: "Health Service App",
      description: "A simple and intuitive web application for managing health services, allowing users to add, update, and delete services.",
      image: "images/H-App.png",
      Link: "https://github.com/TanishqRathi12/Health-Service-Frontend"
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
