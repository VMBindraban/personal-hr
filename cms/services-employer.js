export default {
  label: 'Diensten werkgever',
  name: 'services-employer',
  file: 'content/pages/services-employer.md',
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
      hint: 'For SEO (google)',
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
      hint: 'This is shown above the main text in bold',
    },
    {
      label: 'Main text',
      name: 'main_text2',
      widget: 'text',
    },
    {
      label: 'CTA title',
      name: 'cta_title',
      widget: 'string',
    },
    {
      label: 'CTA text',
      name: 'cta_text',
      widget: 'string',
    },
    {
      label: 'CTA image',
      name: 'cta_image',
      widget: 'image',
    },

    {
      label: 'Contant title',
      name: 'contant_title',
      widget: 'string',
    },
  ],
};
