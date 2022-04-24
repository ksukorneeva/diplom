import Header from './components/Header';
import Footer from './components/Footer';
import Shop from './components/Shop';
import { Route } from 'react-router-dom';
import GoodsItem from './components/GoodsItem';
import { BrowserRouter } from 'react-router-dom';
import Login from './components/login';
import { Switch } from 'react-router-dom';

const App = ()  => {
    return (
        <>
            
            {/* <Shop /> */}
            <BrowserRouter>
            <Header />
            <Switch>
            <Route path="/login/:type?" component={Login}/>
            <Route path='/:id' component={GoodsItem}/>
            <Route path='/' component={Shop}/>
            </Switch>
            </BrowserRouter>
            <Footer/>
        </>
    );
}

export default App;
