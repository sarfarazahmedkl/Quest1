import React, { useState } from 'react'
import { data } from './ItemDetail'
import Navbar from './Navbar'

export var cartdata = []
export var cartid = []
cartdata.push(data)
export default function Cart() {
  console.log(cartdata)
  return (
    <div>
        <Navbar />
        {cartdata.map((item,index)=>{
            return (
              <>
                {item.id}
              </>
            )
        })}
    </div>
  )
}
