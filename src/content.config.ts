import { defineCollection, z } from 'astro:content';

const recipes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    flameLevel: z.number().min(1).max(5),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    // Recipe specifics
    prepTime: z.string(),
    cookTime: z.string(),
    totalTime: z.string(),
    servings: z.number(),
    calories: z.string().optional(),
    scoville: z.string(),
    category: z.string(),
    cuisine: z.string().default('International'),
    // Ingredients as structured data
    ingredients: z.array(z.object({
      group: z.string().optional(),
      items: z.array(z.string()),
    })),
    // Steps as structured data
    steps: z.array(z.object({
      title: z.string().optional(),
      text: z.string(),
      tip: z.string().optional(),
    })),
    // SEO
    seoKeywords: z.array(z.string()).default([]),
    // Media
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    // Taxonomy
    tags: z.array(z.string()).default([]),
    relatedRecipes: z.array(z.string()).default([]),
    // Affiliate
    affiliateProducts: z.array(z.object({
      name: z.string(),
      url: z.string(),
      description: z.string().optional(),
    })).default([]),
  }),
});

export const collections = { recipes };
