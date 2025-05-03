// schemas/portfolioType.ts
import {defineField, defineType} from 'sanity'

export const portfolioType = defineType({
  name: 'portfolio',
  title: 'Portfólio',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título do Projeto',
      type: 'string',
      validation: (rule) => rule.required().error('O título do projeto é obrigatório.'),
    }),
    defineField({
      name: 'subTitle',
      title: 'Sub Título',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL Amigável)',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (rule) => rule.required().error('O slug é obrigatório.'),
    }),
     defineField({
      name: 'publishedAt', // Ou talvez 'completionDate' (Data de Conclusão) faça mais sentido?
      title: 'Data de Conclusão/Publicação',
      type: 'date', // Usando 'date' em vez de 'datetime' talvez seja melhor para portfólio
      options: {
        dateFormat: 'DD/MM/YYYY',
      },
      initialValue: () => new Date().toISOString().split('T')[0], // Apenas a data
      validation: (rule) => rule.required().error('A data é obrigatória.'),
    }),
    defineField({
      name: 'imagemCapa',
      title: 'Imagem de Capa',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required().error('A imagem de capa é obrigatória.'),
    }),
    defineField({
        name: 'descricaoProjeto', // Adicionando uma descrição geral para o projeto
        title: 'Descrição do Projeto',
        type: 'array', // Rich text para descrever o projeto
        of: [{type: 'block'}]
    }),
    defineField({
      name: 'galeria',
      title: 'Galeria de Imagens',
      type: 'array', // Um array (lista)
      of: [
        { type: 'galleryImage' } // Referencia o tipo de objeto que definimos antes
      ],
    }),
  ],
   // Opcional: Melhora a pré-visualização no Studio
   preview: {
    select: {
      title: 'title',
      subtitle: 'publishedAt', // ou outra data relevante
      media: 'imagemCapa', // Usa a imagem de capa como mídia
    },
     prepare({ title, subtitle, media }) {
      const formattedDate = subtitle ? new Date(subtitle + 'T00:00:00').toLocaleDateString('pt-BR') : ''; // Ajuste para tipo 'date'
      return {
        title: title,
        subtitle: formattedDate,
        media: media,
      };
    },
  },
})