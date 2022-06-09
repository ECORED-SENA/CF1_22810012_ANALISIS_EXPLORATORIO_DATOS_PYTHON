<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span(style="color: #FFF") 5
      h1 Preparación de los datos
    .row.bg-color21.mb-5
      .col-12.px-5.mb-4
        .row.align-items-center.mb-5
          .col-lg-4.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema5/img1.png', style="width: 550px").m-auto
          .col-lg-8
            .row.align-items-center.mb-4
              .col-auto
                figure
                  img(src='@/assets/curso/tema5/img1.svg')
              .col
                p.mb-0 La preparación de los datos es un paso muy importante para el análisis exploratorio, después de conocer muy bien los objetivos del negocio e identificar las metas de la organización. Es muy importante establecer el camino que se debe seguir para esta preparación.
            .estilo1
              .cajon.color-secundario.p-4.mb-4
                p.mb-0 #[b Una de las estrategias que apoya el proceso de preparación de datos son los Data Sets, esta estrategia es un colección o representación de datos que, generalmente, están dados por filas y columnas. Estos datos se generan directamente desde los sistemas de información del negocio o se pueden encontrar como datos abiertos que se descargan desde internet, o incluso pueden comprarse.]
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema5/img2.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-white.mb-0 #[b Normalmente las colecciones de datos se trabajan en archivos con extensión .CSV (valores separados por comas), este tipo de archivo permite que se manejen grandes volúmenes de información, la separación por comas se utiliza para la identificación de las filas y las columnas, como se observa en la siguiente imagen:] 
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Anexo1.png')" target="_blank")
                    span(style="color: #000 !important") Ver imagen
                    i.fas.fa-link(style="color: #000 !important")
        .row.align-items-center
          .col-lg-7.mb-4.mb-lg-0
            p También se pueden ver y editar en programas como Excel, para visualizar la información en filas y columnas, es muy común que los datos suelen presentarse en formato de Excel y sea necesario realizar la exportación a CSV.
            .cajon.color-secundario.p-4
              p.mb-0 Si el archivo está en formato CSV y se quiere visualizar a Excel, es necesario seguir algunos pasos, por lo que  se invita a revisar el siguiente recurso educativo para conocerlos.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema5/img2.png', style="width: 450px").m-auto
    .tarjeta.tarjeta--gris1.p-4.p-lg-5.mb-5
      SlyderA(tipo="a")
        .row.justify-content-center
          .col-12
            p.mb-5 #[b.txt-deco1 PASO 1.] Al abrir directamente el archivo CSV, este se debe observar de  la siguiente manera:
            figure.mb-5
              img(src='@/assets/curso/tema5/img3.png', style="width: 950px").m-auto
        .row.justify-content-center
          .col-12
            p.mb-5 #[b.txt-deco1 PASO 2.] Haz clic  en texto en columnas para visualizarlos en filas y columnas:
            figure.mb-5
              img(src='@/assets/curso/tema5/img4.png', style="width: 950px").m-auto
        .row.justify-content-center
          .col-12
            p.mb-5 #[b.txt-deco1 PASO 3.] Selecciona la opción delimitado y haz clic en siguiente:
            figure.mb-5
              img(src='@/assets/curso/tema5/img5.png', style="width: 550px").m-auto
        .row.justify-content-center
          .col-12
            p.mb-5 #[b.txt-deco1 PASO 4.] Selecciona la opción coma y haz clic en siguiente:
            figure.mb-5
              img(src='@/assets/curso/tema5/img6.png', style="width: 550px").m-auto
        .row.justify-content-center
          .col-12
            p.mb-5 #[b.txt-deco1 PASO 5.] Posteriormente, haz clic en la opción finalizar:
            figure.mb-5
              img(src='@/assets/curso/tema5/img7.png', style="width: 550px").m-auto
        .row.justify-content-center
          .col-12
            p.mb-5 #[b.txt-deco1 PASO 6.] Posteriormente, la información se visualizará de la siguiente manera, lo que permitirá hacer un análisis descriptivo:
            figure.mb-4
              img(src='@/assets/curso/tema5/img8.png', style="width: 550px").m-auto
            .cajon.color-secundario.p-4
              p.mb-0 Estos tipos de archivos son los más comunes en las organizaciones, los sistemas de información exportan la información en formato CSV, y se hace necesario saber qué hacer cuando están en uno u otro formato.
        .row.justify-content-center
          .col-12
            p.mb-5 #[b.txt-deco1 PASO 7.] El formato que se debe utilizar para guardar el archivo es CSV, y de esta manera se convertirá a este formato muchos más liviano y que será el que se utilice para procesar.
            figure.mb-4
              img(src='@/assets/curso/tema5/img9.png', style="width: 550px").m-auto
    .row.mb-5
      .col-auto.bg-color22
        .p-2
          p.mb-0.text-white #[b Finalmente, después de preparar los datos se debe realizar la revisión detallada de los mismos y determinar:]
    SlyderF(columnas="col-lg-6 col-xl-4")
      .tarjeta.color-blanco2.shadow.p-4.m-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema5/img4.svg' alt='AvatarTop')
        p.text-center El total de registros.
      .tarjeta.color-blanco2.shadow.p-4.m-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema5/img5.svg' alt='AvatarTop')
        p.text-center Cuáles son las variables categóricas.
      .tarjeta.color-blanco2.shadow.p-4.m-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema5/img6.svg' alt='AvatarTop')
        p.text-center Las variables numéricas.
      .tarjeta.color-blanco2.shadow.p-4.m-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema5/img7.svg' alt='AvatarTop')
        p.text-center Establecer si faltan datos en alguna de las variables.
      .tarjeta.color-blanco2.shadow.p-4.m-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema5/img8.svg' alt='AvatarTop')
        p.text-center Establecer si existen inconsistencia en los registros, por ejemplo, que dentro de la variable edad que es numérica se tenga valores de tipo carácter.
      .tarjeta.color-blanco2.shadow.p-4.m-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema5/img9.svg' alt='AvatarTop')
        p.text-center Establecer si es necesario eliminar los registros que presenta valores vacíos nulos de las variables seleccionadas para el análisis.
      .tarjeta.color-blanco2.shadow.p-4.m-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema5/img10.svg' alt='AvatarTop')
        p.text-center Establecer que datos necesitan ser remplazados.
      .tarjeta.color-blanco2.shadow.p-4.m-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema5/img11.svg' alt='AvatarTop')
        p.text-center Diseñar un plan con las diferentes opciones que, de implementación, puede ser que sobre los mismos datos se puedan realizar dos tipos de análisis.

</template>

<script>
export default {
  name: 'Tema5',
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
