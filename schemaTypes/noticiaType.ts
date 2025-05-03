// schemas/noticiaType.ts
import {defineField, defineType} from 'sanity'

export const noticiaType = defineType({
  name: 'noticia', // Nome interno (identificador)
  title: 'Notícia', // Nome exibido no Sanity Studio
  type: 'document', // É um tipo de documento principal
  fields: [
    defineField({
      name: 'title',
      title: 'Título', // Rótulo do campo
      type: 'string',
      validation: (rule) => rule.required().error('O título é obrigatório.'),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL Amigável)',
      type: 'slug',
      options: {
         source: 'title', // Gera o slug automaticamente a partir do título
         maxLength: 96,
        },
      validation: (rule) => rule.required().error('O slug é obrigatório.'),
    }),
    defineField({
      name: 'resume',
      title: 'Resumo', // Rótulo do campo
      type: 'string',
      validation: (rule) => rule.required().error('O resumo é obrigatório.'),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Data de Publicação',
      type: 'datetime',
      initialValue: () => new Date().toISOString(), // Valor inicial é a data/hora atual
      validation: (rule) => rule.required().error('A data de publicação é obrigatória.'),
    }),
    defineField({
      name: 'image',
      title: 'Imagem Principal',
      type: 'image',
      options: {
        hotspot: true, // Permite escolher o ponto focal da imagem
      },
      // Opcional, não adicionamos validação required()
    }),
    defineField({
      name: 'body',
      title: 'Conteúdo da Notícia',
      type: 'array', // Um array de blocos para rich text
      of: [{type: 'block'}], // Permite blocos de texto padrão
    }),
  ],
  // Opcional: Melhora a pré-visualização no Studio
  preview: {
    select: {
      title: 'title',
      subtitle: 'publishedAt',
      media: 'image',
    },
    prepare({ title, subtitle, media }) {
      const formattedDate = new Date(subtitle).toLocaleDateString('pt-BR');
      return {
        title: title,
        subtitle: formattedDate,
        media: media,
      };
    },
  },
})