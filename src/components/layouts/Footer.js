import React from 'react'
import styled from 'styled-components'

function Footer () {
  return (
    <FooterContainer className='main-footer'>
      <div className='footer-middle'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3 col-sm-6'>
              <h4>cPanel LLC</h4>
              <ul className='list-unstyled'>
                <li>2550 North Loop West</li>
                <li>Suite 4006</li>
                <li>Houston, TX</li>
                <li>77092</li>
              </ul>
            </div>
            <div className='col-md-3 col-sm-6'>
              <h4>Company</h4>
              <ul className='list-unstyled'>
                <li><a href='/'>About Us</a></li>
                <li><a href='/'>Non-Profit License</a></li>
                <li><a href='/'>EDU License</a></li>
                <li><a href='/'>Careers</a></li>
              </ul>
            </div>
            <div className='col-md-3 col-sm-6'>
              <h4>Support</h4>
              <ul className='list-unstyled'>
                <li><a href='/'>Need Help?</a></li>
                <li><a href='/'>Documentation</a></li>
                <li><a href='/'>Migration Services</a></li>
                <li><a href='/'>Ticket Support</a></li>
              </ul>
            </div>
          </div>
          <div className='footer-botton'>
            <p className='text-xs-center'>
                &copy;{new Date().getFullYear()} cPanel Order Lunch App 
          </p>
          </div>
        </div>
      </div>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.footer`
.main-footer {
    // flex-shrink: 0;
    margin-top: auto;
}

.row {
    flex: 1;
}

.footer-middle {
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite)
}

.footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
}

ul li a {
    color: var(--mainGrey);
}

ul li a:hover {
    color: var(--mainLightGrey)
}
)
`
