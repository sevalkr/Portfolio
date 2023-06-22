import eggStealAppIcon from './media/appIcons/eggStealAppIcon.png';
import BoingCutAppIcon from './media/appIcons/BoingCutAppIcon.png';
import BeelineRaceAppIcon from './media/appIcons/BeelineRaceAppIcon.png';
import BurnMatchesAppIcon from './media/appIcons/BurnMatchesAppIcon.png';
import CarsAndRoadsAppIcon from './media/appIcons/CarsAndRoadsAppIcon.png';
import CircleFighterAppIcon from './media/appIcons/CircleFighterAppIcon.png';
import HammerShooterAppIcon from './media/appIcons/HammerShooterAppIcon.png';
import HelixSortAppIcon from './media/appIcons/HelixSortAppIcon.png';
import MineSurvivorAppIcon from './media/appIcons/MineSurvivorAppIcon.png';
import OneManAppIcon from './media/appIcons/OneManAppIcon.png';
import ShooterFieldAppIcon from './media/appIcons/ShooterFieldAppIcon.png';
import coloridleIcon from './media/appIcons/ringlight.png';
import coloraidIcon from './media/appIcons/coloraid.png';
import rightChoiceIcon from './media/appIcons/rightchoice.png';
import streamerIcon from './media/appIcons/streamer.png';
import moneyqueenIcon from './media/appIcons/moneyqueen.png';
import mafiaIcon from './media/appIcons/mafia.png';
import tapeartIcon from './media/appIcons/tapeart.png';
import jellyIcon from './media/appIcons/jelly.png';
import stairIcon from './media/appIcons/StairHero.jpg';
import skillIcon from './media/appIcons/SkillStream.jpg';


const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://sevalkr.github.io/Portfolio',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Seval Karaman',
  role: 'Game Developer',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/seval-karaman-379276159/',
    github: 'https://github.com/sevalkr',
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
    videoUrl: "https://vimeo.com/838791604",
    details: [
        "Development platform: Unity",
        "Development time: 2 weeks",
  
    ],
},
{
  name: 'Burn Matches',
  short_description: 'Puzzle game.',
  description:
      'Burn Matches! came fresh and waiting for you!'+
      'It is a chance to proof your puzzle skills.'+
      'Turn the matches to line them up in the correct order. Burn them and watch the light show!',
    
  sourceCode: 'https://github.com',
  livePreview: 'https://github.com',
  appIcon: BurnMatchesAppIcon,
  videoUrl: "https://vimeo.com/829536429",
  details: [
      "Development platform: Unity",
      "Development time: 2 weeks",

  ],
},
{
  name: 'Mine Survivor',
  short_description: 'Idle action game.',
  description:
      'In this addictive gameplay, you will be both miner and a warrior.'+

      'Dig the ground to extract gold. Defeat the enemies to earn skull. Combination of these two, provide you some offers!!'+
      
      'Create your skill set and improvements from the offers.'+
      
      'Defend your base, show them who the real survivor is',
  
    
  sourceCode: 'https://github.com',
  livePreview: 'https://github.com',
  appIcon: MineSurvivorAppIcon,
  videoUrl: "https://vimeo.com/829539945",
  details: [
      "Development platform: Unity",
      "Development time: 2 weeks",

  ],
},
{
  name: 'Boing Cut',
  short_description: 'Clicker game.',
  description:
      'Ready to this cute adventure? Your workers are ready and waiting for you.'+

      'Did you know that you have the most talented workers since they can both sew and cut?'+
      
      'Once they finished the sewing, they can start the cutting part.'+
      
      'Do not forget to use the buttons to improve your progress.'+
      
      'Advance your progress to encounter new patterns.',
    
  sourceCode: 'https://github.com',
  livePreview: 'https://github.com',
  appIcon: BoingCutAppIcon,
  videoUrl: "https://vimeo.com/829544686",
  details: [
      "Development platform: Unity",
      "Development time: 1 week",

  ],
},
{
  name: 'Helix Sort',
  short_description: 'Puzzle game.',
  description:
      'Swipe to rotate a row and find matching objects. '+

      'Place same objects on the same column to match them. '+
      
      'Rotate around shelf and determine your strategy. '+
      
      'Easy to understand, but some real challenges are waiting for you!',
    
  sourceCode: 'https://github.com',
  livePreview: 'https://github.com',
  appIcon: HelixSortAppIcon,
  videoUrl: "https://vimeo.com/829539010",
  details: [
      "Development platform: Unity",
      "Development time: 1 week",

  ],
},
{
  name: 'Skill Stream',
  short_description: 'Action game.',
  description:
      
      'Engage in combat with enemies and showcase your skills. '+
      'Skill Stream provides you with a constant action-packed experience.'+
      'While your character engages in battles against foes, strategically use your abilities to secure victory.',
    
  sourceCode: 'https://github.com',
  livePreview: 'https://github.com',
  appIcon: skillIcon,
  videoUrl: "https://vimeo.com/838799660",
  details: [
      "Development platform: Unity",
      "Development time: 2 weeks",

  ]},
{
  name: 'Cars and Roads',
  short_description: 'Simulation game.',
  description:
      
      'Create your own path to become a millionaire!'+

      'Buy roads and merge them to have different featured ones. Upgrade to earn faster.'+
      
      'Your customers are impatient, but if you will be patient enough to fill the store, your earnings will be increase exponentially.'+
      
      'The game is very dynamic and the most lucrative way is changing rapidly.',
    
  sourceCode: 'https://github.com',
  livePreview: 'https://github.com',
  appIcon: CarsAndRoadsAppIcon,
  videoUrl: "https://vimeo.com/829536905",
  details: [
      "Development platform: Unity",
      "Development time: 2 weeks",

  ],
},
{
  name: 'Stair Hero',
  short_description: 'Shooter game.',
  description:
      'Defeat the enemies and develop yourself! '+

      'Be careful about the obstacles! '+
      
      'Watch your back. You never know where enemies will come from! ',
    

  sourceCode: 'https://github.com',
  livePreview: 'https://github.com',
  appIcon: stairIcon,
  videoUrl: "https://vimeo.com/833130650",
  details: [
      "Development platform: Unity",
      "Development time: 2 weeks",

  ],
},
{
  name: 'Circle Fighter',
  short_description: 'Idle Action game.',
  description:
      'As you battle your way through waves of enemies, '+
      'you will need to use randomly generated cards to access different weapons and abilities.'+
      'Upgrade your weapons and customize your loadout to become an unstoppable force.'+
      'But beware, your enemies will become stronger and more challenging as you progress.'+
      'You will need to use your strategic skills to time your attacks and use your cards wisely.',
    

  sourceCode: 'https://github.com',
  livePreview: 'https://github.com',
  appIcon: CircleFighterAppIcon,
  videoUrl: "https://vimeo.com/829536637",
  details: [
      "Development platform: Unity",
      "Development time: 2 weeks",

  ],
},
{
  name: 'Shooter Field',
  short_description: 'Shooter game.',
  description:
      'You play as a stickman with a cannon for a head.'+

      'Shoot the obstacles on your way and collect the skills on their top.'+
      
      'With fast-paced gameplay and the levels getting harder, this game is the ultimate test of your skill and reflexes.',
      
    
  sourceCode: 'https://github.com',
  livePreview: 'https://github.com',
  appIcon: ShooterFieldAppIcon,
  videoUrl: "https://vimeo.com/829543022",
  details: [
      "Development platform: Unity",
      "Development time: 1 week",

  ],
},
{
  name: 'Hammer Shooter',
  short_description: 'Runner game.',
  description:
      'It is easy to play: throw your hammer to protect yourself & hammer nails to earn money.'+

      'Choose the right gates, do the upgrades and improve your hammer skills.',
    
    
  sourceCode: 'https://github.com',
  livePreview: 'https://github.com',
  appIcon: HammerShooterAppIcon,
  videoUrl: "https://vimeo.com/829538581",
  details: [
      "Development platform: Unity",
      "Development time: 2 weeks",

  ],
},
{
  name: 'One Man Defense',
  short_description: 'Action Defense game.',
  description:
      'To survive this challenging mission, you need to use the best weapons to defeat your enemies.'+

      'At first, it may be difficult to fight alone, but as you progress, you will gain new weapons and abilities.'+

      'Equipped with rifles, rocket launchers, and many other weapon options, you will enter the battlefield.'+
      
      'As the number of enemies increases, you must think fast and position yourself correctly to defeat them.'+

      'You can also develop various defense strategies to protect yourself.',
    
  sourceCode: 'https://github.com',
  livePreview: 'https://github.com',
  appIcon: OneManAppIcon,
  videoUrl: "https://vimeo.com/829542847",
  details: [
      "Development platform: Unity",
      "Development time: 2 weeks",

  ],
},
{
  name: 'Beeline Race',
  short_description: 'Runner game.',
  description:
      'Pass from the correct gates and open the chests.'+

      'Collect the stickman from the platform or steal from opponents. Make shortcuts by using your stickman.',
    
    
  sourceCode: 'https://github.com',
  livePreview: 'https://github.com',
  appIcon: BeelineRaceAppIcon,
  videoUrl: "https://vimeo.com/829543535",
  details: [
      "Development platform: Unity",
      "Development time: 2 weeks",

  ],
},


{
  name: 'Capo Runner',
  short_description: 'Capo Runner is the game of crowd control with basic mathematical choices.',
  description:
      'Capo Runner is the game of crowd control with basic mathematical choices.' +
      'Collect the money, grow your gang in size and skill, bribe your opponents, buy enterprises and fight the enemy gang to capture the streets.' +
      'You control a young candidate for the throne of the godfather, starting as a simple street thug, pave the way up to the highest boss rank by commanding and supporting your henchman and retainers.',

  sourceCode: 'https://github.com',
  livePreview: 'https://github.com',
  appIcon: mafiaIcon,
  videoUrl: "https://vimeo.com/742429636",
  details: [
      "Development platform: Unity",
      "Development time: 2 weeks",
  ],
},
{
  name: 'Jelly Escape',
  short_description: 'The goal is to remove jelly balls from the board by pulling them with sticks.',
  description:
      'The goal is to remove jelly balls from the board by pulling them with sticks.',

  sourceCode: 'https://github.com',
  livePreview: 'https://github.com',
  appIcon: jellyIcon,
  videoUrl: "https://vimeo.com/742494501",
  details: [
      "Development platform: Unity",
      "Development time: 2 weeks",
  ],
},
{
  name: 'Ring Light Flip',
  short_description: 'Flip your ring light to transform your influencers visual style!',
  description:
      'Flip your ring light to transform your influencers visual style!' +
      'Flip your ring light for changing different influencer make up and look.' +
      'Do not forget to avoid red lights while you try to become the best trend setter. Follow the light and you will become number one easily !',

  sourceCode: 'https://github.com',
  livePreview: 'https://github.com',
  appIcon: coloridleIcon,
  videoUrl: "https://vimeo.com/742429213",
  details: [
      "Development platform: Unity",
      "Development time: 1 week",
  ],
},
{
  name: 'Tape Art Puzzle',
  short_description: 'The goal is to try to paint the canvas the same as the target canvas.',
  description:
      'The goal is to try to paint the canvas the same as the target canvas.',

  sourceCode: 'https://github.com',
  livePreview: 'https://github.com',
  appIcon: tapeartIcon,
  videoUrl: "https://vimeo.com/742489420",
  details: [
      "Development platform: Unity",
      "Development time: 2 weeks",
  ],
},

{
  name: 'Coloraid 3D',
  short_description: 'Dig the sand and manage your army!',
  description:
      'Dig the sand and manage your army! They will follow the path that you created for them. You should think about the path because if you dig wrong you can lose your army. At the end of the levels, giant waiting for you!',

  sourceCode: 'https://github.com',
  livePreview: 'https://github.com',
  appIcon: coloraidIcon,
  videoUrl: 'https://vimeo.com/742427372',
  details: [
      "Development platform: Unity",
      "Development time: 2 weeks",
  ],
},
{
  name: 'Streamer Prank',
  short_description: 'Trip Prank, Wax Prank, Bottle Prank and all other jokes that will make you the most famous streamer.',
  description:
      'Trip Prank, Wax Prank, Bottle Prank and all other jokes that will make you the most famous streamer.' +
      'If you prank your wife too much, she will get bored and leave you. If you want him to love you you have to give him red hearts and make him happy.',

  sourceCode: 'https://github.com',
  livePreview: 'https://github.com',
  appIcon: streamerIcon,
  videoUrl: "https://vimeo.com/742428140",
  details: [
      "Development platform: Unity",
      "Development time: 2 weeks",
  ],
},

{
  name: 'Right Choice',
  short_description: 'Your choices will lead them to heaven or hell. Get ready to set preferences for Dad, Sister, Brother.',
  description:
      'Your choices will lead them to heaven or hell. Get ready to set preferences for Dad, Sister, Brother.',

  sourceCode: 'https://github.com',
  livePreview: 'https://github.com',
  appIcon: rightChoiceIcon,
  videoUrl: "https://vimeo.com/742415409",
  details: [
      "Development platform: Unity",
      "Development time: 2 weeks",
  ],
},
{
  name: 'Money Queen',
  short_description: 'Make a big roll and wear the prettiest dresses.',
  description:
      'The only way to wear the prettiest dress is to create the biggest roll.' +

      'Get ready for a dream journey with the most famous brands.',

  sourceCode: 'https://github.com',
  livePreview: 'https://github.com',
  appIcon: moneyqueenIcon,
  videoUrl: "https://vimeo.com/742430177",
  details: [
      "Development platform: Unity",
      "Development time: 2 weeks",
  ],
},
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'C#',
    'Unity',
    'HTML',
    'CSS',
    'JavaScript',
    'Git',
    'Java',
    'Unity Shader Graph',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'seval_karaman653@hotmail.com',
}

export { header, about, projects, skills, contact }
