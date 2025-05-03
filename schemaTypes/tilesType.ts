import {defineField, defineType} from 'sanity'

export const tilesType = defineType({
  name: 'tiles',
  title: 'Blocos da Home',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'cor',
      title: 'Cor',
      type: 'string',
      options: {
        list: [
          {title: 'Verde', value: '#C5E04C'},
          {title: 'Lilas', value: '#B0ADD8'},
          {title: 'Roxo', value: '#7E65AE'},
          {title: 'Cinza', value: '#8D939D'},
        ],
        layout: 'dropdown',
      },
      description: 'Cor de fundo do bloco',
    }),
    defineField({
      name: 'image',
      title: 'Imagem Capa',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'tipoTiles',
      title: 'Tipo do Tile',
      type: 'string',
      options: {
        list: [
          {title: 'Grande', value: 'single-large'},
          {title: 'Pequeno', value: 'four-smalls'},
          {title: 'Retangulo Vertical', value: 'vertical-combo'},
          {title: 'Retangulo Horizontal', value: 'horizontal-combo'},
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'tipoLink',
      title: 'Tipo de Link',
      type: 'string',
      options: {
        list: [
          {title: 'Interno', value: 'interno'},
          {title: 'Externo', value: 'externo'},
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'string',
      description: 'URL de destino do tile (opcional, usado para tipo Link ou Botão)'
    }),
  ],
})
