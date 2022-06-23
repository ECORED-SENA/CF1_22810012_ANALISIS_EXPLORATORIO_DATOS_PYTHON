<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.bg-color33
      .col-12.px-5.mb-4
        .row.align-items-center.mb-5
          .col-lg-4.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/sintesis/img1.png', style="width: 550px").m-auto
          .col-lg-8
            .row.align-items-start.mb-4
              .col-auto
                figure
                  img(src='@/assets/curso/sintesis/img3.svg')
              .col
                p.mb-0 En la actualidad las empresas, independientemente de su tamaño, manejan gran cantidad de datos e información que se han ido convirtiendo en la herramienta base para la toma de decisiones estratégicas. Desde esta perspectiva, este componente resulta fundamental al brindar las bases para desarrollar un proyecto de análisis exploratorio de datos. En este componente se aclaran conceptos, se identifican metodologías de aplicación, además se describen estrategias puntuales para la preparación de datos y el análisis estadístico de datos.
            .estilo1
              .cajon.color-secundario.p-4
                p.mb-0 Una breve revisión de los temas vistos, se encuentra en el siguiente esquema:
        figure.mb-5
          img(src='@/assets/curso/sintesis/img2.svg', style="width: 1050px").m-auto
        .row.justify-content-center
          .col-auto
            a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p #[b Anexo.] Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
