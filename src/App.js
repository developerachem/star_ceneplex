import { Routes , Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import ChangePass from './Page/ChangePass/ChangePass';
import EditProfile from './Page/EditProfile/EditProfile';
import Error from './Page/Error/Error';
import ForgetPass from './Page/ForgetPass/ForgetPass';
import Home from './Page/Home/Home';
import Login from './Page/Login/Login';
import MovieDetail from './Page/MovieDeatils/MovieDetail';
import MyTicket from './Page/MyTicket/MyTicket';
import Profile from './Page/Profile/Profile';
import Registration from './Page/Registration/Registration';
import Ticket from './Page/Ticket/Ticket';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='*' element={ <Error /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/register' element={ <Registration /> } />
        <Route path='/reset-password' element={ <ForgetPass /> } />
        <Route path='/ticket' element={ <Ticket /> } />
        <Route path='/profile' element={ <Profile /> } />
        <Route path='/change-password' element={ <ChangePass /> } />
        <Route path='/my-ticket' element={ <MyTicket /> } />
        <Route path='/edit-profile' element={ <EditProfile /> } />
        <Route path='/detail/:id' element={ <MovieDetail /> } />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
