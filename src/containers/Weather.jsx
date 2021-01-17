import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actGetWeather, actLoadingWeather, actSearchingWeather } from '../actions';
import { API_KEY } from '../constants/Key';
import axios from 'axios';
import Home from '../components/Home';
import StartLoading from '../components/StartLoading';
import WeatherSearch from '../components/WeatherSearch';
import SearchLoading from '../components/SearchLoading';
import Tomorrow from '../components/Tomorrow';
import WeatherCard from '../components/WeatherCard';
import IconWeather from '../components/IconWeather';

import Temperature from '../components/Temperature';

Weather.propTypes = {
    weathers: PropTypes.object.isRequired,
    onCity: PropTypes.func.isRequired,
    onLoading: PropTypes.func.isRequired,
    onSearching: PropTypes.func.isRequired,
};

Weather.defaultProps = {
    
}
function Weather(props) {

    const { onCity, onLoading, onSearching, weathers } = props;
    const [city, setCity] = useState({
                                        cityName:"Ho Chi Minh",
                                        temperature: true,
                                    });
                                    

    const changeCitySearch = (cityName) => {
        setCity({
            ...city,
            cityName: cityName,
        });

        onSearching(true);
        setTimeout(() => {
            onSearching(false);
        }, 1500);
      
    }

    const changeTemp = (temp) => {
        setCity({
            ...city,
            temperature: temp,
        });
        
    }

    const callOnCity = useCallback((nowWeather, tomorrow) => {
        onCity(nowWeather,tomorrow);
    },[onCity]);

    const callOnLoading = useCallback((loading) => {
        onLoading(loading);
    },[onLoading]);


    useEffect(() => {
        const getWeather = async (cityName) => {


            try {
                const nowWeather = await axios({
                    url: `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`,
                    method: 'GET'
                });
                const tomorrow = await axios({
                    url: `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}`,
                    method: 'GET'
                });

                callOnCity(nowWeather.data,tomorrow.data);
                
                setTimeout(() => {
                    callOnLoading(false);
                }, 1500);
                
            } catch (error) {
                alert("Không tìm thấy địa điểm này");
            }
            
        }


        getWeather(city.cityName);
        
    }, [city, callOnCity, callOnLoading]);

    const renderWeatherTomorrow = (weathers) => {
        return  weathers.tomorrow.map ( (item, index) =>{
                    return <Tomorrow 
                                time={item.time}
                                icon={item.icon}
                                temp={item.temperatureC}
                                key={index}
                            />
                })
               
        
    };

    const renderWeatherCard = (weathers) => {
        return <WeatherCard 
                    humidity = {weathers.humidity}
                    description = {weathers.description}
                />
    }

    const renderIconWeather = (weathers) => {
        return <IconWeather 
                    iconWeather = {weathers.icon}
                />
    }

    const renderTemperature = (weathers) => {
        return <Temperature
                    changeTemp = {changeTemp}
                    temperature = {city.temperature}
                    temperatureC = {weathers.temperatureC}
                    temperatureK = {weathers.temperatureK}
                />
    }

    return (
       <div>
            {weathers.isLoading && <StartLoading />}
            {weathers.isSearch && <SearchLoading />}
            <WeatherSearch 
                changeCitySearch = { changeCitySearch }
            />

            <Home 
                cityName = {weathers.city}
                renderWeatherCard= {renderWeatherCard(weathers)}
                renderIconWeather= {renderIconWeather(weathers)}
                renderWeatherTomorrow= {renderWeatherTomorrow(weathers)}
                renderTemperature = {renderTemperature(weathers)}
            />
       </div>
    );
}



const mapDispatchToProps = (dispatch, props) => {
    return{
        onCity: (nowWeather,tomorrow) => {
            dispatch(actGetWeather(nowWeather,tomorrow));
        },
        onLoading:(loading) => {
            dispatch(actLoadingWeather(loading));
        },
        onSearching:(searching) => {
            dispatch(actSearchingWeather(searching));
        }
    }
}


const mapStateToProps = state => {
    return{
        weathers: state.weathers,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Weather);