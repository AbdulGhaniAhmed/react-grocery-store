import React from 'react';
import ProductData from './ProdutsData.json';
import Products from './components/Products';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      products: ProductData.products,
      size:"",
      sort:"",
    };
  }
  render(){
  return (
    <div className="grid-container">
      <header>
        <a href='/'>Grocery Mart</a>        
      </header>
      <main>
        <div className="content">
          <div className="main"><Products products={this.state.products}></Products></div>
          <div className="sideBar">Cart Item</div>
          </div>
      </main>
      <footer>Alright Reserved</footer>
    </div>
  );
  }
}

export default App;
