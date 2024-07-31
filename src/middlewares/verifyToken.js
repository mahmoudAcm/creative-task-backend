'use strict';

/**
 * `verifyToken` middleware
 */

const {jwtDecode} = require("jwt-decode");

module.exports = (config, {strapi}) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In verifyToken middleware.');

    const {request: {headers}} = ctx;

    if (!headers?.authorization) return next();

    const [, token] = headers.authorization?.split("Bearer ");

    if (!token) return next();

    const {user} = jwtDecode(token);

    ctx.state.user = user;

    await next();
  };
};
