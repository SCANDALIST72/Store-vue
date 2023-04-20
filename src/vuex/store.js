import { createStore } from 'vuex'
import axios from "axios";

const store = createStore({
    state:{
        products:[],
        cart: []
    },
    mutations:{
        SET_PRODUCTS_TO_STATE:(state, products) =>{
            state.products= products;
        },
        SET_STORE:(state,product) => {
            state.cart.push(product)
        }
    },
    actions:{
        GET_PRODUCT_FROM_API({commit}){
            return axios('http://localhost:3000/products', {
                method: "GET"

            })
                .then((products) => {
                    commit('SET_PRODUCTS_TO_STATE',products.data);
                    return products;
                })
                .catch((error)=>{
                    console.log(error)
                    return error
                })
        },
        ADD_TO_STORE({commit},product){
            commit('SET_STORE',product)
        }
    },
    getters:{
        PRODUCTS(state){
            return state.products;
        },
        CART(state){
            return state.cart;
        }
    }

});

export default store;