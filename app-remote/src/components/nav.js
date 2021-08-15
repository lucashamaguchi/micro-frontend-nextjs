import * as React from "react";


const Nav = ({ someProp }) => {
  return (
    <div className="navbar navbar-default" style={{
      backgroundColor: "blue",
    }}>
      fala ai meu componente 2
      <br />
      {someProp}
      <br />
      teste
    </div>
  );
}

export default Nav;
