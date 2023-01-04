import Navbar from './Navbar';

const Header = ({role}) => {
  return (
    <header>
      <div className="nav-area">
        <Navbar role={role}/>
      </div>
    </header>
  );
};

export default Header;