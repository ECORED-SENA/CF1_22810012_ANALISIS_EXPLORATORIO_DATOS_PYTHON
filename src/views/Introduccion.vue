<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info(style="color:#FFF")
      h1 Introducción
    .bloque-texto-a.color-secundario.mb-5(data-aos="fade-left")
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0.px-0.mt-4.mt-lg-0
          figure
            img(src='@/assets/curso/intro/img1.svg', style="width: 300px")
        .col-lg-8.pe-3.pe-lg-4
          .bloque-texto-a__texto.p-4.mb-4.mb-lg-0
            p #[b Bienvenido a este componente formativo denominado “Análisis de datos: el futuro de las organizaciones”, el cual tiene como fin dar a conocer los elementos, metodologías y procedimientos necesarios para llevar a cabo un análisis de datos efectivo dentro de las organizaciones.]
            p Como actividad inicial, se recomienda visitar el recurso didáctico que se propone a continuación:
    figure(data-aos="fade-right")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

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
