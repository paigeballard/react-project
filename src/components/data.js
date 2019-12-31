
// import moment from 'moment'

const today = new Date()
console.log(today)

export const cardInfo = [
  {
    id: 1,
    day: 'Monday, January 6, 2020',
    // date: moment(new Date()).format('MMM Do'),
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
        description: 'Our signature sandwich! Salami, Angus roast beef, oven roasted turkey, hickory smoked ham with melted Swiss cheese toasted and then topped with fresh lettuce, tomato and mayo on multigrain'
      },
      {
        name: 'Turkey Breast Sandwich',
        description: 'Hand-sliced turkey breast with melted Swiss cheese toasted and then topped with fresh lettuce, tomato and mayo on multigrain'
      },
      {
        name: 'Italian Sub',
        description: 'Featuring our four authentic Italian meats: capicola, mortadella, pepperoni and salami with provolone cheese toasted and then topped with fresh lettuce, tomato, mayo and Italian seasoning on multigrain'
      },
      {
        name: 'Mediterraneans',
        description: 'Zippy hummus and feta cheese toasted and then topped with artichoke hearts, crisp cucumbers and roasted red peppers on multigrain'
      },
      {
        name: 'Chicken Salad Sandwich',
        description: 'Freshly made chicken salad with just the right amount of celery, mayo and pepper topped with melted provolone cheese toasted and then topped with fresh lettuce and tomato on multigrain'
      },
      {
        name: 'Tuna Salad Sandwich',
        description: '100% Albacore tuna with Swiss cheese toasted and then topped with fresh lettuce and tomato on multigrain'
      },
      {
        name: 'Powerhouse Salad',
        description: 'All-natural grilled chicken breast, fresh avocado, zippy hummus, hard-boiled egg, crisp cucumber and grape tomatoes on a bed of fresh spinach'
      },
      {
        name: 'Mediterranean Salad',
        description: 'All-natural grilled chicken breast, artichoke hearts, chickpeas, roasted red peppers, crisp cucumbers, diced red onion, tomatoes, crumbled feta cheese and Italian seasoning on a bed of fresh romaine, iceberg and spinach'
      },
      {
        name: 'Uptown Salad',
        description: 'All-natural grilled chicken breast, crumbled blue cheese, red grapes, apples, dried cranberries, candied walnuts and diced red onion on a bed of fresh romaine, iceberg and spinach'
      },
      {
        name: 'Farmhouse Salad',
        description: 'All-natural grilled chicken breast, hard-boiled egg, bacon, crumbled blue cheese, grape tomatoes, crisp cucumbers and diced red onion on a bed of fresh romaine, iceberg and spinach'
      },
      {
        name: 'A Wreck Salad',
        description: 'Hand-sliced turkey breast, hickory smoked ham, salami, Angus roast beef, Swiss and crumbled blue cheese, hard- boiled egg, crisp cucumbers and grape tomatoes on a bed of fresh romaine, iceberg and spinach'
      }
    ]
  },
  {
    id: 2,
    day: 'Tuesday, January 7, 2020',
    // date: moment(new Date()).add(1, 'days').calendar(),
    name: 'Berryhill Baja',
    description: 'Tex-Mex',
    url: 'https://pappasitos.com/menu/',
    logo: '.././logos/berry.png',
    todaysMenu: [
      {
        name: 'Chopped Chicken Salad',
        description: 'Chicken on the side, lettuce, avocado, tomato, cheese and tortilla strips'
      },
      {
        name: 'Original Fried Fish Taco',
        description: 'Tempura fried fish with cabbage, cilantro and special sauce double wrapped in corn tortillas'
      },
      {
        name: 'Grilled Fish Taco',
        description: 'Chipolte chile marinated fish with dijon sauce, lettuce and pico de gallo double wrapped in corn tortillas'
      },
      {
        name: 'Grilled Chicken or Beef Fajitas',
        description: 'Served with corn or flour tortillas'
      },
      {
        name: 'Tamales',
        description: 'Chicken, Pork or Spinach and Corn'
      },
      {
        name: 'Enchiladas',
        description: 'Chicken, Beef or Cheese'
      },
      {
        name: 'Quesadillas',
        description: 'Mushroom, Chicken, Beef or Spinach and Cheese'
      },
      {
        name: 'Taquitos',
        description: 'Chicken or Pork'
      },
      {
        name: 'Shrimp Diablo',
        description: 'Smoky char-grilled shrimp served with chipolte aioli, red cabbage, pico and flour tortillas'
      },
      {
        name: 'Black Beans',
        description: ''
      },
      {
        name: 'Charro Beans',
        description: ''
      },
      {
        name: 'Rice',
        description: ''
      },
      {
        name: 'Queso',
        description: ''
      },
      {
        name: 'Guacamole',
        description: ''
      }
    ]
  },
  {
    id: 3,
    day: 'Wednesday, January 8, 2020',
    name: 'Niko Nikos',
    description: 'Greek',
    url: 'http://www.nikonikos.com/Menus/Montrose/',
    logo: '.././logos/nikos.png',
    todaysMenu: [
      {
        name: 'Greek Salad',
        description: 'Crisp bed of iceberg and romaine lettuce, fresh tomatoes, red onions, feta cheese, cucumbers, kalamata olives, capers, bell peppers, pepperoncini peppers and famous salad dressing'
      },
      {
        name: 'Build your own Gyro',
        description: 'Mixture of chopped lamb & beef, pita on the side with tomato, onion & tzatziki sauce'
      },
      { 
        name: 'Spanikopita',
        description: 'Spinach and feta cheese stuffed in puff pastry'
      },
      {
        name: 'Falafel',
        description: 'Fried mashed chickpeas'
      },
      {
        name: 'Hummus',
        description: 'Garbanzo dip, lemon, garlic, fresh parsley'
      },
      {
        name: 'Tabouli',
        description: 'Parsley, tomatoes, onions, bell peppers & bulgur wheat'
      },
      {
        name: 'Tzatziki',
        description: 'Yogurt, sour cream, garlic & cucumber dip'
      },
      {
        name: 'Roasted Potatoes',
        description: ''
      },
      {
        name: 'Grilled Vegetables',
        description: ''
      },
      {
        name: 'Rice',
        description: ''
      },
      {
        name: 'Pita Bread',
        description: ''
      },
      {
        name: 'Pita Chips',
        description: ''
      }
    ]
  },
  {
    id: 4,
    day: 'Thursday, January 9, 2020',
    name: 'PF Changs',
    description: 'Chinese',
    url: 'https://www.pfchangs.com/menu',
    logo: '.././logos/changs.png',
    todaysMenu: [
      {
        name: 'Mandarin Crunch Salad',
        description: 'Julienned vegetables, cabbage, mango, almonds, rice sticks, mandarin vinaigrette'
      },
      {
        name: 'Chicken Lettuce Wraps',
        description: 'House-ground white meat chicken, shiitake mushrooms, water chestnuts, scallions, garlic and soy sauce.'
      },
      {
        name: 'Crab Wontons',
        description: 'Creamy crab filling, bell pepper, green onion, spicy plum sauce'
      },
      {
        name: 'Veggie Spring Rolls',
        description: 'Crispy rolls with julienned veggies, sweet chili dipping sauce'
      },
      {
        name: 'Chicken Egg Rolls',
        description: 'Hand-rolled with julienned veggies, sweet and sour mustard sauce'
      },
      {
        name: 'Spicy Chicken',
        description: 'Sweet & spicy chili sauce w/ green onion'
      },
      {
        name: 'Sweet and Sour Chicken',
        description: 'Sweet & sour sauce w/ pineapples, onion, bell peppers & ginger'
      },
      {
        name: 'Mongolian Beef',
        description: 'Sweet soy glaze, flank steak, garlic & green onion'
      },
      {
        name: 'Beef with Broccoli',
        description: 'Flank steak, ginger, garlic, green onion & broccoli'
      },
      {
        name: 'Kung Pao Chicken',
        description: 'Spicy sichuan chili sauce w/ peanuts, green onion & red chili peppers'
      },
      {
        name: 'Crispy Honey Shrimp',
        description: 'Lightly battered in tangy honey sauce with green onion'
      },
      {
        name: 'Buddha Feast',
        description: 'Five spice tofu w/ savory sauce, asparagus, shiitakes, broccoli & carrots'
      },
      {
        name: 'Chicken Lo Mein',
        description: 'Egg noodles, mushrooms, asian veggies, savory soy sauce and chicken'
      },
      {
        name: 'Pad Thai with Chicken and Shrimp',
        description: 'Rice noodles, thai spice, tofu, green onion & peanuts'
      },
      {
        name: 'Fried Rice',
        description: 'Wok-tossed with egg, carrots, bean sprouts, green onion'
      },
      {
        name: 'White Rice',
        description: ''
      },
      {
        name: 'Brown Rice',
        description: ''
      }
    ]
  },
  {
    id: 5,
    day: 'Friday, January 10, 2020',
    name: 'Pinks Pizza',
    description: 'Pizza',
    url: 'https://pinkspizza.com/menu/',
    logo: '.././logos/pinks.png',
    todaysMenu: [
      {
        name: 'California Salad',
        description: 'Seasonal blend, gorgonzola, raisins, slivered almonds, grape tomatoes'
      },
      {
        name: 'Big Boss',
        description: 'Pepperoni, italian sausage, beef, canadian bacon & real bacon'
      },
      {
        name: 'Supremo',
        description: 'Pepperoni, italian sausage, canadian bacon, onion, black olives'
      },
      {
        name: 'Veggie Supremo',
        description: 'No cheese - loaded with fresh onions, mushrooms, bell peppers, olives & fresh tomatoes'
      },
      {
        name: 'Hawaii Five 0',
        description: 'Canadian bacon, pineapple & extra cheese'
      },
      {
        name: 'Lazy Lasagna',
        description: 'Beef, italian sausage, ricotta & mozzarella cheese'
      },
      {
        name: 'Southwestern',
        description: 'Cheddar and mozzarella cheese, bbq marinated chicken, red onion & jalapeño peppers'
      },
      {
        name: 'Mediterranean',
        description: 'Garlic & olive oil brushed, topped with double feta, sun dried tomatoes, onions, black olives, marinated artichokes, chicken & fresh tomatoes'
      },
      {
        name: 'Double Down',
        description: 'Rosemary chicken, bacon, mozzarella, spinach, tomatoes & roasted garlic'
      },
      {
        name: 'Bada Bing',
        description: 'Prosciutto, bacon, pepperoni, mozzarella, roma tomatoes, spinach & mushrooms'
      },
      {
        name: 'Pepperoni',
        description: ''
      },
      {
        name: 'Cheese',
        description: ''
      },
      {
        name: 'Pepperoni and Italian Sausage',
        description: ''
      },
      {
        name: 'Pepperoni, Pineapple and Jalapenos',
        description: ''
      },
      {
        name: 'Gluten Free Pepperoni',
        description: ''
      },
      {
        name: 'Gluten Free Supremo',
        description: ''
      },
      {
        name: 'Spicy BBQ Wings',
        description: ''
      },
      {
        name: 'Hot Buffalo Wings',
        description: ''
      }
    ]
  },
  {
    id: 6,
    day: 'Monday, January 13, 2020',
    // date: moment(new Date()).format('MMM Do'),
    name: 'Thai Cottage',
    description: 'Thai',
    url: '',
    logo: '.././logos/thai.jpg',
    todaysMenu: [
      {
        name: 'Green Thai Salad',
        description: 'Fresh green lettuces, cucumbers, tomatoes and carrots with special chili paste house dressing.'
      },
      {
        name: 'Shrimp Soft Spring Rolls',
        description: 'Fresh rolls, rice wrapper with shrimp, fresh vegetables and mint leaves served with peanut sauce'
      },
      {
        name: 'Tofu Soft Spring Rolls',
        description: 'Fresh rolls, rice wrapper with tofu, fresh vegetables and mint leaves served with peanut sauce'
      },
      {
        name: 'Chicken Steamed Dumplings',
        description: 'Rice tart filled with chicken and vegetables, steamed and served with spicy black soy sauce'
      },
      {
        name: 'Veggie Steamed Dumplings',
        description: 'Rice tart filled with vegetables, steamed and served with spicy black soy sauce'
      },
      {
        name: 'Chicken Thai Dim Sum',
        description: 'Steamed wonton filled with minced chicken served with spicy black soy sauce'
      },
      {
        name: 'Royal Broccoli with Beef',
        description: 'Fresh broccoli sautéed with beef in gravy sauce'
      },
      {
        name: 'Chili Basil Shrimp',
        description: 'Stir-fried shrimp with fresh basil, carrots, bell peppers, green beans, onions and mushrooms in basil sauce'
      },
      {
        name: 'Garlic Pepper Tofu',
        description: 'Stir-fried tofu with mushrooms in garlic and black pepper sauce served over fresh cabbages and garnished with cilantro'
      },
      {
        name: 'Princess Siam with Chicken',
        description: 'Stir fried sliced chicken with mushrooms, carrots, onions and zucchini in a homemade sauce'
      },
      {
        name: 'Sizzling Beef',
        description: 'Marinated beef with spinach and cashews'
      },
      {
        name: 'Pad Kee Mao with Shrimp',
        description: 'Flat rice noodles pan fried with shrimp, garlic onion, carrots, tomatoes, bell peppers and fresh basil'
      },
      {
        name: 'Green Curry with Chicken',
        description: 'Chicken prepared with green curry paste, coconut milk, bamboo shoots, zucchini, peas and basil'
      },
      {
        name: 'Panang Curry with Chicken',
        description: 'Chicken prepared with coconut milk, peas, bell peppers and basi'
      },
      {
        name: 'Red Curry with Veggies',
        description: 'Mixed Veggies prepared with red curry paste, coconut milk, bamboo shoots, peas, carrots and basil'
      },
      {
        name: 'Pineapple Curry with Shrimp',
        description: 'Shrimp with savory ‘Gang Kua’ curry paste, pineapple chunks in coconut milk'
      },
      {
        name: 'BBQ Spare Ribs',
        description: 'Thai style marinated pork ribs'
      },
      {
        name: 'Chicken Teriyaki',
        description: 'Grilled marinated chicken breast topped with teriyaki sauce'
      },
      {
        name: 'Shrimp Fried Rice',
        description: 'Fried rice with shrimp, egg and green onions'
      },
      {
        name: 'Spicy Basil Fried Rice',
        description: 'Fried rice, fresh basil, bell peppers, onions, green beans, carrots and garnished with cilantro'
      },
      {
        name: 'Steamed White Rice',
        description: ''
      },
      {
        name: 'Brown Rice',
        description: ''
      }
    ]
  },
  {
    id: 7,
    day: 'Tuesday, January 14, 2020',
    // date: moment(new Date()).add(1, 'days').calendar(),
    name: 'Red Robbins',
    description: 'Burgers',
    url: '',
    logo: '.././logos/red.png',
    todaysMenu: [
      {
        name: 'Avo-Cobb-O Salad',
        description: 'Grilled chicken breast, hardwood-smoked bacon, Bleu cheese crumbles, hard-boiled eggs, tomatoes, croutons and avocado on mixed greens. Served with choice of dressing'
      },
      {
        name: 'BYOB Meat',
        description: 'Beef Patty, Grilled Chicken Breast, Turkey Patty and Veggie Burger Patty'
      },
      {
        name: 'BYOB Buns',
        description: 'Sesame Brioche, Ciabatta, Whole Grain and Gluten Free Bun'
      },
      {
        name: 'Toppings',
        description: 'Lettuce, Tomato, Red Onion, Pickles, Avocado, Bacon and Relish'
      },
      {
        name: 'Cheese',
        description: 'Cheddar, Swiss, Pepper Jack'
      },
      {
        name: 'Sides',
        description: 'French Fries, Sweet Potato Fries, Onion Rings, Onion Strings and Fruit Salad'
      },
      {
        name: 'Sauces',
        description: 'Ranch, Jalapeno Ranch, Southwestern, Chipolte Aioli, Blue Cheese and Honey Poppy'
      }
    ]
  },
  {
    id: 8,
    day: 'Wednesday, January 15, 2020',
    name: 'Cool Runnings',
    description: 'Jamaican',
    url: '',
    logo: '.././logos/cool.png',
    todaysMenu: [
      {
        name: 'Jerk Chicken',
        description: 'Marinated in spicy house-made jerk seasoning, grilled to perfection'
      },
      {
        name: 'Jerk Pork',
        description: 'Marinated in spicy house-made jerk seasoning, grilled to perfection'
      },
      {
        name: 'Curry Chicken',
        description: 'Tender bone-in chicken marinated in our special blend of fresh garlic, thyme, scallions, onions, scotch bonnet pepper, stewed in Jamaican curry'
      },
      {
        name: 'Brown Stew Chicken',
        description: 'A traditional Jamaican favorite. Tender bone-in chicken marinated and braised then stewed in a rich brown gravy'
      },
      {
        name: 'Roasted Beef',
        description: 'Marinated in our special house seasoning, then braised and slow cooked'
      },
      {
        name: 'Escovitch Tilapia',
        description: 'Fried tilapia, served with sweet peppers, carrots, and onions in a balsamic vinegar sauce'
      },
      {
        name: 'Rice and Peas',
        description: ''
      },
      {
        name: 'Vegetarian Fried Rice',
        description: ''
      },
      {
        name: 'Vegetable Medley',
        description: 'Seasonal vegetables including cauliflower, carrots, zucchini, squash, broccoli, and lima beans stewed in a coconut curry sauce. Served with rice and steamed vegetables'
      },
      {
        name: 'Festival Bread',
        description: 'Fired Sweet Bread'
      },
      {
        name: 'Veggie Brown Stew',
        description: 'Veggies stewed in a rich brown gravy'
      },
      {
        name: 'Meat Pies',
        description: 'Traditional flacky pastry filled with Beef, Chicken or Veggie'
      }
    ]
  },
  {
    id: 9,
    day: 'Thursday, January 16, 2020',
    name: 'Salata',
    description: 'Salads',
    url: '',
    logo: '.././logos/salata.jpg',
    todaysMenu: [
      {
        name: 'Build your own Salad or Wrap',
        description: 'Base - Mixed Greens or Tortilla'
      },
      {
        name: 'Protein',
        description: 'Grilled Chicken, Pesto Chicken, Spicy Chipolte Chicken, Asian BBQ Chicken, Marinated Turkey, Salmon, Tofu and Falafel'
      },
      {
        name: 'Veggies',
        description: 'Tomato, Cucumber, Carrots, Bell Peppers, Mushrooms, Broccoli, Radish, Cabbage, Corn, Black Olives, Green Peas and Black Beans'
      },
      {
        name: 'Cheese',
        description: 'Blue Cheese, Feta Cheese, Mixed Cheese and Parmesan Cheese'
      },
      {
        name: 'Nuts',
        description: 'Pumpkin Seeds, Almonds and Walnuts'
      },
      {
        name: 'Extra Toppings',
        description: 'Avocado, Chopped Bacon, Chopped Egg, Croutons, Sesame Sticks'
      },
      {
        name: 'Dressings',
        description: 'Buttermilk Ranch, Chipolte Ranch, Fresh Herb Vinaigrette, Balsamic Vinaigrette, Ginger Lime and Lemon Vinaigrette'
      }
    ]
  },
  {
    id: 10,
    day: 'Friday, January 17, 2020',
    name: 'The Halal Guys',
    description: 'Gyro & Chicken',
    url: '',
    logo: '.././logos/halal.png',
    todaysMenu: [
      {
        name: 'Build your own Platter',
        description: ''
      },
      {
        name: 'Base',
        description: 'Seasoned Rice'
      },
      {
        name: 'Protein',
        description: 'Marinated and Grilled Chicken, Beef Gyro or Falafel'
      },
      {
        name: 'Toppings',
        description: 'Lettuce and Tomato'
      },
      {
        name: 'Sauces',
        description: 'Famous White Sauce and Hot Red Sauce'
      },
      {
        name: 'Sides',
        description: 'Hummus, Pita Bread and French Fries'
      }
    ]
  }
]
