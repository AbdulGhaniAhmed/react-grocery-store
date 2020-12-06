import React from 'react';
import ProductsData from './ProductsData.json';
import Products from './components/Products';
import FilterCategory from './components/FilterCategory';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      products: ProductsData.products,
      size:"",
      // sort:"",
    };
  }
  filterProducts = (event) =>{
    console.log(event.target.value);
    if(event.target.value === ""){
      this.setState({
        size: event.target.value,
        products:ProductsData.products
      })
    }
    else{
      this.setState({
        size: event.target.value,
        products: ProductsData.products.filter(product=>product.Category.indexOf(event.target.value)>=0),
      })
    }
    
  }
  render(){
  return (
    <div className="grid-container">
      <header>
        <a href='/'>Grocery Mart</a>        
      </header>
      <main>
        <div className="content">
          <div className="main">
            <FilterCategory 
            count={this.state.products.length}
            size={this.state.size}
            filterProducts={this.filterProducts}
            >
            </FilterCategory>
            <Products products={this.state.products}></Products>
            </div>
          <div className="sideBar">Cart Item</div>
          </div>
      </main>
      <footer>Alright Reserved</footer>
    </div>
  );
  }
}

export default App;
