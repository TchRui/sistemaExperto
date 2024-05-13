window.onload = () => {
  const neuronalNetwork = new brain.NeuralNetwork();

  const data = [
    {
      input:
      {
        "fiebre": 1,
        "tos": 1,
        "dolorDeCabeza": 0
      },
      output: { "gripe": 1 }
    },
    {
      input: {
        "fiebre": 1,
        "tos": 1,
        "dificultadRespiratoria": 1
      },
      output: { "COVID-19": 1 }
    },
    {
      input: {
        "dolorDeCabeza": 1,
        "sensibilidadLuz": 1,
        "nauseas": 1
      },
      output: { "migrana": 1 }
    },
    {
      input: {
        "sedExcesiva": 1,
        "hambreExcesiva": 1,
        "orinaFrecuente": 1
      },
      output: { "diabetes": 1 }
    },
    {
      input: {
        "dolorCabeza": 1,
        "dificultadRespirar": 1,
        "dolorPecho": 1
      },
      output: { "hipertension": 1 }
    },
    {
      input: {
        "tos": 1,
        "dificultadRespirar": 1,
        "sibilancias": 1
      },
      output: { "asma": 1 }
    },
    {
      input: {
        "dolorArticulaciones": 1,
        "rigidezArticulaciones": 1,
        "inflamacionArticulaciones": 1
      },
      output: { "artritis": 1 }
    },
    {
      input: {
        "perdidaMemoria": 1,
        "confusion": 1,
        "dificultadHablar": 1
      },
      output: { "enfermedadDeAlzheimer": 1 }
    },
    {
      input: {
        "bultoSenos": 1,
        "cambioTamañoSenos": 1,
        "dolorSenos": 1
      },
      output: { "cancerDeMama": 1 }
    },
    {
      input: {
        "tosPersistente": 1,
        "dolorPecho": 1,
        "perdidaPeso": 1
      },
      output: { "cancerDePulmon": 1 }
    },
    {
      input: {
        "fatiga": 1,
        "moretonesFaciles": 1,
        "perdidaPeso": 1
      },
      output: { "leucemia": 1 }
    },
    {
      input: {
        "temblorManos": 1,
        "rigidezMuscular": 1,
        "problemasEquilibrio": 1
      },
      output: { "enfermedadDeParkinson": 1 }
    },
    {
      input: {
        "fatiga": 1,
        "dificultadHablar": 1,
        "mareos": 1
      },
      output: { "esclerosisMultiple": 1 }
    },
    {
      input: {
        "dolorPecho": 1,
        "faltaAliento": 1,
        "fatiga": 1
      },
      output: { "enfermedadDelCorazon": 1 }
    },
    {
      input: {
        "orinaFrecuente": 1,
        "hinchazonTobillos": 1,
        "fatiga": 1
      },
      output: { "enfermedadRenalCronica": 1 }
    },
    {
      input: {
        "fatiga": 1,
        "dolorAbdominal": 1,
        "perdidaPeso": 1
      },
      output: { "hepatitis": 1 }
    },
    {
      input: {
        "dolorAbdominal": 1,
        "diarrea": 1,
        "perdidaPeso": 1
      },
      output: { "enfermedadDeCrohn": 1 }
    },
    {
      input: {
        "convulsiones": 1,
        "perdidaConsciencia": 1,
        "confusion": 1
      },
      output: { "epilepsia": 1 }
    },
    {
      input: {
        "dolorHuesos": 1,
        "fracturasFaciles": 1,
        "perdidaEstatura": 1
      },
      output: { "osteoporosis": 1 }
    },
    {
      input: {
        "pielRoja": 1,
        "escamasPiel": 1,
        "picazon": 1
      },
      output: { "psoriasis": 1 }
    }
  ];

  neuronalNetwork.train(data);

  const btnExecute = document.getElementById('execute');
  btnExecute.addEventListener('click', () => {
    
    let results = brain.likely({ "fiebre": fiebre, "tos": tos, "dolorDeCabeza": dolorDeCabeza }, neuronalNetwork);
    document.getElementById('result').innerHTML = results;
  });
}
