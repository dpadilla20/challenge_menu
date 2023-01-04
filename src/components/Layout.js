import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const onChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="container">
      <select value={selectedOption} onChange={onChange}>
        <option value={``}>-- Seleccionar --</option>
        <option value={`admin`}>Admin</option>
        <option value={`cajero`}>Cajero</option>
        <option value={`encargado`}>Encargado</option>
      </select>

      {selectedOption !== "" && (
        <>
          <Header role={selectedOption} />
          <div className="content">
            <Outlet />
          </div>
        </>
      )}
    </div>
  );
};

export default Layout;
