import React from 'react'

function Pay({price}) {
    const ref=`txn-alpha-${Date.now()}`
  return (
    <div>
        <form method="POST" action="https://api.chapa.co/v1/hosted/pay">
            <input type="hidden" name='public_key' value="CHAPUBK_TEST-HCVkNXNNjaxWF3PSsIZnB9XD59UXFi47"/>
            <input type="hidden" name="tx_ref" value={ref}/>
            <input type="hidden" name="amount" value={price}/>
            <input type="hidden" name="currency" value="ETB"/>
            <input type="hidden" name="email" value="israeltesfaye399@gmail.com"/>
            <input type="hidden" name="first_name" value="israel"/>
            <input type="hidden" name="last_name" value="tesfaye"/>
            <input type="hidden" name="title" value="let us do"/>
            <input type="hidden" name="description" value="buying clothes"/>
            <input type="hidden" name="logo" value="https://yourcompany.com/logo.png"/>
            <input type="hidden" name="callback_url" value="http://localhost:8000/api/order/"/>
            <input type="hidden" name="return_url" value="http://localhost:8000/thanks"/>
            <input type="hidden" name="meta[title]" value="test"/>
            <input type="number" name="quantity" className='quantity' />
      <button type="submit">Buy</button>
        </form>
    </div>
  )
}

export default Pay