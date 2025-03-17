import React from 'react';
import './bookcard.css';

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <img src={book.image} alt={book.name} />
      <h2>{book.name}</h2>
      <p>{book.genre}</p>
      <p>{book.author}</p>
    </div>
  );
};

export default BookCard;