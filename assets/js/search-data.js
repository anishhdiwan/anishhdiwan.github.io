// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Anish Diwan&#39;s publications.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "dropdown-projects",
              title: "projects",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "news-i-graduated-msc-robotics-from-tu-delft-with-cum-laude",
          title: 'I graduated MSc. Robotics from TU Delft with cum laude! 🎓',
          description: "",
          section: "News",},{id: "news-my-msc-thesis-was-accepted-at-iclr-2025-page-facing-up",
          title: 'My MSc. thesis was accepted at ICLR 2025 :page_facing_up:',
          description: "",
          section: "News",},{id: "news-i-started-my-ph-d-in-robot-learning-at-ias-tu-darmstadt",
          title: 'I started my Ph.D. in robot learning at IAS, TU Darmstadt!',
          description: "",
          section: "News",},{id: "news-i-will-attend-the-rl-summer-school-2026",
          title: 'I will attend the RL Summer School 2026!',
          description: "",
          section: "News",},{id: "news-new-paper-trust-region-irl-was-accepted-at-icml-2026-page-facing-up",
          title: 'New Paper: Trust Region IRL was accepted at ICML 2026 :page_facing_up:',
          description: "",
          section: "News",},{
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
