import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom/client"
import './index.css'
import pizzaData from "./data"

function App ()
{
    const [time, setTime] = useState(new Date().toLocaleTimeString())

    return (
    <div className='container'>
        <Header />
        <Menu />
        <Footer time={time}/>
    </div>)
}

const Header = () => (<header className="header"><h1>Kasi Eats</h1></header>)

const Menu = () => (
<div className="menu">
    <h2>Our Menu</h2>
    <div className="pizzas">
        <Pizza photoUrl={pizzaData[0].photoName} name={pizzaData[0].name} price={pizzaData[0].price} ingredients={pizzaData[0].ingredients} />
        <Pizza photoUrl={pizzaData[1].photoName} name={pizzaData[1].name} price={pizzaData[1].price} ingredients={pizzaData[1].ingredients} />
        <Pizza photoUrl={pizzaData[2].photoName} name={pizzaData[2].name} price={pizzaData[2].price} ingredients={pizzaData[2].ingredients} />
        <Pizza photoUrl={pizzaData[3].photoName} name={pizzaData[3].name} price={pizzaData[3].price} ingredients={pizzaData[3].ingredients} />
    </div>
    <Btn />
</div>
)
const Footer = (props) => ( <footer className="footer">{props.time} We're open now</footer> )
const Pizza = (props) => 
{
    return (
        <div className="pizza">
            <img src={props.photoUrl} alt={props.name}/>
            <div>
                <h3>{props.name}</h3>
                <p>{props.ingredients}</p>
                <span>${props.price}</span>
            </div>
        </div>
    )
}
const Btn = () => (<button className="btn order" type="submit">Order</ button>)


// rendering components on the browser canvas 

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<React.StrictMode><App /></React.StrictMode>)