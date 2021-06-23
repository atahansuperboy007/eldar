import { cubicks } from './Cubicks'
import { useState } from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    const [sResults, setSResults] = useState(false);
    const [search, setSearch] = useState(false);
    const handleSearch = (sr) => {
        setSearch(sr);
        setSResults(
            cubicks.filter((elem) => elem.name.toLowerCase().includes(sr.toLowerCase()))
        );
    };
    return (
        <>
            <nav className='navbar'>
                <h1>Поиск</h1>
                <div className="navbar-search">
                    <input type="text" onChange={(e) => handleSearch(e.target.value)} />
                    <button>Поиск</button>
                    {sResults && search.length > 0 ? (
                        <ul className="search-results">
                            {sResults.map(elem => {
                                return <li><Link to={"/p/" + elem.id}>{elem.name}</Link></li>;
                            })}
                        </ul>
                    ) : null}
                </div>
            </nav>
        </>
    );
}

export default Navbar;