import React from 'react';
import ProductsData from './ProductsData.json';
import Products from './components/Products';
import FilterCategory from './components/FilterCategory';
import Cart from './components/Cart';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      products: ProductsData.products,
      size:"",
      cartItems: localStorage.getItem("cartItems") ?
                 JSON.parse(localStorage.getItem("cartItems"))
                 :[],
    } 
  }      
  addToCart = (product)=>{
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach(item => {
      if(item._id === product._id){
        item.count++;
        alreadyInCart = true;
      }
    });
    if(!alreadyInCart){
      cartItems.push({...product, count : 1})
    }
   this.setState({cartItems});
   localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };
  removeFromCart = (product) =>{
    const cartItems = this.state.cartItems.slice();
    this.setState({
      cartItems: cartItems.filter((x) => x._id !== product._id),
    });
    localStorage.setItem("cartItems", JSON.stringify(cartItems.filter((x) => x._id !== product._id)));
  };
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
            <Products products={this.state.products} addToCart={this.addToCart}> </Products>
            </div>
          <div className="sideBar">
            <Cart cartItems={this.state.cartItems} removeItem={this.removeFromCart}/>
          </div>
          </div>
      </main>
      <footer>Alright Reserved</footer>
    </div>
  );
  }
}

export default App;
