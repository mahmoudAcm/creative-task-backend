'use strict';

/**
 * post router
 */

const {createCoreRouter} = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::post.post', {

  config: {
    find: {
      auth: false,
    },
    findOne: {
      auth: false
    },
    create: {
      auth: false,
      policies: ['can-mutate-post']
    },
    update: {
      auth: false,
      policies: ['can-mutate-post']
    },
    delete: {
      auth: false,
      policies: ['can-mutate-post']
    },
  }
});
