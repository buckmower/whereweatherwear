import { REQUEST_POSTS, RECEIVE_POSTS } from '../actiontypes/fetchWeather';

const initialState = {
  wwwResponse: {ok: null, status: null, 
    message: {
      forecast: []
    }
  },
  wwwRequest: {}
};

export default function wWW(state = initialState, action) {
  switch (action.type) {
    case REQUEST_POSTS: {
      return Object.assign({}, state, { wwwRequest: action.response });
    }
    case RECEIVE_POSTS: {
      let forecastQuery = action.response.data ? action.response.data.query : {};
      let forecastResults = forecastQuery ? forecastQuery.results : {};
      let forecastChannel = forecastResults ? forecastResults.channel : {};
      let forecast = forecastChannel ? forecastChannel.item : {};
      return Object.assign({}, state, { wwwResponse: Object.assign({}, 
        { ok: action.response.ok, 
          status: action.response.status, 
          message: forecast 
        }) 
      });
    }
    default: {
      return state;
    }
  }
}
