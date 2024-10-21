import React from 'react';
import Card from './Card';
import '../Styles/custom.css';
import '../Styles/normalize.css';
import '../Styles/skeleton.css';

function Container(props) {
    const { cursos, addToCart } = props;

    return (
        <div id="lista-cursos" className="container">
            <h1 id="encabezado" className="encabezado">Cursos En Línea</h1>
            
            {cursos.map((curso, index) => {
                if (index % 3 === 0) {
                    return (
                        <div className="row" key={`row-${index}`}>
                            <Card curso={curso} addToCart={addToCart} />
                            {cursos[index + 1] && (
                                <Card curso={cursos[index + 1]} addToCart={addToCart} />
                            )}
                            {cursos[index + 2] && (
                                <Card curso={cursos[index + 2]} addToCart={addToCart} />
                            )}
                        </div>
                    );
                }
                return null; 
            })}
        </div>
    );
}

export default Container;
