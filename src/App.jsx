import { useState } from 'react'



const App = () => {
  const sintomas = [
    '¿Tienes fiebre?',
    '¿Tienes tos?',
    '¿Tienes dolor de cabeza?',
    '¿Tienes dificultad respiratoria?',
    '¿Tienes sensibilidad a la luz?',
    '¿Tienes náuseas?',
    '¿Tienes sed excesiva?',
    '¿Tienes hambre excesiva?',
    '¿Orinas frecuentemente?',
    '¿Tienes dolor en el pecho?',
    '¿Tienes sibilancias?',
    '¿Tienes dolor en las articulaciones?',
    '¿Tienes rigidez en las articulaciones?',
    '¿Tienes inflamación en las articulaciones?',
    '¿Tienes perdida de memoria?',
    '¿Tienes confusión?',
    '¿Tienes dificultad al hablar?',
    '¿Tienes bultos en los senos?',
    '¿Notas algún cambio en el tamaño de tus senos?',
    '¿Tienes dolor en los senos?',
    '¿Tienes tos persitente?',
    '¿Tienes pérdida de peso?',
    '¿Tienes fatiga?',
    '¿Tienes moretones sin razón aparente?',
    '¿Tienes temblores en las manos?',
    '¿Tienes rigidez muscular?',
    '¿Tienes problemas de equilibrio?',
    '¿Tienes mareos?',
    '¿Tienes falta de aliento?',
    '¿Tienes hinchazón en los tobillos?',
    '¿Tienes dolor abdominal?',
    '¿Tienes diarrea?',
    '¿Tienes convulsiones?',
    '¿Tienes pérdida de consciencia?',
    '¿Tienes dolor en los huesos?',
    '¿Tienes fracturas fáciles?',
    '¿Tienes pérdida de estatura?',
    '¿Tienes la piel roja?',
    '¿Tienes escamas en la piel?',
    '¿Tienes picazón en la piel?'
  ]

  const [valoresRepetidos, setValoresRepetidos] = useState([])
  const [selected, setSelected] = useState(0)
  const [valores, setValores] = useState({ 'fiebre': false, 'tos': false, 'dolorDeCabeza': false, 'dificultadRespiratoria': false, 'sensibilidadALaLuz': false, 'nauseas': false, 'sedExcesiva': false, 'hambreExcesiva': false, 'orinasFrecuentemente': false, 'dolorEnElPecho': false, 'sibilancias': false, 'dolorEnLasArticulaciones': false, 'rigidezEnLasArticulaciones': false, 'inflamacionEnLasArticulaciones': false, 'perdidaDeMemoria': false, 'confusion': false, 'dificultadAlHablar': false, 'bultosEnLosSenos': false, 'cambioEnElTamañoDeLosSenos': false, 'dolorEnLosSenos': false, 'tosPersistente': false, 'perdidaDePeso': false, 'fatiga': false, 'moretonesSinRazonAparente': false, 'tembloresEnLasManos': false, 'rigidezMuscular': false, 'problemasDeEquilibrio': false, 'mareos': false, 'faltaDeAliento': false, 'hinchazonEnLosTobillos': false, 'dolorAbdominal': false, 'diarrea': false, 'convulsiones': false, 'perdidaDeConsciencia': false, 'dolorEnLosHuesos': false, 'fracturasFaciles': false, 'perdidaDeEstatura': false, 'pielRoja': false, 'escamasEnLaPiel': false, 'picazonEnLaPiel': false })

  const handleClickYes = () => {
    let flag = false

    while (!flag) {
      let numeroRandom = Math.floor(Math.random() * sintomas.length)

      if (!valoresRepetidos.includes(numeroRandom)) {
        setSelected(numeroRandom)
        setValoresRepetidos([...valoresRepetidos, numeroRandom])
        setValores({ ...valores, [sintomas[selected]]: true })
        flag = true
      }
    }
  }

  const handleClickNo = () => {
    let flag = false

    while (!flag) {
      let numeroRandom = Math.floor(Math.random() * sintomas.length)

      if (!valoresRepetidos.includes(numeroRandom)) {
        setSelected(numeroRandom)
        setValoresRepetidos([...valoresRepetidos, numeroRandom])
        flag = true
      }
    }
  }

  return (
    <div>
      <h1>¿Cómo podemos ayudarte hoy?</h1>
      {sintomas[selected]}
      <br />
      <button onClick={handleClickYes}>Sí</button>
      <button onClick={handleClickNo}>No</button>
    </div>
  )
}

export default App
