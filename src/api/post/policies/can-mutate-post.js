'use strict';

/**
 * `can-mutate-post` policy
 */

const {jwtDecode} = require("jwt-decode");
module.exports = async (policyContext, config, {strapi}) => {
  // Add your own logic here.
  strapi.log.info('In can-mutate-post policy.');

  const {params, request: {headers}} = policyContext;

  if(!headers?.authorization) return false;

  const [, token] = headers.authorization?.split("Bearer ");

  if (!token) return false;

  const {user} = jwtDecode(token);

  const {id} = params;

  const post = await strapi.entityService.findOne("api::post.post", id, {populate: {author: true}});

  return post?.author?.id === user;
};
