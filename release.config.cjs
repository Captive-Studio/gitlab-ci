/* eslint-disable import/no-unresolved */

const makeConfig = require('@wavevision/semantic-release/config');
const { CONFIG_GITLAB } = require('@wavevision/semantic-release/config/constants');

const semanticConfig = makeConfig({
  config: CONFIG_GITLAB,
  branches: ['main', 'next'],
  git: { enabled: true, assets: ['package.json', 'README.md', 'CHANGELOG.md'] },
});
semanticConfig.plugins.splice(
  1, // position
  0, // delete nothing
  [
    '@semantic-release/exec',
    // eslint-disable-next-line no-template-curly-in-string
    { prepareCmd: "sed -i -e 's/  ref: .*/  ref: ${nextRelease.version}/g' README.md" },
  ],
  '@semantic-release/release-notes-generator',
  '@semantic-release/changelog'
);
module.exports = semanticConfig;
