import React from 'react'
import { Feelings } from './components/Feelings'
import { Advices } from './components/Advices'

function App() {
  const tristeInfo = [
    {
        numero: 1,
        consejo: "No es lo que tienes o quién eres o dónde estás o qué haces lo que te hace feliz o infeliz. Es lo que piensas sobre ello."
    },
    {
        numero: 2,
        consejo: "Levanta tu frente ante los demás, solo miran hacia abajo los que temen caer y los que ocultan algo"
    },
    {
        numero: 3,
        consejo: "Ve con confianza en la dirección de tus sueños. Vive la vida como la has imaginado"
    },
    {
        numero: 4,
        consejo: "Nadie, recuérdalo bien, nadie es indispensable en nuestras vidas. Probablemente en estos momentos pienses que nada volverá a ser lo mismo en tu vida. Créeme que, cuando menos lo esperes, encontrarás a alguien mucho mejor que él"
    },
    {
        numero: 5,
        consejo: "Utiliza tu imaginación, no para asustarte, sino para inspirarte a lograr lo inimaginable"
    },
    {
        numero: 6,
        consejo: "Una sonrisa es una forma económica de mejorar tu apariencia"
    },
    {
        numero: 7,
        consejo: "Las cometas se elevan contra y no a favor del viento"
    },
    {
        numero: 8,
        consejo: " Un viaje de diez mil kilómetros empieza por un solo paso."
    },
    {
        numero: 9,
        consejo: " Después de cada tormenta sonríe el sol; para cada problema hay una solución y el deber irrenunciable del alma es estar de buen ánimo"
    },
    {
        numero: 10,
        consejo: " Una actitud positiva te da poder sobre tus circunstancias en lugar de que tus circunstancias tengan poder sobre ti"
    },
    {
        numero: 11,
        consejo: "Cuanto más violenta es una tormenta, más rápido pasa"
    },
    {
        numero: 12,
        consejo: " Para mí la vida tampoco ha sido fácil, y sé cómo te sientes. Pero ahora estoy bien, porque he luchado por mis sueños y he seguido fiel a mi corazón"
    },
    {
        numero: 13,
        consejo: "La primera receta para la felicidad: evita meditar largamente en el pasado"
    },
    {
        numero: 14,
        consejo: "No hay árbol que el viento no haya sacudido"
    },
    {
        numero: 15,
        consejo: "Tu grandeza no se revela por las luces que te llegan, sino por la luz que sale de tu alma"
    },
  ]
  const felizInfo = [
    {
    numero: 1,
    consejo: "Las cosas son bellas si se las ama",
    },
    {
        numero: 2,
        consejo: "Hay una sola forma de felicidad en la vida: amar y ser amado",
    },
    {
        numero: 3,
        consejo: "Aquellos que quieren cantar siempre encuentran una canción",
    },
    {
        numero: 4,
        consejo: "Cuando eres fiel a ti mismo en lo que haces, cosas fascinantes ocurren",
    },
    {
        numero: 5,
        consejo: "La belleza es poder, y una sonrisa es su espada",
    },
    {
        numero: 6,
        consejo: "La felicidad es la finalidad última de la existencia humana",
    },
    {
        numero: 7,
        consejo: "La felicidad está hecha para ser compartida",
    },
    {
        numero: 8,
        consejo: "El propósito de nuestras vidas es ser felices",
    },
    {
        numero: 9,
        consejo: " La vida es o una gran aventura o nada",
    },
    {
        numero: 10,
        consejo: " El secreto para tener felicidad es tener algo que hacer",
    },
    {
        numero: 11,
        consejo: "Puedes ser feliz allí donde estés",
    },
    {
        numero: 12,
        consejo: "Hay felicidad en el deber, aunque no lo parezca",
    },
    {
        numero: 13,
        consejo: "La felicidad no es algo que se pospone, sino algo que se diseña para el presente",
    },
    {
        numero: 14,
        consejo: "La alegría reside en la alegría del logro y en la emoción del esfuerzo creativo",
    },
    {
        numero: 15,
        consejo: "Cada vez que una puerta a la felicidad se cierra, inmediatamente se abre otra",
    },
  ]
  const enojoInfo = [
    {
        numero: 1,
        consejo: "El enojo es un ácido que puede hacer más daño al recipiente en el que se almacena que a cualquier cosa en la que se vierte."
    },
    {
        numero: 2,
        consejo: "La espada más aguda es una palabra pronunciada con enojo."
    },
    {
        numero: 3,
        consejo: "El enojo te hace más pequeño, mientras que el perdón te obliga a crecer más allá de lo que eres."
    },
    {
        numero: 4,
        consejo: "Lo que empieza en enojo termina en vergüenza"
    },
    {
        numero: 5,
        consejo: "El enojo nunca aparece sin razón, pero rara vez aparece con una buena."
    },
    {
        numero: 6,
        consejo: "No te aferres al enojo, daño o dolor. Roban tu energía y te alejan del amor."
    },
    {
        numero: 7,
        consejo: "Es sabio dirigir el enojo hacia los problemas, no hacia la gente. Para concentrar tus energías en respuestas, no en excusas."
    },
    {
        numero: 8,
        consejo: "Cuánto más graves son las consecuencias del enojo que las causas del mismo."
    },
    {
        numero: 9,
        consejo: "Cuando aprietas el puño, nadie puede poner nada en tu mano, ni tu mano puede recoger nada."
    },
    {
        numero: 10,
        consejo: "La amargura es como el cáncer. Se come al anfitrión. Pero el enojo es como el fuego. Quema todo hasta dejarlo en cenizas"
    },
    {
        numero: 11,
        consejo: "El mejor guerrero nunca está enojado"
    },
    {
        numero: 12,
        consejo: "El enojo es una locura breve"
    },
    {
        numero: 13,
        consejo: "Un corazón lleno de enojo no tiene espacio para el amor"
    },
    {
        numero: 14,
        consejo: "El enojo hace ingeniosos a los hombres aburridos, pero los mantiene pobres"
    },
    {
        numero: 15,
        consejo: "Un necio da plena libertad a su enojo, pero un hombre sabio se mantiene bajo control"
    },
  ]
  const enamoradoInfo = [
    {
        numero: 1,
        consejo: "Que te pese siempre más la felicidad que la historia"
    },
    {
        numero: 2,
        consejo: "Las relaciones deberían ser fáciles: las cosas complicadas desde el principio jamás terminan de funcionar"
    },
    {
        numero: 3,
        consejo: "Quédate con quien consigue que seas mejor, no con quien te hace pequeña"
    },
    {
        numero: 4,
        consejo: "No basta con querer a alguien: en la balanza lo bueno tiene que superar a lo malo"
    },
    {
        numero: 5,
        consejo: "Si alguien quiere dedicarte tiempo, tendrá un momento para hacerlo"
    },
    {
        numero: 6,
        consejo: "No todas las relaciones están destinadas a durar y eso está bien"
    },
    {
        numero: 7,
        consejo: " Siempre conquista a tu pareja todos los días, es importante mantener encendida la llama del amor."
    },
    {
        numero: 8,
        consejo: " Nunca intentes olvidar al amor de tu vida involucrándote con otra persona."
    },
    {
        numero: 9,
        consejo: " Nunca podrás amar correctamente a alguien si no comienzas por amarte a ti misma primero."
    },
    {
        numero: 10,
        consejo: "En este mundo no puedes elegir si te harán daño, pero sí tienes la posibilidad de elegir quién será el culpable."
    },
    {
        numero: 11,
        consejo: "No te sientas mal estando soltera, valora el tiempo contigo misma, eso es lo que te hará ser mejor."
    },
    {
        numero: 12,
        consejo: "No te conformes con una relación que te haga sentir bien, procura tener una relación que te haga feliz."
    },
    {
        numero: 13,
        consejo: "No te enamores sólo de la apariencia física de alguien, dedícate a explorar su personalidad."
    },
    {
        numero: 14,
        consejo: "No esperes cambiar a tu pareja, ayúdale a mejorar, eso demuestra mucho más amor."
    },
    {
        numero: 15,
        consejo: "No te conviertas en tu pareja, ten tu individualidad y valora tu tiempo a solas. Permítele extrañarte un poco."
    },
  ]
  const confundidoInfo = [
    {
        numero: 1,
        consejo: "Es muy bueno estar confundido. La confusión es de donde viene la inspiración"
    },
    {
        numero: 2,
        consejo: "No tengas miedo de confundirte. Todo es posible"
    },
    {
        numero: 3,
        consejo: "Nunca escondas cosas de pensadores incondicionales. Se vuelven más agravados, más provocados por la confusión que las verdades más dolorosas"
    },
    {
        numero: 4,
        consejo: "Lo más confuso que te sentirás es cuando tratas de convencer a tu corazón y espíritu de algo que tu mente sabe que es una mentira"
    },
    {
        numero: 5,
        consejo: "La confusión es un lujo que solo los muy, muy jóvenes pueden permitirse y ya no eres tan joven"
    },
    {
        numero: 6,
        consejo: "No sé a qué se refiere con eso, pero asiento y le sonrío. Te sorprendería lo lejos que puede llegar esa respuesta en una conversación en la que estás completamente confundido"
    },
    {
        numero: 7,
        consejo: "Los tiempos de gran calamidad y confusión han sido productivos para las mentes más grandes. El mineral más puro se produce del horno más caliente. El rayo más brillante se obtiene de la tormenta más oscura"
    },
    {
        numero: 8,
        consejo: "Con gran poder a menudo viene una gran confusión"
    },
    {
        numero: 9,
        consejo: "Es probable que haya turbulencias en las nubes de confusión antes de que uno pueda ver los cielos amigables y una pista de aterrizaje iluminada"
    },
    {
        numero: 10,
        consejo: "Para aquellos que te confunden, reconoce que su confusión es suya y tu claridad es tuya"
    },
    {
        numero: 11,
        consejo: "Es sorprendente cuán confundidas, distraídas y mal dirigidas están tanta gente"
    },
    {
        numero: 12,
        consejo: "Creo que algunas personas ni siquiera saben de qué están hablando, y simplemente comienzan a hablar con una opinión, sin hacer preguntas"
    },
    {
        numero: 13,
        consejo: "La historia y la experiencia nos dicen que el progreso moral no se produce en tiempos cómodos y complacientes, sino fuera de juicio y cuando estamos confundidos"
    },
    {
        numero: 14,
        consejo: "La verdad surge más fácilmente del error que de la confusión"
    },
    {
        numero: 15,
        consejo: "Su intelecto puede estar confundido, pero sus emociones nunca le mentirán"
    },
  ]
  const [triste, setTriste] = React.useState(false)
  const [enojado, setEnojado] = React.useState(false)
  const [enamorado, setEnamorado] = React.useState(false)
  const [confundido, setConfundido] = React.useState(false)
  const [feliz, setFeliz] = React.useState(false)

  const titulo = document.getElementById("parrafo-titulo")
  const parrafo = document.getElementById("parrafo")    

  const onTriste = () => {
    let random = parseInt(Math.random()*tristeInfo.length)
    titulo.innerText = `Consejo # ${tristeInfo[random].numero}`
    parrafo.innerText = tristeInfo[random].consejo
  }
  const onEnojado = () => {
    let random = parseInt(Math.random()*enojoInfo.length)
    titulo.innerText = `Consejo # ${enojoInfo[random].numero}`
    parrafo.innerText = enojoInfo[random].consejo
  }
  const onEnamorado = () => {
    let random = parseInt(Math.random()*enamoradoInfo.length)
    titulo.innerText = `Consejo # ${enamoradoInfo[random].numero}`
    parrafo.innerText = enamoradoInfo[random].consejo
  }
  const onConfundido = () => {
    let random = parseInt(Math.random()*confundidoInfo.length)
    titulo.innerText = `Consejo # ${confundidoInfo[random].numero}`
    parrafo.innerText = confundidoInfo[random].consejo
  }
  const onFeliz = () => {
    let random = parseInt(Math.random()*felizInfo.length)
    titulo.innerText = `Consejo # ${felizInfo[random].numero}`
    parrafo.innerText = felizInfo[random].consejo
  }
  return (
      <React.Fragment>
        <Feelings 
        triste={triste}
        enojado={enojado}
        enamorado={enamorado}
        confundido={confundido}
        feliz={feliz}
        setTriste={setTriste}
        setEnojado={setEnojado}
        setEnamorado={setEnamorado}
        setConfundido={setConfundido}
        setFeliz={setFeliz}
        />
        <Advices
        triste={triste}
        enojado={enojado}
        enamorado={enamorado}
        confundido={confundido}
        feliz={feliz}

        onTriste={onTriste}
        onEnojado={onEnojado}
        onEnamorado={onEnamorado}
        onConfundido={onConfundido}
        onFeliz={onFeliz}

        />
      </React.Fragment>
  );
}

export default App;
