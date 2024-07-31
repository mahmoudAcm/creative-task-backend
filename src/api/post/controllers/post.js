'use strict';

/**
 * post controller
 */

const {createCoreController} = require('@strapi/strapi').factories;

module.exports = createCoreController('api::post.post', ({strapi}) => ({
  async create(ctx) {
    return strapi.service('api::post.post').create({
      data: {
        ...ctx.request.body.data,
        author: [ctx.state.user]
      }
    });
  }
}));
