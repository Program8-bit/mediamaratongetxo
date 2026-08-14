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
    orden: z.number().default(0),
  }),
});

const reglamento = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/reglamento' }),
  schema: z.object({
    titulo: z.string(),
  }),
});

const legal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/legal' }),
  schema: z.object({
    titulo: z.string(),
  }),
});

export const collections = {
  patrocinadores,
  faq,
  reglamento,
  legal,
};
