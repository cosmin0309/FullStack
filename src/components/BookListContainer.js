import React from "react";
import { connect } from "react-redux";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import BookList from "./BookList";
const BookListContainer = ({books}) =>{

    return(
        <BookList books={books}></BookList>
    );

}

const mapStateToProps = (state) =>({
    books: state.books
});

export default connect(mapStateToProps)(BookListContainer);
