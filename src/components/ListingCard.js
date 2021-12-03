import React, {useState} from "react";

const ListingCard = ( {listing, deleteListing} ) => {
  const [favorite, setFavorite] = useState(false)

  const onDelete = () => {deleteListing(listing)}

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {favorite ? (
          <button onClick={() => setFavorite(!favorite)} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={() => setFavorite(!favorite)}className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button onClick = {onDelete}  className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
