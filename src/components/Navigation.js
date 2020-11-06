import React from 'react';
import { NavLink } from 'react-router-dom';

// ------- import 'useContext' --------------------
import { useContext } from 'react'

// -------- import context function -----------------
import { CartContext } from '../context/CartContext';

const Navigation = props => {
	// this destructures the prop value that is being stored globally
	const { cart } = useContext(CartContext)
	console.log(cart)

	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{cart.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
