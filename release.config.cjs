/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
const makeConfig = require('@wavevision/semantic-release/config');
const { CONFIG_GITLAB } = require('@wavevision/semantic-release/config/constants');

const semanticConfig = makeConfig({
  config: CONFIG_GITLAB,
  branches: ['main', 'next'],
  git: { enabled: true, assets: ['package.json', 'README.md', 'CHANGELOG.md'] },
});
semanticConfig.plugins.splice(1, 0, [
  '@semantic-release/exec',
  // eslint-disable-next-line no-template-curly-in-string
  { prepareCmd: "sed -i -e 's/ref: .*/ref: v${nextRelease.version}/g' README.md" },
]);
module.exports = semanticConfig;
