import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom/client"
import './index.css'
import pizzaData from "./data.js"
import axios from "axios"

function App ()
{
    const [time, setTime] = useState(new Date().toLocaleTimeString())
    const [datum, setDatum] = useState([])

    React.useEffect(() => {
        setInterval( () => {
            setTime(new Date().toLocaleTimeString())
        }, 1000)
    }, [])

    React.useEffect(() => {
        axios.get("http://localhost:5000/api/item")
          .then(response => {setDatum(response.data) })
          .catch(error => console.error(error))
    }, []);

    return (
    <div className='container'>
        <Header />
        <Menu />
        <Footer time={time} />
    </div>)
}

const Header = () => (<header className="header"><h1>Kasi Eats</h1></header>)

const Menu = () => (
<div className="menu">
    <h2>Our Menu</h2>

    <ul className="pizzas">
    {
        pizzaData.map((pizza) => {
            return !pizza.soldOut ? <Pizza photoUrl={pizza.photoName} name={pizza.name} price={`$${pizza.price}`} ingredients={pizza.ingredients} /> :
            <Pizza soldOut="sold-out" photoUrl={pizza.photoName} name={pizza.name} price={`sold out`} ingredients={pizza.ingredients} />
        })
    }
    </ul>

    <Btn />
</div>
)
const Footer = (props) => 
{
    const hour = new Date().getHours()
    const openHour = 8
    const closeHour = 20
    const isOpen = hour >= openHour && hour < closeHour

    return <footer className="footer">{isOpen && `${props.time} We're open now.`}</footer>
}

const Pizza = (props) => 
{
    return (
        <li className={`pizza ${props.soldOut}`}>
            <img className={props.soldOut} src={props.photoUrl} alt={props.name}/>
            <div>
                <h3>{props.name}</h3>
                <p>{props.ingredients}</p>
                <span>{props.price}</span>
            </div>
        </li>
    )
}

const Btn = () => (<button className="btn order" type="submit">Order</ button>)


// rendering components on the browser canvas 

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<React.StrictMode><App /></React.StrictMode>)