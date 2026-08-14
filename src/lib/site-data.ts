import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'yaml';

function readYaml<T>(relativePath: string): T {
  const fullPath = path.join(process.cwd(), relativePath);
  return parse(fs.readFileSync(fullPath, 'utf-8')) as T;
}

export interface Settings {
  nombreEvento: string;
  fecha: string;
  lugarSalida: string;
  horaSalida: string;
  subtitulo: string;
  enlaceInscripcion: string;
  fechaHoraISO?: string;
  colorPrimario?: string;
  colorAcento?: string;
}

export interface Carrera {
  distancia: string;
  recorrido: string;
  altimetria: string;
  horarios: string;
  categorias: string;
  mapaUrl?: string;
}

export interface Dorsales {
  lugar: string;
  fecha: string;
  horario: string;
  aviso?: string;
  queLlevar: string;
}

export interface Resultados {
  edicionesPasadas: { anio: string; enlace: string }[];
}

export interface Contacto {
  email: string;
  telefono: string;
  direccion: string;
  instagram?: string;
  facebook?: string;
}

export const getSettings = () => readYaml<Settings>('src/content/settings/settings.yaml');
export const getCarrera = () => readYaml<Carrera>('src/content/carrera/carrera.yaml');
export const getDorsales = () => readYaml<Dorsales>('src/content/dorsales/dorsales.yaml');
export const getResultados = () => readYaml<Resultados>('src/content/resultados/resultados.yaml');
export const getContacto = () => readYaml<Contacto>('src/content/contacto/contacto.yaml');
