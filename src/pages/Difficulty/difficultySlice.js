import { createSlice } from '@reduxjs/toolkit';

const apikey = process.env.REACT_APP_APIKEY;
const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const difficultyUrl = proxyUrl + `https://api.glassnode.com/v1/metrics/mining/difficulty_latest?a=BTC&i=24h&api_key=${apikey}`;
const priceUrl = proxyUrl + `https://api.glassnode.com/v1/metrics/market/price_usd_close?a=BTC&i=24h&api_key=${apikey}`;

export const difficultySlice = createSlice({
  name: 'difficulty',
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

export const { getData, getDataSuccess, getDataFailure } = difficultySlice.actions;

export const fetchData = () => async (dispatch) => {
  dispatch(getData());

  try {
    const difficultyData = await fetch(
            difficultyUrl,
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

    const data = difficultyData.map( item => {

      if( priceDataDates.includes(item.t) ) {
        return {
          t: item.t,
          difficulty: item.v,
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


export const selectDifficulty = state => state.difficulty;

export default difficultySlice.reducer;
