import React from "react"
import ReactDOM from "react-dom/client"
import './index.css'

function App ()
{
    return (<div className='container'>
        <Header />
        <Menu />
        <Footer />

    </div>)
}

const Header = () => (<h1 className="header">Kasi Eats</h1>)

const Menu = () => (<div className="menu">
<h2>Our Menu</h2>
<div className="pizzas">
    <Pizza />
    <Pizza />
    <Pizza />
</div>
<Btn />
</div>)

const Footer = () => ( <footer className="footer">{new Date().toLocaleTimeString()} We're open now</footer> )

const Pizza = () => 
{
    return (
        <div className="pizza ">
            <img src="pizzas/salamino.jpg" alt="Sallamino Pizza"/>
            <h3>Pizza Salamino</h3>
            <p>Tomato, mozarella, ham, aragula, and burrata cheese</p>
            <span>$18</span>
        </div>
    )
}
const Btn = () => (<button className="btn order" type="submit">Order</ button>)


// rendering components on the browser canvas 

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<React.StrictMode><App /></React.StrictMode>)