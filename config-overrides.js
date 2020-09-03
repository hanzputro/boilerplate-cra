const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  // Antd
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  // Less
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      // modifyVars: {
      //   '@primary-color': '#f48549', // customize as needed
      //   '@link-color': '#e6a07c', // customize as needed
      //   '@font-size-base': '18px', // customize as needed
      // },
    },
  })
);
