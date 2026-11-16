import { useState, useEffect } from 'react';
import { supabase } from '..supabase';


function CardViagens() {
  
  const [viagens, setViagens] = useState([]);

  useEffect( () => {
    async function buscar() {
      const { data, error } = await supabase.from('viagens').select('*');

      if (error) {
        alert(" Erro ao buscar Viagens no banco de dados ");
      } else {
        setViagens(data);
      }
    }
    
      buscar();
  } , [] );
 

  return(
    <>
        <section className="lista">
        {
        viagens.map( (viagem) => (
            <div key={viagem.id} className="card">
            <h3> Nome: {viagem.destino} </h3>
            <p> Preço: R$ {viagem.preco} </p>
            <button> Ver Viagem </button>
            </div>
        ))
        }
        </section>
    </>
  )
}


export default CardViagens;
