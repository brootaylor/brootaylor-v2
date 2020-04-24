function buildPlugin(conf) {
  return {
    // Plugin Name
    name: 'build-plugin',
    // Hook into lifecycle
    onInit: () => {
      console.log("Ok, let us begin this build! 🚦");
    },
    onBuild: () => {
      console.log("Building the website 🚧");
    },
    onEnd: () => {
      console.log("Site build finished, site deployed! 🚀");
    }
  }
}

module.exports = buildPlugin
