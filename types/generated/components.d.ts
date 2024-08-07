import type { Schema, Attribute } from '@strapi/strapi';

export interface SeoMeta extends Schema.Component {
  collectionName: 'components_seo_metas';
  info: {
    displayName: 'Meta';
    icon: 'apps';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface BlocksSpotlight extends Schema.Component {
  collectionName: 'components_blocks_spotlights';
  info: {
    displayName: 'Spotlight';
    icon: 'apps';
  };
  attributes: {
    title: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'seo.meta': SeoMeta;
      'blocks.spotlight': BlocksSpotlight;
    }
  }
}
