const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://sevalkr.github.io/Portfolio',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Seval Karaman',
  role: 'Game Developer',
  description:
    'Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Egg Steal',
    short_description: 'Arcade idle heisting game.',
    description:
        'Welcome to the exciting world of Eggs and Monsters, where you can embark on thrilling heists'+
        ' with your team of pet monsters to steal precious eggs from enemy monsters! In this game,'+
         ' you will lead your monsters on daring missions to steal eggs and bring them back to your base to hatch them into more'+
         ' powerful monsters.',
      
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    appIcon: eggStealAppIcon,
    videoUrl: "https://vimeo.com/user200831563",
    details: [
        "Development platform: Unity",
        "Development time: 2 weeks",
  
    ],
},
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
  'Enzyme',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'johnsmith@mail.com',
}

export { header, about, projects, skills, contact }
