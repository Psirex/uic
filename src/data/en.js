import Logo from '@/assets/logo.svg'

export default {
  common: {
    continue: 'Continue',
    selectCoach: 'Select Coach',
    nextUp: 'Next Up',
    watchMe: 'Watch Me',
    or: "or"
  },

  menu: {
    courses: "Courses",
    brushTimer: "Brush Timer",
    articles: "Articles",
    account: "Account",
    about: "About"
  },

  introduction: {
    introduction: "Introduction",
    description: "<p>A number of “dangerous drugs” have been in the news recently. These reports started to surface when Congress was having hearings about the painkiller, Vioxx.</p> <p>A Food and Drug Administration staff member testified in front of Congress that there are safety concerns about several medications.</p>"
  },

  account: {
    user: {
      avatar: 'account-img.jpg',
      name: 'Nimasha Perera',
      points: '550',
      badges: [
        {
          name: 'badge name',
          image: 'achieve_img_3.svg'
        },
        {
          name: 'badge name 1',
          image: 'achieve_img_2.svg'
        },
        {
          name: 'badge name 1',
          image: 'achieve_img_1.svg'
        },
        {
          name: 'badge name 1',
          image: 'achieve_img_4.svg'
        }
      ]
    },
    menus: [
      {
        name: 'General',
        items: [
          {
            name: 'Achievements',
            icon: 'achievements-icon.svg',
            count: '50',
            link: '/achievements'
          },
          {
            name: 'Favorite Courses',
            icon: 'fav-courses-icon.svg',
            link: '/courses'
          },
          {
            name: 'My Team',
            icon: 'my-friends-icon.svg',
            link: '/team'
          }
        ]
      },
      {
        name: 'Settings',
        items: [
          {
            name: 'Add Code',
            icon: 'edit-login-details-icon.svg',
            link: '/code'
          },
          {
            name: 'Edit Profile',
            icon: 'update-interests-icon.svg'
          }
        ]
      }
    ]
  },

  popup: {
    happyMouth: "Happy Mouth",
    playAgain: "Play Again",
    correct: "You are correct!",
    correctDescr: "Brushing your teeth twice a day is the best way to stop those nasty cavity monsters.",
    cravityMonsters: "Cravity Monsters",
    playAgain: "Play Again",
    cravityComing: "Uh-oh! <br />The cavity monsters <br />are coming!",
    tryAgain: "Try again",
    leave: "Are you sure you <br />want to leave?",
    yes: "yes",
    no: "no"
  },

  questions: [
    {
      text: 'What’s inside your mouth?',
      id: '1',
      type: 'video',
      link: 'https://www.youtube.com/embed/zGoBFU1q4g0'
    },
    {
      text: 'How to stop the cavity monsters.',
      id: '2',
      type: 'video',
      link: 'https://www.youtube.com/embed/zGoBFU1q4g0'
    },
    {
      text: 'Brushing away the cavity monsters!',
      id: '3',
      type: 'video',
      link: 'https://www.youtube.com/embed/zGoBFU1q4g0'
    },
    {
      text: 'Cavity Math instructions.',
      id: '4',
      type: 'video',
      link: 'https://www.youtube.com/embed/zGoBFU1q4g0'
    },
    {
      text: 'Stop the cavity monster.',
      desc: 'How do we stop the cavity monsters?',
      id: '5',
      type: 'icons',
      answers: [
        {
          text: 'Brush twice a day every day',
          image: 'brush.svg',
          isCorrect: true
        },
        {
          text: 'Never brush my teeth',
          image: 'candy.svg',
          isCorrect: false
        },
      ]
    },
    {
      text: 'Stop the cavity monster.',
      desc: 'How do we stop the cavity monsters?',
      id: '6',
      type: 'icons',
      answers: [
        {
          text: 'Brush after a snack',
          image: 'brush.svg',
          isCorrect: true
        },
        {
          text: 'Wait until tomorrow',
          image: 'candy.svg',
          isCorrect: false
        },
      ]
    },
    {
      text: 'Stop the cavity monster.',
      desc: 'How do we stop the cavity monsters?',
      id: '7',
      type: 'icons',
      answers: [
        {
          text: 'Brush for 2 minutes',
          image: 'brush.svg',
          isCorrect: true
        },
        {
          text: 'Brush for 1 minute',
          image: 'candy.svg',
          isCorrect: false
        },
      ]
    },
    {
      text: 'What snacks do my teeth love?',
      id: '8',
      type: 'video',
      link: 'https://www.youtube.com/embed/zGoBFU1q4g0'
    },
    {
      text: 'Good for me or good for cavity monsters?',
      desc: 'Click to find out.',
      id: '9',
      type: 'cards',
      answers: [
        {
          text: 'Apple',
          image: 'apple.svg',

          answerData: {
            text: 'Good for me!',
            image: 'apple.svg',
            isCorrect: true
          }
        }
      ]
    },
    {
      text: 'Good for me or good for cavity monsters?',
      desc: 'Click to find out.',
      id: '10',
      type: 'cards',
      answers: [
        {
          text: 'Carrots',
          image: 'carrot.svg',

          answerData: {
            text: 'Good for me!',
            image: 'carrot.svg',
            isCorrect: true
          }
        }
      ]
    },
    {
      text: 'Good for me or good for cavity monsters?',
      desc: 'Click to find out.',
      id: '11',
      type: 'cards',
      answers: [
        {
          text: 'Candy',
          image: 'chocolate.svg',

          answerData: {
            text: 'Cavity Monster!',
            image: 'chocolate.svg',
            isCorrect: false
          }
        }
      ]
    },
    {
      text: 'Good for me or good for cavity monsters?',
      desc: 'Click to find out.',
      id: '12',
      type: 'cards',
      answers: [
        {
          text: 'Peanuts',
          image: 'peanut.svg',

          answerData: {
            text: 'Good for me!',
            image: 'peanut.svg',
            isCorrect: true
          }
        }
      ]
    },
    {
      text: 'Good for me or good for cavity monsters?',
      desc: 'Click to find out.',
      id: '13',
      type: 'cards',
      answers: [
        {
          text: 'Chips',
          image: 'chips.svg',

          answerData: {
            text: 'Cavity Monster!',
            image: 'chips.svg',
            isCorrect: false
          }
        }
      ]
    },
    {
      text: 'Good for me or good for cavity monsters?',
      desc: 'Click to find out.',
      id: '14',
      type: 'cards',
      answers: [
        {
          text: 'Ice Cream',
          image: 'ice-cream.svg',

          answerData: {
            text: 'Cavity Monster!',
            image: 'ice-cream.svg',
            isCorrect: false
          }
        }
      ]
    },
    {
      text: 'Good for me or good for cavity monsters?',
      desc: 'Click to find out.',
      id: '15',
      type: 'cards',
      answers: [
        {
          text: 'Milk',
          image: 'milk.svg',

          answerData: {
            text: 'Good for me!',
            image: 'milk.svg',
            isCorrect: true
          }
        }
      ]
    },
    {
      text: 'Good for me or good for cavity monsters?',
      desc: 'Click to find out.',
      id: '16',
      type: 'cards',
      answers: [
        {
          text: 'Cheese',
          image: 'cheese.svg',

          answerData: {
            text: 'Good for me!',
            image: 'cheese.svg',
            isCorrect: true
          }
        }
      ]
    },
    {
      text: 'Good for me or good for cavity monsters?',
      desc: 'Click to find out.',
      id: '17',
      type: 'cards',
      answers: [
        {
          text: 'Eggs',
          image: 'egg.svg',

          answerData: {
            text: 'Good for me!',
            image: 'egg.svg',
            isCorrect: true
          }
        }
      ]
    },
    {
      text: 'Good for me or good for cavity monsters?',
      desc: 'Click to find out.',
      id: '18',
      type: 'cards',
      answers: [
        {
          text: 'Cookie',
          image: 'cookie.svg',

          answerData: {
            text: 'Cavity Monster!',
            image: 'cookie.svg',
            isCorrect: false
          }
        }
      ]
    },
    {
      text: 'Good for me or good for cavity monsters?',
      desc: 'Click to find out.',
      id: '19',
      type: 'cards',
      answers: [
        {
          text: 'Water',
          image: 'water.svg',

          answerData: {
            text: 'Good for me!',
            image: 'water.svg',
            isCorrect: true
          }
        }
      ]
    },
    {
      text: 'Good for me or good for cavity monsters?',
      desc: 'Click to find out.',
      id: '20',
      type: 'cards',
      answers: [
        {
          text: 'Soda',
          image: 'soda.svg',

          answerData: {
            text: 'Cavity Monster!',
            image: 'soda.svg',
            isCorrect: false
          }
        }
      ]
    },
    {
      text: 'Good for me or good for cavity monsters?',
      desc: 'Click to find out.',
      id: '21',
      type: 'cards',
      answers: [
        {
          text: 'Juice',
          image: 'orange-juice.svg',

          answerData: {
            text: 'Cavity Monster!',
            image: 'orange-juice.svg',
            isCorrect: false
          }
        }
      ]
    },
    {
      text: 'Good for me or good for cavity monsters?',
      desc: 'Click to find out.',
      id: '22',
      type: 'cards',
      answers: [
        {
          text: 'Sweetened Drinks',
          image: 'soda-bottle.svg',

          answerData: {
            text: 'Cavity Monster!',
            image: 'soda-bottle.svg',
            isCorrect: false
          }
        }
      ]
    },
    {
      text: 'Cavity Math',
      desc: 'Arrange the icons to find the answer.',
      id: '23',
      type: 'calc',
      variants: [
        {
          text: 'Brushing twice a day',
          value: 'clock',
          image: 'brush-twice.svg'
        },
        {
          text: 'Healthy snacks',
          value: 'tooth',
          image: 'broccoli.svg'
        }
      ]
    },
    {
      text: 'Cavity Math',
      desc: 'Arrange the icons to find the answer.',
      id: '24',
      type: 'calc',
      variants: [
        {
          text: 'Sugary snacks',
          value: 'candy',
          image: 'candy.svg'
        },
        {
          text: 'Not brushing',
          value: 'not-brushing',
          image: 'not-brushing.svg'
        }
      ]
    },
    {
      text: 'Cavity Math',
      desc: 'Arrange the icons to find the answer.',
      id: '25',
      type: 'calc',
      variants: [
        {
          text: 'Brushing after each meal',
          value: 'brushing-after-meal',
          image: 'brushing-after-meal.svg'
        },
        {
          text: 'Sugary snacks',
          value: 'candy',
          image: 'candy.svg'
        }
      ]
    },
    {
      text: 'Cavity Math',
      desc: 'Arrange the icons to find the answer.',
      id: '26',
      type: 'calc',
      variants: [
        {
          text: 'Healthy snacks',
          value: 'broccoli',
          image: 'broccoli.svg'
        },
        {
          text: 'Not brushing',
          value: 'not-brushing',
          image: 'not-brushing.svg'
        }
      ]
    },
    {
      text: 'Happy Mouth',
      desc: 'Drag the icons to the mouth to find the answer.',
      id: '27',
      type: 'mouth',
      variants: [
        {
          value: 'donut',
          image: 'donut.svg'
        },
        {
          value: 'apple',
          image: 'apple.svg',
          isCorrect: true
        },
      ]
    },
    {
      text: 'Happy Mouth',
      desc: 'Drag the icons to the mouth to find the answer.',
      id: '28',
      type: 'mouth',
      variants: [
        {
          value: 'donut',
          image: 'donut.svg'
        },
        {
          value: 'apple',
          image: 'apple.svg',
          isCorrect: true
        },
      ]
    },
    {
      text: 'Happy Mouth',
      desc: 'Drag the icons to the mouth to find the answer.',
      id: '29',
      type: 'mouth',
      variants: [
        {
          value: 'donut',
          image: 'donut.svg'
        },
        {
          value: 'apple',
          image: 'apple.svg',
          isCorrect: true
        },
      ]
    },
    {
      text: 'Happy Mouth',
      desc: 'Drag the icons to the mouth to find the answer.',
      id: '30',
      type: 'mouth',
      variants: [
        {
          value: 'donut',
          image: 'donut.svg'
        },
        {
          value: 'apple',
          image: 'apple.svg',
          isCorrect: true
        },
      ]
    }
  ],



  cavityPrevention: {
    title: "Cavity Prevention",
    students: "Students",
    rating: "Rating",
    lessons: "Lessons",
    swipe: "Swipe up to see course contents"
  },

  dentalOffice: {
    title: "My Dental Office",
    items: [
      {
        title: 'UIC College of Dentistry',
        img: 'uic-school-front.jpg',
        background: '#FF6D7F'
      },
      {
        title: 'UI Health Mile Square',
        img: 'team-2.jpg',
        background: '#278AB5'
      },
      {
        title: 'Lawndale Christian Health Center',
        img: 'team-3.jpg',
        background: '#87DBA2'
      },
      {
        title: 'Angel Harvey Family Health Center of the Infant Welfare',
        img: 'team-4.jpg',
        background: '#FFEBAE'
      },
      {
        title: 'Salud Family Health Centers',
        img: 'team-5.jpg',
        background: '#32BEA6'
      },
      {
        title: 'Rada Clinic',
        img: 'team-5.jpg',
        background: '#32BEA6'
      }
    ]
  },

  selectAge: {
    title: 'Age Group',
    younger: 'I am 8 or younger',
    older: 'I am 9 or older'
  },

  onboarding: {
    welcome: 'Welcome',
    imgUrl: Logo,
    description: 'University of Illinois at Chicago College of Dentistry presents a game for you to learn better oral hygiene.',
    getStarted: 'Get Started'
  },

  achievements: {
    title: 'Aсhievements',
    items: [
      {
        name: 'Quick Learner',
        goal: 'Completed 1 course',
        image: 'achieve_img_1.svg'
      },
      {
        name: 'Master Mind!',
        goal: 'Got 1st place on leaderboard',
        image: 'achieve_img_2.svg'
      },
      {
        name: 'Super Learner',
        goal: 'Completed more than 5 courses',
        image: 'achieve_img_3.svg'
      },
      {
        name: 'The Achiever',
        goal: 'Logged in everyday for a month',
        image: 'achieve_img_4.svg'
      },
      {
        name: 'Locked Badge',
        goal: 'Unlock to see the details',
        locked: true
      },
      {
        name: 'Locked Badge',
        goal: 'Unlock to see the details',
        locked: true
      }
    ]
  },

  courses: {
    items: [
      'Cavity Prevention',
      'Baby Teeth',
      'Proper Brushing',
      'Prenatal Oral Care',
      'Cavity Math',
      'Sugar',
      'Memory',
      'Matching'
    ]
  }
}
