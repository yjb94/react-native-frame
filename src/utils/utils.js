import {Platform, Dimensions, Alert} from 'react-native';
import {APP_NAME} from '../constants/const';

export function getScreen() {
  return {
    ...Dimensions.get('window'),
  };
}

export function isIphoneX() {
  const dim = getScreen();

  return Platform.OS === 'ios' && (isIPhoneXSize(dim) || isIPhoneXrSize(dim));
}

export function isIPhoneXSize(dim) {
  return dim.height == 812 || dim.width == 812;
}

export function isIPhoneXrSize(dim) {
  return dim.height == 896 || dim.width == 896;
}

export function StatusBarHeight() {
  return Platform.select({
    ios: isIphoneX() ? 44 : 20,
    android: 0,
  });
}

export function hexToRGBA(hex) {
  var c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('');
    if (c.length == 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = '0x' + c.join('');
    return (
      // eslint-disable-next-line no-bitwise
      'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',1)'
    );
  }
  throw new Error('Bad Hex');
}

export function changeOpacity(color, value) {
  if (!color.includes(',')) color = hexToRGBA(color);
  let parts = color.split(',');
  parts[parts.length - 1] = `${value})`;
  return parts.join(',');
}

export function numberWithCommas(x = 0) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export const removeEmpty = obj => {
  Object.keys(obj).forEach(key => obj[key] == null && delete obj[key]);
  return obj;
};

export const validateEmail = email => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

export const showAlert = (message, onConfirm) => {
  let buttons = [];
  if (onConfirm) {
    buttons = [
      {text: 'Cancel', style: 'cancel'},
      {text: 'OK', onPress: onConfirm},
    ];
  }
  Alert.alert(APP_NAME, message, buttons);
};

export const getQS = params => {
  var esc = encodeURIComponent;
  return Object.keys(params)
    .map(k => esc(k) + '=' + esc(params[k]))
    .join('&');
};

export const tuneObjectWithKey = (obj, keyName) => {
  let tuned = {};
  obj.forEach(each => {
    tuned[each[keyName]] = each;
  });
  return tuned;
};

export const capitalizeFirst = str => {
  return str && str.charAt(0).toUpperCase() + str.slice(1);
};

export const getBody = (object, file) => {
  const formData = new FormData();
  formData.append('jsonString', JSON.stringify(object));

  if (file) {
    const uri = file.path;
    const ext = uri.split('.').pop();
    const fileName = file.filename;

    file = {uri: uri, name: fileName, type: `image/${ext}`};
    formData.append('file', file);
  }

  return formData;
};
