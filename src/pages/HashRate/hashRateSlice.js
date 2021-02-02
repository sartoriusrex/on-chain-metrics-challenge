import { createSlice } from '@reduxjs/toolkit';

const apikey = process.env.REACT_APP_APIKEY;
const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const hashRateUrl = proxyUrl + `https://api.glassnode.com/v1/metrics/mining/difficulty_latest?a=BTC&i=24h&api_key=${apikey}`;
const priceUrl = proxyUrl + `https://api.glassnode.com/v1/metrics/market/price_usd_close?a=BTC&i=24h&api_key=${apikey}`;

export const hashRateSlice = createSlice({
  name: 'hashRate',
  initialState: {
    loading: false,
    errors: [],
    data: []
  },
  reducers: {
    getData: state => {
        state.loading = true;
    },
    getDataSuccess: (state, action) => {
        state.loading = false;
        state.data = action.payload;
    },
    getDataFailure: (state, action) => {
        state.loading = false;
        state.errors = action.payload;
    },
  },
});

export const { getData, getDataSuccess, getDataFailure } = hashRateSlice.actions;

export const fetchData = () => async (dispatch) => {
  dispatch(getData());

  try {
    const hashRateData = await fetch(
            hashRateUrl,
            {
                'Content-Type': 'application/json',
                'mode': 'cors'
            }
        )
        .then( response => response.json() )

    const priceData = await fetch(
        priceUrl,
        {
            'Content-Type': 'application/json',
            'mode': 'cors'
        }
    )
    .then( response => response.json() )

    const priceDataDates = priceData.map( data => data.t );

    const data = hashRateData.map( item => {

      if( priceDataDates.includes(item.t) ) {
        return {
          t: item.t,
          hashRate: item.v,
          price: priceData.filter( pricePoint => pricePoint.t === item.t )[0].v,
        } 
      }

      return false
    }).filter( data => data !== false );

    dispatch(getDataSuccess(data))
  } catch (err) {
    console.log(err);
    return dispatch(getDataFailure([err.message]))
  }
};


export const selectHashRate = state => state.hashRate;

export default hashRateSlice.reducer;
