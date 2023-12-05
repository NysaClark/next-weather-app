'use client'
import { useState } from 'react'
import Input from './Input'
import styles from "./display.module.css"

function Display() {
  const [weatherData, setWeatherData] = useState();

  return (
    <div>
      <Input setWeatherData={setWeatherData} />
      <div>
        {weatherData ?
          <div
            className={styles.card}
          >
            <h1 className={styles.city}>{weatherData.city}</h1>
            <h2 className={styles.temp} >
              {Math.round(weatherData.main.temp)}°
            </h2>
            <p>
              {weatherData.weather[0].main}
            </p>
            <div className={styles.high_low}>
              <p>H:{Math.round(weatherData.main.temp_max)}°</p>
              <p>L:{Math.round(weatherData.main.temp_min)}°</p>
            </div>
          </div>
          : <></>}
      </div>
    </div>
  )
}

export default Display;