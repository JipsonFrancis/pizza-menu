import React from "react";
import ReactDOM from "react-dom/client";

function App ()
{
    return (<>
        <Header />
        <Menu/>
        <Footer/>

    </>)
}

function Pizza()
{
    return (
        <div>
            <img src="pizzas/salamino.jpg" alt="Sallamino Pizza"/>
            <h3>Pizza Salamino</h3>
            <p>Tomato, mozarella, ham, aragula, and burrata cheese</p>
            <strong>$18</strong>
        </div>
    )
}

const Header = () => (<h1>Kasi Eats</h1>)

const Menu = () => (<>
<h3>Our Menu</h3>
<Pizza />
<Pizza />
<Pizza />
</>)

const Footer = () => ( <footer>{new Date().toLocaleTimeString()} We're open now</footer> )



const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<React.StrictMode><App /></React.StrictMode>)