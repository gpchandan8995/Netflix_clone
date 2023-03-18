import React, { useEffect, useState } from "react";
import "./Nav.css";
function Nav() {
    const [show, handleshow] = useState(false)

    useEffect(() => {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 150) {
          handleshow(true)
        } else handleshow(false);
      });
      return () => {
        window.removeEventListener("scroll",null)
        //add and remove madhe 2 parameters pahijech nhitR  work nhi hot te
        //mhanunach problem yet hota (inspect madhe disla ethe nhi)
        //ani second object pahije MDN website var bgha kay ae te samajnar
      }
    }, []);
   

    return (
        <div className={`nav ${show && "nav_black"}`}>
            {/* row.js madhe jas kela hota tsach kel ethe pan shar nav khali yet asnar tr
            tyala black kra  */}
            <img
                className="nav_logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png"
                // link to netflix Logo
                alt="Netflix_Logo"
            />
            <img
                className="nav_avatar"
                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
                // link to netflix Logo
                alt="Netflix_Logo"
            />
        </div>
    );
}

export default Nav;
