<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span(style="color: #FFF") 4
      h1 Estadística
    .row(data-aos="fade-left")
      .col-12
        figure
          img(src='@/assets/curso/tema4/img1.png')
        .estilo4
          .row.justify-content-center
            .col-lg-9.p-4.bg-color30
              p.mb-0 Para realizar un #[span.txt-deco2 análisis de datos efectivo es fundamental] reconocer diferentes medidas que se utilizan en la estadística y que resultan fundamentales para llevar a cabo dicha labor:
    .row
      .col-12.p-4
        Separador
        #t_4_1
        .titulo-segundo.color-acento-contenido
          h2 4.1 Media
        p.mb-5 Consiste en realizar la sumatoria de todos los elementos de una lista de datos que sean numéricos y dividirlos sobre el total de elementos, por ejemplo, si se quiere saber la media de las calificaciones de un curso de la materia de Python cuya lista se muestra a continuación.
        .row.align-items-center.mb-5
          .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
            .titulo-sexto.color-acento-botones
              p.mb-0 #[b Tabla 2.] Media de calificaciones
            table
              tbody
                tr(style="background-color: #f57998; background-image: linear-gradient(180deg, #f57998 0%, #954593 100%)")
                  td(style="width: 15%; padding: 0.3em; border: 2px solid #FFF") #[b.text-white N.°]
                  td(style="width: 60%; padding: 0.3em; border: 2px solid #FFF") #[b.text-white Nombre]
                  td(style="padding: 0.3em; border: 2px solid #FFF") #[b.text-white Nota]
                tr
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") 1
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") Estudiante 1
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center 3
                tr
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") 2
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") Estudiante 2
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center 3,5
                tr
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") 3
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") Estudiante 3
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center 4,5
                tr
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") 4
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") Estudiante 4
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center 5
                tr
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") 5
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") Estudiante 5
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center 4
                tr
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") 6
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") Estudiante 6
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center 5
                tr
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") 7
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") Estudiante 7
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center 3
                tr
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") 8
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") Estudiante 8
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center 4,5
                tr
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") 9
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") Estudiante 9
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center 3
                tr
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") 10
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") Estudiante 10
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center 4
                tr
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF")
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") #[b SUMA TOTAL]
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") #[b 39,5]
          .col-lg-7
            .row.mb-4
              .col-lg-11(data-aos="fade-left")
                .tarjeta-avatar-b
                  .tarjeta-avatar-b__img
                    img(src='@/assets/curso/tema4/img1.svg' alt='AvatarTop')
                  .tarjeta.tarjeta--verde
                    .p-5
                      p.mb-0 La sumatoria total arroja 39,5 si ese resultado se divide entre el total de estudiantes que son 10, el resultado no dará la media.
            .row.justify-content-center.mb-4
              .col-auto.p-3.bg-color31(data-aos="fade-up")
                p.mb-0 #[b.text-white Media = 39,5 / 10 = 3,95]
            .row.justify-content-center
              .col-lg-11
                p.mb-0 Con el análisis de la media se debe estar muy atentos, ya que es muy sensible a arrojar datos altos, por ejemplo:
        .row.align-items-center
          .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
            .titulo-sexto.color-acento-botones
              p.mb-0 #[b Tabla 3.] Media: datos altos
            table
              tbody
                tr(style="background-color: #f57998; background-image: linear-gradient(180deg, #f57998 0%, #954593 100%)")
                  td(style="width: 15%; padding: 0.3em; border: 2px solid #FFF") #[b.text-white N.°]
                  td(style="width: 60%; padding: 0.3em; border: 2px solid #FFF") #[b.text-white Nombre]
                  td(style="padding: 0.3em; border: 2px solid #FFF") #[b.text-white Nota]
                tr
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") 1
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") Estudiante 1
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center 1
                tr
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") 2
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") Estudiante 2
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center 2
                tr
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") 3
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") Estudiante 3
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center 2
                tr
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") 4
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") Estudiante 4
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center 2
                tr
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") 5
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") Estudiante 5
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center 2
                tr
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") 6
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") Estudiante 6
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center 2,9
                tr
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") 7
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") Estudiante 7
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center 2,9
                tr
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") 8
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") Estudiante 8
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center 5
                tr
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") 9
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") Estudiante 9
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center 5
                tr
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") 10
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") Estudiante 10
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center 5
                tr
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF")
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") #[b SUMA TOTAL]
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") #[b 30]
          .col-lg-7
            .row.mb-4
              .col-lg-11(data-aos="fade-left")
                .tarjeta-avatar-b
                  .tarjeta-avatar-b__img
                    img(src='@/assets/curso/tema4/img1.svg' alt='AvatarTop')
                  .tarjeta.tarjeta--naranja
                    .p-5
                      p.mb-0 Como se observa en el cuadro anterior, a pesar de que el 70% presenta una valoración baja y con solo 30% de los datos con valoración alta, el comportamiento de la media tiende a subir.
            .row.justify-content-center.mb-4
              .col-auto.p-3.bg-color31(data-aos="fade-up")
                p.mb-0 #[b.text-white Si se divide media = 30/10 = 3,0]
            .row.justify-content-center
              .col-lg-11
                p.mb-0 Y si el parámetro de análisis valida que de 3,0 en adelante es una medida aceptable, entonces muy probablemente se incurrirá en errores.
    Separador
    .row.bg-color32
      .col-12.p-4.p-lg-5
        #t_4_2
        .titulo-segundo.color-acento-contenido
          h2 4.2 Mediana
        p.mb-5 Con el cálculo de la mediana se mejora la relación del problema presentado en la media. Esta medida consiste en organizar los datos y tomar el valor que divide los datos en dos partes igual, para esta acción se deben tener en cuenta dos consideraciones:
        ul.ms-4.mb-5
          li 
            i.fas.fa-caret-right(style="color: #8C1A7D")
            |  #[b Cuando los datos son impares:] se toma el valor central dejando igual número de registros a ambos lados.
        .row.justify-content-center.mb-5
          .col-lg-5.mb-4.mb-lg-0(data-aos="fade-left")
            .titulo-sexto.color-acento-botones
              p.mb-0 #[b Tabla 4.] Mediana: datos impares
            table
              tbody
                tr(style="background-color: #f57998; background-image: linear-gradient(180deg, #f57998 0%, #954593 100%)")
                  td(style="width: 15%; padding: 0.3em; border: 2px solid #FFF") #[b.text-white N.°]
                  td(style="width: 60%; padding: 0.3em; border: 2px solid #FFF") #[b.text-white Nombre]
                  td(style="padding: 0.3em; border: 2px solid #FFF") #[b.text-white Nota]
                tr
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") 1
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") Estudiante 1
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center 1
                tr
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") 2
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") Estudiante 2
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center 2
                tr
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") 3
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") Estudiante 3
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center 2
                tr
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") 4
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") Estudiante 4
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center 2
                tr
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") 5
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") Estudiante 5
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center 2
                tr
                  td(style="padding: 0.3em; background-color: #BEBEBE; border: 2px solid #FFF") 11
                  td(style="padding: 0.3em; background-color: #BEBEBE; border: 2px solid #FFF") Estudiante 11
                  td(style="padding: 0.3em; background-color: #BEBEBE; border: 2px solid #FFF").text-center 2
                tr
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") 6
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") Estudiante 6
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center 2,9
                tr
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") 7
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") Estudiante 7
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center 2,9
                tr
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") 8
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") Estudiante 8
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center 5
                tr
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") 9
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") Estudiante 9
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center 5
                tr
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") 10
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") Estudiante 10
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center 5
                tr
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF")
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") #[b SUMA TOTAL]
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") #[b 32]
        .row.justify-content-center.mb-5
          .col-lg-9(data-aos="fade-right")
            .tarjeta-avatar-b
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema4/img1.svg' alt='AvatarTop')
              .tarjeta.tarjeta--verde
                .p-5
                  p.mb-0 El valor de la mediana para este conjunto de datos sería 2, teniendo en cuenta que los datos son impares y así quedarían la misma cantidad de registros al realizar la división.
        ul.ms-4.mb-5
          li 
            i.fas.fa-caret-right(style="color: #8C1A7D")
            |  #[b Cuando los datos son pares:] por otro lado, lo que se debe realizar cuando los registros son pares es realizar la suma de los dos datos centrales y dividirlos por 2.
        .row.justify-content-center.mb-5
          .col-lg-5.mb-4.mb-lg-0(data-aos="fade-left")
            .titulo-sexto.color-acento-botones
              p.mb-0 #[b Tabla 5.] Mediana: datos pares
            table
              tbody
                tr(style="background-color: #f57998; background-image: linear-gradient(180deg, #f57998 0%, #954593 100%)")
                  td(style="width: 15%; padding: 0.3em; border: 2px solid #FFF") #[b.text-white N.°]
                  td(style="width: 60%; padding: 0.3em; border: 2px solid #FFF") #[b.text-white Nombre]
                  td(style="padding: 0.3em; border: 2px solid #FFF") #[b.text-white Nota]
                tr
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") 1
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") Estudiante 1
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center 1
                tr
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") 2
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") Estudiante 2
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center 2
                tr
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") 3
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") Estudiante 3
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center 2
                tr
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") 4
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") Estudiante 4
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center 2
                tr
                  td(style="padding: 0.3em; background-color: #BEBEBE; border: 2px solid #FFF") 5
                  td(style="padding: 0.3em; background-color: #BEBEBE; border: 2px solid #FFF") Estudiante 5
                  td(style="padding: 0.3em; background-color: #BEBEBE; border: 2px solid #FFF").text-center 2
                  td(style="padding: 0.3em; background-color: #BEBEBE; border: 2px solid #FFF").text-center 2,4
                tr
                  td(style="padding: 0.3em; background-color: #BEBEBE; border: 2px solid #FFF") 6
                  td(style="padding: 0.3em; background-color: #BEBEBE; border: 2px solid #FFF") Estudiante 6
                  td(style="padding: 0.3em; background-color: #BEBEBE; border: 2px solid #FFF").text-center 2,9
                  td(style="padding: 0.3em; background-color: #BEBEBE; border: 2px solid #FFF").text-center 5
                tr
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") 7
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") Estudiante 7
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center 2,9
                tr
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") 8
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") Estudiante 8
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center 5
                tr
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") 9
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") Estudiante 9
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center 5
                tr
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") 10
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") Estudiante 10
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center 5
                tr
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF")
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") #[b SUMA TOTAL]
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") #[b 30]
        .row.justify-content-center(data-aos="fade-up")
          .col-lg-9
            .tarjeta-avatar-b
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema4/img1.svg' alt='AvatarTop')
              .tarjeta.tarjeta--naranja
                .p-5
                  p.mb-0 Como se observa en la tabla, se toman los dos datos centrales dejando igual cantidad de registros en ambas partes, se suman los números centrales y se divide entre 2 es decir se les aplica la media.
        .estilo5
          .row.justify-content-end
            .col-auto.p-3.bg-color31
              p.mb-0 #[b.text-white Mediana = (2 + 2,9) / 2 = 4,9 / 2 = 2,45]
    .row
      .col-12.p-4
        Separador
        #t_4_3
        .titulo-segundo.color-acento-contenido
          h2 4.3 Moda
        p.mb-5 Es el valor con mayor frecuencia en la lista de datos, se pueden agrupar todas las posibilidades presentes en la lista y se cuenta el número de veces que se repite:
        .row.justify-content-center.mb-5
          .col-lg-5.mb-4.mb-lg-0(data-aos="fade-left")
            .titulo-sexto.color-acento-botones
              p.mb-0 #[b Tabla 6.] Moda
            table
              tbody
                tr(style="background-color: #f57998; background-image: linear-gradient(180deg, #f57998 0%, #954593 100%)")
                  td(style="width: 15%; padding: 0.3em; border: 2px solid #FFF") #[b.text-white N.°]
                  td(style="width: 60%; padding: 0.3em; border: 2px solid #FFF") #[b.text-white Nombre]
                  td(style="padding: 0.3em; border: 2px solid #FFF") #[b.text-white Nota]
                tr
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") 1
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") Estudiante 1
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center 1
                tr
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") 2
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") Estudiante 2
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center 2
                tr
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") 3
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") Estudiante 3
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center 2
                tr
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") 4
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") Estudiante 4
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center 2
                tr(style="border-top: 3px solid #000")
                  td(style="padding: 0.3em; background-color: #FFF; border: 2px solid #FFF") 5
                  td(style="padding: 0.3em; background-color: #FFF; border: 2px solid #FFF") Estudiante 5
                  td(style="padding: 0.3em; background-color: #FFF; border: 2px solid #FFF").text-center 2
                tr(style="border-top: 3px solid #34A3ED")
                  td(style="padding: 0.3em; background-color: #FFF; border: 2px solid #FFF") 6
                  td(style="padding: 0.3em; background-color: #FFF; border: 2px solid #FFF") Estudiante 6
                  td(style="padding: 0.3em; background-color: #FFF; border: 2px solid #FFF").text-center 2,9
                tr
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") 7
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") Estudiante 7
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center 2,9
                tr
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") 8
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") Estudiante 8
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center 5
                tr
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") 9
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") Estudiante 9
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center 5
                tr
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") 10
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") Estudiante 10
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center 5
                tr
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF")
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") #[b SUMA TOTAL]
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") #[b 30]
            table
              tbody
                tr(style="")
                  td(style="width: 15%; padding: 0.3em; border: 2px solid #FFF; background-color: #f57998; background-image: linear-gradient(180deg, #f57998 0%, #954593 100%)") #[b.text-white Nota]
                  td(style="width: 60%; padding: 0.3em; border: 2px solid #FFF; background-color: #f57998; background-image: linear-gradient(180deg, #f57998 0%, #954593 100%)") #[b.text-white Cantidad]
                  td(style="border: 0px")
                tr
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") 1
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") 1
                  td(style="border: 0px")
                tr
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") 2
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") 4
                  td(style="border: 0px")
                tr
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") 2,9
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") 2
                  td(style="border: 0px")
                tr
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") 5
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") 3
                  td(style="border: 0px")
        .row.justify-content-center
          .col-lg-9(data-aos="fade-up")
            .tarjeta-avatar-b
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema4/img1.svg' alt='AvatarTop')
              .tarjeta.tarjeta--naranja
                .p-5
                  p.mb-0 En la tabla anterior se visualiza la agrupación de los datos y se especifican la cantidad de veces que se repite ese valor en la secuencia, el valor con mayor cantidad de veces repetido en la secuencia es la MODA.
    Separador
    .row.bg-color32
      .col-12.p-4.p-lg-5
        #t_4_4
        .titulo-segundo.color-acento-contenido
          h2 4.4 Tablas de frecuencias
        p.mb-4 Estas permiten agrupar información de manera que se puedan entender mejor los volúmenes de datos.
        ul.ms-4.mb-4
          li 
            i.fas.fa-caret-right(style="color: #8C1A7D")
            |  En ese sentido, se encuentran las #[b frecuencias absolutas] que sirven para representar el número de veces que se repiten los elementos o grupos dentro de una serie de datos.
        .row.justify-content-end.mb-5
          .col-lg-11
            p #[span.txt-deco1 Ejemplo:] se requiere saber la edad de los empleados que trabajan para la compañía a nivel nacional, para ellos se extrae la información del sistema de información de recursos humanos. Se debe tener en cuenta la edad por rangos de la siguiente manera:
        .row.justify-content-center.mb-5
          .col-lg-5.mb-4.mb-lg-0(data-aos="fade-left")
            .titulo-sexto.color-acento-botones
              p.mb-0 #[b Tabla 7.] Tablas de frecuencia
            table
              tbody
                tr(style="background-color: #f57998; background-image: linear-gradient(180deg, #f57998 0%, #954593 100%)")
                  td(style="width: 15%; padding: 0.3em; border: 2px solid #FFF") #[b.text-white Edad]
                  td(style="width: 60%; padding: 0.3em; border: 2px solid #FFF") #[b.text-white Total de empleados]
                tr
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") 18 a 25
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF")
                tr
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") 25 a 35
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF")
                tr
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") 35 a 40
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF")
                tr
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") 40 a 50
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF")
                tr
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") Más de 50
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF")
        .row.justify-content-center.mb-5
          .col-lg-9(data-aos="fade-right")
            .tarjeta-avatar-b
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema4/img1.svg' alt='AvatarTop')
              .tarjeta.tarjeta--verde
                .p-5
                  p.mb-0 Los resultados arrojan la siguiente frecuencia absoluta, después de procesar los datos y agrupar en el rango indicado:
        .row.justify-content-center.mb-5
          .col-lg-5.mb-4.mb-lg-0(data-aos="fade-left")
            .titulo-sexto.color-acento-botones
              p.mb-0 #[b Tabla 8.] Frecuencia absoluta
            table
              tbody
                tr(style="background-color: #f57998; background-image: linear-gradient(180deg, #f57998 0%, #954593 100%)")
                  td(style="width: 15%; padding: 0.3em; border: 2px solid #FFF") #[b.text-white Edad]
                  td(style="width: 60%; padding: 0.3em; border: 2px solid #FFF") #[b.text-white Total de empleados]
                tr
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") 18 a 25
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center 50
                tr
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") 25 a 35
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center 110
                tr
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") 35 a 40
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center 15
                tr
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") 40 a 50
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center 20
                tr
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") Más de 50
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center 5
                tr
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") #[b Total]
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center #[b 200]
        ul.ms-4.mb-4
          li 
            i.fas.fa-caret-right(style="color: #8C1A7D")
            |  #[b La frecuencia absoluta acumulada] corresponde a sumar cada uno de los elementos o grupos de la siguiente manera, en el último elemento, grupo o rango se muestra el total de registro, en este caso de 200, que coincide con el total general, para el primer registro se deja el mismo valor.
        .row.justify-content-center.mb-5
          .col-lg-5.mb-4.mb-lg-0(data-aos="fade-left")
            .titulo-sexto.color-acento-botones
              p.mb-0 #[b Tabla 9.] Frecuencia absoluta acumulada
            table
              tbody
                tr(style="background-color: #f57998; background-image: linear-gradient(180deg, #f57998 0%, #954593 100%)")
                  td(style="width: 30%; padding: 0.3em; border: 2px solid #FFF") #[b.text-white Edad]
                  td(style="width: 40%; padding: 0.3em; border: 2px solid #FFF") #[b.text-white Total de empleados]
                  td(style="width: 30%; padding: 0.3em; border: 2px solid #FFF") #[b.text-white Acumulado]
                tr
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") 18 a 25
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center 50
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center 50
                tr
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") 25 a 35
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center 110
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center 160
                tr
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") 35 a 40
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center 15
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center 175
                tr
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") 40 a 50
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center 20
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center 195
                tr
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") Más de 50
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center 5
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center #[b 200]
                tr
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") #[b Total]
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center #[b 200]
                  td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF")
        .row.justify-content-center.mb-5
          .col-lg-9(data-aos="fade-up")
            .tarjeta-avatar-b
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema4/img1.svg' alt='AvatarTop')
              .tarjeta.tarjeta--naranja
                .p-5
                  p.mb-0  Se realizan los cálculos de los datos en porcentajes lo que permitirá entenderlos mejor, para ello se divide cada uno de los elementos de la frecuencia absoluta y acumulada sobre el total de los registros, a este paso se le denomina frecuencia relativa.
        p.mb-5 El procedimiento es dividir cada uno de los registros entre 200 que corresponde al total de los registros así:
        .row
          .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
            table.mb-4
              tbody
                tr
                  td(colspan="3", style="width: 30%; background-color: #EDF1F7; padding: 0.3em; border: 2px solid #FFF") #[b Para total empleados]
                tr(style="border-top: 3px solid #000; border-left: 3px solid #000; border-right: 3px solid #000")
                  td(style="padding: 0.3em; border-left: 3px solid #000; background-color: #EDF1F7; border: 2px solid #FFF") 50/200
                  td(colspan="2", style="padding: 0.3em; border-right: 3px solid #000; background-color: #EDF1F7; border: 2px solid #FFF") =
                tr(style="border-left: 3px solid #000; border-right: 3px solid #000")
                  td(style="padding: 0.3em;  background-color: #EDF1F7; border: 2px solid #FFF") 110/200
                  td(colspan="2", style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") =
                tr(style="border-left: 3px solid #000; border-right: 3px solid #000")
                  td(style="padding: 0.3em; border-left: 3px solid #000; background-color: #EDF1F7; border: 2px solid #FFF") 15/200
                  td(colspan="2", style="padding: 0.3em; border-right: 3px solid #000; background-color: #EDF1F7; border: 2px solid #FFF") =
                tr(style="border-left: 3px solid #000; border-right: 3px solid #000")
                  td(style="padding: 0.3em; border-left: 3px solid #000; background-color: #EDF1F7; border: 2px solid #FFF") 20/200
                  td(colspan="2", style="padding: 0.3em; border-right: 3px solid #000; background-color: #EDF1F7; border: 2px solid #FFF") =
                tr(style="border-left: 3px solid #000; border-right: 3px solid #000; border-bottom: 3px solid #000")
                  td(style="padding: 0.3em; border-left: 3px solid #000; background-color: #EDF1F7; border: 2px solid #FFF") 5/500
                  td(colspan="2", style="padding: 0.3em; border-right: 3px solid #000; background-color: #EDF1F7; border: 2px solid #FFF") =
            table
              tbody
                tr
                  td(colspan="3", style="width: 30%; background-color: #EDF1F7; padding: 0.3em; border: 2px solid #FFF") #[b Y para el acumulado]
                tr(style="border-top: 3px solid #000; border-left: 3px solid #000; border-right: 3px solid #000")
                  td(style="padding: 0.3em; border-left: 3px solid #000; background-color: #EDF1F7; border: 2px solid #FFF") 50/200
                  td(colspan="2", style="padding: 0.3em; border-right: 3px solid #000; background-color: #EDF1F7; border: 2px solid #FFF") =
                tr(style="border-left: 3px solid #000; border-right: 3px solid #000")
                  td(style="padding: 0.3em;  background-color: #EDF1F7; border: 2px solid #FFF") 160/200
                  td(colspan="2", style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") =
                tr(style="border-left: 3px solid #000; border-right: 3px solid #000")
                  td(style="padding: 0.3em; border-left: 3px solid #000; background-color: #EDF1F7; border: 2px solid #FFF") 175/200
                  td(colspan="2", style="padding: 0.3em; border-right: 3px solid #000; background-color: #EDF1F7; border: 2px solid #FFF") =
                tr(style="border-left: 3px solid #000; border-right: 3px solid #000")
                  td(style="padding: 0.3em; border-left: 3px solid #000; background-color: #EDF1F7; border: 2px solid #FFF") 195/200
                  td(colspan="2", style="padding: 0.3em; border-right: 3px solid #000; background-color: #EDF1F7; border: 2px solid #FFF") =
                tr(style="border-left: 3px solid #000; border-right: 3px solid #000; border-bottom: 3px solid #000")
                  td(style="padding: 0.3em; border-left: 3px solid #000; background-color: #EDF1F7; border: 2px solid #FFF") 200/500
                  td(colspan="2", style="padding: 0.3em; border-right: 3px solid #000; background-color: #EDF1F7; border: 2px solid #FFF") =
          .col-lg-8(data-aos="fade-left")
            .row.justify-content-center
              .col-lg-11
                .titulo-sexto.color-acento-botones
                  p.mb-0 #[b Tabla 10.] Frecuencia relativa
                .tabla-a.mb-5
                  table(style="overflow-x: auto")
                    tbody
                      tr(style="background-color: #f57998; background-image: linear-gradient(180deg, #f57998 0%, #954593 100%)")
                        td(style="padding: 0.3em; border: 2px solid #FFF") #[b.text-white Edad]
                        td(style="padding: 0.3em; border: 2px solid #FFF") #[b.text-white Total de empleados]
                        td(style="padding: 0.3em; border: 2px solid #FFF") #[b.text-white Acumulado]
                        td(style="padding: 0.3em; border: 2px solid #FFF") #[b.text-white % Total de empleados]
                        td(style="padding: 0.3em; border: 2px solid #FFF") #[b.text-white Acumulado]
                      tr
                        td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") 18 a 25
                        td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center 50
                        td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center 50
                        td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center 0,25
                        td(style="padding: 0.3em; background-color: #BEBEBE; border: 2px solid #FFF").text-center 0,25
                      tr
                        td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") 25 a 35
                        td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center 110
                        td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center 160
                        td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center 0,55
                        td(style="padding: 0.3em; background-color: #BEBEBE; border: 2px solid #FFF").text-center 0,8
                      tr
                        td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") 35 a 40
                        td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center 15
                        td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center 175
                        td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center 0,075
                        td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center 0,875
                      tr
                        td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") 40 a 50
                        td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center 20
                        td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center 195
                        td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center 0,1
                        td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center 0,975
                      tr
                        td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") Más de 50
                        td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center 5
                        td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center #[b 200]
                        td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center 0,25
                        td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center #[b 1]
                      tr
                        td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF") #[b Total]
                        td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center #[b 200]
                        td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF")
                        td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center
                        td(style="padding: 0.3em; background-color: #EDF1F7; border: 2px solid #FFF").text-center
                .row.justify-content-center
                  .col-12
                    .tarjeta-avatar-b
                      .tarjeta-avatar-b__img
                        img(src='@/assets/curso/tema4/img1.svg' alt='AvatarTop')
                      .tarjeta.tarjeta--verde
                        .p-5
                          p.mb-0 Como se puede observar la mayor concentración con 80% de los datos se encuentran en los dos primeros grupos.
    Separador
    .row
      .col-lg-6.mb-5.mb-lg-0
        #t_4_5
        .titulo-segundo.color-acento-contenido
          h2 4.5 Varianza
        p.mb-4 Se utiliza cuando se quiere saber qué tan dispersos están los datos con respecto a la media, como se observa en la fórmula se eleva al cuadrado lo que evita datos negativos.
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema4/img2.svg', style="width: 250px").m-auto
      .col-lg-6
        #t_4_6
        .titulo-segundo.color-acento-contenido
          h2 4.6 Desviación estándar
        p Se emplea cuando se quiere saber qué tan disperso está un grupo de datos con respecto a la media se representa mediante la siguiente fórmula:
        figure(data-aos="fade-left")
          img(src='@/assets/curso/tema4/img3.svg', style="width: 250px").m-auto

</template>

<script>
export default {
  name: 'Tema4',
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
