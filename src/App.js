import {Switch, Route, useHistory} from 'react-router-dom'
import './App.css';
import Home from './pages/Home'
import Profile from "./pages/Profile";
function App() {
  const history = useHistory();
  const users = [

    {
      userName: "marlee_hane",
      name: "John C Roth",
      age: 47,
      location: {
        country: "USA",
        city: "Winnetka"
      }
    },
    
    {
    
    userName: "general",
    
    name: "Cecile V Bublitz",
    
    age: 65,
    
    location: {
    
    country: "USA",
    
    city: "Tampa"
    
    }
    
    },
    
    {
    
    userName: "ena",
    
    name: "Max D Shipp",
    
    age: 44,
    
    location: {
    
    country: "USA",
    
    city: "Channelview"
    
    }
    
    },
    
    {
    
    userName: "floie_will2003",
    
    name: "Richard P Zajicek",
    
    age: 34,
    
    location: {
    
    country: "USA",
    
    city: "Bluffton"
    
    }
    
    },
    
    {
    
    userName: "halie",
    
    name: "David J Logan",
    
    age: 28,
    
    location: {
    
    country: "USA",
    
    city: "Phoenix"
    
    }
    
    },
    
    {
    
    userName: "emmett",
    
    name: "Florentino J Blackwell",
    
    age: 67,
    
    location: {
    
    country: "USA",
    
    city: "Sherman Oaks"
    
    }
    
    },
    
    {
    
    userName: "eldred",
    
    name: "Patricia J Smith",
    
    age: 21,
    
    location: {
    
    country: "USA",
    
    city: "Los Angeles"
    
    }
    
    },
    
    {
    
    userName: "skylar",
    
    name: "Clara J Carr",
    
    age: 32,
    
    location: {
    
    country: "USA",
    
    city: "Sante Fe Springs"
    
    }
    
    },
    
    {
    
    userName: "leonie_spi2000",
    
    name: "Michelle R Dacosta",
    
    age: 46,
    
    location: {
    
    country: "USA",
    
    city: "Phoenix"
    
    }
    
    },
    
    {
    
    userName: "shadwolf88",
    
    name: "Carlos C Day",
    
    age: 45,
    
    location: {
    
    country: "USA",
    
    city: "New York"
    
    }
    
    }
    
    ];
  return (
    <div className="App">
      <header className="App-header">
      <button onClick={history.goBack}> Back </button>
        <Switch>
          <Route exact path="/" render={(props) => <Home users={users} {...props}/>}/>
          <Route path="/profile/" render={(props) => <Profile {...props}/>}/>
        </Switch>
      </header>
    </div>
  );
}

export default App;
