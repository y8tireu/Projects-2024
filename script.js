const projects = [
  "https://apraveen24.github.io/GamehubCooking/",
  "https://y8tireu.github.io/GamehubButDifferent/",
  "https://y8tireu.github.io/NumEquator/",
  "https://y8tireu.github.io/Secret/",
  "https://y8tireu.github.io/Sassy-Girls/",
  "https://y8tireu.github.io/Three.js-Demo/",
  "https://y8tireu.github.io/Dodge-The-Rocks/",
  "https://y8tireu.github.io/3D-Graphics-Demo/",
  "https://y8tireu.github.io/Investment-Tracker/",
  "https://y8tireu.github.io/My-Projects/",
  "https://y8tireu.github.io/",
  "https://y8tireu.github.io/GamehubButBad/",
  "https://y8tireu.github.io/Cookie-Clicker/",
  "https://y8tireu.github.io/Sanjivram-Search-Engine2/",
  "https://y8tireu.github.io/Click-The-Circle/",
  "https://sanjivramgamehub.netlify.app/",
  "https://y8tireu.github.io/Sanjivram-Search-Engine/",
  "https://y8tireu.github.io/Tag/",
  "https://y8tireu.github.io/Terraria/",
  "https://y8tireu.github.io/CraftMine/",
  "https://y8tireu.github.io/Est-Clock/",
  "https://y8tireu.github.io/Gamehub/",
  "https://y8tireu.github.io/Biriyani-Preppy/",
  "https://y8tireu.github.io/Aashi-s-Fish-And-Chips/",
  "https://y8tireu.github.io/Pumpkin-Run/",
  "https://y8tireu.github.io/Super-Game-Maker/",
  "https://y8tireu.github.io/Soccer-Physics/",
  "https://y8tireu.github.io/Physics-Game-Maker-2/",
  "https://y8tireu.github.io/Physics-Game-Maker/",
  "https://y8tireu.github.io/Parkour-Game/",
  "https://y8tireu.github.io/Game-Maker/",
  "https://y8tireu.github.io/Collisions/",
  "https://y8tireu.github.io/Soccer-Game/",
  "https://y8tireu.github.io/2D-Platformer-Game-Improved/",
  "https://y8tireu.github.io/Website2/",
  "https://y8tireu.github.io/Website/",
  "https://y8tireu.github.io/TarunRulezAndSanjivram-Proxy/",
  "https://y8tireu.github.io/Test-Demo/",
  "https://y8tireu.github.io/Fruit-Ninja/",
  "https://y8tireu.github.io/2D-Platformer-Game/",
  "https://polarislearning.org",
  "https://y8tireu.github.io/Tag2/",
  "https://y8tireu.github.io/Local-Clock/",
  "https://y8tireu.github.io/Chennai-Tamilnadu-Clock/"
];

const grid = document.getElementById('projects-grid');

// Extract project names and display them
projects.forEach(project => {
  const name = project
    .split('/')
    .filter(Boolean)
    .pop()
    .replace(/-/g, ' ')
    .replace(/%20/g, ' ');

  const card = document.createElement('div');
  card.classList.add('project-card');
  card.innerHTML = `<a href="${project}" target="_blank">${name || 'Home'}</a>`;
  grid.appendChild(card);
});

