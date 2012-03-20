({
  baseUrl: "js/",
  appDir: "public/",
  dir: "publish/",
  optimizeCss: "none",
  optimize: "none",
  uglify: {
    "beautify": false,
    "no-dead-code": true,
    "reserved-names": "require"
  },
  findNestedDependencies:true,
  locale: "en-gb",
  mainConfigFile:'public/js/main.js',
  name: "main",
  modules:[
    {
      name:"main"
    }
  ]
})