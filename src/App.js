import React, { useState } from 'react';
import { Route } from 'react-router-dom';

// ------- Imported Dummy Data -------------------
import data from './data';

// ----------- Import Components ------------------

import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

// ------------ Import Context Objs ------------------
import { ProductContext } from './context/ProductContext'
import { CartContext } from './context/CartContext'

function App() {
	// this is component managed state
	const [products] = useState(data); //keep track of all available products
	const [cart, setCart] = useState([]); //keep track of all the items in our cart

	const addItem = item => {
		//  this function will add the given item to the cart
		setCart([...cart, item])
	};

	return (
		<div className="App">
		{/* By wrapping all of the components in </ProductContext.Provider>	they will have 
		access to the passed props 'products' and the function 'addItem' */}

		{/* The Provider method accepts a single prop called value, 
		the value prop is used to provide our data across our app. */}
		<CartContext.Provider value={cart}>
			<ProductContext.Provider value={{products, addItem}}> 
				<Navigation/>

				{/* Routes */}
				<Route exact path="/">
					<Products/>
				</Route>

				<Route path="/cart">
					<ShoppingCart/>
				</Route>
			</ProductContext.Provider>
		</CartContext.Provider>		
		</div>
	);
}

export default App;
