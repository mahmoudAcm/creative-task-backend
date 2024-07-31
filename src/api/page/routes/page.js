'use strict';

/**
 * page router
 */

module.exports = {
  routes: [{
    method: 'GET', path: '/page/:slug', handler: 'page.findBySlug',
    config: {
      auth: false
    }
  }]
}
