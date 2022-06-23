export default {
  global: {
    componenteFormativo: 'Análisis de datos: el futuro de las organizaciones',
    descripcionCurso:
      'Este componente proporciona información para aprender a implementar proyectos de ciencia de datos desde las metodologías existentes para su análisis y a partir de la identificación de las necesidades y los requerimientos de una organización.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Importancia del análisis exploratorio de datos',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Metodología de la ciencia de datos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Identificación de problemas y oportunidades de negocio',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Estadística',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Media',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Mediana',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Moda',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Tablas de frecuencia',
            hash: 't_4_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.5',
            titulo: 'Varianza',
            hash: 't_4_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.6',
            titulo: 'Desviación estándar',
            hash: 't_4_6',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Preparación de los datos',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Arias, H., Rojas, M., Sepúlveda, D., Rojas, C., y Rodríguez, Y. (2019). Modelo de negocio <em>Design Thinking</em>. UNAD.',
      link: '',
    },
    {
      referencia:
        'Bustos, M. (2021). Técnicas e instrumentos para recoger datos del hecho social educativo. <em>Revista Científica Retos de la Ciencia</em>, 5(10), 50-61.',
      link: '',
    },
    {
      referencia:
        'Cordoví, V., Benito, V., Pruna, L., Muguercia, A., y Antúnez, J. (2018). Aprendizaje de las medidas de tendencia central a través de la herramienta EXeLearning. Medisan, 22(3), 257-263.',
      link: '',
    },
    {
      referencia:
        'Ortigoza, A., y Mateus, C. (2021). Aprendizaje basado en proyectos de las medidas de dispersión en busca de la cultura estadística en un contexto rural. Innovaciones Educativas, 23(35), 73-87.',
      link: '',
    },
    {
      referencia:
        'Torres, C., Holman, J., y Méndez, J., (2022). Metodología para la analítica de datos. Ideca. ',
      link:
        'https://ideca.gov.co/sites/default/files/MetodologiaAnaliticaDatos.pdf',
    },
  ],
  glosario: [
    {
      termino: '<em>Data Sets</em>',
      significado: 'colección de datos organizados en filas y columnas.',
    },
    {
      termino: 'Dato',
      significado:
        'valor con el que se forman series y colecciones numéricas o categóricas.',
    },
    {
      termino: '<em>Design Thinking</em>',
      significado:
        'metodología utilizada para realizar ideación en búsqueda de solución a problemas. ',
    },
    {
      termino: 'Frecuencias',
      significado:
        'cantidad con la que se repite un elemento, grupo o rango dentro de una colección.',
    },
    {
      termino: 'Media',
      significado:
        'valor que se calcula para determinar el promedio de una serie de datos numéricos.',
    },
    {
      termino: 'Mediana',
      significado: 'valor central de una serie de datos numéricos ordenados.',
    },
    {
      termino: 'Moda',
      significado:
        'valor que se presenta con mayor frecuencia en una serie de datos.',
    },
  ],
  complementario: [
    {
      tema: 'Importancia del análisis exploratorio de datos.',
      referencia:
        'Comunicación numérica. (s.f.). <em>¿Qué es el análisis exploratorios de datos?</em>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=UeMpYEktLfU',
    },
    {
      tema: 'Metodología de la ciencia de datos.',
      referencia:
        'Torres, C., Holman, J., y Méndez, J., (2022). <em>Metodología para la analítica de datos.</em>',
      tipo: 'Artículo',
      link:
        'https://ideca.gov.co/sites/default/files/MetodologiaAnaliticaDatos.pdf',
    },
    {
      tema: 'Preparación de los datos.',
      referencia:
        'Kaggle.com. (2022). <em>Height of Male and Female by Country 2022.</em>',
      tipo: 'Página Web',
      link:
        'https://www.kaggle.com/majyhain/height-of-male-and-female-by-country-2022',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ronald Alexander Vacca Ascanio',
        cargo: 'Experto Temático',
        centro: 'Centro de Diseño Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Jeimy Lorena Romero Perilla',
        cargo: 'Diseñador Instruccional',
        centro:
          'Centro de la industria, la empresa y los servicios - Regional Norte de Santander',
      },
      {
        nombre: 'María Inés Machado López',
        cargo: 'Diseñador Instruccional',
        centro:
          'Centro de la industria, la empresa y los servicios - Regional Norte de Santander',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Metodóloga',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Antonio Vecino Valero',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Andrés Bolaño Rey',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lady Adriana Ariza Luque',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ludwyng Corzo García',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jhon Jairo Urueta Alvarez',
        cargo: 'Desarrollo front-end',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Yenny Patricia Ulloa Villamizar',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
