

import './FavouriteItem.css'
const FavoriteItem = ({favoriteItems, price}) => {
    console.log(favoriteItems)
    
    return (
        <div>
            <h3>Favorite Items:{favoriteItems.length}</h3>
            
            {

favoriteItems.length== 0? <div className='noDataMsg'><p>no items added here</p> <p>Click the heart icon on any item to add it to your favorites</p></div>:
              favoriteItems.map(favoriteItem=>
              <div className="imgAndName">
                
                <img src={favoriteItem.image} alt="favImg" />
                <p>{favoriteItem.title}</p>
              
                <button className='btn btn-ghost btn-sm'>X</button>
              </div>)  
            }
            <h3>$Price:{price}</h3>
        </div>
    );
};

export default FavoriteItem;