import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <div className="logo">Movie Explorer</div>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Movies</a></li>
                    <li><a href="#">Favorites</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;