import React, { Component } from 'react'

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  //validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false)
  })

  //validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false)
  })

  return valid;
}

class Jasons extends Component {
  constructor (props) {
    super(props)

    this.state = {
      fullName: null,
      foodOrder: null,
      formErrors: {
        fullName: '',
        foodOrder: ''
      }
    }
  }

  handleSubmit = e => {
    e.preventDefault()

    if(formValid(this.state)) {
      console.log(`
      --SUBMITTING--
      fullName: ${this.state.fullName}
      foodOrder: ${this.state.foodOrder}
      `)
    } else {
      console.log("form invalid - display error message")
    }
  }

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = this.state.formErrors;


    switch (name) {
      case 'fullName':
        formErrors.fullName = value.length < 3 ? 'minimum 3 characters required' : '';
        break;
        case 'foodOrder':
            formErrors.foodOrder = value.length < 0 ? 'minimum 3 characters required' : '';
            break;
            default:
              break;
    
  }

  this.setState({formErrors, [name]: value }, () => console.log(this.state))
}

  render () {
    const { formErrors } = this.state;
    return (
      <div>
        <div className='wrapper'>
          <div className='form-wrapper'>
            <h1>Would you rather Jasons?</h1>
            <form onSubmit={this.handleSubmit} noValidate>
              <div className='fullName'>
                <label htmlFor='fullName'>Name</label>
                <input
                  type='text'
                  className={formErrors.fullName.length > 0 ? "error" : null}
                  placeholder='Name'
                  name='fullName'
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.fullName.length > 0 && (
                  <span className="errorMessage">{formErrors.fullName}</span>
                )}
              </div>
              <div className='foodOrder'>
                <lable htmlFor='foodOrder'>Food Order</lable>
                <input
                  type='text'
                  className={formErrors.foodOrder.length > 0 ? "error" : null}
                  placeholder='Food Order'
                  name='foodOrder'
                  noValidate
                  onChange={this.handleChange}
                />
                 {formErrors.foodOrder.length > 0 && (
                  <span className="errorMessage">{formErrors.foodOrder}</span>
                )}
              </div>
              <div className='submitOrder'>
                <button type='submit'>Submit Order</button>
              </div>
            </form>
          </div>
        </div>

     <h1>Soups</h1>
     <ul>
          <li>Broccoli Cheese</li>
          <li>Chicken Noodle</li>
          <li>Fire Roasted Tortilla</li>
          <li>Organic Vegetable</li>
          <li>Tomato Basil</li>
          <li>Spicy Deafood Gumbo</li>
          <li>Beef Stew</li>
          <li>Maine Lobster Chowder</li>
          <li>Southwest Chicken Chili</li>
          <li>Chili</li>
          <li>Chicken Pot Pie</li>
          <li>Irish Potato</li>
        </ul>
     <h1>Salads</h1>
     <ul>
          <li>Chicken Club Salad
            <p>Grilled, 100% antibiotic-free chicken breast, grape tomatoes, sliced avocado, cheddar, Asiago, bacon on mixed salad greens.
            </p>
          </li>
          <li>Nutty Mixed-Up Salad
            <p>Grilled, 100% antibiotic-free chicken breast, organic field greens, grapes, feta, nuts, dried cranberries, raisins, pumpkin seeds, organic apples.
            </p>
          </li>
          <li>Mesa Chicken Salad
            <p>Grilled, 100% antibiotic-free chicken breast, mixed salad greens, cheddar, grape tomatoes, chopped avocado, roasted corn and black bean mix, served with NEW jalepeño ranch dressing.
            </p>
          </li>
          <li>The Big Chef
            <p>Ham, roasted turkey breast, Asiago, cheddar, grape tomatoes, kalamata olives, hard-boiled eggs on mixed salad greens.
            </p>
          </li>
          <li>Chicken Caesar
            <p>Grilled, 100% antibiotic-free chicken breast, romaine, Asiago, croutons served with creamy Caesar dressing and toasted herb focaccia bread.
            </p>
          </li>
          <li>Taco Salad
            <p>Shredded lettuce, blue corn chips, cheddar, sour cream, guacamole, pico de gallo, Southwest spices, side of salsa, with Chili or Southwest Chicken Chili. Veggie Option Made with roasted corn and black bean mix.
            </p>
          </li>
        </ul>
     <h1>Pastas and Potatoes</h1>
     <ul>
          <li>Zucchini Garden Pasta
            <p>Bowtie pasta, roasted zucchini, fresco mix of roasted tomatoes, organic spinach, artichoke hearts, Asiago, with herb focaccia.
            </p>
          </li>
          <li>Penne Pasta and Meatballs
            <p>Penne pasta, meatballs, marinara, Asiago, herb focaccia.
            </p>
          </li>
          <li>Chicken Pasta Primo
            <p> Grilled, 100% antibiotic-free chicken breast, penne pasta, tomato-basil sauce, Asiago, herb focaccia.</p>
          </li>
          <li>Chicken Alfredo
            <p>Grilled, 100% antibiotic-free chicken breast, penne pasta, creamy Alfredo sauce, Asiago, herb focaccia.</p>
          </li>
          <li>The Plain Jane® Potato
            <p>Cheddar, sour cream, butter, bacon, green onions on a baked potato.</p>
          </li>
          <li>Pollo Mexicano Potato
            <p>Grilled, 100% antibiotic-free chicken breast, cheddar, sour cream, butter, pico de gallo, Southwest spices on a baked potato.</p>
          </li>
          <li>Papa Verde Sweet Potato
            <p>Roasted turkey breast, organic spinach, chopped avocado, butter, jalapeño ranch dressing, Asiago on a baked sweet potato.</p>
          </li>
          <li>Lean Green Sweet Potato
            <p>Organic spinach, fresh-cracked black pepper, Asiago on a baked sweet potato.</p>
          </li>
          <li>Texas Style Spud
            <p>Chopped pit-smoked beef brisket, barbecue sauce, cheddar, butter on a baked potato.</p>
          </li>
        </ul>
     <h1>Sandwiches</h1>
     <ul>
          <li>Zucchini Grillini
            <p>Roasted zucchini, Muenster, organic spinach, red onions, Roma tomatoes, kalamata olives, roasted red pepper hummus, toasted on olive oil-basted multigrain wheat. Choice of one side: fresh fruit, steamed veggies, baked chips or organic blue corn chips with salsa.</p>
          </li>
          <li>MeataBalla
            <p>Meatballs, Italian red sauce, provolone, toasted on New Orleans French bread.</p>
          </li>
          <li>Shelley's Deli Chick
            <p>Our famous chicken salad with almonds and pineapple, leafy lettuce, tomato, toasted croissant.</p>
          </li>
          <li>Grilled Cheese & Tomato Soup Combo
            <p>Grilled Muenster and cheddar cheese sandwich on multigrain wheat. Served with a bowl of Tomato Basil soup.</p>
          </li>
          <li>Rio Ranch Po'boy
            <p>Grilled, 100% antibiotic-free chicken breast, sautéed mushrooms, cheddar, green onions, pico de gallo, Southwest spices, ranch dressing, toasted New Orleans French bread.</p>
          </li>
          <li>The Papa Joe
            <p>Dedicated to our Founder's Dad. Roasted turkey breast, Asiago, roasted tomatoes, pesto aioli, toasted herb focaccia.</p>
          </li>
          <li>Santa Fe Chicken Sandwich®
            <p>Grilled, 100% antibiotic-free chicken breast, bacon, Swiss, guacamole, tomato. Thousand Island dressing, grilled multigrain wheat.</p>
          </li>
          <li>Amy's Turkey-O
            <p>Roasted turkey breast, sliced avocado, jalapeño pepper jack, red onions, Roma tomatoes, leafy lettuce, stone-ground mustard, on a toasted onion bun.</p>
          </li>
          <li>Bigger Better BLT*
            <p>Bacon, leafy lettuce, Roma tomatoes, fresh-cracked egg, mayo, avocado slices, toasted multigrain wheat.</p>
          </li>
          <li>Italian Cruz Po'boy
            <p>Nitrite-free ham, salami, Italian peppers, Asiago, shredded lettuce, Roma tomatoes, stone-ground mustard, Italian dressing, toasted New Orleans French bread.</p>
          </li>
          <li>Chick-in-Bun
            <p>Made with our all-new, grilled, whole chicken breast fillet, chipotle aioli, leafy lettuce, tomato, on a toasted organic ancient grain bun. Served with chips or baked chips and a pickle. A Limited Time Offer!</p>
          </li>
        </ul>
   </div>
    )
  }
}

export default Jasons
