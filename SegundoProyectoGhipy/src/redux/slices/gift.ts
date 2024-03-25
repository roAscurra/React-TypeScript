import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IGift } from "../../types/gift"

// Define a type for the slice state
interface IinitialState {
    gift : IGift[]
  }
  
  // Define the initial state using that type
  const initialState: IinitialState = {
    gift : []
}
  
const giftSlice = createSlice({
    name: 'giftState',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
      // Use the PayloadAction type to declare the contents of `action.payload`
      setGifts: (state, action: PayloadAction<IGift[]>) => {
        state.gift = action.payload;
      },
      resetGift : (state)=>{
        state.gift = [];
      }
    },
  })
  export const { setGifts, resetGift } = giftSlice.actions;

  export default giftSlice.reducer