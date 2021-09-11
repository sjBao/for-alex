// import logo from './logo.svg';
import React from 'react'
import './App.css';
import { PageOne  } from './pageone';
import { PageTwo } from './pagetwo';

import {
  BrowserRouter as Router,
   Switch,
   Route,
   Link
} from 'react-router-dom'


function App() {

  const [myState, setMyState] = React.useState(1)
  const [ dataFromAPI, setDataFromAPI] = React.useState({})

  React.useEffect(() => {
    const fetchApiInterval = setInterval(() => {
      console.log('fetch data...')
      fetch('https://swapi.dev/api/people/1')
        .then(r => r.json())
        .then(data => setDataFromAPI(data));
    }, 15000)

    return () => {
      clearInterval(fetchApiInterval);
    }
  }, [])

  const updateMyState = () => {
    setMyState(myState + 1);
  }

  return (
    <div className="App">
      <Router>
        <Link to="/pageone">
          Page One
        </Link>
        <hr />
        <Link to="/pagetwo">
          Page Two
        </Link>


        <Switch>
          <Route path="/pageone">
            <PageOne updateMyState={updateMyState} />

            <pre>
              {JSON.stringify(dataFromAPI)}
            </pre>
          </Route>

          <Route path="/pagetwo">
            <PageTwo />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
