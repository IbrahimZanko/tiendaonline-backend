module.exports = {

    'strapi-neon-tech-db-branches': {
    enabled: false, // Temporarily disabled due to missing orgId
    config: {
      neonApiKey: "napi_l02ysfnao1grjy3g1pbdv68aym45llno17v4njs63ls7grrach6fcpo0gl9rm82s", // get it from here: https://console.neon.tech/app/settings/api-keys
      neonProjectName: "tiendaOnline", // the neon project under wich your DB runs
      neonRole: "neondb_owner", // create it manually under roles for your project first
      gitBranch: "main", // branch can be pinned via this config option. Will not use branch from git then. Usefull for preview/production deployment
        },
    }, 

}

