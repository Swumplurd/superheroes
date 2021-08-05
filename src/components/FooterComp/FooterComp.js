import { Link, animateScroll as scroll } from "react-scroll";

import './FooterComp.css'

export const FooterComp = () => {
    const scrollToTop = () => {
        scroll.scrollToTop();
    };
    return (
        <footer className="text-muted py-5">
            <div className="container">
                <p className="float-end mb-1">
                <Link activeClass="active" to="header" spy={true} smooth={true} offset={-70} duration={3000}>
                    Volver al Inicio
                </Link>
                </p>
                <p className="mb-1">El Album de Ejemplo es &copy; Bootstrap, Pero por favor descargalo y customizalo tu mismo!</p>
                <p className="mb-0">
                    Nuevo en Boostrap? <a href="https://getbootstrap.com/">Visita la Pagina de Inicio</a> El Album de Ejemplo esta disponible en: <a href="https://getbootstrap.com/docs/5.0/examples/">Ejemplos de Bootstrap</a>.
                </p>
            </div>
        </footer>
    );
};
