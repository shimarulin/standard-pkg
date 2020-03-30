const conventionalChangelogOptions = {
  preset: 'conventionalcommits',
  // https://github.com/conventional-changelog/conventional-changelog-config-spec/blob/master/versions/2.1.0/README.md
  presetConfig: {
    header: 'Changelog',
  },
}

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
    '@semantic-release/changelog',
    // https://github.com/semantic-release/npm
    '@semantic-release/npm',
    // https://github.com/semantic-release/git#options
    '@semantic-release/git',
  ],
}
