import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',    //-> gobal de tutacağım değerler
    initialState:{
        cartItem:[], //-> cartItem içerisine kartlarımı göndererek her yerden erişebilirim
        cartTotal:0, //-> mesela total 0 değerine heryerden ulaşabilirim
    },
    reducers:{}
   
    })

export default cartSlice.reducer