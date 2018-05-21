module.exports = {
  presets: [
    '@babel/preset-react',
    [
      '@babel/preset-env',
      {
        modules: false,
        targets: {
          browsers: ['IE 11']
        },
        useBuiltIns: 'usage'
      }
    ]
  ]
};
