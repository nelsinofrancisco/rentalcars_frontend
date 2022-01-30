import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import styled from 'styled-components';
import DetailsPage from './pages/DetailsPage';
// import { getCars } from './redux/cars/carsSlice';
// import { getCities, getReservations } from './redux/reservations/reservationsSlice';
import Announcement from './components/Announcement';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import AddCar from './pages/AddCar';
import LifeStyle from './pages/LifeStyle';
import CarsHome from './components/cars/CarsHome';
import MyReservations from './pages/MyReservations';
import Login from './pages/Login';
import Register from './pages/Register';
import './App.css';

const Container = styled.div`
  display: flex;
  max-width: 100vw;
`;

const App = () =>
  // useEffect(() => {
  //   store.dispatch(getCars());
  //   store.dispatch(getCities());
  //   store.dispatch(getReservations());
  // }, []);
  // eslint-disable-next-line implicit-arrow-linebreak
  (
    <Router>
      <Announcement />
      <Container>
        <Sidebar />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign_up" element={<Register />} />
          <Route path="/cars" element={<CarsHome />} />
          <Route path="/myreservations" element={<MyReservations />} />
          <Route path="/:car_id/details" element={<DetailsPage />} />
          <Route path="/lifestyle" element={<LifeStyle />} />
          <Route path="/cars/new" element={<AddCar />} />
        </Routes>
      </Container>
    </Router>
  );

export default App;
