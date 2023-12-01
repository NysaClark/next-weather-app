'use client'
import { useState } from "react"

const Input = ({ setWeatherData, styles }) => {
    const [city, setCity] = useState("");
    const [err, setErr] = useState()

    const getWeatherData = async () => {
        event.preventDefault();

        setErr();
        setWeatherData();

        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f7dd5f65195d863069e051cef5e0e2ec&units=imperial`)
        const data = await res.json();
        data.city = city;
        // console.log(data);
        if (data.message) {
            setErr("City not found");
            return;
        }

        setWeatherData(data);
        setCity("");
    }

    return (
        <div>
            <form className={styles.search} onSubmit={getWeatherData}>
                <input
                type="text"
                    className={styles.searchTerm}
                    required
                    placeholder='Enter Your City'
                    value={city}
                    onChange={(e) => { setCity(e.target.value) }}
                />
                <button className={styles.searchButton} type="submit">Search</button>
            </form>
            {err ? <p className={styles.error}>{err}</p> : <></>}
        </div>
    )
}

export default Input