const initialState={
    books: []
};

const booksReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'ADD_BOOK':
            return{
                books: [...state.books, {...action.payload, id:state.books.length + 1}]
            };
        default:
            return state;
    }
};

export default booksReducer;