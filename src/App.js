import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sign from './Pages/Sign';
import Signup from './Pages/Signup';
import Header from './Pages/Header';
import Footer from './Pages/Footer/Footer';
import InvestFunder from './Pages/InvestFunder';

const RouteData = [
  {
    path: '/sign-in',
    element: <Sign />
  },
  {
    path: '/sign-up',
    element: <Signup />
  }
];

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <InvestFunder />
        <Routes>
          {RouteData.map((item) => {
            return (
              <Route path={item.path} element={item.element} />
            );
          })}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
