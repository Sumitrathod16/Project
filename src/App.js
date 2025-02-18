import './App.css';
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Slides from './components/Slides';
import Card from './components/Card';
import image from './components/img1.png';
import iphone15 from './images/iphone15.webp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import iphone16 from './images/iphone16.webp';
import iphone13 from './images/iphone13.webp';
import iphone16max from './images/iphone16promax.webp';
import sgs23ul from './images/sgs23ul.webp';
import sga23 from './images/sga23.webp';
import sgs24fe from './images/sgs24fe.webp';
import sgs25 from './images/sgs25.jpg'
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
              <Card img={iphone15} pname="Iphone15" discount="-23%" pprice="Rs. 61499/-" oldp="79000"></Card>
              <Card img={image} pname="Head phone" pprice="Rs. 199999/-"></Card>
              <Card img={image} pname="Iphone15" pprice="Rs. 199999/-"></Card>
              <Card img={image} pname="Iphone15" pprice="Rs. 199999/-"></Card>
              <Card img={image} pname="Head phone" pprice="Rs. 199999/-"></Card>
              <Card img={image} pname="Iphone15" pprice="Rs. 199999/-"></Card>
              <Card img={sgs23ul} pname="Samsung S23 Ultra" pprice="Rs. 71999/-" discount="-52%" oldp="149999"></Card>
              <Card img={image} pname="Head phone" pprice="Rs. 199999/-"></Card>
              <Card img={image} pname="Laptop" pprice="Rs. 199999/-"></Card>
              <Card img={image} pname="Iphone15" pprice="Rs. 199999/-"></Card>
              <Card img={image} pname="Laptop" pprice="Rs. 199999/-"></Card>
              <Card img={image} pname="Laptop" pprice="Rs. 199999/-"></Card>
              <Card img={iphone16} pname="Iphone16" discount="-9%" pprice="Rs. 72900/-" oldp="79000"></Card>
              <Card img={image} pname="Head phone" pprice="Rs. 199999/-"></Card>
              <Card img={image} pname="Iphone15" pprice="Rs. 199999/-"></Card>
              <Card img={image} pname="Iphone15" pprice="Rs. 199999/-"></Card>
              <Card img={image} pname="Head phone" pprice="Rs. 199999/-"></Card>
              <Card img={sga23} pname="Samsung Galaxy A23" pprice="Rs. 28999/-" discount="-22%" oldp="36999"></Card>
              <Card img={image} pname="Iphone15" pprice="Rs. 199999/-"></Card>
              <Card img={image} pname="Head phone" pprice="Rs. 199999/-"></Card>
              <Card img={image} pname="Laptop" pprice="Rs. 199999/-"></Card>
              <Card img={iphone13} pname="Iphone13" discount="-25%" pprice="Rs. 52499/-" oldp="69900"></Card>
              <Card img={image} pname="Laptop" pprice="Rs. 199999/-"></Card>
              <Card img={image} pname="Laptop" pprice="Rs. 199999/-"></Card>
              <Card img={iphone16max} pname="Iphone16 Pro Max" discount="-4%" pprice="Rs. 177900/-" oldp="184900"></Card>
              <Card img={image} pname="Head phone" pprice="Rs. 199999/-"></Card>
              <Card img={image} pname="Iphone15" pprice="Rs. 199999/-"></Card>
              <Card img={image} pname="Iphone15" pprice="Rs. 199999/-"></Card>
              <Card img={image} pname="Head phone" pprice="Rs. 199999/-"></Card>
              <Card img={image} pname="Iphone15" pprice="Rs. 199999/-"></Card>
              <Card img={image} pname="Iphone15" pprice="Rs. 199999/-"></Card>
              <Card img={image} pname="Head phone" pprice="Rs. 199999/-"></Card>
              <Card img={image} pname="Laptop" pprice="Rs. 199999/-"></Card>
              <Card img={image} pname="Iphone15" pprice="Rs. 199999/-"></Card>
              <Card img={sgs25} pname="Samsung S25 5G" pprice="Rs. 80999/-"></Card>
              <Card img={image} pname="Laptop" pprice="Rs. 199999/-"></Card>
              <Card img={image} pname="Iphone15" pprice="Rs. 199999/-"></Card>
              <Card img={sgs24fe} pname="Samsung S24 FE" pprice="Rs. 59999/-" discount="-29%" oldp="59999"></Card>
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
            <>
              <div className='category'>
                <Categories title="All" link="/mobiles"> </Categories>
                <Categories title="Iphone" link="/iphone"> </Categories>
                <Categories title="Samsung" link="/samsung"> </Categories>
                <Categories title="Redmi" link="/redmi"> </Categories>
                <Categories title="Vivo" link="/vivo"> </Categories>
              </div>
              <div className='card-container'>
                <Card img={iphone15} pname="Iphone15" discount="-23%" pprice="Rs. 61499/-" oldp="79000"></Card>
                <Card img={image} pname="redmi 12" pprice="Rs. 199999/-"></Card>
                <Card img={image} pname="Realme" pprice="Rs. 199999/-"></Card>
                <Card img={iphone16} pname="Iphone16" discount="-9%" pprice="Rs. 72900/-" oldp="79000"></Card>
                <Card img={image} pname="Realme" pprice="Rs. 199999/-"></Card>
                <Card img={sgs23ul} pname="Samsung S23 Ultra" pprice="Rs. 71999/-" discount="-52%" oldp="149999"></Card>
                <Card img={image} pname="Iphone15" pprice="Rs. 199999/-"></Card>
                <Card img={image} pname="redmi 12" pprice="Rs. 199999/-"></Card>
                <Card img={image} pname="Realme" pprice="Rs. 199999/-"></Card>
                <Card img={iphone13} pname="Iphone13" discount="-25%" pprice="Rs. 52499/-" oldp="69900"></Card>
                <Card img={sgs24fe} pname="Samsung S24 FE" pprice="Rs. 59999/-" discount="-29%" oldp="59999"></Card>
                <Card img={image} pname="Iphone15" pprice="Rs. 199999/-"></Card>
                <Card img={sga23} pname="Samsung Galaxy A23" pprice="Rs. 28999/-" discount="-22%" oldp="36999"></Card>
                <Card img={image} pname="redmi 12" pprice="Rs. 199999/-"></Card>
                <Card img={sgs25} pname="Samsung S25 5G" pprice="Rs. 80999/-"></Card>
                <Card img={iphone16max} pname="Iphone16 Pro Max" discount="-4%" pprice="Rs. 177900/-" oldp="184900"></Card>
              </div>
            </>
          }></Route>

          <Route path='/iphone' element={
            <>
              <div className='category'>
                <Categories title="All" link="/mobiles"> </Categories>
                <Categories title="Iphone" link="/iphone"> </Categories>
                <Categories title="Samsung" link="/samsung"> </Categories>
                <Categories title="Redmi" link="/redmi"> </Categories>
                <Categories title="Vivo" link="/vivo"> </Categories>
              </div>
              <div className='card-container'>
                <Card img={iphone15} pname="Iphone15" discount="-23%" pprice="Rs. 61499/-" oldp="79000"></Card>
                <Card img={iphone16} pname="Iphone16" discount="-9%" pprice="Rs. 72900/-" oldp="79000"></Card>
                <Card img={iphone13} pname="Iphone13" discount="-25%" pprice="Rs. 52499/-" oldp="69900"></Card>
                <Card img={iphone16max} pname="Iphone16 Pro Max" discount="-4%" pprice="Rs. 177900/-" oldp="184900"></Card>
              </div>
            </>
          }></Route>

          <Route path='/samsung' element={
            <>
              <div className='category'>
                <Categories title="All" link="/mobiles"> </Categories>
                <Categories title="Iphone" link="/iphone"> </Categories>
                <Categories title="Samsung" link="/samsung"> </Categories>
                <Categories title="Redmi" link="/redmi"> </Categories>
                <Categories title="Vivo" link="/vivo"> </Categories>
              </div>
              <div className='card-container'>
                <Card img={sgs23ul} pname="Samsung S23 Ultra" pprice="Rs. 71999/-" discount="-52%" oldp="149999"></Card>
                <Card img={sga23} pname="Samsung Galaxy A23" pprice="Rs. 28999/-" discount="-22%" oldp="36999"></Card>
                <Card img={sgs24fe} pname="Samsung S24 FE" pprice="Rs. 59999/-" discount="-29%" oldp="59999"></Card>
                <Card img={sgs25} pname="Samsung S25 5G" pprice="Rs. 80999/-"></Card>
              </div>
            </>
          }></Route>

          <Route path='/redmi' element={
            <>
              <div className='category'>
                <Categories title="All" link="/mobiles"> </Categories>
                <Categories title="Iphone" link="/iphone"> </Categories>
                <Categories title="Samsung" link="/samsung"> </Categories>
                <Categories title="Redmi" link="/redmi"> </Categories>
                <Categories title="Vivo" link="/vivo"> </Categories>
              </div>
              <div className='card-container'>
                <Card img={image} pname="redmi 12" pprice="Rs. 199999/-"></Card>
                <Card img={image} pname="redmi 12" pprice="Rs. 199999/-"></Card>
                <Card img={image} pname="redmi 12" pprice="Rs. 199999/-"></Card>
                <Card img={image} pname="redmi 12" pprice="Rs. 199999/-"></Card>
              </div>
            </>
          }></Route>

          <Route path='/vivo' element={
            <>
              <div className='category'>
                <Categories title="All" link="/mobiles"> </Categories>
                <Categories title="Iphone" link="/iphone"> </Categories>
                <Categories title="Samsung" link="/samsung"> </Categories>
                <Categories title="Redmi" link="/redmi"> </Categories>
                <Categories title="Vivo" link="/vivo"> </Categories>
              </div>
              <div className='card-container'>
                <Card img={image} pname="Realme" pprice="Rs. 199999/-"></Card>
                <Card img={image} pname="Realme" pprice="Rs. 199999/-"></Card>
                <Card img={image} pname="Realme" pprice="Rs. 199999/-"></Card>
                <Card img={image} pname="Realme" pprice="Rs. 199999/-"></Card>
              </div>
            </>
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
