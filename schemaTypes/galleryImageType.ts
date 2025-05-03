// schemas/galleryImage.ts (ou defina no mesmo arquivo do portfolioType se preferir)
import {defineField, defineType} from 'sanity'

export const galleryImageType = defineType({
  name: 'galleryImage',
  title: 'Imagem da Galeria',
  type: 'object', // Importante: tipo 'object' para ser usado dentro de arrays
  fields: [
    defineField({
      name: 'image',
      title: 'Imagem',
      type: 'image',
      options: {
        hotspot: true, // Permite escolher o ponto focal da imagem
      },
      validation: (rule) => rule.required().error('A imagem é obrigatória.'),
    }),
    defineField({
      name: 'descricao',
      title: 'Descrição',
      type: 'string',
      // Não é obrigatório, conforme solicitado (descrição *para* cada imagem)
    }),
  ],
  // Adiciona uma pré-visualização no Sanity Studio
  preview: {
    select: {
      image: 'image',
      title: 'descricao',
    },
    prepare({image, title}) {
      return {
        title: title || 'Imagem sem descrição',
        media: image, // O Sanity aceita o próprio campo image aqui
      }
    },
  },
})