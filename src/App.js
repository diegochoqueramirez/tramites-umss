import SignIn from './Components/Auth/SignIn';
import SignUp from './Components/Auth/SignUp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
