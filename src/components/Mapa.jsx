import bandas from "../service/dados"
import "./style.css"



function Mapa() {
    return (
        <div>
        {bandas.map(banda =>{
            return(
                <ul className="lista">
                    <li>{banda.id}</li>
                    <li>{banda.nome}</li>
                    <li className="listitem">{banda.descricao}</li>
                    <li><img src={banda.imagem} alt={banda.nome}/></li>
                    
                </ul>
            )
        })}
    </div>
    )
}

export default Mapa