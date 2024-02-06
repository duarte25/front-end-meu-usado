import Styles from "./Styles.module.css"

export default function Cabecalho() {
    return (
        <div className={Styles.cabecalho}>
            <img src="Logo.png"/>
            <ul>
                <li className={Styles.home}>
                    <a href="/home">HOME</a>
                    <div className={Styles.barraHome}></div>
                </li>
                <li><a href="/formulario">MODELOS</a></li>
                <li><a href="/formulario">SERVIÇOS</a></li>
                <li><a href="/formulario">SOBRE-NOS</a></li>
                <li><a href="/formulario">CONTATO</a></li>
                <li><a href="/formulario">NOVIDADES</a></li>
            </ul>
        </div>
    )
}