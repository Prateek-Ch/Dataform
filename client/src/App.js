import React from 'react';
import {Container, Grow} from '@material-ui/core';
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from 'react-router-dom';

import Students from './components/Students/Students';
import Colleges from './components/Colleges/Colleges';
import CreateCollege from './components/Create/CreateCollege';
import CreateStudent from './components/Create/CreateStudent';
import Header from './components/Utils/Header';

function App() {
  return (
    <div className="App">
      <Container >
         <Header />
      </Container>

      <Grow in>
        <Container>
          <Switch>
            <Route path='/' exact>
              <Students />
            </Route>

            <Route path='/students' exact>
              <Students />
            </Route>

            <Route path='/colleges'>
              <Colleges />
            </Route>

            <Route path='/create/student'>
              <CreateStudent />
            </Route>

            <Route path='/create/college'>
              <CreateCollege />
            </Route>
            
          </Switch>
        </Container>
      </Grow>

    </div>
  );
}

export default App;
