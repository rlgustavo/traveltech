import { useState, useEffect } from "react";
import { supabase } from "./supabase";

function App() {
  
  const [ viagens, setViagens ] = useState( [] );

  useEffect( () => {
      async function buscar() {
        const { data, error } = await supabase.from("viagens").select("*");

        if( error ) {
          alert(" Erro ao Buscar Viagens no banco de dados ");
        } else {
          setViagens( data );
        }
      }

      buscar();
  } , [] );
  
  return(
    <>
      <h1> Travel Tech </h1>
      <p> Viagens Disponiveis </p>

      {
        viagens.map( ( viagem ) => (
          <p key={ viagem.id }> 
            Nome da Viagem { viagem.destino } - R$ { viagem.preco } 
          </p>
        ))
      }

    </>
  )
}

export default App;