import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',    //-> gobal de tutacağım değerler
    initialState:{
        cartItem:[], //-> cartItem içerisine kartlarımı göndererek her yerden erişebilirim
        cartTotal:0, //-> mesela total 0 değerine heryerden ulaşabilirim
    },
    reducers:{
        // reducers içerisinde method ve fonksiyonlar tutulur Fonksiyonlar state ve action parametreleri alır. Bu metotla beraber gönderdiğimiz verilerdir. Statler de bir üstde yazan initialState içindeki değişkenlerdir.
        addToCart:(state,action)=>{
            state.cartItem.push(action.payload)
        }
    }
})

export const {addToCart} = cartSlice.actions //-> fonksiyonları özellikle dışarı açmak gerekir, reducersler içindeki fonksiyonlar actions diye geçer.
export default cartSlice.reducer //-> reducerları dışarı açmak gerekir.










            // const item = state.cartItem.find(item=>item.id === action.payload.id)
            // if(item){
            //     item.quantity += 1
            //     state.cartTotal += action.payload.price
            // }else{
            //     state.cartItem.push({...action.payload,quantity:1})
            //     state.cartTotal += action.payload.price
            // }