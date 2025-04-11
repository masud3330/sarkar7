import React, { useEffect, useState } from 'react';
import './datatable.css'
import FavoriteItem from '../FavoriteItem/FavoriteItem';

const DataTable = () => {
    const [auctions, setAuctions]= useState([])
    const [favoriteItems, setFavoriteItems]= useState([])
    const [price, setPrice]= useState(0)
    const [click, setClick]= useState(false)
    useEffect(()=>{
        fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setAuctions(data);
      })
    },[])
    
    const handleBit=(id, bit)=>{
        // console.log('bit id ', id)
        
        const found = auctions.find((auction) =>auction.id == id );
        
        setFavoriteItems([...favoriteItems, found])
        setPrice(price+bit)
        // if(id===found.id){
        //     setClick(true)
        // }
     alert("data added ")
        

    }
  
    return (
        <div >
            <p>Active Auctions : {auctions.length}</p>
            <p>Discover and bid on extraordinary items</p>
            <div className='dataTableContainer'>
            <div>
           <table className='table'>
            <tr>
            <th className='Items' colspan="">Items</th>
            <th>Current Bid</th>
            <th>Time Left</th>
            <th>Bid Now</th>
            </tr>

            {
                auctions.map(auction => <tr className='tableContenet' key={auction.id}>
                    <td className='imageAndName' >
                       <img src="" alt="imag" /> <p>{auction.title}</p>
                       </td>
                       
                       <td>${auction.currentBidPrice}</td>
                       <td>
                           <p>{auction.timeLeft}</p>
                       </td>
                       <td>
                        <button className={`${click && "bitBtn"}`} onClick={()=>handleBit(auction.id, auction.currentBidPrice)}>bit</button>
                       </td>
                   </tr>)
            }
            

           </table>
            </div>
            <div>
                <FavoriteItem favoriteItems={favoriteItems} price={price}></FavoriteItem>
            </div>
            </div>
        </div>
    );
};

export default DataTable;