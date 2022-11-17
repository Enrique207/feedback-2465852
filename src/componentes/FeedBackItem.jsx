import { useState } from "react";

const FeedBackItem = () =>{

    //estados: presisten información a traves del ciclo de vida
    //de un unico componente

    //estados iniciales
    const [rating, setRating ] = useState(2)
    const [text, setText] = useState("Mejorar Curso, mejores recursos")
    
    const addNota=()=> {
        //cambiar el estado a rating
        //parametro para el valor anterior
        setRating((prev)=>{
            return prev + 1
        })
    }
    const resNota=()=> {
        //cambiar el estado a rating
        //parametro para el valor anterior
        setRating((prev)=>{
            return prev - 1
        })
    }

    return (
        <div className="card">
            <div className="num-display">
                {rating}
            </div>
            <div className="text-display">
                {text}
                <button onClick={addNota}>
                    Sumar Nota
                </button>
                <button onClick={resNota}>
                    Restar Nota
                </button>
            </div>
        </div>
    )
}


export default FeedBackItem;