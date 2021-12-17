import Link from "next/link"
import Navegador from "../components/Navegador"

export default function Inicio(){
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      height:'100vh'
    }}>
      <Navegador texto="Estiloso" destino="/estiloso"/>
      <Navegador texto="Exemplo" destino="/exemplo" cor="darkviolet"/>
      <Navegador texto="JSX" destino="/jsx" cor="crimson"/>
      <Navegador texto="Navegacao #01" destino="/navegacao/" cor="green"/>
      <Navegador texto="Navegacao #02" destino="/cliente/codigo" cor="blue"/>
      <Navegador texto="Componente com Estado" destino="/estado" cor="#a45b71"/>
      <Navegador texto="Integracao com API #01" destino="/integracao_1" cor="#42a9a9"/>

    </div>
  )
}
