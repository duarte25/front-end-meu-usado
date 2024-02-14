import React, { useState } from "react";
import Styles from "./Styles.module.css";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";

const Menu = () => (
    <>
        <p>
            <a href="/home">HOME</a>
        </p>
        <p>
            <a href="/modelos">MODELOS</a>
        </p>
        <p>
            <a href="/servicos">SERVIÇOS</a>
        </p>
        <p>
            <a href="/sobrenos">SOBRE-NOS</a>
        </p>
        <p>
            <a href="/contato">CONTATO</a>
        </p>
        <p>
            <a href="/novidades">NOVIDADES</a>
        </p>
    </>
);

const NavComponent = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className={Styles.container}>
            <div className={Styles.links}>
                <div className={Styles.linksLogo}>
                    <img src="Logo.png" alt="Logo" />
                </div>
                <div className={Styles.linksWrapper}>
                    <Menu />
                </div>
            </div>
            <div className={Styles.navButton}>
                <button type="button">Hire me</button>
            </div>
            <div className={Styles.navMenu}>
                {toggleMenu ? (
                    <RiCloseLine
                        color="#333333"
                        size={27}
                        onClick={() => setToggleMenu(false)}
                    />
                ) : (
                    <RiMenu3Line
                        color="#333333"
                        size={27}
                        onClick={() => setToggleMenu(true)}
                    />
                )}
                {toggleMenu && (
                    <div className={Styles.navMenuWrapper}>
                        <div className={Styles.navMenuWrapperLinks}>
                            <Menu />
                            <div className={Styles.navMenuWrapperButton}>
                                <button type="button">Hire me</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NavComponent;