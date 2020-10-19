import React, { Component } from 'react';
import Auxilliary from './hoc/Auxilliary/Auxilliary';
import Layout from './hoc/Layout/Layout';
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
