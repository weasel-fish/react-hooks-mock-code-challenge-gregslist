import React, { useState } from "react";

function ListingCard({listing, deleteListing}) {
  const {description, image, location, id} = listing

  const [liked, setLiked] = useState(false)

  function handleLike() {
    setLiked(!liked)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {liked ? (
          <button onClick={handleLike} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleLike} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={() => deleteListing(id)} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
