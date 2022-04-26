import reactLogo from "../react.svg"

function Nav(){
    return(
        <nav className="nav">
            <img src= {reactLogo} alt="logo" className="nav-logo" />
            <ul className="nav-items">
                <li>Pricing</li>
                <li>things</li>
                <li>companies</li>
            </ul>
        </nav>
    )
}

export default Nav 