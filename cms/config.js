export default {
  cms_manual_init: true,
  backend: {
    name: 'git-gateway',
    branch: 'main',
  },
  media_folder: 'public/upload',
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
              label: 'Banner title',
              name: 'banner_title',
              widget: 'string',
            },
            {
              label: 'Banner image',
              name: 'banner_image',
              widget: 'image',
            },
          ],
        },
      ],
    },
  ],
};
