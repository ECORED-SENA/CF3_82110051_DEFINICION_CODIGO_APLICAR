<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row
      .col-lg-7.mb-4.mb-lg-0(data-aos="zoom-in" style="place-self:center;")
        .p-4(style="background-color:#D4F1E0;border-radius:12px;")
          .row.align-items-center
            .col-md-auto.mb-2.mb-md-0
              figure
                img(src="@/assets/curso/intro2.svg", style="width: 100px").m-auto
            .col
              p.mb-0 La implementación de códigos de soldadura es esencial en proyectos metálicos, ya que garantizan la seguridad, calidad y funcionalidad de las estructuras y equipos. Estos códigos establecen los criterios necesarios para el diseño de uniones, el cálculo estructural y la inspección de soldaduras, asegurando un equilibrio entre requisitos técnicos y normativos.
        
        p.mt-4 En Colombia, los códigos más utilizados provienen de organismos internacionales como AWS y ASME. Su aplicación es obligatoria al ser definidos como parte de los contratos, comprometiendo tanto a fabricantes como a interventores a cumplir estrictamente sus especificaciones. Esto permite proteger la integridad humana, patrimonial y ambiental.
      
      .col-lg-4(data-aos="fade-left" data-aos-delay="600" data-aos-offset="300" data-aos-easing="ease-in-sine")
        figure.m-auto.col-10.col-md-8.col-lg-12
          img(src="@/assets/curso/intro1.png")

      p.mt-2 La selección y cumplimiento de un código adecuado depende del tipo de proyecto y sus necesidades específicas. Desde estructuras estáticas hasta equipos sometidos a presión, los estándares proporcionan directrices claras para procesos de diseño, fabricación y soldadura, optimizando resultados y previniendo riesgos.
    

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
