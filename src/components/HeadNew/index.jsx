import React, { useEffect, useState } from "react";
import Styles from "./Styles.module.css";
import { RiCloseLine, RiMenuFill } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";

export default function Cabecalho() {
    const [toggleMenu, setToggleMenu] = useState(false);

    // Use useEffect para adicionar a classe ativo com base na URL atual
    useEffect(() => {
        const currentPage = window.location.pathname;
        const menuItems = document.querySelectorAll(`.${Styles.linksWrapper} a`);
        menuItems.forEach(item => {
            if (item.getAttribute("href") === currentPage) {
                item.classList.add(Styles.active);
            }
        });
    }, []);

    const Menu = () => (
        <>
            <ul>
                <li><a href="/home" >HOME</a></li>
                <li><a href="/modelos" >MODELOS</a></li>
                <li><a href="/formulario" >SERVIÇOS</a></li>
                <li><a href="/formulario" >SOBRE-NOS</a></li>
                <li><a href="/formulario" >CONTATO</a></li>
                <li><a href="/formulario" >NOVIDADES</a></li>
            </ul>
        </>
    );

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
            <div className={Styles.divLogin}>
                <FiLogOut
                    style={{ color: 'var(--cor-sandy-brown)', fontSize: '3vh' }}
                />
                <a href="/login">ENTRAR</a>
            </div>
            <div className={Styles.navMenu}>
                {toggleMenu ? (
                    <RiCloseLine
                        color="#333333"
                        size={32}
                        onClick={() => setToggleMenu(false)}
                    />
                ) : (
                    <RiMenuFill
                        color="#333333"
                        size={32}
                        onClick={() => setToggleMenu(true)}
                    />
                )}
                {toggleMenu && (
                    <div className={Styles.navMenuWrapper}>
                        <div className={Styles.navMenuWrapperLinks}>
                            <Menu />
                            <div lassName={Styles.navMenuWrapperButton}>
                                <FiLogOut
                                    style={{ color: 'var(--cor-sandy-brown)', fontSize: '3vh' }}
                                />
                                <a href="/login">ENTRAR</a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}