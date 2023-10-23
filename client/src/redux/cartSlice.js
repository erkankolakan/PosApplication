import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',    //-> gobal de tutacağım değerler
    initialState:{
        cartItem:[], //-> cartItem içerisine kartlarımı göndererek her yerden erişebilirim
        total:0, //-> mesela total 0 değerine heryerden ulaşabilirim
        tax:8     
    },
    reducers:{
        // reducers içerisinde method ve fonksiyonlar tutulur Fonksiyonlar state ve action parametreleri alır. Bu metotla beraber gönderdiğimiz verilerdir. Statler de bir üstde yazan initialState içindeki değişkenlerdir.
        addToCart:(state,action)=>{
            const findCartItem = state.cartItem.find((item) => item._id === action.payload._id )
            if(findCartItem){
                findCartItem.quantity += 1
            }else{
                state.cartItem.push(action.payload)
            }
            state.total += action.payload.price
        },
        deleteCart:(state, action) =>{
            state.cartItem = state.cartItem.filter((item) => item._id !== action.payload._id)
            state.total -= action.payload.price * action.payload.quantity
        },
        increase:(state, action) => {
            const findCartItem = state.cartItem.find((item) => item._id === action.payload._id )
            findCartItem.quantity += 1
            state.total += action.payload.price
        },
        decrase:(state, action) => {
            const findCartItem = state.cartItem.find((item) => item._id === action.payload._id )
            findCartItem.quantity -= 1
            state.total -= action.payload.price

            if(findCartItem.quantity === 0){
                state.cartItem = state.cartItem.filter((item) => item._id !== action.payload._id)
            }
        },
    }   
})

export const {addToCart, deleteCart,increase,decrase} = cartSlice.actions //-> fonksiyonları özellikle dışarı açmak gerekir, reducersler içindeki fonksiyonlar actions diye geçer.
export default cartSlice.reducer //-> reducerları dışarı açmak gerekir.










            // const item = state.cartItem.find(item=>item.id === action.payload.id)
            // if(item){
            //     item.quantity += 1
            //     state.cartTotal += action.payload.price
            // }else{
            //     state.cartItem.push({...action.payload,quantity:1})
            //     state.cartTotal += action.payload.price
            // }