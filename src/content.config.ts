import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const patrocinadores = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: 'src/content/patrocinadores' }),
  schema: z.object({
    nombre: z.string(),
    logo: z.string(),
    url: z.string().url().optional(),
    nivel: z.enum(['oro', 'plata', 'bronce', 'colaborador']),
  }),
});

const faq = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: 'src/content/faq' }),
  schema: z.object({
    pregunta: z.string(),
    respuesta: z.string(),
    preguntaEu: z.string().optional(),
    respuestaEu: z.string().optional(),
    orden: z.number().default(0),
  }),
});

const reglamento = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/reglamento' }),
  schema: z.object({
    titulo: z.string(),
    lang: z.enum(['es', 'eu']).default('es'),
  }),
});

const legal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/legal' }),
  schema: z.object({
    titulo: z.string(),
    lang: z.enum(['es', 'eu']).default('es'),
  }),
});

export const collections = {
  patrocinadores,
  faq,
  reglamento,
  legal,
};
