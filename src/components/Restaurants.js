import React from 'react'

class Restaurants extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      menus: []
    }
  }

  componentDidMount () {
    fetch('https://api-potbelly-production.fuzzstaging.com/proxy/global-menu')
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          this.setState({
            isLoaded: true,
            menus: result.menu.categories[0].category.items
          })
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          })
        }
      )
  }

  render () {
    const { error, isLoaded, menus } = this.state
    console.log(menus)
    if (error) {
      return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <ul>
          {menus.map(menu => (
            <div className='col-10 col-lg-4 mx-auto mb-5'>
            <div className='card' style={{ width: '18rem' }}>
            <div key={menu.item.name}>
              {/* {menu.item.description} */}
              {/* <img src={menu.item.image_url} alt={menu.item.name} className='card-img-top' /> */}
          <div className='card-body'>
                    <h3 className='card-title text-uppercase'>{menu.item.name}</h3>
                    <h5 className='card-title'>{menu.item.description}</h5>
                  </div>
            </div>
            </div>
            </div>
          ))}
        </ul>
      )
    }
  }
}

export default Restaurants
