import React from 'react'
import './checker.css'

const Checker = () => {
    const a = (data) => {
        let para = document.getElementById('dat')
        const city = data.target.inpu.value
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=12163a331ab780b1f7af8a43b44d24c1`)
            .then(response => response.json())
            .then(data2 => {
                let tempvalue = data2['main']['temp']
                let a = `${Math.round(tempvalue - 273.15)} °C`
                console.log(a)
                para.innerHTML = `${a}  Temperature`
            })
            .catch((err) => {
                para.innerHTML = 'Wrong city';
            })
        data.preventDefault()
    }
    return (
        <center>
            <div className='box'>
                <form onSubmit={a}>
                    <br />
                    <input id="inp" type="text" name="inpu" placeholder="Enter City Name" />
                    <br /><br />
                    <button type="submit" >Check</button>
                </form>
                <b><p id="dat"></p></b>
            </div>
        </center>
    )
}

export default Checker
