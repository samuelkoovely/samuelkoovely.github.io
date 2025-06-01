// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-literature",
          title: "Literature",
          description: "Papers, Publications, Theses, etc. in reversed chronological order",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "A non-comprehensive list of things that I have been working on.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Click on the top pdf button to download the full cv.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "A list of my teaching experiences",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather.txt";
            },},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2.txt";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-community-detection-in-temporal-networks",
          title: 'Community Detection in Temporal Networks',
          description: "Ongoing",
          section: "Projects",handler: () => {
              window.location.href = "/projects/CD_in_TN.html";
            },},{id: "projects-comic-tree-model",
          title: 'COMIC-Tree Model',
          description: "Ongoing",
          section: "Projects",handler: () => {
              window.location.href = "/projects/COMIC_Tree.html";
            },},{id: "projects-msc-thesis",
          title: 'MSc Thesis',
          description: "Completed",
          section: "Projects",handler: () => {
              window.location.href = "/projects/MSc_Thesis.html";
            },},{id: "projects-seminar-on-machine-learning",
          title: 'Seminar on Machine Learning',
          description: "Completed",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Seminar_ML.html";
            },},{id: "projects-seminar-on-markov-models",
          title: 'Seminar on Markov Models',
          description: "Completed",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Seminar_Markov.html";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%61%6D%75%65%6C.%6B%6F%6F%76%65%6C%79@%6D%61%74%68.%75%7A%68.%63%68", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/samuelkoovely", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-5033-7790", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/SamuelKoovely", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
