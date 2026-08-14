export type Lang = 'es' | 'eu';

export const LANGS: Lang[] = ['es', 'eu'];
export const DEFAULT_LANG: Lang = 'es';

export function pathWithLang(pathname: string, lang: Lang): string {
  const sinPrefijo = pathname.replace(/^\/eu(\/|$)/, '/');
  if (lang === DEFAULT_LANG) return sinPrefijo;
  return sinPrefijo === '/' ? '/eu/' : `/eu${sinPrefijo}`;
}

export const t = {
  es: {
    meta: {
      description: 'Media Maratón de Getxo — 21,097 km por todos los barrios de Getxo.',
    },
    nav: {
      inicio: 'Inicio',
      carrera: 'La carrera',
      dorsales: 'Recogida de dorsales',
      faq: 'Preguntas frecuentes',
      inscribete: '¡Inscríbete!',
      abrirMenu: 'Abrir menú',
    },
    langSwitch: {
      label: 'Euskaraz',
      aria: 'Ikusi webgunea euskaraz',
    },
    footer: {
      contacto: 'Contacto',
      email: 'Email',
      telefono: 'Teléfono',
      direccion: 'Dirección',
      patrocinadores: 'Patrocinadores y colaboradores',
      organizadoPor: 'Organizado por',
      homologadoPor: 'Homologado por',
      desarrolladoPor: 'Web desarrollada por',
      avisoLegal: 'Aviso legal y privacidad',
    },
    home: {
      inscribete: 'Inscríbete',
      dias: 'Días',
      horas: 'Horas',
      minutos: 'Minutos',
      segundos: 'Segundos',
      eyebrow: 'La carrera',
      recorridoTitulo: 'El recorrido',
      verRecorrido: 'Ver el recorrido',
    },
    carrera: {
      tituloLineas: ['La', 'carrera'],
      distancia: 'Distancia',
      recorrido: 'Recorrido',
      altimetria: 'Altimetría',
      horarios: 'Horarios',
      categorias: 'Categorías',
      verMapa: 'Ver mapa del recorrido →',
    },
    dorsales: {
      tituloLineas: ['Recogida de', 'dorsales'],
      cuandoDonde: 'Cuándo y dónde',
      queLlevar: 'Qué llevar',
      lugar: 'Lugar',
      fecha: 'Fecha',
      horario: 'Horario',
    },
    faq: {
      tituloLineas: ['Preguntas', 'frecuentes'],
      subtitulo: 'IV OTSO Media Maratón Getxo · OTSO Getxoko Maratoi Erdia',
    },
    contacto: {
      titulo: 'Contacto',
      email: 'Email',
      telefono: 'Teléfono',
      direccion: 'Dirección',
    },
    resultados: {
      titulo: 'Resultados',
      intro: 'Clasificaciones de ediciones anteriores de la Media Maratón de Getxo.',
      edicion: 'Edición',
    },
  },
  eu: {
    meta: {
      description: 'Getxoko Media Maratoia — 21,097 km Getxoko auzo guztietatik.',
    },
    nav: {
      inicio: 'Hasiera',
      carrera: 'Lasterketa',
      dorsales: 'Dortsalen banaketa',
      faq: 'Ohiko galderak',
      inscribete: 'Izena eman!',
      abrirMenu: 'Ireki menua',
    },
    langSwitch: {
      label: 'Castellano',
      aria: 'Ver la web en castellano',
    },
    footer: {
      contacto: 'Kontaktua',
      email: 'Eposta',
      telefono: 'Telefonoa',
      direccion: 'Helbidea',
      patrocinadores: 'Babesleak eta laguntzaileak',
      organizadoPor: 'Antolatzailea',
      homologadoPor: 'Homologatua',
      desarrolladoPor: 'Webgunea garatua:',
      avisoLegal: 'Lege-oharra eta pribatutasuna',
    },
    home: {
      inscribete: 'Izena eman',
      dias: 'Egun',
      horas: 'Ordu',
      minutos: 'Minutu',
      segundos: 'Segundo',
      eyebrow: 'Lasterketa',
      recorridoTitulo: 'Ibilbidea',
      verRecorrido: 'Ikusi ibilbidea',
    },
    carrera: {
      tituloLineas: ['Lasterketa'],
      distancia: 'Distantzia',
      recorrido: 'Ibilbidea',
      altimetria: 'Altimetria',
      horarios: 'Ordutegiak',
      categorias: 'Kategoriak',
      verMapa: 'Ikusi ibilbidearen mapa →',
    },
    dorsales: {
      tituloLineas: ['Dortsalen', 'banaketa'],
      cuandoDonde: 'Noiz eta non',
      queLlevar: 'Zer eraman',
      lugar: 'Tokia',
      fecha: 'Data',
      horario: 'Ordutegia',
    },
    faq: {
      tituloLineas: ['Ohiko', 'galderak'],
      subtitulo: 'IV. OTSO Getxoko Maratoi Erdia · OTSO Getxoko Maratoi Erdia',
    },
    contacto: {
      titulo: 'Kontaktua',
      email: 'Eposta',
      telefono: 'Telefonoa',
      direccion: 'Helbidea',
    },
    resultados: {
      titulo: 'Emaitzak',
      intro: 'Getxoko Media Maratoiaren aurreko edizioetako sailkapenak.',
      edicion: 'Edizioa',
    },
  },
} as const;
