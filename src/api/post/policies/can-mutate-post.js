'use strict';

/**
 * `can-mutate-post` policy
 */

module.exports = async (policyContext, config, {strapi}) => {
  // Add your own logic here.

  strapi.log.info('In can-mutate-post policy.');

  if (!policyContext?.state?.user) return false;

  // if we create a post, we can mutate if we authenticated
  if (policyContext.state.route.method === 'POST') return true;

  const user = policyContext.state.user;
  const {id} = policyContext.params;

  const post = await strapi.entityService.findOne("api::post.post", id, {populate: {author: true}});

  return post?.author?.id === user;
};
