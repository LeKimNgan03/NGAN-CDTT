import menuservice from '../../services/MenuService';
import { useEffect, useState } from "react";
import NavbarItem from './NavbarItem';

function Navbar() {
    const [menus, setMenus] = useState([]);
    useEffect(() => {
        {
            menuservice.getByParentId('mainmenu', 0).then((result) => {
                setMenus(result.data.menus);
            });
        }
    }, []);

    return (
        <div className="d-flex flex-wrap justify-content-center" style={{ backgroundColor: `#FCBAAD` }}>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul className="navbar-nav">
                        {menus.map((menu, index) => <NavbarItem key={index} menu={menu} />)}
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;