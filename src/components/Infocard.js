// import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import { cardInfo } from './data'

// function InfoCard (props) { 
//     return (
//         <div className='col-10 col-lg-4 mx-auto mb-5'>
//           <div className='card' style={{ width: '18rem' }}>
//             <img src='' alt={value.name} className='card-img-top' />
//             <div className='card-header'>Monday</div>
//             <div className='card-body'>
//               <h3 className='card-title text-uppercase'>{name}</h3>
//               <h5 className='card-title'>chicken</h5>
//             </div>
//             <Link className='btn btn-outline-primary text-uppercase' to='/potbelly'>Menu</Link>
//             <Link className='btn btn-outline-primary text-uppercase' to='/jasons' >Order Jasons</Link>
//           </div>
//         </div>
//       )
// }     
//     getItem = id => {
//       const item = this.state.info.find(item => item.id === id)
//       return item;
//     }
//     handleDetail = id => {
//       const item = this.getItem(id)
//       this.setState(() => {
//         return {
//           detailInfo: item
//         }
//       })
//     }

// export default Infocard