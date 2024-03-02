import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productSlice from "./productSlice";
import  favoritesSlice  from "./favouriteSlice";


const store = configureStore({
    reducer:{
        cart:cartSlice,
        products:productSlice,
        favorites:favoritesSlice,
        
    }
});
export default store

