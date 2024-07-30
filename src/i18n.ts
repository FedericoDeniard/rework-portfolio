import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import LanguageDetector from 'i18next-browser-languagedetector';
// don't want to use this?
// have a look at the Quick start guide 
// for passing in lng and translations on init

i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  // want your translations to be loaded from a professional CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {

      en: {
        translation: {
          home: {
            "dev": "Fullstack Developer",
            "description": "Hello! I am Federico Deniard, a programming student and full-stack developer with expertise in Python and JavaScript."
          },
        skills: {
            "title": "Skills",
        },
        projects: {
            "title": "Projects",
            "chordoku": "Chordoku",
            "orderer_pairs": "Orderer Pairs",
            "memory_game": "Memory Game",
        },
        header : {
          "home": "Home",
          "skills": "Skills",
          "projects": "Projects",
          "contact": "Contact",
        },
        cards : {
          "title": "Technologies used",
        },
        contact : {
          "title": "Contact",
          "message": "I'm always open to new opportunities and collaborations. Feel free to get in touch with me via LinkedIn, Gmail, or GitHub. I look forward to hearing from you soon!",
        }
        }
      },
      es: {
        translation: {
          home: {
            "dev": "Desarrollador Fullstack",
            "description": "Hola! Soy Federico Deniard, estudiante de programación y desarrollador fullstack con stack en Python y JavaScript."
          },
          skills: {
            "title": "Habilidades",
          },
          projects: {
            "title": "Proyectos",
            "chordoku": "Chordoku",
            "orderer_pairs": "Pares Ordenados",
            "memory_game": "Juego de Memoria",
          },
          header : {
            "home": "Inicio",
            "skills": "Habilidades",
            "projects": "Proyectos",
            "contact": "Contacto",
          },
          cards : {
            "title": "Tecnologías usadas",
          },
          contact : {
            "title": "Contacto",
            "message": "Estoy siempre abierto a nuevas oportunidades y colaboraciones. No dudes en ponerte en contacto conmigo a través de LinkedIn, Gmail o GitHub. ¡Gracias por tu interés!",
          }
        }
      }
    }
  });


export default i18n;