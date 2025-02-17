import './App.css';
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Slides from './components/Slides';
import Card from './components/Card';
import image from './components/img1.png';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <div className='category'>
          <Categories title="All" link="/"> </Categories>
          <Categories title="Mobiles" link="/mobiles"> </Categories>
          <Categories title="Laptops" link="/laptops"> </Categories>
          <Categories title="HeadPhones" link="/headphones"> </Categories>
        </div>
        <Slides />
        <Routes>
          <Route path='/' element={
            <div className='card-container'>
              <Card img={image} pname="Iphone15" pprice="Rs. 199999/-"></Card>
              <Card img={image} pname="Head phone" pprice="Rs. 199999/-"></Card>
              <Card img={image} pname="Iphone15" pprice="Rs. 199999/-"></Card>
              <Card img={image} pname="Iphone15" pprice="Rs. 199999/-"></Card>
              <Card img={image} pname="Head phone" pprice="Rs. 199999/-"></Card>
              <Card img={image} pname="Iphone15" pprice="Rs. 199999/-"></Card>
              <Card img={image} pname="Iphone15" pprice="Rs. 199999/-"></Card>
              <Card img={image} pname="Head phone" pprice="Rs. 199999/-"></Card>
              <Card img={image} pname="Laptop" pprice="Rs. 199999/-"></Card>
              <Card img={image} pname="Iphone15" pprice="Rs. 199999/-"></Card>
              <Card img={image} pname="Laptop" pprice="Rs. 199999/-"></Card>
              <Card img={image} pname="Laptop" pprice="Rs. 199999/-"></Card>
            </div>
          }></Route>
          <Route path='/mobiles' element={
            <div className='card-container'>
              <Card img={image} pname="Iphone15" pprice="Rs. 199999/-"></Card>
              <Card img={image} pname="Iphone15" pprice="Rs. 199999/-"></Card>
              <Card img={image} pname="Iphone15" pprice="Rs. 199999/-"></Card>
              <Card img={image} pname="Iphone15" pprice="Rs. 199999/-"></Card>
              <Card img={image} pname="Iphone15" pprice="Rs. 199999/-"></Card>
              <Card img={image} pname="Iphone15" pprice="Rs. 199999/-"></Card>
            </div>
          }></Route>
          <Route path='/laptops' element={
            <div className='card-container'>
              <Card img={image} pname="Laptop" pprice="Rs. 199999/-"></Card>
              <Card img={image} pname="Laptop" pprice="Rs. 199999/-"></Card>
              <Card img={image} pname="Laptop" pprice="Rs. 199999/-"></Card>
            </div>
          }></Route>
          <Route path='/headphones' element={
            <div className='card-container'>
              <Card img={image} pname="Head phone" pprice="Rs. 199999/-"></Card>
              <Card img={image} pname="Head phone" pprice="Rs. 199999/-"></Card>
              <Card img={image} pname="Head phone" pprice="Rs. 199999/-"></Card>
            </div>
          }></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
