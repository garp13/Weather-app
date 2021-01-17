


const Temperature = (props) => {

    const {changeTemp, temperature, temperatureC, temperatureK} = props;
    return(
        
        <div className="temperature">
            <h3>{temperature ? temperatureC : temperatureK}</h3>
            <p>
                
                <span
                    onClick={() => {
                        changeTemp(true);
                    }}
                    className={temperature ? "temperature-active" : "temperature-not-active" }
                >
                    °C
                </span>/<span
                            onClick={() => {
                                changeTemp(false)
                            }}
                            className={!temperature ? "temperature-active" : "temperature-not-active" }
                        > 
                            °F
                        </span>
            </p>
        </div>
       
        
    )
}

export default Temperature;