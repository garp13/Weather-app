import * as ActionTypes from "../constants/ActionType";

export const actGetWeather = (nowWeather,tomorrow) => {
    return{
        type: ActionTypes.GET_WEATHER,
        nowWeather,
        tomorrow
        
        // country
    }
}

export const actLoadingWeather = (loading) => {
    return{
        type: ActionTypes.LOADING_WEATHER,
        loading
        // country
    }
}

export const actSearchingWeather = (searching) => {
    return{
        type: ActionTypes.SEARCHING_WEATHER,
        searching
        // country
    }
}
