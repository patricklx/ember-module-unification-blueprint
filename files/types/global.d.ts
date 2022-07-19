// Types for compiled templates

declare module '<%= name %>/templates/*' {
  import { TemplateFactory } from 'htmlbars-inline-precompile';
  const tmpl: TemplateFactory;
  export default tmpl;
}

declare type EmberDataPromise<T> = Promise<T> & { content: T | undefined }
