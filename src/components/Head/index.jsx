import React, { useEffect, useState } from "react";
import Styles from "./Styles.module.css";

export default function Cabecalho() {
    const [menuAberto, setMenuAberto] = useState(false);

    // Adicione esta função para fechar o menu quando um item é clicado
    function handleItemClick() {
        setMenuAberto(false);
    }

    // Use useEffect para adicionar a classe ativo com base na URL atual
    useEffect(() => {
        const currentPage = window.location.pathname;
        const menuItems = document.querySelectorAll(`.${Styles.cabecalho} a`);
        menuItems.forEach(item => {
            if (item.getAttribute("href") === currentPage) {
                item.classList.add(Styles.active);
            }
        });
    }, []);

    return (
        <div className={Styles.cabecalho}>
            <div className={menuAberto ? Styles.menuAberto : ""}>
                <img src="Logo.png" className={Styles.imgLogo} alt="Logo" />
                <ul>
                    <li><a href="/home" onClick={handleItemClick}>HOME</a></li>
                    <li><a href="/modelos" onClick={handleItemClick}>MODELOS</a></li>
                    <li><a href="/formulario" onClick={handleItemClick}>SERVIÇOS</a></li>
                    <li><a href="/formulario" onClick={handleItemClick}>SOBRE-NOS</a></li>
                    <li><a href="/formulario" onClick={handleItemClick}>CONTATO</a></li>
                    <li><a href="/formulario" onClick={handleItemClick}>NOVIDADES</a></li>
                </ul>
                <div className={Styles.divLogin}>
                    <img src="Login.png" className={Styles.imgLogin} alt="Login" />
                    <a href="/login">ENTRAR</a>
                </div>
            </div>
            <div className={Styles.hamburguerMenu} onClick={() => {
                console.log("Menu aberto:", menuAberto); // Adicione o console.log aqui
                setMenuAberto(!menuAberto);
            }}>
                <div className={Styles.linha}></div>
                <div className={Styles.linha}></div>
                <div className={Styles.linha}></div>
            </div>
        </div>
    );
}
