import '../Styles/custom.css';
import '../Styles/normalize.css';
import '../Styles/skeleton.css';

function HeaderComp({ cart, clearCart, removeCart }){
    const totalPrice = cart.reduce((total, item) => total + (item.price * item.amount), 0);

    return (
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
                                        <tbody>
                                            {cart.length === 0 ? (
                                                <tr>
                                                    <td colSpan="5">El carrito está vacío</td>
                                                </tr>
                                            ) : (
                                                cart.map((item) => (
                                                    <tr key={item.id}>
                                                        <td><img width="50px" src={item.imagen} alt={item.title} /></td>
                                                        <td>{item.title}</td>
                                                        <td>${item.price}</td>
                                                        <td>{item.amount}</td>
                                                        <td className='delete'><img width="30px" src="./Trash.gif" alt="Eliminar"  onClick={() => removeCart(item.id)} /></td>
                                                    </tr>
                                                ))
                                            )}
                                        </tbody>
                                    </table>
                                    <div className="total-price">
                                        <strong>Total: ${totalPrice.toFixed(2)}</strong>
                                    </div>
                                    <button id="vaciar-carrito" className="button u-full-width" onClick={clearCart}  >Vaciar Carrito</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default HeaderComp;
