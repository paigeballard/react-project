// import React from 'react'

// class Niko extends React.Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       error: null,
//       isLoaded: false,
//       menus: []
//     }
//   }

//   componentDidMount () {
//     fetch('https://www.jasonsdeli.com/menu')
//       .then(res => res.json())
//       .then(
//         (result) => {
//           console.log(result)
//           this.setState({
//             isLoaded: true,
//             menus: result.menu
//           })
//         },
//         (error) => {
//           this.setState({
//             isLoaded: true,
//             error
//           })
//         }
//       )
//   }

//   render () {
//     const { error, isLoaded, menus } = this.state
//     console.log('this is menu', menus)
//     if (error) {
//       return <div>Error: {error.message}</div>
//     } else if (!isLoaded) {
//       return <div>Loading...</div>
//     } else {
//       return (
//         <ul>
//           {menus.map(menus => (
//             <li key={menus.item.name} />
//           ))}
//         </ul>
//       )
//     }
//   }
// }

// export default Niko
// import React from 'react'

// const Pagination = ({ totalCards }) => {
//   const pageNumbers = []
//   const cardsPerPage = 5

//   for (let i = 1; i <= Math.ceil(cardsPerPage / totalCards); i++) {
//     pageNumbers.push(i)
//   }

//   return (
//     <nav>
//       <ul className='pagination'>
//         {pageNumbers.map(number => (
//           <li key={number} className='page-item'>
//             <a href='!#' className='page-link'>
//               {number}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   )
// }

// export default Pagination
