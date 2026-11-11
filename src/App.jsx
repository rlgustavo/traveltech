import { useState, useEffect } from "react";
import { supabase } from "./supabase";
import "./app.css";

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
      <header>
          <h1> Travel Tech </h1>
          <p> Viagens Disponiveis </p>
      </header>

      <section className="lista">
        {
          viagens.map( ( viagem ) => (
            <div key={ viagem.id } className="card">
              <h3> Nome: {viagem.destino} </h3>
              <p> R$ { viagem.preco } </p>
              <button> Ver Viagem </button>
            </div>
          ))
        }
      </section>

    </>
  )
}

export default App;