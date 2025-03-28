module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.pdf$/,
      use: 'file-loader',
    });
    return config;
  },
};
