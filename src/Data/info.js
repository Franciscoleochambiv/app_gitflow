//Este archivo contiene la información de los integrantes del equipo, incluyendo su nombre, descripción, habilidades y proyectos.
// Puedes agregar o modificar la información según sea necesario.


const portfolioData = [
    {
      id: 1,
      info: {
        name: 'Francisco Chambi',
        tagline: 'Backend & Frontend Developer',
        description: 'Soy Técnico en Computación con un fuerte enfoque en el desarrollo backend y frontend, apasionado por crear aplicaciones web modernas y escalables. ' +
                     'Actualmente, estoy ampliando mis conocimientos hacia el rol de DevOps o SRE, explorando tecnologías para la automatización de despliegues y la administración de infraestructuras robustas. ' +
                     'Tengo experiencia en la configuración de servidores, administración de redes con Mikrotik y enlaces inalámbricos, lo que me permite garantizar conectividad eficiente y estable. ' +
                     'Además, estoy comprometido con el aprendizaje continuo, optimizando procesos y creando soluciones tecnológicas innovadoras que impulsen el avance digital. ' +
                     'Me motiva enfrentar desafíos complejos, aplicar buenas prácticas en la gestión de infraestructura y mantenerme en constante evolución en el ámbito tecnológico. ¡Vamos a conectar y crear algo increíble juntos!',
        infoskill: ''


      },
      skills: ['Git', 'CSS', 'Docker', 'React', 'Node.js'],
      projects: [
        {
          id: 1,
          title: 'Proyecto 1',
          description: 'Sistema de Mesa de Partes .',
          image: require('../assets/img/project-img1.png')
        },
        {
          id: 2,
          title: 'Proyecto 2',
          description: 'Sistema de Planillas.',
          image: require('../assets/img/project-img2.png')
        }
        , {
            id: 3,
            title: 'Proyecto 3',
            description: 'Sistema de Facturación.',
            image: require('../assets/img/project-img3.png')
          },
         { 
          id: 4,
          title: 'Proyecto 4',
          description: 'Servidores de Maquinas Virtuales.',
          image: require('../assets/img/project-img4.png')
        },
        {
          id: 5,
          title: 'Proyecto 5',
          description: 'Configuracion de Servidores Linux.',
          image: require('../assets/img/project-img5.png')
        },
        {
            id: 6,
            title: 'Proyecto 6 - Gitlab',
            description: 'Continuos Integrations/ Continuos Deployments.',
            image: require('../assets/img/f1.jpg')
          }


      ]
    },
    {
      id: 2,
      info: {
        name: 'Jacqueline Salvador',
        tagline: 'Administrador de negocios bancarios y Financieros y Estudiante de Ingeniería de Sistemas',
        description: 'Soy estudiante de Ingeniería de Sistemas con interés en el análisis de datos y el desarrollo full-stack. Cuento con experiencia en capacitación, gestión de redes sociales y habilidades en tecnologías clave para el desarrollo web y el manejo de bases de datos.',


      },
      skills: ['SQL', 'React', 'Desarrolo Web'],
      projects: [
        {
          id: 1,
          title: 'Proyecto 1',
          description: 'a2.jpg',
          image: require('../assets/img/z3.jpg')
        },
        {
          id: 2,
          title: 'Proyecto 2',
          description: 'Desarollo Web.',
          image: require('../assets/img/a3.jpg')
        },
        {
          id: 3,
          title: 'Proyecto 3',
          description: 'Desarollo Web.',
          image: require('../assets/img/z3.jpg')
        }

      ]
    },
    {
      id: 3,
      info: {
        name: 'Edgar Aliaga',
        tagline: 'infraestructuras de red y telecomunicaciones',
        description: 'Soy Técnico en Telecomunicaciones y estudiante de Ingeniería de Sistemas e Informática. Me interesa el desarrollo de software, la inteligencia artificial, la ciberseguridad y la infraestructura de telecomunicaciones. Me encanta crear soluciones tecnológicas innovadoras, optimizar procesos y seguir aprendiendo sobre nuevas tecnologías. Explorando el impacto de la IA en la educación universitaria y la eficiencia en redes y telecomunicaciones'
      },
      skills: ['CISCO', 'MIKORIK', 'PYTHON', 'REDES'],
      projects: [
        {
          id: 1,
          title: 'Proyecto 1',
          description: 'Proyecto.',
          image: require('../assets/img/e1.jpg')
        },
        {
            id: 2,
            title: 'Proyecto 2',
            description: 'Proyecto.',
            image: require('../assets/img/e2.jpg')
        },
        {
            id: 3,
            title: 'Proyecto 3',
            description: 'Proyecto.',
            image: require('../assets/img/e3.jpg')
        }
      ]
    },
    {
      id: 4,
      info: {
        name: 'Alexandra Tipacti',
        tagline: 'Developmento de Software',
        description: 'Soy una apasionada estudiante de Ingeniería de Sistemas, con interés en el desarrollo de software, la inteligencia artificial y la ciberseguridad. Me encanta crear soluciones tecnológicas innovadoras, mejorar la eficiencia de los procesos y seguir aprendiendo sobre nuevas tecnologías. ¡Conectemos y construyamos algo increíble juntos'
      },
      skills: ['REACT', 'SQL-NOSQL', 'HTML', 'CIBERSEGURIDAD'],
      projects: [
        {
          id: 1,
          title: 'Proyecto 1',
          description: 'Proyecto.',
          image: require('../assets/img/a1.jpg')
        },
        {
            id: 2,
            title: 'Proyecto 2',
            description: 'Proyecto.',
            image: require('../assets/img/a2.jpg')
        },
        {
          id: 3,
          title: 'Proyecto 3',
          description: 'Proyecto.',
          image: require('../assets/img/a3.jpg')
      }
        
      ]
    },
    {
      id: 5,
      info: {
        name: 'Damian Ricra',
        tagline: 'Desarrollador Web Full Stack',
        description: 'Soy un estudiante de Ingeniería de Sistemas con un enfoque en el desarrollo web full stack. Me apasiona crear aplicaciones web modernas y escalables.'
      },
      skills: ['HTML', 'CSS','C#'],
      projects: [
        {
          id: 1,
          title: 'Proyecto 1',
          description: 'Proyecto.',
          image: require('../assets/img/z1.jpg')
        },
        {
            id: 2,
            title: 'Proyecto 2',
            description: 'Proyecto.',
            image: require('../assets/img/z2.jpg')
        },
        {
            id: 3,
            title: 'Proyecto 3',
            description: 'Proyecto.',
            image: require('../assets/img/z22.jpg')
        }
      ]
    }

  ];
  
  export default portfolioData;
  