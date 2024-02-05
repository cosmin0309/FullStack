import logo from './logo.svg';
import './App.css';
import store from './store/configureStore';
import { Provider } from 'react-redux';
import AddBookForm from './components/AddBookForm';
import BookListContainer from './components/BookListContainer';
function App() {
  return (
    <Provider store={store}>
      <AddBookForm></AddBookForm>
      <BookListContainer></BookListContainer>
    </Provider>
  );
}

export default App;
