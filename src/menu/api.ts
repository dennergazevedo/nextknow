export interface IItem{
  title: string,
  createdBy: string,
  createdLink: string,
  menu: string | Array<string>,
  url: string,
  destaque: Boolean,
  img: string
}

export default <Array<IItem>>[
  {
    "title": "TypeScript - Uma Breve Explicação",
    "createdBy": "Pedro Vasconcellos",
    "createdLink": "pedro-vasconcellos",
    "menu": ["BACKEND", "FRONTEND"],
    "url": "/backend/sobre-typescript",
    "destaque": false,
    "img": "https://i.imgur.com/wsViFXw.jpg"
  },
  {
    "title": "InputOn - VSCode Dark Theme",
    "createdBy": "Denner Azevedo",
    "createdLink": "denner-azevedo",
    "menu": "TECH",
    "url": "/tech/vscode-dark-theme",
    "destaque": false,
    "img": "https://i.imgur.com/UEHnoWn.png"
  },
  {
    "title": "React Hooks - Redux + Redux-Saga + Persist",
    "createdBy": "Denner Azevedo",
    "createdLink": "denner-azevedo",
    "menu": "FRONTEND",
    "url": "/frontend/reacthooks-redux",
    "destaque": true,
    "img": "https://i.imgur.com/X95an4h.png"
  },
  {
    "title": "InputOn - Template CRA versão TypeScript",
    "createdBy": "Pedro Vasconcellos",
    "createdLink": "pedro-vasconcellos",
    "menu": "FRONTEND",
    "url": "/frontend/template-cra-pdr-typescript",
    "destaque": true,
    "img": "https://i.imgur.com/TTPmvCA.png"
  },
  {
    "title": "ReactJS - Consumindo API REST com Axios.",
    "createdBy": "Denner Azevedo",
    "createdLink": "denner-azevedo",
    "menu": "FRONTEND",
    "url": "/frontend/how-to-consume-api-from-axios",
    "destaque": false,
    "img": "https://i.imgur.com/51TdMvu.png"
  },
  {
    "title": "ReactJS - Hooks, Props e States.",
    "createdBy": "Denner Azevedo",
    "createdLink": "denner-azevedo",
    "menu": "FRONTEND",
    "url": "/frontend/react-hooks-props-state",
    "destaque": false,
    "img": "https://i.imgur.com/mclcMEJ.png"
  },
  {
    "title": "InputOn - Template CRA ReactJS.",
    "createdBy": "Denner Azevedo",
    "createdLink": "denner-azevedo",
    "menu": "FRONTEND",
    "url": "/frontend/template-cra-dnr",
    "destaque": false,
    "img": "https://i.imgur.com/JGPqGRR.png"
  },
  {
    "title": "Sucrase no NodeJS.",
    "createdBy": "Denner Azevedo",
    "createdLink": "denner-azevedo",
    "menu": "BACKEND",
    "url": "/backend/sucrase-with-nodejs",
    "destaque": false,
    "img": "https://i.imgur.com/q1en1Pd.png"
  },
  {
    "title": "Um pouco sobre APIs, REST e RESTful.",
    "createdBy": "Pedro Vasconcellos",
    "createdLink": "pedro-vasconcellos",
    "menu": "BACKEND",
    "url": "/backend/api-rest-restful",
    "destaque": false,
    "img": "https://i.imgur.com/1ORqPM9.png"
  },
  {
    "title": "Criando uma API REST com NodeJS Express.",
    "createdBy": "Denner Azevedo",
    "createdLink": "denner-azevedo",
    "menu": "BACKEND",
    "url": "/backend/api-rest-express-nodejs",
    "destaque": false,
    "img": "https://i.imgur.com/KC5lYEY.png"
  },
  {
    "title": "UX e UI design: entenda finalmente.",
    "createdBy": "Denner Azevedo",
    "createdLink": "denner-azevedo",
    "menu": "FRONTEND",
    "url": "/frontend/ux-ui-design",
    "destaque": true,
    "img": "https://i.imgur.com/xyorwuR.png"
  }
]