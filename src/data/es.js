import Logo from '@/assets/logo.svg'

export default {
  common: {
    continue: 'ContinueES',
    selectCoach: 'Select CoachES',
    nextUp: 'Next UpES',
    watchMe: 'Watch MeES',
    or: "or ES"
  },

  menu: {
    courses: "Courses ES",
    brushTimer: "Brush Timer ES",
    articles: "Articles ES",
    account: "Account ES",
    about: "About ES"
  },

  introduction: {
    introduction: "Introduction ES",
    description: "<p>A number of “dangerous drugs” have been in the news recently. These reports started to surface when Congress was having hearings about the painkiller, Vioxx.</p> <p>A Food and Drug Administration staff member testified in front of Congress that there are safety concerns about several medications.</p> ES"
  },

  account: {
    user: {
      avatar: 'account-img.jpg',
      name: 'Nimasha Perera ES',
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
        name: 'General ES',
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
    happyMouth: "Happy Mouth ES",
    playAgain: "Play AgainES",
    correct: "You are correct!",
    correctDescr: "Brushing your teeth twice a day is the best way to stop those nasty cavity monsters.ES",
    cravityMonsters: "Cravity MonstersES",
    playAgain: "Play AgainES",
    cravityComing: "Uh-oh! <br />The cavity monsters <br />are coming!ES",
    tryAgain: "Try againES",
    leave: "Are you sure you <br />want to leave?ES",
    yes: "yesES",
    no: "noES"
  },

  questions: [
    {
      text: 'What’s inside your mouth?ES',
      id: '1',
      type: 'video',
      link: 'https://www.youtube.com/embed/zGoBFU1q4g0'
    },
    {
      text: 'How to stop the cavity monsters. ES',
      id: '2',
      type: 'video',
      link: 'https://www.youtube.com/embed/zGoBFU1q4g0'
    },
    {
      text: 'Brushing away the cavity monsters! ES',
      id: '3',
      type: 'video',
      link: 'https://www.youtube.com/embed/zGoBFU1q4g0'
    },
    {
      text: 'Cavity Math instructions. ES',
      id: '4',
      type: 'video',
      link: 'https://www.youtube.com/embed/zGoBFU1q4g0'
    },
    {
      text: 'Stop the cavity monster. ES',
      desc: 'How do we stop the cavity monsters? ES',
      id: '5',
      type: 'icons',
      answers: [
        {
          text: 'Brush twice a day every day ES',
          image: 'brush.svg',
          isCorrect: true
        },
        {
          text: 'Never brush my teeth ES',
          image: 'candy.svg',
          isCorrect: false
        },
      ]
    },
    {
      text: 'Stop the cavity monster. ES',
      desc: 'How do we stop the cavity monsters? ES',
      id: '6',
      type: 'icons',
      answers: [
        {
          text: 'Brush after a snack ES',
          image: 'brush.svg',
          isCorrect: true
        },
        {
          text: 'Wait until tomorrow ES',
          image: 'candy.svg',
          isCorrect: false
        },
      ]
    },
    {
      text: 'Stop the cavity monster. ES',
      desc: 'How do we stop the cavity monsters? ES',
      id: '7',
      type: 'icons',
      answers: [
        {
          text: 'Brush for 2 minutes ES',
          image: 'brush.svg',
          isCorrect: true
        },
        {
          text: 'Brush for 1 minute ES',
          image: 'candy.svg',
          isCorrect: false
        },
      ]
    },
    {
      text: 'What snacks do my teeth love? ES',
      id: '8',
      type: 'video',
      link: 'https://www.youtube.com/embed/zGoBFU1q4g0'
    },
    {
      text: 'Good for me or good for cavity monsters? ES',
      desc: 'Click to find out. ES',
      id: '9',
      type: 'cards',
      answers: [
        {
          text: 'Apple ES',
          image: 'apple.svg',

          answerData: {
            text: 'Good for me! ES',
            image: 'apple.svg',
            isCorrect: true
          }
        }
      ]
    },
    {
      text: 'Good for me or good for cavity monsters? ES',
      desc: 'Click to find out. ES',
      id: '10',
      type: 'cards',
      answers: [
        {
          text: 'Carrots',
          image: 'carrot.svg',

          answerData: {
            text: 'Good for me! ES',
            image: 'carrot.svg',
            isCorrect: true
          }
        }
      ]
    },
    {
      text: 'Good for me or good for cavity monsters? ES',
      desc: 'Click to find out. ES',
      id: '11',
      type: 'cards',
      answers: [
        {
          text: 'Candy ES',
          image: 'chocolate.svg',

          answerData: {
            text: 'Cavity Monster! ES',
            image: 'chocolate.svg',
            isCorrect: false
          }
        }
      ]
    },
    {
      text: 'Good for me or good for cavity monsters? ES',
      desc: 'Click to find out. ES',
      id: '12',
      type: 'cards',
      answers: [
        {
          text: 'Peanuts ES',
          image: 'peanut.svg',

          answerData: {
            text: 'Good for me! ES',
            image: 'peanut.svg',
            isCorrect: true
          }
        }
      ]
    },
    {
      text: 'Good for me or good for cavity monsters? ES',
      desc: 'Click to find out. ES',
      id: '13',
      type: 'cards',
      answers: [
        {
          text: 'ChipsES',
          image: 'chips.svg',

          answerData: {
            text: 'Cavity Monster! ES',
            image: 'chips.svg',
            isCorrect: false
          }
        }
      ]
    },
    {
      text: 'Good for me or good for cavity monsters? ES',
      desc: 'Click to find out. ES',
      id: '14',
      type: 'cards',
      answers: [
        {
          text: 'Ice Cream ES',
          image: 'ice-cream.svg',

          answerData: {
            text: 'Cavity Monster! ES',
            image: 'ice-cream.svg',
            isCorrect: false
          }
        }
      ]
    },
    {
      text: 'Good for me or good for cavity monsters? ES',
      desc: 'Click to find out. ES',
      id: '15',
      type: 'cards',
      answers: [
        {
          text: 'Milk ES',
          image: 'milk.svg',

          answerData: {
            text: 'Good for me! ES',
            image: 'milk.svg',
            isCorrect: true
          }
        }
      ]
    },
    {
      text: 'Good for me or good for cavity monsters? ES',
      desc: 'Click to find out. ES',
      id: '16',
      type: 'cards',
      answers: [
        {
          text: 'Cheese ES',
          image: 'cheese.svg',

          answerData: {
            text: 'Good for me! ES',
            image: 'cheese.svg',
            isCorrect: true
          }
        }
      ]
    },
    {
      text: 'Good for me or good for cavity monsters? ES',
      desc: 'Click to find out. ES',
      id: '17',
      type: 'cards',
      answers: [
        {
          text: 'Eggs ES',
          image: 'egg.svg',

          answerData: {
            text: 'Good for me! ES',
            image: 'egg.svg',
            isCorrect: true
          }
        }
      ]
    },
    {
      text: 'Good for me or good for cavity monsters? ES',
      desc: 'Click to find out. ES',
      id: '18',
      type: 'cards',
      answers: [
        {
          text: 'Cookie ES',
          image: 'cookie.svg',

          answerData: {
            text: 'Cavity Monster! ES',
            image: 'cookie.svg',
            isCorrect: false
          }
        }
      ]
    },
    {
      text: 'Good for me or good for cavity monsters? ES',
      desc: 'Click to find out. ES',
      id: '19',
      type: 'cards',
      answers: [
        {
          text: 'Water ES',
          image: 'water.svg',

          answerData: {
            text: 'Good for me! ES',
            image: 'water.svg',
            isCorrect: true
          }
        }
      ]
    },
    {
      text: 'Good for me or good for cavity monsters? ES',
      desc: 'Click to find out. ES',
      id: '20',
      type: 'cards',
      answers: [
        {
          text: 'Soda ES',
          image: 'soda.svg',

          answerData: {
            text: 'Cavity Monster! ES',
            image: 'soda.svg',
            isCorrect: false
          }
        }
      ]
    },
    {
      text: 'Good for me or good for cavity monsters? ES',
      desc: 'Click to find out. ES',
      id: '21',
      type: 'cards',
      answers: [
        {
          text: 'Juice ES',
          image: 'orange-juice.svg',

          answerData: {
            text: 'Cavity Monster! ES',
            image: 'orange-juice.svg',
            isCorrect: false
          }
        }
      ]
    },
    {
      text: 'Good for me or good for cavity monsters? ES',
      desc: 'Click to find out. ES',
      id: '22',
      type: 'cards',
      answers: [
        {
          text: 'Sweetened Drinks ES',
          image: 'soda-bottle.svg',

          answerData: {
            text: 'Cavity Monster! ES',
            image: 'soda-bottle.svg',
            isCorrect: false
          }
        }
      ]
    },
    {
      text: 'Cavity Math ES',
      desc: 'Arrange the icons to find the answer. ES',
      id: '23',
      type: 'calc',
      variants: [
        {
          text: 'Brushing twice a day ES',
          value: 'clock',
          image: 'brush-twice.svg'
        },
        {
          text: 'Healthy snacks ES',
          value: 'tooth',
          image: 'broccoli.svg'
        }
      ]
    },
    {
      text: 'Cavity Math ES',
      desc: 'Arrange the icons to find the answer. ES',
      id: '24',
      type: 'calc',
      variants: [
        {
          text: 'Sugary snacks ES',
          value: 'candy',
          image: 'candy.svg'
        },
        {
          text: 'Not brushing ES',
          value: 'not-brushing',
          image: 'not-brushing.svg'
        }
      ]
    },
    {
      text: 'Cavity Math ES',
      desc: 'Arrange the icons to find the answer. ES',
      id: '25',
      type: 'calc',
      variants: [
        {
          text: 'Brushing after each meal ES',
          value: 'brushing-after-meal',
          image: 'brushing-after-meal.svg'
        },
        {
          text: 'Sugary snacks ES',
          value: 'candy',
          image: 'candy.svg'
        }
      ]
    },
    {
      text: 'Cavity Math ES',
      desc: 'Arrange the icons to find the answer. ES',
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
      text: 'Happy Mouth ES',
      desc: 'Drag the icons to the mouth to find the answer. ES',
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
      text: 'Happy Mouth ES',
      desc: 'Drag the icons to the mouth to find the answer. ES',
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
      text: 'Happy Mouth ES',
      desc: 'Drag the icons to the mouth to find the answer. ES',
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
      text: 'Happy Mouth ES',
      desc: 'Drag the icons to the mouth to find the answer. ES',
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
    title: "Cavity PreventionES",
    students: "StudentsES",
    rating: "RatingES",
    lessons: "LessonsES",
    swipe: "Swipe up to see course contentsES"
  },

  dentalOffice: {
    title: "My Dental OfficeES",
    items: [
      {
        title: 'UIC College of DentistryES',
        img: 'uic-school-front.jpg',
        background: '#FF6D7F'
      },
      {
        title: 'UI Health Mile SquareES',
        img: 'team-2.jpg',
        background: '#278AB5'
      },
      {
        title: 'Lawndale Christian Health CenterES',
        img: 'team-3.jpg',
        background: '#87DBA2'
      },
      {
        title: 'Angel Harvey Family Health Center of the Infant WelfareES',
        img: 'team-4.jpg',
        background: '#FFEBAE'
      },
      {
        title: 'Salud Family Health CentersES',
        img: 'team-5.jpg',
        background: '#32BEA6'
      },
      {
        title: 'Rada ClinicES',
        img: 'team-5.jpg',
        background: '#32BEA6'
      }
    ]
  },

  selectAge: {
    title: 'Age GroupES',
    younger: 'I am 8 or youngerES',
    older: 'I am 9 or olderES'
  },

  onboarding: {
    welcome: 'WelcomeES',
    imgUrl: Logo,
    description: 'ES University of Illinois at Chicago College of Dentistry presents a game for you to learn better oral hygiene.',
    getStarted: 'Get StartedES'
  },

  achievements: {
    title: 'AсhievementsES',
    items: [
      {
        name: 'Quick Learner1ES',
        goal: 'Completed 1 course1ES',
        image: 'achieve_img_1.svg'
      },
      {
        name: 'Master Mind!ES',
        goal: 'Got 1st place on leaderboardES',
        image: 'achieve_img_2.svg'
      },
      {
        name: 'Super LearnerES',
        goal: 'Completed more than 5 coursesES',
        image: 'achieve_img_3.svg'
      },
      {
        name: 'The AchieverES',
        goal: 'Logged in everyday for a monthES',
        image: 'achieve_img_4.svg'
      },
      {
        name: 'Locked BadgeES',
        goal: 'Unlock to see the detailsES',
        locked: true
      },
      {
        name: 'Locked BadgeES',
        goal: 'Unlock to see the detailsES',
        locked: true
      }
    ]
  },

  courses: {
    items: [
      'Cavity PreventionES',
      'Baby TeethES',
      'Proper BrushingES',
      'Prenatal Oral CareES',
      'Cavity MathES',
      'SugarES',
      'MemoryES',
      'MatchingES'
    ]
  }
}
