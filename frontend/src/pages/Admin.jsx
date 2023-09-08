import React,{useState} from 'react'
import upload from '../assets/upload.png'


function Admin() {
    function uploadClick(){
          document.querySelector(".form").style.display="grid"
          document.querySelector(".upload").style.display="none"
    }
    const [file, getFile] = useState([]);
    const [price, getPrice] = useState("");
    const [desc, getDisc] = useState("");
   async function handleSubmit(){
        const buffer = await file.arrayBuffer();
        var byteArray = new Int8Array(buffer);
       let saved=await fetch('http://localhost:8000/api/products/' , {
            method: 'POST',
            headers: {
              Accept: 'application.json',
              'Content-Type': 'application/json'
            },
            body:JSON.stringify({
image_url:byteArray.toString(),
description:desc,
price:price,
token:"eyJhbGciOiJIUzI1NiJ9.OGZlOGM2MzMtNGZjMy00ZTQxLTlhYWYtZTQ3N2ZiZDA5OGQw.rFIuos3RsErEw1Il6bUri1iOxEWoo_EcCNsgGKI9DpU"
            })
          })
          let msg=await saved.text()
          console.log(msg)
        
            }
    return (
    localStorage.getItem('token')
    ?
    <div className='admin'>
    <img src={upload} alt='add' onClick={uploadClick} className='upload'/>
    <div className='form'>
        <label htmlFor="file">image</label>
      <input type="file" name="file" id="file"  onChange={(e) => getFile(e.target.files[0])} />
      <label htmlFor="price" >price</label>
      <input type="number" name="price" id="price"  placeholder='price in ETB' onChange={(e) => getPrice(e.target.value)}/>
      <textarea name="description" id="" cols="30" rows="10" placeholder='add your description here' onChange={(e) => getDisc(e.target.value)}></textarea>
      <button onClick={handleSubmit}>upload</button>
    </div>
</div>
    : <p>not allowed</p>
    
  )
}

export default Admin