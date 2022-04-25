import React, { useState, useEffect } from 'react'
import { cartdata, cartid } from './Cart'
import { ItemData } from './ItemData'
import Navbar from './Navbar'
export var data = []
export default function ItemDetail() {
    let search = window.location.search

    let id = search.split('=')[1]
    const [itemcount, setitemcount] = useState(1)
    const [alreadyexist, setalreadyexist] = useState(false)
    console.log(id,'id')
    // function HandleSubmit(e){
    //     e.preventDefault()
    //     const isFound = cartdata.some(element => {
    //       if (element.id === item.id) {
    //         return true;
    //       }
    //     });
    //     if (!isFound) {
    //       // data.push({id: item.id, name: item.name, price: item.price, count: itemcount, total: item.price*itemcount})
    //       // console.log(data)
    //       await axios({
    //         method: 'POST',
    //         url: '/inputcart',
    //         data: {
    //             token: routename,
    //             id: item.id,
    //             count: itemcount,
    //         }
    //     }).then((res) => {
    //         console.log(res)
    //     })
    //   } 
    // }
    return (
      <div>
        <Navbar />
        {ItemData.map((item,index)=>{
          if(item.id == id){
            const image = item.image
            // console.log('ukyjg')
            // setimage(item.image)
            // setprice(item.price)
            // setdetail(item.detail)
            // setname(item.name)
            return(
              <div>
                <img src={require(`${image}`)}
                  style={{ float: 'left'}}
                  width='480'
                  height='508'
                />
                
                <div style={{ textAlign: 'center' }}>
                  <div>
                  <h1 style={{
                    paddingTop: '30px'
                  }}>{item.name}</h1>
                  <h2 style={{ 
                    paddingTop: '30px',
                  }}>MRP: {item.price}</h2>
                  <h3 style={{ 
                    paddingTop: '30px',
                  }}>{item.detail}</h3>
                  </div>
                  <div style={{ paddingTop: '30px' }}>
                    <label>Number of Items: </label>
                    <input style={{ width: '40px' }} type='number' min='1' placeholder='1' onChange={
                        (e)=> {setitemcount(e.target.value)}
                    } required></input>
                  </div>
                  {/* <button onClick={HandleSubmit} style={{ marginTop: '30px' }}>Add to Cart</button> */}
                </div>
              </div>
            )
          }
        })}
      </div>
    )
  }