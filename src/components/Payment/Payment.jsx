import React, { useEffect } from 'react'

const Payment = (props) => {
  useEffect(() => {

  })


  return (
    <div class="work-platform__pay pay">
    <div class="pay__info">
          
    </div>

    <div class="pay__wrapper">
        <div class="row">
          <div class="col-xs-5">
            <div id="cards">
              <img src="http://icons.iconarchive.com/icons/designbolts/credit-card-payment/256/Visa-icon.png"/>
              <img src="http://icons.iconarchive.com/icons/designbolts/credit-card-payment/256/Master-Card-icon.png"/>
            </div>
            <div class="form-check">
        <label class="form-check-label" for='card'>
          <input id="card" class="form-check-input" type="checkbox" value=""/>
          Pay $150.00 with credit card
        </label>
      </div>
          </div>
          <div class="col-xs-5">
            <div id="cards">
              <img src="http://icons.iconarchive.com/icons/designbolts/credit-card-payment/256/Paypal-icon.png"/>
            </div>
            <div class="form-check">
        <label class="form-check-label" for='paypal'>
          <input id="paypal" class="form-check-input" type="checkbox" value=""/>
          Pay $150.00 with PayPal
        </label>
      </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-5">
            <i class="fa fa fa-user"></i>
            <label for="cardholder">Cardholder's Name</label>
            <input type="text" id="cardholder"/>
          </div>
          <div class="col-xs-5">
            <i class="fa fa-credit-card-alt"></i>
            <label for="cardnumber">Card Number</label>
            <input type="text" id="cardnumber"/>
          </div>
        </div>
        <div class="row row-three">
          <div class="col-xs-2">
            <i class="fa fa-calendar"></i>
            <label for="date">Valid thru</label>
            <input type="text" placeholder="MM/YY" id="date"/>
          </div>
          <div class="col-xs-2">
            <i class="fa fa-lock"></i>
            <label for="date">CVV / CVC *</label>
            <input type="text"/>
          </div>
          <div class="col-xs-5">
            <span class="small">* CVV or CVC is the card security code, unique three digits number on the back of your card seperate from its number.</span>
          </div>
        </div>
        <footer>
          <button class="btn">Back</button>
          <button class="btn">Next Step</button>
          </footer>
      </div>

      
</div>
  )
}
export default Payment