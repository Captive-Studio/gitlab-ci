// eslint-disable-next-line import/no-extraneous-dependencies
const makeConfig = require('@wavevision/semantic-release/config');
// eslint-disable-next-line import/no-extraneous-dependencies
const { CONFIG_GITLAB } = require('@wavevision/semantic-release/config/constants');

const semanticConfig = makeConfig({
  config: CONFIG_GITLAB,
  branches: ['main', 'next'],
  git: { enabled: true, assets: ['package.json'] },
});
semanticConfig.plugins.splice(1, 0, [
  '@semantic-release/exec',
  // eslint-disable-next-line no-template-curly-in-string
  { prepareCmd: "sed -i -e 's/ref: .*/ref: v${nextRelease.version}/g' README.md" },
]);
module.exports = semanticConfig;
