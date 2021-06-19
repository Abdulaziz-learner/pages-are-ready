import './App.css';
import NavigationBar from './components/NavigationBar';
import SideBar from './components/SideBar';
import {BrowserRouter,
Route,Switch} from 'react-router-dom';
import {lazy,Suspense} from 'react';
const All=lazy(()=>import('./pages/All'));
const Family=lazy(()=>import('./pages/Family'));
const Friends=lazy(()=>import('./pages/Friends'));
const Favourites =lazy(()=>import('./pages/Favourites'));

function App() {
  const contacts = [
    {
      full_name: "John Doe", 
      company: "Algorithm", 
      email: "johndoe324@gmail.com", 
      phone: "+12398238333", 
      isFam: false, 
      isFav: false, 
      isFr: true
    },
    {full_name: 'Abdulloh O\'rmonov', email: 'abdulloh324@gmail.com', phone: '+998902584578', company: 'iCode Academy', isFam: false, isFr: true, isFav: false},
    {full_name: 'Abdussamad Nozimov', email: 'abdussamad324@gmail.com', phone: '+998902028388', company: 'StarBox', isFam: false, isFr: true, isFav: true},
    {full_name: 'Abdulboriy Fayzulloyev', email: 'abdulboriy324@gmail.com', phone: '+998900011101', company: 'SapceX', isFam: true, isFr: false, isFav: false},
    {full_name: 'Abdulaziz Aliyev', email: 'abdulaziz324@gmail.com', phone: '+998905449844', company: 'MacDonalds', isFam: false, isFr: true, isFav: true},
  ]

  return (
    <div className='App'>
   <NavigationBar/>
   <Suspense fallback={<><h2>Loading</h2></>}>
<BrowserRouter>
<SideBar/>
<Switch>
<Route exact path='/' render={()=><All contacts={contacts}/>} />
<Route exact path='/family' render={()=><Family contacts={contacts}/>} />
<Route exact path='/friends' render={()=><Friends contacts={contacts}/>} />
<Route exact path='/favourites' render={()=><Favourites contacts={contacts}/>}  />
</Switch>
</BrowserRouter>
   </Suspense>

    </div>
  );
}

export default App;
