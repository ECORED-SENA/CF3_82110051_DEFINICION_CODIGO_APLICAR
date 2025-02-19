<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Identificar  los códigos de soldadura, tipos de estructuras metálicas, equipos sometidos a presión, tanques de almacenamiento y normativas aplicadas en Colombia.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el objetivo principal de la selección del código de soldadura?',
          imagen: require('@/assets/curso/temas/actividad/img1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Garantizar el diseño estético de la estructura metálica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Asegurar la calidad de la soldadura según los requerimientos del producto.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'BerOptimizar el tiempo de fabricación de los proyectos.lín',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Simplificar el proceso de selección de materiales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Qué institución emite el estándar API 1104?',
          imagen: require('@/assets/curso/temas/actividad/img2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'American Welding Society (AWS).',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Asociación de Normas de Ingeniería Mecánica.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Instituto Americano del Petróleo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Organización Internacional de Normalización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué tipo de caldera permite que el agua circule dentro de los tubos?',
          imagen: require('@/assets/curso/temas/actividad/img3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Pirotubular.', esCorrecta: false },
            { id: 'b', texto: 'De fundición seccional.', esCorrecta: false },
            { id: 'c', texto: 'Mixta.', esCorrecta: false },
            { id: 'd', texto: 'Acuotubular.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál de los siguientes no es un uso de los tanques de almacenamiento?',
          imagen: require('@/assets/curso/temas/actividad/img4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Almacenamiento temporal de derivados del petróleo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Almacenamiento de gases a presión ambiente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Generación de energía eléctrica.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Almacenamiento de agua potable.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué tipo de estructura destaca por su bajo peso y facilidad de manejo?',
          imagen: require('@/assets/curso/temas/actividad/img1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Estructuras en láminas de acero.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'EspEstructuras en aluminio.añol',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Estructuras estáticas.', esCorrecta: true },
            {
              id: 'd',
              texto: 'Estructuras de acero de refuerzo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es la norma aplicable para soldaduras de acero al carbono con espesores mayores a 3 mm?',
          imagen: require('@/assets/curso/temas/actividad/img2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'AWS D1.1.', esCorrecta: true },
            { id: 'b', texto: 'AWS D1.4.', esCorrecta: false },
            { id: 'c', texto: 'AWS D1.3.', esCorrecta: false },
            {
              id: 'd',
              texto: 'ASME B31.1.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué material es típico en recipientes a presión para la industria cervecera?',
          imagen: require('@/assets/curso/temas/actividad/img3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Acero al carbono.', esCorrecta: false },
            { id: 'b', texto: 'Acero inoxidable.', esCorrecta: true },
            { id: 'c', texto: 'Aleaciones de aluminio.', esCorrecta: false },
            { id: 'd', texto: 'Fundición de hierro.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué tipo de puente se utiliza para izar y mover cargas en fábricas?',
          imagen: require('@/assets/curso/temas/actividad/img4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Puente de concreto armado.', esCorrecta: false },
            { id: 'b', texto: 'Puente grúa.', esCorrecta: true },
            { id: 'c', texto: 'Puente colgante.', esCorrecta: false },
            { id: 'd', texto: 'Puente reforzado.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'El código BPVC-ASME regula la construcción de recipientes a presión y calderas.',
          imagen: require('@/assets/curso/temas/actividad/img1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero.', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            'Las estructuras metálicas estáticas soportan cargas aplicadas rápidamente.',
          imagen: require('@/assets/curso/temas/actividad/img2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero.', esCorrecta: false },
            { id: 'b', texto: 'Falso.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Qué tipo de intercambiador de calor es esencial en procesos de producción de energía?',
          imagen: require('@/assets/curso/temas/actividad/img3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Intercambiador de tubería flexible.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Intercambiador de presión directa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Intercambiador de calor estándar.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Intercambiador de contacto químico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Cuál es una característica de las estructuras en láminas de acero?',
          imagen: require('@/assets/curso/temas/actividad/img4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'No soportan esfuerzos de tracción ni compresión.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Son utilizadas exclusivamente en puentes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Pueden transmitir calor, corriente eléctrica y esfuerzos mecánicos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'No son resistentes a condiciones industriales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: '¿Qué define el código AWS D1.4?',
          imagen: require('@/assets/curso/temas/actividad/img1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Soldadura de aluminio estructural.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Soldadura de acero de refuerzo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Soldadura de acero de refuerzo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Soldadura de tuberías para procesos químicos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: '¿Qué especifica el código ASME B31.3?',
          imagen: require('@/assets/curso/temas/actividad/img2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Soldadura en tuberías para procesos químicos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Diseño de recipientes a presión.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Procedimientos para soldadura en oleoductos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Fabricación de estructuras de aluminio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            '¿Qué material se utiliza comúnmente en las varillas de acero embebidas en concreto para refuerzo?',
          imagen: require('@/assets/curso/temas/actividad/img3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Acero inoxidable.', esCorrecta: false },
            { id: 'b', texto: 'Acero de refuerzo soldado.', esCorrecta: true },
            { id: 'c', texto: 'Aluminio de alta densidad.', esCorrecta: false },
            { id: 'd', texto: 'Aluminio de alta densidad.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
