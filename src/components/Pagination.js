// import React, { Component } from 'react'
// import PropTypes from 'prop-types'


// class Pagination extends Component {

//   componentDidMount() {
//     this.gotoPage(1);
//   }

//   gotoPage = page => {
//     const { onPageChanged = f => f } = this.props;

//     const currentPage = Math.max(0, Math.min(page, this.totalPages));

//     const paginationData = {
//       currentPage,
//       totalPages: this.totalPages,
//       pageLimit: this.pageLimit,
//       totalRecords: this.totalRecords
//     };

//     this.setState({ currentPage }, () => onPageChanged(paginationData));
//   }

//   handleClick = page => evt => {
//     evt.preventDefault();
//     this.gotoPage(page);
//   }

//   handleMoveLeft = evt => {
//     evt.preventDefault();
//     this.gotoPage(this.state.currentPage - (this.pageNeighbours * 2) - 1);
//   }

//   handleMoveRight = evt => {
//     evt.preventDefault();
//     this.gotoPage(this.state.currentPage + (this.pageNeighbours * 2) + 1);
//   }

// }
// export default Pagination

// const LEFT_PAGE = 'LEFT'
// const RIGHT_PAGE = 'RIGHT'

// const range = (from, to, step = 1) => {
//   let i = from;
//   const range = [];

//   while (i <= to) {
//     range.push(i);
//     i += step;
//   }

//   return range;
// }

// class Pagination extends Component {
//   constructor (props) {
//     super(props)
//     const { totalCards = null, pageLimit = 5, pageSides = 0 } = props

//     this.pageLimit = typeof pageLimit === 'number' ? pageLimit : 5
//     this.totalCards = typeof totalCards === 'number' ? totalCards : 0
  
//     this.pageSides = typeof pageSides === 'number'
//       ? Math.max(0, Math.min(pageSides, 0))
//       : 0

//     this.totalPages = Math.ceil(this.totalCards / this.pageLimit)

//     this.state = { currentPage: 1 }
//   }
// }

// Pagination.propTypes = {
//   totalCards: PropTypes.number.isRequired,
//   pageLimit: PropTypes.number,
//   pageSides: PropTypes.number,
//   onPageChanged: PropTypes.func
// }

// export default Pagination
