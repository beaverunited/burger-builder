import React, { Component } from 'react';
import Auxilliary from './hoc/Auxilliary';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render () {
    return (
      <Auxilliary>
        <Layout>
          
          <BurgerBuilder />
        </Layout>
    </Auxilliary>
    );
  }
}

export default App;
