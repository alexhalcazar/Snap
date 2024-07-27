import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">HomePage</Link>
                </li>
                <li>
                    <Link to="/cardlist">CardList</Link>
                </li>
                <li>
                    <Link to="/cardsearch">CardSearch</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
