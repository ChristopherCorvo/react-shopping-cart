// Note:
// This context function is going to be utilized by our ShoppingCart and
// Navigation component

// -------- import createContext -----------
import { createContext } from 'react'

// -------- create a 'Create Obj' ------------
// Note: 
// createContext() will give us two important components to work with
//      1) Provider
//      2) Consumer
export const CartContext = createContext()