

const WeatherSearch = (props) => {
    const {changeCitySearch} = props;
    const searchWeather = () => {
        const city = document.querySelector("#city").value;
        changeCitySearch(city);
    }
    
    const enterSearch = (e) => {
        if (e.keyCode === 13){
            searchWeather();
        }
    }
    return(
        <div className="search-container">
                <input type="text" className="input-search" onKeyUp={enterSearch} id="city" placeholder="City..." />
                {/* <button className="search-btn" onClick={() => searchWeather()}><i className="fa fa-search"></i></button> */}
        </div>
    )
}

export default WeatherSearch;