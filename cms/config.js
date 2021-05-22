export default {
  cms_manual_init: true,
  backend: {
    name: 'git-gateway',
  },
  media_folder: 'public/img',
  public_folder: 'img',
  collections: [
    {
      name: 'pages',
      label: 'Pages',
      files: [
        {
          label: 'Home',
          name: 'home',
          file: 'content/pages/home.md',
          fields: [
            {
              label: 'Page title',
              name: 'page_title',
              widget: 'string',
            },
            {
              label: 'Page description (SEO)',
              name: 'page_description',
              widget: 'string',
            },
            {
              label: 'Slider title',
              name: 'slider_title',
              widget: 'string',
            },
            {
              label: 'Slider text',
              name: 'slider_text',
              widget: 'markdown',
            },
          ],
        },
      ],
    },
  ],
};
