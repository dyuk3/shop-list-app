import { createSlice } from '@reduxjs/toolkit';

const shops = [
  {
    id: 1,
    shopName: 'Apsara Store',
    shopArea: 'nashik',
    category: 'stationary',
    startDate: '2019-11-15',
    closeDate: '2030-11-06',
  },
  {
    id: 2,
    shopName: 'sai Store',
    shopArea: 'pune',
    category: 'stationary',
    startDate: '2019-11-15',
    closeDate: '2030-11-06',
  },
  {
    id: 3,
    shopName: 'Aamba Store',
    shopArea: 'mumbai',
    category: 'stationary',
    startDate: '2019-11-15',
    closeDate: '2030-11-06',
  },
  {
    id: 4,
    shopName: 'Apsara Store',
    shopArea: 'pune',
    category: 'stationary',
    startDate: '2019-11-15',
    closeDate: '2030-11-06',
  },
  {
    id: 5,
    shopName: 'Apsara Store',
    shopArea: 'pune',
    category: 'grocery',
    startDate: '2019-11-15',
    closeDate: '2030-11-06',
  },
];

const initialState = {
  shops: shops,
  filteredShops: shops,
};

const shopSlice = createSlice({
  name: 'shops',
  initialState,
  reducers: {
    addShop: (state, action) => {
      state.filteredShops.push(action.payload);
    },
    deleteShop: (state, action) => {
      state.filteredShops.splice(
        state.filteredShops.findIndex((shop) => shop.id === action.payload),
        1
      );
    },

    filterShops: (state, action) => {
      state.filteredShops = state.shops.filter((shop) => {
        const hasArea =
          action.payload[0] === 'all'
            ? true
            : action.payload[0] === shop.shopArea;
        const hasCategory =
          action.payload[1] === 'all'
            ? true
            : action.payload[1] === shop.category;

        return hasArea && hasCategory;
      });
    },
    getStatus: (state, action) => {},
  },
});

export const getAllShops = (state) => state.shops.filteredShops;

export const { addShop, deleteShop, filterShopByArea, filterShops } =
  shopSlice.actions;

export default shopSlice.reducer;
