import React from 'react'

function Pay({price,email,fname,lname,desc}) {
    const ref=`txn-alpha-${Date.now()}`
   /* async function paySubmit(){
      let response=await fetch('http://localhost:8000/api/order',{
        method:'POST',
        headers: {
            'Accept': 'application.json',
            'Content-Type': 'application/json'
          },
          body:JSON.stringify({
            tx_ref:ref
          })
      })
    }*/
  return (
    <div>
        <form method="POST" action="https://api.chapa.co/v1/hosted/pay">
            <input type="hidden" name='public_key' value="CHAPUBK_TEST-HCVkNXNNjaxWF3PSsIZnB9XD59UXFi47"/>
            <input type="hidden" name="tx_ref" value={ref}/>
            <input type="hidden" name="amount" value={price}/>
            <input type="hidden" name="currency" value="ETB"/>
            <input type="hidden" name="email" value={email}/>
            <input type="hidden" name="first_name" value={fname}/>
            <input type="hidden" name="last_name" value={lname}/>
            <input type="hidden" name="title" value="let us do"/>
            <input type="hidden" name="description" value={desc}/>
            <input type="hidden" name="logo" value="https://yourcompany.com/logo.png"/>
            <input type="hidden" name="callback_url" value="http://localhost:8000/api/order/"/>
            <input type="hidden" name="return_url" value="http://localhost:8000/thanks"/>
            <input type="hidden" name="meta[title]" value="test"/>
         
      <button type="submit">Buy</button>
        </form>
    </div>
  )
}

export default Pay