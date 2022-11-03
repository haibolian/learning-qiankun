module.exports = {
  webpack: (config) => {
    config.output.library = `m-react`;
    config.output.libraryTarget = 'umd';
    return config;
  },

  devServer: (_) => {
    const config = _;
    config.headers = {
      'Access-Control-Allow-Origin': '*',
    };
    return config;
  },
};