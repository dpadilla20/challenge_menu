import { menuItems } from "../menuItems";
import MenuItems from "./MenuItems";
const Navbar = ({ role }) => {
  return (
    <nav>
      <ul className="menus">
        {menuItems.map((menu, index) => {
          const depthLevel = 0;
          if (menu.role.includes(role)) {
            return (
              <MenuItems items={menu} key={index} depthLevel={depthLevel} />
            );
          }
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
