import '../Styles/custom.css'
import '../Styles/normalize.css'
import '../Styles/skeleton.css'


function Card({ curso, addToCart }) {
    const { id, titulo, instructor, imagen, precio_original, precio_descuento } = curso;
    //console.log(curso);
    
    const handleAddToCart = () => {
        const item = {
          id,
          imagen,
          title: titulo,
          price: precio_descuento, 
        };
        addToCart(item);
      };

      


  
    return (
        <>
        
      <div className="four columns">
        <div className="card">
          <img src={imagen} className="imagen-curso u-full-width" alt={titulo} />
          <div className="info-card">
            <h4>{titulo}</h4>
            <p>{instructor}</p>
            <p className="precio">${precio_original} <span className="u-pull-right">${precio_descuento}</span></p>
            <button className="u-full-width button-primary button input agregar-carrito" onClick={handleAddToCart}>              
                Agregar Al Carrito
            </button>
          </div>
        </div>
      </div>
    </>)
  }
  
  export default Card;