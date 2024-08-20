import Logo from '../../resources/logo.jpg';
const Header = () =>(

    <div className="header">
        <div className="app-logo">
            <img className="logo" src={Logo} alt="hi"/>
        </div>
        <div className="header-list">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>contact us</li>
                <li>cart</li>
            </ul>
        </div>
    </div>
    
    )

export default Header;