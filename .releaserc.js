const conventionalChangelogOptions = {
  preset: 'conventionalcommits',
  // https://github.com/conventional-changelog/conventional-changelog-config-spec/blob/master/versions/2.1.0/README.md
  presetConfig: {},
}
const changelogTitle =
`# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.`

module.exports = {
  branches: [
    'master',
  ],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      // https://github.com/semantic-release/commit-analyzer#options
      {
        ...conventionalChangelogOptions,
      },
    ],
    [
      '@semantic-release/release-notes-generator',
      // https://github.com/semantic-release/release-notes-generator#options
      {
        ...conventionalChangelogOptions,
      },
    ],
    // https://github.com/semantic-release/changelog#options
    [
      '@semantic-release/changelog',
      // https://github.com/semantic-release/release-notes-generator#options
      {
        changelogTitle,
      },
    ],
    // https://github.com/semantic-release/npm
    '@semantic-release/npm',
    // https://github.com/semantic-release/git#options
    '@semantic-release/git',
  ],
}
