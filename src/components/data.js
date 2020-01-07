
const today = new Date()
console.log(today)

export const cardInfo = [
  {
    id: 1,
    day: 'Monday 1.6.20',
    date: '',
    name: 'Potbelly',
    description: 'Sandwiches',
    url: 'https://api-potbelly-production.fuzzstaging.com/proxy/global-menu',
    logo: '.././logos/potbelly.png',
    page: 1,
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
    day: 'Tuesday 1.7.20',
    date: '',
    name: 'Berryhill Baja',
    description: 'Tex-Mex',
    url: 'https://pappasitos.com/menu/',
    logo: '.././logos/berry.png',
    page: 1,
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
    day: 'Wednesday 1.8.20',
    date: '',
    name: 'Niko Nikos',
    description: 'Greek',
    url: 'http://www.nikonikos.com/Menus/Montrose/',
    logo: '.././logos/nikos.png',
    page: 1,
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
    day: 'Thursday 1.9.20',
    date: '',
    name: 'PF Changs',
    description: 'Chinese',
    url: 'https://www.pfchangs.com/menu',
    logo: '.././logos/changs.png',
    page: 1,
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
    day: 'Friday 1.10.20',
    date: '',
    name: 'Pinks Pizza',
    description: 'Pizza',
    url: 'https://pinkspizza.com/menu/',
    logo: '.././logos/pinks.png',
    page: 1,
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
    day: 'Monday 1.13.20',
    date: '',
    name: 'Thai Cottage',
    description: 'Thai',
    url: '',
    logo: '.././logos/thai.jpg',
    page: 2,
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
    day: 'Tuesday 1.14.20',
    date: '',
    name: 'Red Robbins',
    description: 'Burgers',
    url: '',
    logo: '.././logos/red.png',
    page: 2,
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
    day: 'Wednesday 1.15.20',
    date: '',
    name: 'Cool Runnings',
    description: 'Jamaican',
    url: '',
    logo: '.././logos/cool.png',
    page: 2,
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
    day: 'Thursday 1.16.20',
    date: '',
    name: 'Salata',
    description: 'Salads',
    url: '',
    logo: '.././logos/salata.jpg',
    page: 2,
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
    day: 'Friday 1.17.20',
    date: '',
    name: 'The Halal Guys',
    description: 'Gyro & Chicken',
    url: '',
    logo: '.././logos/halal.png',
    page: 2,
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
  },
  {
    id: 11,
    day: 'Monday 1.20.20',
    date: '',
    name: 'Govindas',
    description: 'Vegetarian Indian',
    url: '',
    logo: '.././logos/govin.png',
    page: 3,
    todaysMenu: [
      {
        name: 'House Salad',
        description: 'Made with house made dressing'
      },
      {
        name: 'Dal Makhani',
        description: 'Lentil Soup, Vegan, Gluten Friendly Black Urad Dal & Rajma cooked with Oil'
      },
      {
        name: 'Malai Kofta',
        description: 'Cauliflower/Carrot/Potatoes/Tomatoes/Cheese cooked with Oil'
      },
      {
        name: 'Saag Paneer',
        description: 'Gluten Friendly Paneer Cheese with Spinach in creamy sauce'
      },
      {
        name: 'Vegetable Pakoras',
        description: 'Samosas with fresh-made Mint Chutney'
      },
      {
        name: 'Rice Pilaf',
        description: ''
      },
      {
        name: 'Papad',
        description: 'thin, crisp, round flatbread'
      },
      {
        name: 'Chapatis',
        description: 'fresh roti/puri (flat whole wheat flour breads) daily'
      }
    ]
  },
  {
    id: 12,
    day: 'Tuesday 1.21.20',
    date: '',
    name: 'Zoes Kitchen',
    description: 'Greek',
    url: '',
    logo: '.././logos/zoes.png',
    page: 3,
    todaysMenu: [
      {
        name: 'Greek Salad',
        description: 'Tomatoes, cucumbers, bell peppers, olives, onions and feta over potato salad; served with pita bread.'
      },
      {
        name: 'Hummus',
        description: 'Classic, Basil pesto or Harissa Red Pepper - served with pita bread, pita chips and cucumbers'
      },
      {
        name: 'Kabobs',
        description: 'Chicken, Beef or Shrimp - all served with roasted tomatoes, peppers and onions'
      },
      {
        name: 'Spinach and Mushroom Piadina',
        description: 'Grilled Italian flatbread sandwich with fresh spinach, mushrooms, feta, parmesan cheese and fresh mozzarella'
      },
      {
        name: 'Tumeric Rice',
        description: ''
      },
      {
        name: 'Roasted Vegetables',
        description: ''
      },
      {
        name: 'Braised White Beans',
        description: ''
      },
      {
        name: 'Baked Falafel',
        description: ''
      }
    ]
  },
  {
    id: 13,
    day: 'Wednesday 1.22.20',
    date: '',
    name: 'Bucca di Beppo',
    description: 'Italian',
    url: '',
    logo: '.././logos/buca.png',
    page: 3,
    todaysMenu: [
      {
        name: 'Apple Gorgonzola Salad',
        description: 'Granny Smith apples, spiced walnuts, dried cranberries & Gorgonzola tossed with mixed lettuce in our signature Italian vinaigrette'
      },
      {
        name: 'Mixed Greens Salad',
        description: 'Mixed lettuce tossed in our signature Italian vinaigrette with Roma tomatoes, red onions, pepperoncini & black & green olives '
      },
      {
        name: 'Chicken Limone',
        description: 'Sautéed chicken in lemon butter sauce and capers'
      },
      {
        name: 'Eggplant Parmigiana',
        description: 'Topped with our homemade marinara sauce, roma tomatoes, basil and mozzarella'
      },
      {
        name: 'Pasta Primavera',
        description: 'Penne pasta, homemande marinara, broccoli, red & green bell peppers and sautéed onions'
      },
      {
        name: 'Shrimp Florentine',
        description: 'Garlic shrimp, Roma tomatoes & spinach with linguine in garlic butter sauce'
      },
      {
        name: 'Salmon Sorrento',
        description: 'Pan seared salmon with capers and roma tomatoes in lemon butter sauce'
      },
      {
        name: 'Spaghetti and Meatballs',
        description: 'Our famous half-pound meatballs with our homemade marinara sauce'
      },
      {
        name: 'Sausage and Peppers',
        description: ''
      },
      {
        name: 'Rosemary Mashed Potaotes',
        description: ''
      },
      {
        name: 'Steamed Boccoli',
        description: ''
      },
      {
        name: 'Green Beans',
        description: ''
      }
    ]
  },
  {
    id: 14,
    day: 'Thursday 1.23.20',
    date: '',
    name: 'Maine-ly',
    description: 'Lobster Rolls and Sandwiches',
    url: '',
    logo: '.././logos/main.jpg',
    page: 3,
    todaysMenu: [
      {
        name: 'Lobster Roll',
        description: 'Fresh steamed lobster served with mayo on a butter toasted roll.'
      },
      {
        name: 'Crab Roll',
        description: 'Snow crab served with mayo on a butter toasted roll'
      },
      {
        name: 'Turkey Sandwich',
        description: ''
      },
      {
        name: 'Ham Sandwich',
        description: ''
      },
      {
        name: 'Tuna Sandwich',
        description: ''
      },
      {
        name: 'Veggie Sandwich',
        description: ''
      },
      {
        name: 'BLT',
        description: ''
      },
      {
        name: 'Spicy Salami',
        description: ''
      },
      {
        name: 'Roast Beef',
        description: ''
      },
      {
        name: 'Grilled Chicken',
        description: ''
      },
      {
        name: 'Meatball and Parm Sub',
        description: ''
      },
      {
        name: 'Brocoli Cheddar Soup',
        description: ''
      },
      {
        name: 'Roasted Garlic Tomato Soup',
        description: ''
      },
      {
        name: 'Minestone Soup',
        description: ''
      },
      {
        name: 'Assorted Chips',
        description: ''
      },
      {
        name: 'Home-made Whoopie Pies',
        description: 'Fresh homemade chocolate outside with sweet marshmallow middle.'
      }
    ]
  },
  {
    id: 15,
    day: 'Friday 1.24.20',
    date: '',
    name: 'Chuys',
    description: 'Tex-Mex',
    url: '',
    logo: '.././logos/chuys.png',
    page: 3,
    todaysMenu: [
      {
        name: 'Chips and Dips',
        description: 'Salsa, Queso, Creamy Jalapeno Dip and Guacamole'
      },
      {
        name: 'Mexi Cobb Salad',
        description: 'Fajita chicken, green chiles, cheese, avocados & tomatoes.'
      },
      {
        name: 'Fajita Beef Panchos (nachos)',
        description: ''
      },
      {
        name: 'Fajita Chicken Panchos (nachos)',
        description: ''
      },
      {
        name: 'Tacos Al Carbon - Beef',
        description: 'Fajita beef with grilled onions & green chiles in flour tortillas.'
      },
      {
        name: 'Tacos Al Carbon - Chicken',
        description: 'Fajita chicken with grilled onions & green chiles in flour tortillas.'
      },
      {
        name: 'Baja Fish Tacos',
        description: 'Flour tortillas with cilantro, red cabbage, Creamy Jalapeño & lightly battered & fried fish'
      },
      {
        name: 'Baja Shrimp Tacos',
        description: 'Flour tortillas with cilantro, red cabbage, Creamy Jalapeño & lightly battered & fried shrimp'
      },
      {
        name: 'Deluxe Chicken Enchilada',
        description: 'Roasted chicken & cheese with Deluxe Tomatillo Sauce.'
      },
      {
        name: 'Classic Tex Mex Enchilada',
        description: 'Straight to you from South Texas. Cheese & red onion with our signature Tex-Mex Sauce.'
      },
      {
        name: 'Chicka Chicka Boom Boom Enchilada',
        description: 'Roasted chicken & cheese with our fan favorite Boom-Boom Sauce.'
      },
      {
        name: 'Veggie Enchilada',
        description: 'Blue corn tortillas with spinach, onions, zucchini, yellow squash, red bell peppers, serranos, roasted green chiles, corn & cheese with Ranchero Sauce'
      },
      {
        name: 'Bean and Cheese Burrito',
        description: 'A flour tortilla stuffed with refried beans, cheese & topped with queso'
      },
      {
        name: 'Fajita Beef Burrito',
        description: 'A flour tortilla stuffed with refried beans, cheese & fajita beef'
      },
      {
        name: 'Fajita Chicken Burrito',
        description: 'A flour tortilla stuffed with refried beans, cheese & fajita chicken'
      },
      {
        name: 'Chicken Flautas',
        description: 'Corn tortillas filled with roasted chicken & cheese, rolled, fried & topped with our smoky Chipotle Sauce. Served with guacamole & sour cream.'
      },
      {
        name: 'Chuychanga',
        description: 'A flour tortilla filled with roasted chicken, cheese, cilantro & green chiles, deep fried & served with one of our Signature Sauces & a drizzle of sour cream.'
      },
      {
        name: 'Elvis Green Chile Fried Chicken',
        description: 'A chicken breast breaded with Lay’s® potato chips & fried to a golden brown, served with Green Chile Sauce & cheese. Fat Elvis’s favorite!'
      },
      {
        name: 'Deluxe Beef Quesadilla',
        description: 'Flour tortillas stuffed with beef, cheese, green chiles & onion. With guacamole, sour cream & pico de gallo.'
      },
      {
        name: 'Deluxe Chicken Quesadilla',
        description: 'Flour tortillas stuffed with chicken, cheese, green chiles & onion. With guacamole, sour cream & pico de gallo.'
      }
    ]
  },
  {
    id: 16,
    day: 'Monday, January 27, 2020',
    date: '',
    name: 'Nam Noodles and More',
    description: 'Vietnamese',
    url: '',
    logo: '.././logos/nam.jpg',
    page: 4,
    todaysMenu: [
      {
        name: 'Grilled Lemongrass Chicklen Salad',
        description: 'Chopped mixed greens topped with lemongrass-seasoned grilled chicken breast, served with Miso Ginger dressing.'
      },
      {
        name: 'Vegetarian Spring Rolls',
        description: 'Hand-wrapped in rice paper, with lettuce, bean sprouts, and rice vermicelli, served with NAM peanut sauce.'
      },
      {
        name: 'Chicken and Broccoli Stir Fry',
        description: ''
      },
      {
        name: 'Lemon Grass Chicken',
        description: 'Lemongrass stir-fried with sweet onion sauce, served with fresh lettuce, cucumbers and bean sprouts'
      },
      {
        name: 'Vietnamese Fajita Beef',
        description: 'Marinated beef stir-fried with sweet onion sauce, served with fresh lettuce, cucumbers and bean sprouts'
      },
      {
        name: 'Marinated Pork',
        description: 'Marinated pork stir-fried with sweet onion sauce, served with fresh lettuce, cucumbers and bean sprouts'
      },
      {
        name: 'Seven Spice Tofu',
        description: ''
      },
      {
        name: 'Singapore Noodles',
        description: 'Rice noodles stir-fried in curry seasoning with shrimp, BBQ pork, carrots, bean spouts, and scallions.'
      },
      {
        name: 'Chicken Lo Mein',
        description: 'Wheat noodles stir-fried with chicken and veggies.'
      },
      {
        name: 'Mama Fried Rice',
        description: 'White rice stir-fried in soy sauce with eggs, green peas, scallions, bean sprouts, chicken breast and BBQ pork'
      },
      {
        name: 'White or Brown Rice',
        description: ''
      },
      {
        name: 'Side Steamed Broccoli and Carrots',
        description: ''
      }
    ]
  },
  {
    id: 17,
    day: 'Tuesday, January 28, 2020',
    date: '',
    name: 'Gatlins BBO',
    description: 'BBQ',
    url: '',
    logo: '.././logos/gatlins.png',
    page: 4,
    todaysMenu: [
      {
        name: 'Texas Size Baled Potatoes',
        description: 'Giant potatoes with butter, cheese, chives, bacon and sour cream'
      },
      {
        name: 'Brisket',
        description: ''
      },
      {
        name: 'Turkey',
        description: ''
      },
      {
        name: 'Link Sausage',
        description: ''
      },
      {
        name: 'Pulled Pork',
        description: ''
      },
      {
        name: 'Chicken',
        description: ''
      },
      {
        name: 'Spare Ribs',
        description: ''
      },
      {
        name: 'Mac and Cheese',
        description: ''
      },
      {
        name: 'Creamed Corn',
        description: ''
      },
      {
        name: 'Baked Beans',
        description: ''
      },
      {
        name: 'Collard Greens',
        description: ''
      },
      {
        name: 'White or Wheat Bread',
        description: ''
      },
      {
        name: 'Fixins',
        description: 'White Onion, Pickels, Pickled Jalapenos and BBQ Sauce'
      }
    ]
  },
  {
    id: 18,
    day: 'Wednesday, January 29, 2020',
    date: '',
    name: 'FreeBirds',
    description: 'Burritos',
    url: '',
    logo: '.././logos/free.png',
    page: 4,
    todaysMenu: [
      {
        name: 'Build your own Burrito or Bowl',
        description: ''
      },
      {
        name: 'Tortillas',
        description: 'Flour, Wheat, Spicy Cayenne or Spinach Tortillas or '
      },
      {
        name: 'Rice',
        description: 'Spanish Rice or Cilantro-Lime Rice'
      },
      {
        name: 'Meat or Veggies',
        description: 'Flame Grilled Steak, Seasoned Chicken, Sauteed Veggies'
      },
      {
        name: 'Beans',
        description: 'Refried, Pinto or Black Beans'
      },
      {
        name: 'Cheese',
        description: 'Montery Jack or Cheddar'
      },
      {
        name: 'Sauces',
        description: 'Creamy Jalapeno, Habanero, Tomatillo or BBQ Sauce'
      },
      {
        name: 'Extra Fixins',
        description: 'Roasted Garlic, Cilantro, Grilled Corn Salsa, Fresh Jalapenos, Diced Tomatoes, Sour Cream, Shredded Lettuce and Tortilla Strips '
      },
      {
        name: 'Chips and Dip',
        description: 'Salsa, Queso and Guacamole'
      }
    ]
  },
  {
    id: 19,
    day: 'Thursday, January 30, 2020',
    date: '',
    name: 'Antones',
    description: 'Sandwiches',
    url: '',
    logo: '.././logos/antones.png',
    page: 4,
    todaysMenu: [
      {
        name: 'Chicken and Andouille Gumbo',
        description: 'Served with white rice and fresh okra'
      },
      {
        name: 'Red Beans and Rice',
        description: 'Served with white rice and fresh okra'
      },
      {
        name: 'Grilled Chicken Caesar Salad',
        description: 'Grilled Chicken Breast, Romaine Lettuce, Parmesan Cheese, Croutons, Caesar Dressing'
      },
      {
        name: 'Cobb Salad',
        description: 'Ham, Turkey, Bacon, Hard-Boiled Egg, Cherry Tomatoes, English Cucumber, & Blue Cheese'
      },
      {
        name: 'Greek Salad',
        description: 'Cherry Tomatoes, English Cucumber, Black Olives, Pepperoncini, Feta Cheese, Pita Bread, & Oregano'
      },
      {
        name: 'Original',
        description: 'Served on Local Bread by Royal Bakery with Ham, Salami, Provolone, Chow Chow, Mayo and Pickles'
      },
      {
        name: 'Super Original',
        description: 'Same as the Original, but with Extra Meat and Cheese'
      },
      {
        name: 'Turkey and Swiss',
        description: 'Served on Local Bread by Royal Bakery with Roasted Turkey, Swiss Cheese, Mayo and Bread & Butter Pickles'
      },
      {
        name: 'Tuna Salad',
        description: 'Served on Local Bread by Royal Bakery with Tuna, Provolone and Pickles'
      },
      {
        name: 'Chicken Salad',
        description: 'On Toasted White or Whole Grain Bread with Mayo, Lettuce & Tomato'
      },
      {
        name: 'Egg Salad',
        description: 'On Toasted White or Whole Grain Bread with Mayo, Lettuce & Tomato'
      },
      {
        name: 'BLT',
        description: 'On Toasted White or Whole Grain Bread with Mayo and Apple-Wood Smoked Bacon'
      },
      {
        name: 'Italian Deli',
        description: 'On Ciabatta Bread with Ham, Mortadella, Salami, Pepperoni, Lettuce, Tomato, Onion, & Sweet Italian Peppers'
      },
      {
        name: 'Roast Beef with Horseradish Sauce',
        description: 'On Po’Boy Bread with House-Roasted Rare Roast Beef, Lettuce, Tomatoes, & Onion'
      },
      {
        name: 'Nature Boy',
        description: 'Served on Local Bread by Royal Bakery with hummus, tabouli and olive tapenade'
      }
    ]
  },
  {
    id: 20,
    day: 'Friday, January 31, 2020',
    date: '',
    name: 'Star Pizza',
    description: 'Pizza',
    url: '',
    logo: '.././logos/star.png',
    page: 4,
    todaysMenu: [
      {
        name: 'Starburst Pizza',
        description: 'ground beef, italian sausage, pepperoni, onions, mushrooms and green peppers'
      },
      {
        name: 'The Cowbell',
        description: 'we slow smoke our own BBQ beef brisket and top it off with our homemade "MoreCowbell" BBQ sauce, cheddar and mozzarella cheese. try it with a side of onions and pickled jalepenos!'
      },
      {
        name: 'Salsa Verde Pizza',
        description: 'spicy tomatillo sauce topped with roasted poblano peppers, pan-fried garlic and feta cheese'
      },
      {
        name: 'Bens Special Pizza',
        description: 'ground beef, italian sausage, pepperoni and ham'
      },
      {
        name: 'Veggie Pizza',
        description: 'mushrooms, onions, green peppers, broccoli, cauliflower, zucchini and sprouts'
      },
      {
        name: 'Margherita Pizza',
        description: 'olive oil base, roma tomatoes, garlic, basil, parmesan, and our mix of mozzarella and provolone cheese'
      },
      {
        name: 'Chicken Alfredo Pizza',
        description: 'alfredo sauce, chicken, gorgonzola, mozzarella, mushrooms, onions, fresh basil, and our mix of mozzarella and provolone cheese'
      },
      {
        name: 'Dinner Salad',
        description: 'lettuce, roma tomatoes, carrots, cucumbers and homemade croutons'
      },
      {
        name: 'Caesar Salad',
        description: 'romaine lettuce, homemade croutons, parmesan cheese and kalamata olives tossed with our classic caesar dressing'
      }
    ]
  },
]
