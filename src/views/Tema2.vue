<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span(style="color: #FFF") 2
      h1 Metodología para la ciencia de datos
    .row.bg-color2.mb-5
      .col-12.px-5.mb-4
        .row.align-items-center.mb-5
          .col-lg-4.mb-4.mb-lg-0
            figure(data-aos="fade-left")
              img(src='@/assets/curso/tema2/img1.png', style="width: 450px").m-auto
          .col-lg-8
            .row.align-items-center.mb-4
              .col-auto
                figure
                  img(src='@/assets/curso/tema2/img1.svg')
              .col
                p.mb-0 El objetivo principal de esta metodología consiste en la planeación, de manera organizada, de las metas, proyectos o implementaciones necesarias para que cualquier tipo de tarea, que requiera de un tratamiento específico, funcione de manera correcta.
            p Desde esta perspectiva, una metodología enfocada en la ciencia de datos permite definir la ruta a seguir para la debida organización y el procesamiento adecuado de los datos.
            .estilo1(data-aos="fade-right")
              .cajon.color-primario.p-4
                p.mb-0 Una de las metodologías más utilizadas cuando se emprenden proyectos de ciencia de datos, es la denominada ASUM (siglas en inglés de Analytics Solutions Unified Method), cuyo significado en español es Método Unificado para Soluciones de Analítica.
        p.mb-5 Una metodología de ciencia de datos permite llevar de manera organizada cada una de las etapas necesarias para desarrollar un proyecto de ciencia de datos y, de esta manera, garantizar el cumplimento de los objetivos, que se han propuesto sobre este tema.
      .col-12.bg-color7(data-aos="fade-left")
        .row.ms-lg-4.px-4
          .estilo2
            .col-lg-7.p-2.bg-color6
              p.mb-0.text-white #[b Esta se enmarca en tres acciones principales, las cuales se observan en la siguiente figura:]
        .row.justify-content-center.mb-5
          .col-10.col-lg.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/img3.svg', style="width: 450px").m-auto
          .col-10.col-lg.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/img4.svg', style="width: 450px").m-auto
          .col-10.col-lg
            figure
              img(src='@/assets/curso/tema2/img5.svg', style="width: 450px").m-auto
    .row.bg-color8.mb-5
      .col-12.px-5
        .row.align-items-center.p-4.p-lg-0
          .col-lg-7.mb-4.mb-lg-0
            p Dentro de la implementación de dicha metodología se deben tener en cuenta las actividades propias de gestión de proyecto, entre las que se encuentran:
            .row.justify-content-center.mb-3(data-aos="fade-left")
              .col-10.col-lg
                figure
                  img(src='@/assets/curso/tema2/img8.svg', style="width: 350px").m-auto
              .col-10.col-lg
                figure
                  img(src='@/assets/curso/tema2/img9.svg', style="width: 350px").m-auto
              .col-10.col-lg
                figure
                  img(src='@/assets/curso/tema2/img9.svg', style="width: 350px").m-auto
              .col-10.col-lg
                figure
                  img(src='@/assets/curso/tema2/img10.svg', style="width: 350px").m-auto
            p.mb-0 Para implementar la metodología ASUM es necesario tener en cuenta las siguientes fases:
          .col-lg-5
            figure(data-aos="fade-right")
              img(src='@/assets/curso/tema2/img2.png', style="width: 650px").m-auto
    .row.justify-content-center.mb-5
      .col-lg-11
        .row.mb-5
          .col-auto.p-4.bg-color9(data-aos="fade-up")
            h4.mb-0 Fase 1: inicio del proyecto
        p.mb-4 Lo primero es realizar un levantamiento de la información, se debe hacer un diagnóstico respecto a qué tan preparada está la compañía para iniciarse en un proyecto de analítica, dentro de esta etapa se deben identificar factores como:
        figure.mb-5(data-aos="fade-left")
          img(src='@/assets/curso/tema2/img11.svg', style="width: 1050px").m-auto
        p.mb-5 Lo primero es realizar un levantamiento de la información, se debe hacer un diagnóstico respecto a qué tan preparada está la compañía para iniciarse en un proyecto de analítica, dentro de esta etapa se deben identificar factores como:
        SlyderF(columnas="col-lg-6 col-xl-4").mb-5(data-aos="fade-right")
          .tarjeta.color-multi1.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/img12.svg' alt='AvatarTop')
            h4.text-center.text-white #[b Patrocinador del proyecto]
            p.text-center.text-white Hace parte del nivel superior, y toma decisiones clave para que se faciliten todos los requerimientos a nivel tecnológico y humano.
          .tarjeta.color-multi2.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/img13.svg' alt='AvatarTop')
            h4.text-center #[b Arquitecto empresarial]
            p.text-center Mantiene estrecha relación con los estrategas de la empresa, para mantener todo el inventario tecnológico alineado con las metas empresariales.
          .tarjeta.color-multi1.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/img14.svg' alt='AvatarTop')
            h4.text-center.text-white #[b Arquitecto de datos]
            p.text-center.text-white Encargado de asegurar la infraestructura tecnológica requerida para soportar proyectos de ciencias de datos, recopilación, análisis y procesamiento.
          .tarjeta.color-multi2.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/img15.svg' alt='AvatarTop')
            h4.text-center #[b Científico de datos]
            p.text-center Es la persona que entiende muy bien los datos, es experto en estadística y herramientas tecnológicas para análisis de datos.
          .tarjeta.color-multi1.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/img16.svg' alt='AvatarTop')
            h4.text-center.text-white #[b Analista de negocios]
            p.text-center.text-white Conoce muy bien el negocio, las estrategias objetivos y metas de la compañía, debe trabajar muy de la mano con el científico de datos.
          .tarjeta.color-multi2.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/img17.svg' alt='AvatarTop')
            h4.text-center #[b Gerente de datos y analítica]
            p.text-center Organiza, facilita y asegura que los datos fluyan de acuerdo a los requerimientos del proyecto, debe engranar muy bien todas las áreas del negocio.
    .row
      .col-12.p-5.bg-color10.mb-5
        .row.mb-5(data-aos="fade-up")
          .col-auto.p-4.bg-color9
            h4.mb-0 Fase 2: entender el negocio
        p En esta etapa es importante entender cuáles son esos objetivos, pero, además, es fundamental reconocer los requerimientos y las necesidades organizacionales, al identificar este aspecto se podrán reconocer aquellos problemas que podrían resolverse con la implementación de la analítica: 
        p.mb-5 Para conocer las principales características de esta etapa, se invita a explorar el siguiente recurso educativo:
        h4.mb-5 #[u Deteminar objetivos]
        .row.align-items-center.mb-5
          .col-lg-3.mb-4.mb-lg-0
            figure(data-aos="fade-left")
              img(src='@/assets/curso/tema2/img3.png', style="width: 450px").m-auto
          .col-lg-9
            p.mb-0 Establecer  cuáles son los objetivos de la empresa o negocio es fundamental, para esto  se puede realizar un recuento histórico de negocio que  ayude a determinar la situación actual y establecer esas fortalezas que han permitido tener éxito organizacional. Determinar acciones de mejora y desde allí plantear objetivos o identificar posibles problemáticas que se pueda resolver desde el análisis de los datos.
        h4.mb-5 #[u Realizar evaluación]
        p.mb-5 Cuando se hace la evaluación, es importante tener en cuenta los siguientes aspectos:
        .row.justify-content-center.mb-5(data-aos="fade-right")
          .col-12.col-lg.m-2.bg-white.p-4.rounded.mb-4.mb-lg-0.estilo3
            .row
              .col-12
                figure.mb-3
                  img(src='@/assets/curso/tema2/img18.svg', style="width: 100px").m-auto
              .col-12
                p.text-center #[b Inventario]
                p.text-center Identifique con qué personal cuenta, los recursos computacionales y las  herramientas de software disponibles, además de la documentación de los procesos internos.
          .col-12.col-lg.m-2.bg-white.p-4.rounded.mb-4.mb-lg-0.estilo3
            .row
              .col-12
                figure.mb-3
                  img(src='@/assets/curso/tema2/img19.svg', style="width: 100px").m-auto
              .col-12
                p.text-center #[b ¿Cuáles son los requerimientos y restricciones?]
                p.text-center Realice un cronograma de las actividades necesarias para desarrollar el proyecto, tenga en cuenta las políticas de protección de datos y revise las limitantes en hardware y software.
          .col-12.col-lg.m-2.bg-white.p-4.rounded.mb-4.mb-lg-0.estilo3
            .row
              .col-12
                figure.mb-3
                  img(src='@/assets/curso/tema2/img20.svg', style="width: 100px").m-auto
              .col-12
                p.text-center #[b Evaluar los riesgos y planes de contingencia]
                p.text-center Es importante que identifique los riesgos visibles y los que pudiesen llegar a presentarse, cree una ruta clara mediante un documento maestro que permita tomar las medidas a las posibles eventualidades presentadas.
        h4.mb-5 #[u Terminología]
        .row.align-items-center.mb-5
          .col-lg-3.mb-4.mb-lg-0
            figure(data-aos="fade-left")
              img(src='@/assets/curso/tema2/img4.png', style="width: 450px").m-auto
          .col-lg-9
            p Socializar un documento y realizar capacitaciones en donde se tenga claridad de las terminología utilizada, tanto en la organización en general como la que maneja el equipo de analítica.
            p.mb-0 #[b Es importante que todos los miembros de la organización hablen el mismo idioma.]
        h4.mb-5 #[u Terminología]
        .row.align-items-center.mb-5
          .col-lg-9.mb-4.mb-lg-0
            p Es importante calcular los costos del proyecto y determinar cuáles serán las utilidades una vez  este se haya finalizado.
            .row.align-items-center
              .col-auto
                figure
                  img(src='@/assets/curso/tema2/img21.svg')
              .col
                p.mb-0.txt-deco1 Es fundamental clasificar los costos en directos e indirectos dentro de la recolección de los datos y en el despliegue del proyecto.
          .col-lg-3
            figure(data-aos="fade-right")
              img(src='@/assets/curso/tema2/img5.png', style="width: 450px").m-auto
        h4.mb-5 #[u Ruta de trabajo]
        .row.align-items-center.mb-5
          .col-lg-3.mb-4.mb-lg-0
            figure(data-aos="fade-left")
              img(src='@/assets/curso/tema2/img6.png', style="width: 450px").m-auto
          .col-lg-9
            p.mb-0 Para tener éxito en el proyecto es fundamental  tener claridad  frente al  paso a paso que se debe  realizar en cada una de las etapas del proceso, de igual manera, se debe tener claro cuáles son los involucrados y sus  responsabilidades.
        h4.mb-5 #[u Reportes]
        .row.align-items-center
          .col-lg-9.mb-4.mb-lg-0
            p Es importante crear reportes que permitan entender la empresa, para el equipo de analítica es vital comprender el negocio completamente, el objetivo que se desea alcanzar, los criterios de éxito y demás datos relevantes que permitan entender a profundidad el negocio.
            .row.align-items-center
              .col-auto
                figure
                  img(src='@/assets/curso/tema2/img21.svg')
              .col
                p.mb-0.txt-deco1 Con los reportes se genera un insumo fundamental que pueden ser consultados en cualquier momento durante la ejecución del proyecto.
          .col-lg-3
            figure(data-aos="fade-right")
              img(src='@/assets/curso/tema2/img7.png', style="width: 450px").m-auto
    .row.justify-content-center.mb-5
      .col-lg-11
        .row.mb-5(data-aos="fade-up")
          .col-auto.p-4.bg-color9
            h4.mb-0 Fase 3: descubrimiento y entendimiento de los datos
        p Se debe realizar la recolección de datos iniciales para determinar la consistencia de la información, se espera poder describirlos, realizar todas las exploraciones planteadas y verificar la calidad de los mismos.
        p.mb-5 Los datos iniciales pueden provenir de diferentes fuentes de información, como se observa en la siguiente figura:
        .row.justify-content-center.mb-5(data-aos="fade-up")
          .col-11.col-lg.bg-color11.shadow.m-2.mb-4.mb-lg-0
            .row
              .col-12
                figure
                  img(src='@/assets/curso/tema2/img22.svg', style="width: 200px").m-auto
              .col-12
                p.text-center #[b Fuente propia de datos]
                p.text-center Incluye todo tipo de información como por ejemplo, encuestas, movimientos transaccionales  y demás datos relevantes de la compañía.
          .col-11.col-lg.bg-color11.shadow.m-2.mb-4.mb-lg-0
            .row
              .col-12
                figure
                  img(src='@/assets/curso/tema2/img23.svg', style="width: 200px").m-auto
              .col-12
                p.text-center #[b Compra de datos]
                p.text-center En caso de que la organización no cuente con cierto tipo de datos, puede optar por comprarlos.
          .col-11.col-lg.bg-color11.shadow.m-2.mb-4.mb-lg-0
            .row
              .col-12
                figure
                  img(src='@/assets/curso/tema2/img24.svg', style="width: 200px").m-auto
              .col-12
                p.text-center #[b Datos abiertos]
                p.text-center La organización también puede hacer usos de datos disponibles gratuitamente en la web.
        .bloque-texto-a.color-primario.p-4.p-lg-5.mb-5(data-aos="fade-left")
          .row.m-0.align-items-center.justify-content-between
            .col-12
              .bloque-texto-a__texto.p-4
                p.mb-0 Posteriormente, es necesario describir los datos presentes con cada colección analizada, generalmente estos deben estar organizados en filas y columnas, para esto se debe realizar la identificación de las columnas y determinar cuáles de estas son datos categóricos y cuales son numéricos, también es importante establecer algunas medidas de tendencia central como la moda, media, mediana, varianzas, máximos y mínimos.
        .row.mb-5(data-aos="fade-up")
          .col-auto.p-4.bg-color12
            h4.mb-0 Por otro lado, es fundamental verificar la calidad de los datos teniendo en cuenta las siguientes preguntas:
        figure.mb-5(data-aos="fade-right")
          img(src='@/assets/curso/tema2/img25.svg', style="width: 1050px").m-auto
        .row(data-aos="fade-down")
          .col-12.p-4.bg-color13
            .row.align-items-center
              .col-auto
                figure
                  img(src='@/assets/curso/tema2/img26.svg')
              .col
                p.mb-0 Recuerde que es importante #[b generar informes] que indiquen el estado en que se encuentren los datos, teniendo en cuenta el proceso de recolección, la descripción de cada uno de los datos encontrados, su exploración y un reporte de la calidad de los mismos.
    .row
      .col-12.p-5.bg-color10.mb-5
        .row.mb-5(data-aos="fade-up")
          .col-auto.p-4.bg-color9
            h4.mb-0 Fase 4: preparando los datos
        p Esta es una de las etapas que ocupa mayor cantidad de tiempo, pues, normalmente, los datos no cumplen con los parámetros requeridos para empezar a trabajar con ellos de manera adecuada, por ende, es necesario que en la fase anterior se realice un muy buen trabajo de investigación que permita avanzar rápidamente.
        p.mb-5 En este paso se deben tener en cuenta las siguientes operaciones:
        .row.justify-content-center.mb-5
          .col-lg-10(data-aos="fade-up")
            .row
              .col-12.col-lg
                figure
                  img(src='@/assets/curso/tema2/img27.svg', style="width: 300px").m-auto
              .col-12.col-lg
                figure
                  img(src='@/assets/curso/tema2/img28.svg', style="width: 300px").m-auto
              .col-12.col-lg
                figure
                  img(src='@/assets/curso/tema2/img29.svg', style="width: 300px").m-auto
              .col-12.col-lg
                figure
                  img(src='@/assets/curso/tema2/img30.svg', style="width: 300px").m-auto
              .col-12.col-lg
                figure
                  img(src='@/assets/curso/tema2/img31.svg', style="width: 300px").m-auto
        .cajon.color-primario.p-4(data-aos="fade-right")
          p.mb-0 Finalmente, dentro de esta fase es importante realizar un informe en el que se describen las diferentes situaciones que se encontraron y se inscriban, si es necesario, dentro del marco de riesgo en caso de ser así, de lo contrario igualmente se deben reportar los avances y los resultados positivos.
    .row.justify-content-center.mb-5
      .col-lg-11
        .row.mb-5(data-aos="fade-up")
          .col-auto.p-4.bg-color9
            h4.mb-0 Fase 5: construir el modelo
        p.mb-5 Al inicio del proyecto se plantearon unos objetivos o metas, con la construcción de un modelo se pretende estructurar todo lo necesario para lograr alcanzarlos, en esta fase se pueden requerir varias interacciones que permite ir afinando el modelo, es muy probable que sea necesario regresar hacia atrás y volver a la fase de preparación de los datos para realizar los ajustes necesarios.
        .row.justify-content-center.mb-5
          .col-lg-11
            .row.align-items-center
              .col-auto
                figure
                  img(src='@/assets/curso/tema2/img21.svg')
              .col
                p.mb-0.txt-deco1 Se invita a revisar con atención el siguiente recurso educativo para identificar los pasos que se deben tener en cuenta para la construcción del modelo:
        .row.justify-content-center.mb-5(data-aos="fade-left")
          .col-11.col-lg.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/img32.svg', style="width: 450px").m-auto
          .col-11.col-lg.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/img33.svg', style="width: 450px").m-auto
          .col-11.col-lg.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/img34.svg', style="width: 450px").m-auto
    .row
      .col-12.p-3.p-lg-5.bg-color10
        .row.mb-5(data-aos="fade-up")
          .col-auto.p-4.bg-color9
            h4.mb-0 Fase 6. evaluar el modelo
        p.mb-5 Con los criterios de evaluación definidos y los resultados que se obtuvieron del modelo generado anteriormente, se realiza un diagnóstico que permite determinar si el modelo utilizado es el indicado para el negocio.
        h4.mb-5 #[u En la evaluación de resultados, se deben tener en cuenta las siguientes consideraciones:]
        .row.align-items-center.mb-5
          .col-lg-5.mb-4.mb-lg-0
            figure(data-aos="fade-left")
              img(src='@/assets/curso/tema2/img35.svg', style="width: 450px").m-auto
          .col-lg-7
            figure(data-aos="fade-right")
              img(src='@/assets/curso/tema2/img36.svg', style="width: 650px").m-auto
        .row.mb-5
          .col-12.p-4.bg-color14
            .row.align-items-center
              .col-auto
                figure
                  img(src='@/assets/curso/tema2/img37.svg')
              .col
                p.mb-0 Finalmente, el siguiente recurso educativo brindará claridad respecto a los procesos que se deben tener en cuenta para realizar una revisión final de todas las etapas.
        SlyderA(tipo="a")
          .row.align-items-center.bg-color15
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema2/img43.svg', style="width: 450px").m-auto
            .col-lg-8
              .row.justify-content-center
                .col-lg-8
                  .dual-txt-deco
                    p Revise que todo lo que se planeó al inicio del proyecto se haya llevado a cabo, determine los motivos por los que algunas acciones de las planeadas inicialmente no se ejecutaron.
          .row.align-items-center.bg-color16
            .col-lg-8.mb-4.mb-lg-0
              .row.justify-content-center
                .col-lg-8
                  .dual-txt-deco
                    p Es importante que al desarrollar el paso anterior, que llevó a la identificación de errores, se establezcan acciones específicas para que estos sean corregidos y no traigan consecuencias ni sean riesgosos, más adelante, para el desarrollo del proyecto.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema2/img44.svg', style="width: 450px").m-auto
          .row.align-items-center.bg-color17
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema2/img45.svg', style="width: 450px").m-auto
            .col-lg-8
              .row.justify-content-center
                .col-lg-8
                  .dual-txt-deco
                    p Después de realizar las debidas correcciones, prepare nuevamente los datos necesarios para dar respuesta a los requerimientos identificados.
          .row.align-items-center.bg-color18
            .col-lg-8.mb-4.mb-lg-0
              .row.justify-content-center
                .col-lg-8
                  .dual-txt-deco
                    p Evalúe otro tipo de modelos que puede llegar a implementar y que le permitan mejorar el análisis exploratorio de datos según las necesidades y los requerimientos identificados.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema2/img46.svg', style="width: 450px").m-auto
          .row.align-items-center.bg-color19
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema2/img47.svg', style="width: 450px").m-auto
            .col-lg-8
              .row.justify-content-center
                .col-lg-8
                  .dual-txt-deco
                    p Recuerde que es importante documentar cada uno de los hallazgos encontrados, así estos sean negativos o positivos.

</template>

<script>
export default {
  name: 'Tema2',
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
