export default {
  label: 'Contact',
  name: 'contact',
  file: 'content/pages/contact.md',
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
      label: 'Contact title',
      name: 'contact_title',
      widget: 'string',
    },
    {
      label: 'Contact text',
      name: 'contact_text',
      widget: 'text',
    },
    {
      label: 'Address',
      name: 'contact_address',
      widget: 'string',
    },
    {
      label: 'Email',
      name: 'contact_email',
      widget: 'string',
    },
    {
      label: 'Phone number',
      name: 'contact_phonenumber',
      widget: 'string',
    },
    {
      label: 'KVK number',
      name: 'contact_kvk',
      widget: 'string',
    },
    {
      label: 'BTW number',
      name: 'contact_taxnumber',
      widget: 'string',
    },
  ],
};
