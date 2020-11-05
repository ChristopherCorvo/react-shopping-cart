import React from 'react';

// ------- import 'useContext' --------------------
import { useContext } from 'react'

// -------- import context function -----------------
import { ProductContext } from '../context/ProductContext'

// Components
import Product from './Product';

const Products = props => {

	// this below line of code connects the props stored globally via 
	// the provider in App.js to the consumer.
	// Now our Products component is getting it's data solely 
	// from Context API 😃.

	const { products, addItem } = useContext(ProductContext)

	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;
