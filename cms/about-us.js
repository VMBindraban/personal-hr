export default {
  label: 'Over PHR',
  name: 'about-us',
  file: 'content/pages/over-phr.md',
  fields: [
    // Generic
    {
      label: 'Page title',
      name: 'page_title',
      widget: 'string',
    },
    {
      label: 'Page description',
      name: 'page_description',
      widget: 'string',
      required: false,
      hint: 'Optional, for SEO (google)',
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
    // PAGE
    {
      label: 'Main title',
      name: 'main_title',
      widget: 'string',
    },
    {
      label: 'Main bold text',
      name: 'main_text',
      widget: 'text',
      required: false,
      hint: 'Optional, this is shown above the main text in bold',
    },
    {
      label: 'Main text',
      name: 'main_text2',
      widget: 'text',
    },
    {
      label: 'Image',
      name: 'image',
      widget: 'image',
      hint: 'Image right-side of the content',
    },
  ],
};
