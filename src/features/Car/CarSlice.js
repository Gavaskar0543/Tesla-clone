import { createSlice } from '@reduxjs/toolkit';
const initialState={
    cars:["Model 3","Model Y","Model s","Model X","Solar Panel","Solar Roof"]
}
const carSlice= createSlice({
    name:"car",
    initialState,
    reducers:{}
}
)
export const selectCars = state => state.car.cars
export default carSlice.reducer