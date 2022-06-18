import React from 'react'

import logo from '../../img/logo.svg'

const Price = () => {
  return (
    <div className="info-page">
      <div className="info-page__logo">
        <img src={logo} alt="image description" />
      </div>
      <div className="product-info">
        месяц разовый
        за слова
      </div>
    </div>
  )
}

export default Price