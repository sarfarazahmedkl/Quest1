import React from 'react'
import { Navigate } from 'react-router-dom';
import { ItemData } from './ItemData';
import Navbar from './Navbar';

export default function Dashboard() {
    const token = localStorage.getItem('token');
    console.log(token)
    if(token == null){
        console.log('in if')
        return <Navigate to='/login' />
    }
  return (
    <div>
      <Navbar />
        {ItemData.map((item,index)=>{
          const image = item.image
          console.log(image,'image')
            return (
              <a href={"/product?productid=" + item.id}>
                <div style={{
                  margin: '40px',
                  padding: '10px',
                  border: ".5px solid",
                  width: '402px',
                  height: '550px',
                  position: 'relative',
                  display: 'inline-table',
                  textAlign: 'center'
                }}>
                  <img 
                    src={require(`${image}`)} 
                    width='385'
                    height='470'
                  />
                  {item.name}
                  <br />
                  MRP : {item.price}
                </div>
              </a>
            )
        })}
    </div>
  )
}
