import { Col, Row } from "antd";
import "../assets/styles/Home.scss";


const Home = (props) => {
    const { renderWeatherTomorrow, renderWeatherCard, renderIconWeather, renderTemperature, cityName} = props;

    return(
        <div>
          
            <div className="homePage">
                <div className="cardPage">
                    <div className="cityName">
                        {cityName}
                        
                    </div>
                </div>
                <Row>
                    <Col span={10}>
                        {renderWeatherCard}
                    </Col>

                    <Col span={10}>
                        {renderIconWeather}
                    </Col>

                    <Col span={4}>
                        {renderTemperature}
                    </Col>
                </Row>
                
            

                <div className="tomorrowWeather">
                    <h3>THỜI TIẾT NGÀY MAI</h3>
                    <Row>
                        {renderWeatherTomorrow}
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default Home;