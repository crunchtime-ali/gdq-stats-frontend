/// <references types="houdini-svelte">

/** @type {import('houdini').ConfigFile} */
const config = {
  watchSchema: {
    url: 'https://dev.api.gdq-stats.tricirc.de/gql/query'
  },
  plugins: {
    'houdini-svelte': {}
  }
};

export default config;
