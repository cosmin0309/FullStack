import React from "react";

const BookList = ({books}) => {
    return(
        <div>
            <h2>Book list:</h2>
            <ul>
                {books.map(book => (
                    <li key={book.id}>
                        {book.title} by {book.author}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default BookList;