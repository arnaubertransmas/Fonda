export const quill_styles_detail = `
  .blog-content {
    overflow-wrap: break-word;
    word-break: break-word;
  }
  .blog-content p,
  .blog-content li {
    font-size: 14px;
  }

  .blog-content h2 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #471D19;
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
  }
  .blog-content h3 {
    font-size: 1.2rem;
    font-weight: 600;
    color: #471D19;
    margin-top: 1.25rem;
    margin-bottom: 0.4rem;
  }
  .blog-content p {
    margin-bottom: 0.75rem;
    color: #1f2937;
    line-height: 1.7;
  }
  .blog-content ul, .blog-content ol {
    padding-left: 1.5rem;
    margin-bottom: 0.75rem;
    color: #1f2937;
  }
  .blog-content li { margin-bottom: 0.25rem; }
  .blog-content a { color: #471D19; text-decoration: underline; }
  .blog-content strong { font-weight: 700; }
  .blog-content em { font-style: italic; }
`;


export const quill_styles_add = `
  .ql-toolbar {
    border-color: #d1d5db !important;
    border-radius: 8px 8px 0 0 !important;
    background: #fafafa;
  }
  .ql-container {
    border-color: #d1d5db !important;
    border-radius: 0 0 8px 8px !important;
    font-size: 15px;
    min-height: 200px;
  }
  .ql-editor {
    min-height: 200px;
  }
  .ql-editor:focus {
    outline: none;
  }
  .ql-container:focus-within {
    border-color: #471D19 !important;
  }
  .ql-toolbar button:hover .ql-stroke,
  .ql-toolbar button.ql-active .ql-stroke {
    stroke: #471D19 !important;
  }
  .ql-toolbar button:hover .ql-fill,
  .ql-toolbar button.ql-active .ql-fill {
    fill: #471D19 !important;
  }
  .ql-toolbar .ql-picker-label:hover,
  .ql-toolbar .ql-picker-item:hover,
  .ql-toolbar .ql-picker-label.ql-active,
  .ql-toolbar .ql-picker-item.ql-selected {
    color: #471D19 !important;
  }
  /* Noms personalitzats al desplegable */
  .ql-picker.ql-header .ql-picker-item[data-value=""]::before,
  .ql-picker.ql-header .ql-picker-label[data-value=""]::before { content: 'Paràgraf'; }
  .ql-picker.ql-header .ql-picker-item[data-value="2"]::before,
  .ql-picker.ql-header .ql-picker-label[data-value="2"]::before { content: 'Títol (H2)'; }
  .ql-picker.ql-header .ql-picker-item[data-value="3"]::before,
  .ql-picker.ql-header .ql-picker-label[data-value="3"]::before { content: 'Subtítol (H3)'; }
  `