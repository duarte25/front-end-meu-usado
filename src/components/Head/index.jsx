import React, { useEffect } from "react";
import Styles from "./Styles.module.css";

export default function Cabecalho() {
    useEffect(() => {
        const currentPage = window.location.pathname;
        const menuItems = document.querySelectorAll(`.${Styles.cabecalho} a`);
        menuItems.forEach(item => {
            if (item.getAttribute("href") === currentPage) {
                item.classList.add(Styles.active); // Adicionando a classe do CSS Module
            }
        });
    }, []); // Usando um array vazio para garantir que este efeito só seja executado uma vez

    return (
        <div className={Styles.cabecalho}>
            <img src="Logo.png" className={Styles.imgLogo} alt="Logo" />
            <ul>
                <li><a href="/home">HOME</a></li>
                <li><a href="/modelos">MODELOS</a></li>
                <li><a href="/formulario">SERVIÇOS</a></li>
                <li><a href="/formulario">SOBRE-NOS</a></li>
                <li><a href="/formulario">CONTATO</a></li>
                <li><a href="/formulario">NOVIDADES</a></li>
            </ul>
            <div className={Styles.divLogin}>
                <img src="Login.png" className={Styles.imgLogin} alt="Login" />
                <a href="/login">ENTRAR</a>
            </div>
        </div>
    );
}
