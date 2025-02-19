<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Selección del código de soldadura según producto a fabricar

    p(data-aos="fade-down").mb-4 La selección del código de soldadura requerido tiene como referencia el tipo de estructura metálica a soldar. Este proceso asegura la calidad de la soldadura aplicada según las exigencias y requerimientos del producto elaborado, equilibrando las especificaciones de servicio y los estándares aplicados.
      
    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img1.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Identificación del uso
            p.mb-0 Determinar el propósito de la estructura metálica. Ejemplo: para tuberías que transportan petróleo, se utiliza el estándar API 1104.

      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img2.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Selección del documento normativo
            p.mb-0 Definir el código de soldadura y su versión correspondiente.    

      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img3.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Cumplimiento contractual
            p.mb-0 Contratistas y subcontratistas deben garantizar el cumplimiento de las especificaciones establecidas en el código seleccionado, bajo riesgo de sanciones legales.

    p.mb4 Cada proyecto soldado requiere un documento normativo que lo rige, convirtiéndose en un requisito obligatorio.

    Separador 
    #t_1_1.titulo-segundo.color-acento-contenido.mb-4(data-aos="zoom-in-left")
      h2 1.1 Equipos sometidos a presión

    p.mb4 Los equipos sometidos a presión son recipientes que contienen fluidos con presiones internas superiores a la atmosférica, lo que implica riesgos importantes, como explosiones. Estos equipos deben fabricarse según normas específicas que aseguren la seguridad y funcionalidad.

    .row.bg-1.mb-6
      .col-12
        .p-5
          .tarjeta.tarjeta--azul.mb-6(style='background-color: white !important')
            .p-4.p-lg-5
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-6.mb-4.mb-md-0
                    p #[b Calderas] 
                    p Generan vapor mediante transferencia de calor. Existen tres tipos: acuotubular (el agua circula dentro de los tubos), pirotubular (el fuego circula dentro de los tubos) y de fundición seccional.

                  .col-md-4
                    figure
                      img(src='@/assets/curso/temas/tema1/img4.png', alt='Texto que describa la imagen')

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-6.mb-4.mb-md-0.p-6
                    p #[b Recipientes a presión] 
                    p Incluyen equipos que contienen fluidos a alta presión. Ejemplo: tuberías de acero inoxidable utilizadas en la industria cervecera para transportar líquidos. 

                  .col-md-4
                    figure
                      img(src='@/assets/curso/temas/tema1/img5.png', alt='Texto que describa la imagen')

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-6.mb-4.mb-md-0.p-6
                    p #[b Intercambiadores de calor] 
                    p Dispositivos diseñados para transferir calor entre dos medios. Son esenciales en sistemas de calefacción, refrigeración, acondicionamiento de aire, producción de energía y procesos químicos.

                  .col-md-4
                    figure
                      img(src='@/assets/curso/temas/tema1/img6.png', alt='Texto que describa la imagen')

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-6.mb-4.mb-md-0.p-6
                    p #[b Tuberías] 
                    p Conductos diseñados para transportar fluidos o elementos que se comportan como fluidos. Ejemplo: oleoductos para petróleo y gasoductos para gas natural.
                
                  .col-md-4
                    figure
                      img(src='@/assets/curso/temas/tema1/img7.png', alt='Texto que describa la imagen')

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-6.mb-4.mb-md-0.p-6
                    p #[b Barcos] 
                    p Vehículos metálicos diseñados para flotar y avanzar largas distancias, transportando grandes volúmenes de carga o pasajeros.

                  .col-md-4
                    figure
                      img(src='@/assets/curso/temas/tema1/img8.png', alt='Texto que describa la imagen')


    .row.mb-2.ms-0
      .col-auto.bg-c6(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/temas/tema1/icon1.svg', alt='', style='width: 60px')
          .col
            h3.text-white.mb-0(style='color: black !important;') Tanques de almacenamiento

    .row.bg-2.mb-6
      .p-5
        .col-12
        .row.mb-5
          p Los tanques de almacenamiento son recipientes diseñados para contener líquidos o gases de manera segura. Pueden fabricarse con diferentes capacidades y para diversos usos.

          .row
            .col-sm-6.col-lg-6.mb-4.mb-lg-0
              .tarjeta--boton(style='background-color: white !important')
                .row.justify-content-center.mb-3
                  .col-12
                    figure
                      img(src='@/assets/curso/temas/tema1/img9.png', alt='Texto que describa la imagen')

                p.text-center #[b Petróleo y derivados]
                p.text-center.p-4 Recipientes cilíndricos empleados en refinerías para almacenamiento temporal o prolongado de petróleo y sus derivados, con capacidades de hasta 500.000 barriles.

            .col-sm-6.col-lg-6.mb-4.mb-lg-0
              .tarjeta--boton(style='background-color: white !important')
                .row.justify-content-center.mb-3
                  .col-12
                    figure
                      img(src='@/assets/curso/temas/tema1/img10.png', alt='Texto que describa la imagen')

                p.text-center #[b Agua]
                p.text-center.p-4 Tanques cerrados para agua potable, fabricados bajo estándares estrictos para evitar contaminación. Sus capacidades comienzan desde los 5.000 galones.

          
        
    Separador 
    #t_1_2.titulo-segundo.color-acento-contenido.mb-4(data-aos="zoom-in-left")
      h2 1.2 Estructuras

    p.mb4 Las estructuras metálicas son sistemas diseñados para transmitir esfuerzos a través de pilares, vigas o columnas. Estas pueden clasificarse según sus materiales o aplicaciones específicas.

    TabsC.color-acento-contenido.mb-4
      .py-3.py-md-4(titulo="Estáticas" )
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/img11.png', alt='Texto que describa la imagen')
          .col-md-6
            h4 Estáticas
            p Diseñadas para soportar cargas aplicadas lentamente. Ejemplo: estructuras metálicas para edificios, bodegas y centros comerciales.
      .py-3.py-md-4(titulo="En aluminio")
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/img12.png', alt='Texto que describa la imagen')
          .col-md-6
            h4 En aluminio
            p Diseñadas para soportar cargas aplicadas lentamente. Ejemplo: estructuras metálicas para edificios, bodegas y centros comerciales.
      .py-3.py-md-4(titulo="En láminas de acero")
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/img13.png', alt='Texto que describa la imagen')
          .col-md-6
            h4 En láminas de acero
            p Estructuras fabricadas con láminas de acero, ideales para aplicaciones industriales. Ejemplo: chasises de buses como los del sistema Transmilenio.
      .py-3.py-md-4(titulo="Acero de refuerzo")
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/img14.png', alt='Texto que describa la imagen')
          .col-md-6
            h4 Acero de refuerzo
            p Utilizadas en columnas y cimientos. Estas estructuras requieren uniones soldadas de alta calidad realizadas por soldadores calificados.
      .py-3.py-md-4(titulo="Puentes")
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/img15.png', alt='Texto que describa la imagen')
          .col-md-6
            h4 Puentes
            p Construcciones complejas de acero diseñadas para permitir el tránsito de personas y vehículos en zonas con desniveles geográficos.
      .py-3.py-md-4(titulo="Puente grúa")
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/img16.png', alt='Texto que describa la imagen')
          .col-md-6
            h4Puente grúa
            p Estructuras industriales utilizadas para izar y desplazar cargas pesadas. Fabricadas con partes soldadas, sometidas a estrictos estándares normativos.

    .row.mb-2.ms-0
      .col-auto.bg-c6(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/temas/tema1/icon1.svg', alt='', style='width: 60px')
          .col
            h3.text-white.mb-0(style='color: black !important;') Códigos aplicables al diseño y a la soldadura


    p El diseño y la soldadura son procesos esenciales en la fabricación de productos metálicos. Ambos se rigen por normativas específicas que aseguran su seguridad, funcionalidad y economía.

    .row
      .col-sm-6.col-lg-6.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-3
              figure
                img(src='@/assets/curso/temas/tema1/img17.svg', alt='Texto que describa la imagen')
            .col-9
              p #[b Diseño]
              p Determina las cargas máximas que puede soportar una estructura metálica soldada bajo condiciones normales, utilizando ecuaciones matemáticas que modelan su comportamiento.

      .col-sm-6.col-lg-6.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-3
              figure
                img(src='@/assets/curso/temas/tema1/img18.svg', alt='Texto que describa la imagen')
            .col-9
              p #[b Soldadura]
              p Define los procedimientos, calificaciones y parámetros para garantizar la calidad y seguridad de las uniones soldadas según lo establecido en los códigos normativos.


    Separador 
    #t_1_3.titulo-segundo.color-acento-contenido.mb-4(data-aos="zoom-in-left")
      h2 1.3 Documentos normativos utilizados en Colombia

    p.mb4 En Colombia, se emplean normativas internacionales para regular los procesos de diseño y soldadura en estructuras metálicas. A continuación, se presentan los principales documentos:

    .row.bg-c4
      .col-12
        .row.justify-content-center
          .col-lg-3
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/tema1/img19.png", alt="alt").img400.m-auto
          .col-lg-8

            SlyderF.custom.mb-5(columnas="col-lg-6 col-xl-4")
              .tarjeta.tarjeta--slyder.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src="@/assets/curso/temas/tema1/img20.svg", alt="alt").img100.m-auto
                p.text-small.text-center.mb-2.bg-3 #[b AWS D1.1]
                p.text-small.text-center.mb-0 Regula la soldadura de acero al carbono y baja aleación en espesores mayores a 3 mm.

              .tarjeta.tarjeta--slyder.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src="@/assets/curso/temas/tema1/img21.svg", alt="alt").img100.m-auto
                p.text-small.text-center.mb-2.bg-3 #[b AWS D1.2]
                p.text-small.text-center.mb-0 Aplica a la fabricación y erección de estructuras de aluminio, excluyendo tuberías y recipientes a presión.

              .tarjeta.tarjeta--slyder.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src="@/assets/curso/temas/tema1/img22.svg", alt="alt").img100.m-auto
                p.text-small.text-center.mb-2.bg-3 #[b AWS D1.3]
                p.text-small.text-center.mb-0 Regula la soldadura de acero al carbono en espesores menores o iguales a 4.5 mm.

              .tarjeta.tarjeta--slyder.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src="@/assets/curso/temas/tema1/img23.svg", alt="alt").img100.m-auto
                p.text-small.text-center.mb-2.bg-3 #[b AWS D1.4]
                p.text-small.text-center.mb-0 Establece normas para la soldadura de acero de refuerzo en combinación con aceros al carbono o baja aleación.

              .tarjeta.tarjeta--slyder.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src="@/assets/curso/temas/tema1/img24.svg", alt="alt").img100.m-auto
                p.text-small.text-center.mb-2.bg-3 #[b AASHTO/AWS D1.5]
                p.text-small.text-center.mb-0 Normativa para la fabricación de componentes de puentes, excluyendo aceros con resistencia a la fluencia superior a 690 MPa y espesores menores a 3 mm.

              .tarjeta.tarjeta--slyder.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src="@/assets/curso/temas/tema1/img24.svg", alt="alt").img100.m-auto
                p.text-small.text-center.mb-2.bg-3 #[b AWS D1.6]
                p.text-small.text-center.mb-0 Cubre soldaduras de aceros inoxidables y combinaciones con aceros al carbono, incluyendo perfiles estructurales y láminas roladas en frío.
                
              .tarjeta.tarjeta--slyder.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src="@/assets/curso/temas/tema1/img24.svg", alt="alt").img100.m-auto
                p.text-small.text-center.mb-2.bg-3 #[b BPVC - ASME]
                p.text-small.text-center.mb-0 Incluye requisitos para la calificación de soldadores en la construcción de calderas y recipientes a presión.
                
              .tarjeta.tarjeta--slyder.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src="@/assets/curso/temas/tema1/img24.svg", alt="alt").img100.m-auto
                p.text-small.text-center.mb-2.bg-3 #[b ASME B31.1 y B31.3]
                p.text-small.text-center.mb-0 Regula soldaduras en tuberías para generación de potencia y procesos químicos.
                
              .tarjeta.tarjeta--slyder.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src="@/assets/curso/temas/tema1/img24.svg", alt="alt").img100.m-auto
                p.text-small.text-center.mb-2.bg-3 #[b API 650 y API 1104]
                p.text-small.text-center.mb-0 Define estándares para tanques de almacenamiento y soldadura en oleoductos.
                
              .tarjeta.tarjeta--slyder.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src="@/assets/curso/temas/tema1/img24.svg", alt="alt").img100.m-auto
                p.text-small.text-center.mb-2.bg-3 #[b AWS A2.4 y AWS A5]
                p.text-small.text-center.mb-0 Detalla símbolos para representar uniones soldadas y especificaciones de electrodos.

 
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
