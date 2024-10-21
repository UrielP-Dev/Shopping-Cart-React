import '../Styles/custom.css'
import '../Styles/normalize.css'
import '../Styles/skeleton.css'


function Card(props){

    const  { id, titulo, instructor, imagen, precio_original, precio_descuento } = props
    return (
    <>
     <div className="four columns" key={id}>
            <div className="card">
                <img src={imagen} className="imagen-curso u-full-width" alt={titulo} />
                <div className="info-card">
                    <h4>{titulo}</h4>
                    <p>{instructor}</p>
                    <img src="img/estrellas.png" alt="Estrellas" />
                    <p className="precio">${precio.original} <span className="u-pull-right ">${precio.descuento}</span></p>
                    <a href="#" className="u-full-width button-primary button input agregar-carrito" data-id={id}>Agregar Al Carrito</a>
                </div>
            </div>
    </div>
    </>
    )
}

export default Card;