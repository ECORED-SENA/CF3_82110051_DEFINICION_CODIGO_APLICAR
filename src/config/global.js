export default {
  global: {
    Name: 'Definición del código a aplicar',
    Description:
      'El componente formativo aborda la importancia de los códigos de soldadura en proyectos metálicos para garantizar seguridad, calidad y cumplimiento normativo. Describe su aplicación en estructuras, equipos sometidos a presión, tanques de almacenamiento y otros componentes. Incluye normativas clave como AWS y ASME, su relación contractual y requisitos técnicos. Además, ofrece glosario, bibliografía y créditos de elaboración.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Selección del código de soldadura según producto a fabricar',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Equipos sometidos a presión',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Estructuras',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Documentos normativos utilizados en Colombia',
            hash: 't_1_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/',
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
  complementario: [
    {
      tema: 'Selección del código de soldadura según producto a fabricar',
      referencia:
        'INGEDEMY. (2024). AWS D1.5: CÓDIGO DE SOLDADURA PARA PUENTES. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=6bM7Tbmds94',
    },
    {
      tema: 'Equipos sometidos a presión',
      referencia:
        'Gestión RH. (2020). ¿Qué es un recipiente sujeto a presión?. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=1wdrR-Zfq18',
    },
    {
      tema: 'Estructuras',
      referencia:
        'Ingeniero Del Acero. (2020). Diseño de elementos a tensión  área neta, bloque de cortante, fluencia y ruptura. [Archivo de video] Youtube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=zRi8XBbqUDY&list=PLDngK8m7_4cnL3kfC4U8T2v4Vijwh1QLf ',
    },
    {
      tema: 'Documentos normativos utilizados en Colombia',
      referencia: 'SENA (2005). Evaluación y Control.',
      tipo: 'Documento ',
      link: 'downloads/Anexo1.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Acero',
      significado:
        'aleación de hierro con pequeñas cantidades de carbono, diseñada para procesos de soldadura.',
    },
    {
      termino: 'Calderas',
      significado:
        'equipos para generar vapor o transferir calor a un fluido, regulados por normas específicas.',
    },
    {
      termino: 'Consumibles',
      significado:
        'materiales usados en soldadura, como electrodos y gases, que se integran al proceso.',
    },
    {
      termino: 'Fluencia',
      significado:
        'fenómeno metalúrgico entre deformaciones elásticas y plásticas, caracterizado por alta deformación.',
    },
    {
      termino: 'Intercambiador',
      significado:
        'dispositivo que transfiere calor entre dos medios separados o en contacto.',
    },
    {
      termino: 'Mandatorio',
      significado:
        'actividad que debe realizarse según procedimientos establecidos sin excepciones.',
    },
    {
      termino: 'Materiales base',
      significado: 'acero u otro metal que será soldado en el proceso.',
    },
    {
      termino: 'Puente grúa',
      significado:
        'estructura usada en fábricas para izar y desplazar cargas pesadas de forma segura y eficiente.',
    },
    {
      termino: 'Tanques',
      significado:
        'recipientes de almacenamiento de líquidos o gases, diseñados para evitar degradación ambiental.',
    },
    {
      termino: 'Tuberías',
      significado:
        'conductos diseñados para transportar fluidos, como gas o petróleo, bajo estándares técnicos.',
    },
  ],
  referencias: [
    {
      referencia:
        'American Petroleum Institute. (2015).<em>Norma API 1104</em>. ',
      link: 'http://es.scribd.com/doc/98471009/Norma-API-1104-Traducida',
    },
    {
      referencia:
        'American Welding Society. (2013). <em>Norma para la certificación de inspectores de soldaduras de la AWS.</em> ',
      link: 'https://www.aws.org/library/doclib/QC1-2007-Spanish.pdf',
    },
    {
      referencia:
        'Sociedad Americana de Ingenieros Mecánicos. (2015). <em>Código ASME Sección IX - Soldadura: Desarrollo y calificación de procedimientos y soldadores.</em> ',
      link: 'https://drive.google.com/file/d/0Bzx8Vj6lHfXaX0dEZzJveFNyS00/edit',
    },
    {
      referencia:
        ' Solano Montaña, E. (2007). <em>WPS ASME - Calificación y procedimiento de platina y tubería según ASME.</em> ',
      link:
        'http://metalurgia-metalurgia.blogspot.com.co/2007/08/wps-asme.html',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermudez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Hivo Alfonso Patarroyo Pulido',
          cargo: 'Experto temático',
          centro: 'Centro de Materiales y Ensayos - Regional Distrito Capital',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yerson Fabian Zárate Saavedra',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Manuel Felipe Echavarria Orozco',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete Lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete Lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniela Muñoz Bedoya',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Andrés Felipe Guevara Ariza',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Raúl Mosquera Serrano',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
