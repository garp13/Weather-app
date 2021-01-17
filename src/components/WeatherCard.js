import { useEffect, useState } from "react";



const WeatherCard = (props) => {

    const {humidity, description} = props;
    const [time, setTime] = useState({
        time: "",
        today: "",
        dayOfWeek: "",
    });
    
    useEffect(() => {
        const getTimeNow = () => {
            let now = new Date();
            let today = String(now.getDate()).padStart(2, '0') + "/" + String((now.getMonth() + 1)).padStart(2, '0') + "/" + now.getFullYear();
            let time = now.getHours() + ":" + String(now.getMinutes()).padStart(2, '0');
            let dayOfWeek = now.getDay();
            let days = ["Chủ Nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"];
    
            setTime({
                time: time,
                today: today,
                dayOfWeek: days[dayOfWeek],
            })
            
        }
        getTimeNow();
        
    }, []);

    
    return(
        
        <div className="weatherCard">   
            <p className="time"> {time.time} </p>

            <p className="day"> {time.dayOfWeek} - {time.today} </p>

            <p className="humidity"> Độ ẩm: {humidity} </p>
                    
            <p className="description"> Thời tiết: {description} </p>                
        </div> 
       
        
    )
}

export default WeatherCard;