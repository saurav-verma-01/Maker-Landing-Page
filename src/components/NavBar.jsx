import logo from "../assets/logo.svg";

const NavBar = () => {
  return (
    <nav className="nav container">
      <img src={logo} width={120} height={35} alt="maker logo" />
    </nav>
  );
};

export default NavBar;
