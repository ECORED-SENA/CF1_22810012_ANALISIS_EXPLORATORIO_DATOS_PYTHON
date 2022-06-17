<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span(style="color: #FFF") 3
      h1 Identificación de problemas y oportunidades de negocio
    .row.bg-color21.mb-5
      .col-12.px-5.mb-4
        .row.align-items-center.mb-5
          .col-lg-5.mb-4.mb-lg-0
            figure(data-aos="fade-left")
              img(src='@/assets/curso/tema3/img1.png', style="width: 550px").m-auto
          .col-lg-7
            .row.align-items-center.mb-4
              .col-auto
                figure
                  img(src='@/assets/curso/tema3/img1.svg')
              .col
                p.mb-0 Para comenzar con el análisis de datos exploratorio es primordial, primero, conocer el negocio o la organización para la cual se está desarrollando el análisis, además, deben ser muy claros los objetivos, requerimientos y metas de la compañía.
            .estilo1(data-aos="fade-right")
              .cajon.color-secundario.p-4.mb-4
                p.mb-0 #[b Design Thinking es una metodología que utiliza herramientas creativas para identificar las necesidades y requerimientos de los usuarios o de los clientes y, desde allí, desarrollar ideas innovadoras para lograr satisfacerlas.]
            .row(data-aos="fade-up")
              .col-auto.p-2.bg-color20.rounded
                p.mb-0.text-white #[b Fases del Design Thinking]
        .row.justify-content-center
          .col-lg-10(data-aos="fade-right")
            .row.justify-content-center
              .col-10.col-lg.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/tema3/img2.svg', style="width: 350px").m-auto
              .col-10.col-lg.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/tema3/img3.svg', style="width: 350px").m-auto
              .col-10.col-lg.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/tema3/img4.svg', style="width: 350px").m-auto
              .col-10.col-lg.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/tema3/img5.svg', style="width: 350px").m-auto
              .col-10.col-lg.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/tema3/img6.svg', style="width: 350px").m-auto
    .row.align-items-center.mb-5
      .col-lg-7.mb-4.mb-lg-0
        LineaTiempoD.color-secundario
          .row(numero="1" titulo="Empatizar")
            .col-12
              p Cuando se empatiza lo que se quiere es tratar de estar en la misma situación de la otra persona, tratar de entender su situación, de pensar y sentir como esa persona lo haría.
              .row.align-items-center
                .col-lg-9.mb-4.mb-lg-0
                  .cajon.color-secundario.p-4
                    p.mb-0 #[b Ejercicio reflexivo]
                    p.mb-0 Haga de cuenta que se tiene una tienda de café, se intenta saber qué piensan los clientes o potenciales clientes al visitar el sitio, qué les llama la atención de visitar su tienda y no otra: puede ser el precio, la atención, la calidad del producto, el lugar en donde está situado, el ambiente que allí se disfruta.
                .col-lg-3
                  figure
                    img(src='@/assets/curso/tema3/img8.svg', style="width: 190px").m-auto
          .row(numero="2" titulo="Definir")
            .col-12
              p En la etapa de definir, lo que se quiere es depurar toda esa información recopilada al momento de empatizar y quedarse con lo que realmente tiene un valor significativo.
              .row.align-items-center.mb-4
                .col-lg-9.mb-4.mb-lg-0
                  .cajon.color-secundario.p-4
                    p.mb-0 #[b Ejercicio reflexivo]
                    p ¿La edad de las personas influye en la tienda de café?
                    p.mb-0 ¿La calidad de atención a la clientela, es lo que se considera de mayor valor intangible en su negocio?
                .col-lg-3
                  figure
                    img(src='@/assets/curso/tema3/img9.svg', style="width: 190px").m-auto
              p Cada negocio realiza sus juicios de valor y dará mayor importancia a esas variables que van encaminadas con los objetivos y metas del negocio.
          .row(numero="3" titulo="Idear")
            .col-12
              p En la etapa de ideación se deben contemplar todas las posibilidades que se tienen y plantear soluciones a los problemas identificados, por absurda que parezca la idea no se debe dejar de plantearla, pues las ideas más locas pueden terminar en cambios significativamente positivos para la compañía.
              .row.align-items-center
                .col-lg-9.mb-4.mb-lg-0
                  .cajon.color-secundario.p-4
                    p.mb-0 #[b Ejercicio reflexivo]
                    p.mb-0 Es un valor agregado que, en la tienda de café, los clientes puedan moler y llevar a preparación la bebida que van a consumir.
                .col-lg-3
                  figure
                    img(src='@/assets/curso/tema3/img10.svg', style="width: 170px").m-auto
          .row(numero="4" titulo="Prototipo")
            .col-12
              p Realice un prototipo de lo que considera sería una solución a su problema, no debe ser nada elaborado, incluso si tiene a mano lápiz y papel proceda a plasmar todas las ideas que tenga en mente.
              .row.align-items-center
                .col-lg-9.mb-4.mb-lg-0
                  .cajon.color-secundario.p-4
                    p.mb-0 #[b Ejercicio reflexivo]
                    p.mb-0 Los clientes del negocio, ¿disfrutan la preparación de producto, tanto para ellos mismos como para otros clientes?
                .col-lg-3
                  figure
                    img(src='@/assets/curso/tema3/img11.svg', style="width: 170px").m-auto
      .col-lg-5
        figure(data-aos="fade-left")
          img(src='@/assets/curso/tema3/img2.png', style="width: 450px").m-auto
    p.mb-5 Para la etapa de empatía se puede hacer uso de la herramienta denominada mapa de empatía la cual ayuda a identificar las posibles variables que afectan el negocio. El siguiente recurso educativo permite visualizar cómo se puede aplicar dicha herramienta:
    .row.mb-5(data-aos="fade-up")
      .col-auto.bg-color22
        .p-2
          p.mb-0.text-white #[b Siguiendo con el ejemplo, se plantea un arquetipo correspondiente a un cliente de la tienda de café; haga clic en cada botón para conocerlo:]
    .row.align-items-center.mb-5
      .col-lg-5.mb-4.mb-lg-0
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema3/img3.png', style="width: 550px").m-auto
      .col-lg-7
        .tarjeta
          SlyderA(tipo="b").bg-color10
            .row.justify-content-center.bg-color23
              .col-12.col-lg-10.p-3
                h4 ¿Qué piensa y siente?
                ul.ms-4
                  li 
                    i.fas.fa-caret-right(style="color: #1A6FC1")
                    |  El café debe ser de excelente calidad.
                  li 
                    i.fas.fa-caret-right(style="color: #1A6FC1")
                    |  La atención es más importante que el precio.
                  li 
                    i.fas.fa-caret-right(style="color: #1A6FC1")
                    |  El café es la mejor excusa para compartir.
            .row.justify-content-center.bg-color24
              .col-12.col-lg-10.p-3
                h4 ¿Qué escucha?
                ul.ms-4
                  li 
                    i.fas.fa-caret-right(style="color: #1A6FC1")
                    |  La cafetería tiene muy buen café.
                  li 
                    i.fas.fa-caret-right(style="color: #1A6FC1")
                    |  El servicio no es el mejor.
                  li 
                    i.fas.fa-caret-right(style="color: #1A6FC1")
                    |  El sitio es agradable.
            .row.justify-content-center.bg-color25
              .col-12.col-lg-10.p-3
                h4 ¿Qué habla y hace?
                ul.ms-4
                  li 
                    i.fas.fa-caret-right(style="color: #1A6FC1")
                    |  Invita amigos a la cafetería, pero no es periódico como le gustaría.
                  li 
                    i.fas.fa-caret-right(style="color: #1A6FC1")
                    |  Realiza sugerencias para mejorar la atención.
            .row.justify-content-center.bg-color26
              .col-12.col-lg-10.p-3
                h4 ¿Qué ve?
                ul.ms-4
                  li 
                    i.fas.fa-caret-right(style="color: #1A6FC1")
                    |  Buenos comentarios.
                  li 
                    i.fas.fa-caret-right(style="color: #1A6FC1")
                    |  Instalaciones pequeñas.
                  li 
                    i.fas.fa-caret-right(style="color: #1A6FC1")
                    |  Acumulación de personas.
            .row.justify-content-center.bg-color27
              .col-12.col-lg-10.p-3
                h4 ¿Cuáles son sus dolores?
                ul.ms-4
                  li 
                    i.fas.fa-caret-right(style="color: #1A6FC1")
                    |  Mal servicio.
                  li 
                    i.fas.fa-caret-right(style="color: #1A6FC1")
                    |  Instalaciones pequeñas.
                br
            .row.justify-content-center.bg-color28
              .col-12.col-lg-10.p-3
                h4 ¿Cuáles son sus dolores?
                ul.ms-4
                  li 
                    i.fas.fa-caret-right(style="color: #1A6FC1")
                    |  Atención de calidad, le gusta sentirse bien atendido.
                  li 
                    i.fas.fa-caret-right(style="color: #1A6FC1")
                    |  Contar con un espacio agradable para compartir.
                br
    .row.bg-color29
      .col-12.px-5
        .cajon.color-primario.p-4.mb-5
          p.mb-0 Cada negocio tendrá su estrategia para la recopilación de los datos que le permitan realizar cuadros de empatía, la generación de dolores y necesidades de sus actuales o futuros clientes.
        .row.align-items-center.mb-5
          .col-lg-8.mb-4.mb-lg-0
            p Anteriormente se vio que el paso a seguir debe ser idear las posibles soluciones y crear prototipos que propendan con la puesta en marcha de planes de mejoramiento.
            .row.align-items-center.justify-content-center
              .col-auto
                figure
                  img(src='@/assets/curso/tema3/img18.svg')
              .col-lg-9
                p.mb-0 Siguiendo el ejemplo anterior, el negocio de café tendrá que poner mucha atención a dos factores que pueden estar afectando significativamente el negocio como:
          .col-lg-4
            figure(data-aos="fade-left")
              img(src='@/assets/curso/tema3/img19.svg', style="width: 350px").m-auto
        .bloque-texto-a.color-primario.p-4.p-lg-5(data-aos="fade-right")
          .row.m-0.align-items-center.justify-content-between
            .col-12
              .bloque-texto-a__texto.p-4
                p.mb-0 Por ende, se tendrá que realizar un análisis para validar si estas dos variables están ligadas y una desencadena en la otra, estos análisis se pueden determinar mediante un análisis observatorio de los datos y algunos cálculos estadísticos, o se pueden implementar modelos más complejos cuando la relación entre variables no es fácil de detectar.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
