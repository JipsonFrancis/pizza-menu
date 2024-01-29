import React from "react";
import ReactDOM from "react-dom/client";

function App ()
{
    return (<>
        <h1>Hello React !</h1>
        <Pizza />
        <Pizza />
        <Pizza />
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


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<React.StrictMode><App /></React.StrictMode>)