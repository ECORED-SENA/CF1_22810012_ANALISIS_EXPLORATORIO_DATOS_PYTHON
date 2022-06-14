<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span(style="color: #FFF") 1
      h1 Importancia del análisis exploratorio de datos
    .row.bg-color2.mb-4
      .col-12
        .row.align-items-center.mb-5
          .col-lg-3.px-0.mb-4.mb-lg-0
            figure(data-aos="fade-left")
              img(src='@/assets/curso/tema1/img1.png', style="width: 300px")
          .col-lg-9.px-5
            p Para comenzar es necesario recalcar que en la actualidad los datos se han convertido en el activo más importante para cualquier tipo de organización (grande, mediana, pequeña), pues su análisis es fundamental en la toma de decisiones estratégicas que beneficien a todos los implicados:
            .row.mb-4
              .col-auto
                figure
                  img(src='@/assets/curso/tema1/img1.svg')
              .col
                p.mb-0 El análisis de datos es un elemento fundamental para la gestión estratégica empresarial.
            .cajon.color-primario.p-4(data-aos="fade-right")
              p.mb-0 Para conocer algunas de las razones por la cuales el análisis de datos resulta indispensable para el éxito de las organizaciones, se invita a revisar con atención el siguiente recurso educativo:
        .row
          .col-12.px-5
            .row.align-items-center.mb-4
              .col-lg-7.mb-4.mb-lg-0
                LineaTiempoD.color-secundario
                  p(numero="1" titulo="Naturaleza") El análisis de datos permite explorar, resumir y entender la naturaleza y  trascendencia de los datos en el entorno empresarial.
                  p(numero="2" titulo="Organización") El análisis exploratorio de datos permite obtener y validar información que facilita la planificación y organización de los procesos, la delegación de funciones y el seguimiento constante a cada una de las tareas asignadas.
                  p(numero="3" titulo="Clientes") El análisis exploratorio de datos permite mantener organizada la información de los clientes potenciales y establecer desde allí estrategias para captar clientes futuros.
                  p(numero="4" titulo="Volúmenes de información") El análisis exploratorio de datos permite dar valor a grandes volúmenes de información.
                  p(numero="5" titulo="Funcionamiento organizacional") Con el análisis exploratorio de los datos se busca detectar errores, anomalías en los datos, realizar la visualización de información en gráficos, validar hipótesis y, por supuesto, entender mucho mejor el funcionamiento de la organización.
              .col-lg-5
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/tema1/img3.svg', style="width: 350px").m-auto
            .row.justify-content-center
              .col-lg-11.bg-color3
                .p-4
                  .row.align-items-center
                    .col-auto
                      figure
                        img(src='@/assets/curso/tema1/img4.svg')
                    .col
                      p.mb-0 Para realizar el análisis exploratorio de datos, se utilizan diversas herramientas tecnológicas entre las que se encuentran Anaconda y Júpiter Lab, desde allí se despliega el lenguaje de programación Python y las librerías necesarias para facilitar su lectura, manipulación y aplicación de métodos estadísticos que permiten la visualización de los datos en forma de tablas y gráficos y por ende su interpretación.
    p.mb-5 Por otro lado, existen diversas formas para realizar el análisis de datos exploratorio, entre las que se encuentran:
    .row.bg-color4.mb-5(data-aos="fade-up")
      .col-12.px-5
        .row.justify-content-center
          .col-10.col-lg.mb-4.mb-lg-0
            .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
              .indicador--hover(v-if="indicadorTarjetaFlip")
              .tarjeta-flip__contenedor
                .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img2.png')})`}")
                .tarjeta-flip__contenido.p-4.p-xl-5
                  figure.my-4
                    img(src='@/assets/curso/tema1/img5.svg', style="width: 150px").m-auto
                  p Se analiza una sola variable.
                  br.mb-5
          .col-10.col-lg.mb-4.mb-lg-0
            .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
              .indicador--hover(v-if="indicadorTarjetaFlip")
              .tarjeta-flip__contenedor
                .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img3.png')})`}")
                .tarjeta-flip__contenido.p-4.p-xl-5
                  figure.my-4
                    img(src='@/assets/curso/tema1/img6.svg', style="width: 150px").m-auto
                  p.mb-5 Permite verificar el comportamiento de dos variables, se puede estudiar una variable en función de la otra.
          .col-10.col-lg
            .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
              .indicador--hover(v-if="indicadorTarjetaFlip")
              .tarjeta-flip__contenedor
                .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img4.png')})`}")
                .tarjeta-flip__contenido.p-4.p-xl-5
                  figure.my-4
                    img(src='@/assets/curso/tema1/img7.svg', style="width: 150px").m-auto
                  p Cuando se combinan más de dos datos, aborda todos los indicadores disponibles para el análisis de un fenómeno determinado.
    .row.align-items-center.pt-4.mb-5
      .col-lg-4.mb-4.mb-lg-0
        figure(data-aos="fade-left")
          img(src='@/assets/curso/tema1/img5.png', style="width: 350px").m-auto
      .col-lg-8
        .row.mb-4
          .col-auto
            figure
              img(src='@/assets/curso/tema1/img9.svg')
          .col
            p.mb-0.txt-deco1 En este orden de ideas, se puede afirmar que el objetivo principal del análisis exploratorio de datos es tener una visión clara de los datos que maneja la organización para, posteriormente, indicar la técnica de ciencia de datos más adecuada para su tratamiento.
        p.mb-0 Para que una organización alcance lo objetivos que se ha propuesto es necesario que organice sus datos, entienda su contenido, comprenda cuáles son las variables más importantes y cómo estas se relacionan una con otra, comenzar a identificar patrones, establecer qué hacer con los datos atípicos y, finalmente, llegar a conclusiones acerca de dicho análisis que permitan la toma de decisiones acertadas frente a los procesos organizacionales.
    .row.bg-color5
      .col-12.px-5
        .cajon.color-primario.p-4.mb-5(data-aos="fade-up")
          p.mb-0 Todo lo anterior rescata la importancia del análisis exploratorio de datos, que se resume en la forma de entender, visualizar y extraer información relevante de un conjunto de datos para establecer la ruta o técnica más adecuada para procesarlos.
        p.mb-5 A continuación, se podrá conocer a más detalle los pasos necesarios para el análisis exploratorio de datos.
        SlyderF(columnas="col-lg-6 col-xl-4").mb-5(data-aos="fade-right")
          .tarjeta.color-blanco.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/img10.svg' alt='AvatarTop')
            p.text-center Plantear la pregunta de arranque: ¿qué se quiere responder?
          .tarjeta.color-blanco.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/img11.svg' alt='AvatarTop')
            p.text-center Tener una idea general del conjunto de datos que se tienen.
          .tarjeta.color-blanco.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/img12.svg' alt='AvatarTop')
            p.text-center Clasificar los datos por tipos.
          .tarjeta.color-blanco.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/img13.svg' alt='AvatarTop')
            p.text-center Elegir el tipo de estadística necesaria para el análisis de dichos datos.
          .tarjeta.color-blanco.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/img14.svg' alt='AvatarTop')
            p.text-center Visualizar los datos.
          .tarjeta.color-blanco.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/img15.svg' alt='AvatarTop')
            p.text-center Analizar las posibles variables y sus interacciones.
          .tarjeta.color-blanco.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/img16.svg' alt='AvatarTop')
            p.text-center Extraer conclusiones del análisis.

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    mostrarIndicador: true,
    indicadorTarjetaFlip: true,
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
