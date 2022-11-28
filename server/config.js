'use strict';

module.exports = {
  default: {
    syncDir: "config/sync/",
    minify: false,
    soft: false,
    importOnBootstrap: false,
    customTypes: [],
    excludedTypes: [],
    excludedConfig: [
      "core-store.plugin_users-permissions_grant",
      "core-store.plugin_upload_metrics",
    ],
  },
  validator() {},
};
