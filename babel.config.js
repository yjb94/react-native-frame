module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['babel-plugin-styled-components'],
    [require('@babel/plugin-proposal-decorators'), {legacy: true}],
  ],
};
