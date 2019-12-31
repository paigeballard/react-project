
import moment from 'moment'

const today = new Date()
console.log(today)

export const cardInfo = [
  {
    id: 1,
    day: 'Monday',
    date: moment(new Date()).format('MMM Do'),
    name: 'Potbelly',
    description: 'Sandwiches',
    url: 'https://api-potbelly-production.fuzzstaging.com/proxy/global-menu',
    logo: '.././logos/potbelly.png',
    todaysMenu: [
      {
        name: 'Turkey Club',
        description: 'All-natural, hand-pulled, slow-roasted turkey with Nueske’s bacon and cheddar cheese toasted and then topped with fresh lettuce, tomato and mayo on multigrain'
      },
      {
        name: 'Prime Rib Sandwich',
        description: 'Premium, thinly-sliced tender and juicy prime rib topped with rich provolone and a touch of horseradish mayo on perfectly toasted bread'
      },
      {
        name: 'Grilled Chicken Sandwich',
        description: 'All-natural chicken breast hand-sliced with melted cheddar cheese toasted and then topped with fresh lettuce, tomato and mayo on multigrain'
      },
      {
        name: 'A Wreck Sandwich',
        desciption: 'Our signature sandwich! Salami, Angus roast beef, oven roasted turkey, hickory smoked ham with melted Swiss cheese toasted and then topped with fresh lettuce, tomato and mayo on multigrain'
      },
      {
        name: 'Turkey Breast Sandwich',
        desciption: 'Hand-sliced turkey breast with melted Swiss cheese toasted and then topped with fresh lettuce, tomato and mayo on multigrain'
      },
      {
        name: 'Italian Sub',
        desciption: 'Featuring our four authentic Italian meats: capicola, mortadella, pepperoni and salami with provolone cheese toasted and then topped with fresh lettuce, tomato, mayo and Italian seasoning on multigrain'
      },
      {
        name: 'Mediterraneans',
        desciption: 'Zippy hummus and feta cheese toasted and then topped with artichoke hearts, crisp cucumbers and roasted red peppers on multigrain'
      },
      {
        name: 'Chicken Salad Sandwich',
        desciption: 'Freshly made chicken salad with just the right amount of celery, mayo and pepper topped with melted provolone cheese toasted and then topped with fresh lettuce and tomato on multigrain'
      },
      {
        name: 'Tuna Salad Sandwich',
        desciption: '100% Albacore tuna with Swiss cheese toasted and then topped with fresh lettuce and tomato on multigrain'
      },
      {
        name: 'Powerhouse Salad',
        desciption: 'All-natural grilled chicken breast, fresh avocado, zippy hummus, hard-boiled egg, crisp cucumber and grape tomatoes on a bed of fresh spinach'
      },
      {
        name: 'Mediterranean Salad',
        desciption: 'All-natural grilled chicken breast, artichoke hearts, chickpeas, roasted red peppers, crisp cucumbers, diced red onion, tomatoes, crumbled feta cheese and Italian seasoning on a bed of fresh romaine, iceberg and spinach'
      },
      {
        name: 'Uptown Salad',
        desciption: 'All-natural grilled chicken breast, crumbled blue cheese, red grapes, apples, dried cranberries, candied walnuts and diced red onion on a bed of fresh romaine, iceberg and spinach'
      },
      {
        name: 'Farmhouse Salad',
        desciption: 'All-natural grilled chicken breast, hard-boiled egg, bacon, crumbled blue cheese, grape tomatoes, crisp cucumbers and diced red onion on a bed of fresh romaine, iceberg and spinach'
      },
      {
        name: 'A Wreck Salad',
        desciption: 'Hand-sliced turkey breast, hickory smoked ham, salami, Angus roast beef, Swiss and crumbled blue cheese, hard- boiled egg, crisp cucumbers and grape tomatoes on a bed of fresh romaine, iceberg and spinach'
      }
    ]
  },
  {
    id: 2,
    day: 'Tuesday',
    date: moment(new Date()).add(1, 'days').calendar(),
    name: 'Pappasitos',
    description: 'Tex-Mex',
    url: 'https://pappasitos.com/menu/',
    logo: '.././logos/pappas.png',
    todaysMenu: [
      {},
      {},
      {}
    ]
  },
  {
    id: 3,
    day: 'Wednesday',
    name: 'Niko Nikos',
    description: 'Greek',
    url: 'http://www.nikonikos.com/Menus/Montrose/',
    logo: '.././logos/nikos.png',
    todaysMenu: [
      {},
      {},
      {}
    ]
  },
  {
    id: 4,
    day: 'Thursday',
    name: 'PF Changs',
    description: 'Chinese',
    url: 'https://www.pfchangs.com/menu',
    logo: '.././logos/changs.png',
    todaysMenu: [
      {},
      {},
      {}
    ]
  },
  {
    id: 5,
    day: 'Friday',
    name: 'Pinks Pizza',
    description: 'Pizza',
    url: 'https://pinkspizza.com/menu/',
    logo: '.././logos/pinks.png',
    todaysMenu: [
      {},
      {},
      {}
    ]
  },
  {
    id: 1,
    day: 'Monday',
    date: moment(new Date()).format('MMM Do'),
    name: 'Potbelly',
    description: 'Sandwiches',
    url: 'https://api-potbelly-production.fuzzstaging.com/proxy/global-menu',
    logo: '.././logos/potbelly.png',
    todaysMenu: [
      {
        name: 'Turkey Club',
        description: 'All-natural, hand-pulled, slow-roasted turkey with Nueske’s bacon and cheddar cheese toasted and then topped with fresh lettuce, tomato and mayo on multigrain'
      },
      {
        name: 'Prime Rib Sandwich',
        description: 'Premium, thinly-sliced tender and juicy prime rib topped with rich provolone and a touch of horseradish mayo on perfectly toasted bread'
      },
      {
        name: 'Grilled Chicken Sandwich',
        description: 'All-natural chicken breast hand-sliced with melted cheddar cheese toasted and then topped with fresh lettuce, tomato and mayo on multigrain'
      },
      {
        name: 'A Wreck Sandwich',
        desciption: 'Our signature sandwich! Salami, Angus roast beef, oven roasted turkey, hickory smoked ham with melted Swiss cheese toasted and then topped with fresh lettuce, tomato and mayo on multigrain'
      },
      {
        name: 'Turkey Breast Sandwich',
        desciption: 'Hand-sliced turkey breast with melted Swiss cheese toasted and then topped with fresh lettuce, tomato and mayo on multigrain'
      },
      {
        name: 'Italian Sub',
        desciption: 'Featuring our four authentic Italian meats: capicola, mortadella, pepperoni and salami with provolone cheese toasted and then topped with fresh lettuce, tomato, mayo and Italian seasoning on multigrain'
      },
      {
        name: 'Mediterraneans',
        desciption: 'Zippy hummus and feta cheese toasted and then topped with artichoke hearts, crisp cucumbers and roasted red peppers on multigrain'
      },
      {
        name: 'Chicken Salad Sandwich',
        desciption: 'Freshly made chicken salad with just the right amount of celery, mayo and pepper topped with melted provolone cheese toasted and then topped with fresh lettuce and tomato on multigrain'
      },
      {
        name: 'Tuna Salad Sandwich',
        desciption: '100% Albacore tuna with Swiss cheese toasted and then topped with fresh lettuce and tomato on multigrain'
      },
      {
        name: 'Powerhouse Salad',
        desciption: 'All-natural grilled chicken breast, fresh avocado, zippy hummus, hard-boiled egg, crisp cucumber and grape tomatoes on a bed of fresh spinach'
      },
      {
        name: 'Mediterranean Salad',
        desciption: 'All-natural grilled chicken breast, artichoke hearts, chickpeas, roasted red peppers, crisp cucumbers, diced red onion, tomatoes, crumbled feta cheese and Italian seasoning on a bed of fresh romaine, iceberg and spinach'
      },
      {
        name: 'Uptown Salad',
        desciption: 'All-natural grilled chicken breast, crumbled blue cheese, red grapes, apples, dried cranberries, candied walnuts and diced red onion on a bed of fresh romaine, iceberg and spinach'
      },
      {
        name: 'Farmhouse Salad',
        desciption: 'All-natural grilled chicken breast, hard-boiled egg, bacon, crumbled blue cheese, grape tomatoes, crisp cucumbers and diced red onion on a bed of fresh romaine, iceberg and spinach'
      },
      {
        name: 'A Wreck Salad',
        desciption: 'Hand-sliced turkey breast, hickory smoked ham, salami, Angus roast beef, Swiss and crumbled blue cheese, hard- boiled egg, crisp cucumbers and grape tomatoes on a bed of fresh romaine, iceberg and spinach'
      }
    ]
  },
  {
    id: 2,
    day: 'Tuesday',
    date: moment(new Date()).add(1, 'days').calendar(),
    name: 'Pappasitos',
    description: 'Tex-Mex',
    url: 'https://pappasitos.com/menu/',
    logo: '.././logos/pappas.png',
    todaysMenu: [
      {},
      {},
      {}
    ]
  },
  {
    id: 3,
    day: 'Wednesday',
    name: 'Niko Nikos',
    description: 'Greek',
    url: 'http://www.nikonikos.com/Menus/Montrose/',
    logo: '.././logos/nikos.png',
    todaysMenu: [
      {},
      {},
      {}
    ]
  },
  {
    id: 4,
    day: 'Thursday',
    name: 'PF Changs',
    description: 'Chinese',
    url: 'https://www.pfchangs.com/menu',
    logo: '.././logos/changs.png',
    todaysMenu: [
      {},
      {},
      {}
    ]
  },
  {
    id: 5,
    day: 'Friday',
    name: 'Pinks Pizza',
    description: 'Pizza',
    url: 'https://pinkspizza.com/menu/',
    logo: '.././logos/pinks.png',
    todaysMenu: [
      {},
      {},
      {}
    ]
  }
]
