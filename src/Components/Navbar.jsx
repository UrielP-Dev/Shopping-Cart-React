import '../Styles/custom.css'
import '../Styles/normalize.css'
import '../Styles/skeleton.css'

function HeaderComp() {
    return (
        <>
            <header id="header" className="header">
                <div className="container">
                    <div className="row">
                        <div className="two columns u-pull-right">
                            <ul>
                                <li className="submenu">
                                    <img src="../public/cart.png" id="img-carrito" alt="Carrito" />
                                    <div id="carrito">
                                        <table id="lista-carrito" className="u-full-width">
                                            <thead>
                                                <tr>
                                                    <th>Imagen</th>
                                                    <th>Nombre</th>
                                                    <th>Precio</th>
                                                    <th>Cantidad</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody></tbody>
                                        </table>
                                        <button id="vaciar-carrito" className="button u-full-width">Vaciar Carrito</button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default HeaderComp;
