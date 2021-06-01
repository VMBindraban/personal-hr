return {
  label: 'Home',
  name: 'home',
  file: 'content/pages/home.md',
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
      label: 'Main text',
      name: 'main_text',
      widget: 'text',
    },
    {
      label: 'Section 1 icon',
      name: 'section1_icon',
      widget: 'string',
      hint: 'Options: headphones ,photo-camera ,diamond ,business ,light ,house-sketch ,left-arrow ,right-arrow ,cup ,trophy ,users ,layers ,computer ,vector ,bar-chart ,access-denied',
    },
    {
      label: 'Section 1 title',
      name: 'section1_title',
      widget: 'string',
    },
    {
      label: 'Section 1 text',
      name: 'section1_text',
      widget: 'string',
    },
    {
      label: 'Section 2 icon',
      name: 'section2_icon',
      widget: 'string',
      hint: 'Options: headphones ,photo-camera ,diamond ,business ,light ,house-sketch ,left-arrow ,right-arrow ,cup ,trophy ,users ,layers ,computer ,vector ,bar-chart ,access-denied',
    },
    {
      label: 'Section 2 title',
      name: 'section2_title',
      widget: 'string',
    },
    {
      label: 'Section 2 text',
      name: 'section2_text',
      widget: 'string',
    },
    {
      label: 'Section 3 icon',
      name: 'section3_icon',
      widget: 'string',
      hint: 'Options: headphones ,photo-camera ,diamond ,business ,light ,house-sketch ,left-arrow ,right-arrow ,cup ,trophy ,users ,layers ,computer ,vector ,bar-chart ,access-denied',
    },
    {
      label: 'Section 3 title',
      name: 'section3_title',
      widget: 'string',
    },
    {
      label: 'Section 3 text',
      name: 'section3_text',
      widget: 'string',
    },
  ],
};
