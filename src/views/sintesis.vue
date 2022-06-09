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
            .row.align-items-center.mb-4
              .col-auto
                figure
                  img(src='@/assets/curso/sintesis/img3.svg')
              .col
                p.mb-0 Para comenzar con el análisis de datos exploratorio es primordial, primero, conocer el negocio o la organización para la cual se está desarrollando el análisis, además, deben ser muy claros los objetivos, requerimientos y metas de la compañía.
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
