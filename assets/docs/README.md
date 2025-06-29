# Estructura Técnica de las Carpetas

Este archivo explica la organización interna del laboratorio, el cual contiene la versión funcional del proyecto el cual esta desplegado a través de GitHub Pages. También se documentan las principales decisiones técnicas tomadas durante su implementación.

---
# Estructura de los archivos del laboratorio
```
/assets
│ ├── docs/
│ │ └── README.md # Explicacion de la estructura de las carpetas
│ └── img/ # Imágenes usadas en varias pantallas
│
├── shared/ # Recursos compartidos entre páginas
| └── css/
│   └── styles.css # Estilos generales y personalizados del sitio
|
├── views/
│ ├── configuracion/ # Recursos específicos de configuración de usuario
| | ├── configuracion.html # Pantalla de configuración de perfil
| | ├── configuracion.css # Estilos personalizados de la pagina
│ │ └── configuracion.js # Lógica JS para envío de formularios vía fetch()
| |
│ └── contacto/ # Recursos específicos de la vista de contacto
|   ├── contacto.html # Página de contacto con formulario
|   ├── contacto.css # Estilos personalizados de la pagina
│   └── contacto.js # Lógica JS para envío de formularios vía fetch()
|
├── index.html # Página principal del sitio (seccion de noticias)
└── README.md # Explicacion general del proyecto
```

---

## Justificación de Decisiones Técnicas

Se usó `localStorage` por las siguientes razones:
- **Persistencia local**: Todos los datos que se envian por el formulario se conservan incluso al recargar o cerrar el navegador, asi se envie el formulario varias veces todo se guardara en localStorage
- **Simulación de persistencia**: En conjunto con la API suministrada, se simula el envío de datos sin necesidad de una base de datos real.

--- 

La estructura actual permite mantener un desarrollo limpio, escalable, y compatible con buenas prácticas web, facilitando además su despliegue público.

