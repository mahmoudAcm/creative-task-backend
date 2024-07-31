'use strict';

/**
 * page controller
 */

const {createCoreController} = require('@strapi/strapi').factories;

module.exports = createCoreController('api::page.page', ({strapi}) => ({
  findBySlug: async (ctx) => {
    const {slug} = ctx.params;
    const searchParams = new URLSearchParams(ctx.search);
    const { locale = "en" } = Object.fromEntries(searchParams.entries());

    const entity = await strapi.db.query("api::page.page").findOne({
      where: {slug: {$eq: slug}, locale: { $eq: locale } },
      populate: {
        Content: {
          populate: {
            image: true
          }
        },
        meta: {
          populate: {
            image: true
          }
        }
      }
    });

    if (!entity) return;

    const {Content} = entity;

    const obj = {};

    for (let index = 0; index < Content.length; index++) {
      delete Content[index].__component;
      var content = Content[index];
      if (content.slug) {
        obj[content.slug] = content;
        delete content.slug;
        continue;
      }

      obj["component-" + index] = content;
      delete content.slug;
    }

    delete entity.Content;

    ctx.body = {...entity, ...obj};
  }
}));
