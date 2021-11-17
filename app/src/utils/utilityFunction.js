import {Alert} from 'react-native';
function isBlank(str) {
  return !str || /^\s*$/.test(str);
}

function isNull(obj) {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}
function includeInArray(arrObj, key, value) {
  return (
    arrObj
      .map(function (obj) {
        return obj[key];
      })
      .indexOf(value) > -1
  );
}
function searchUser(arrObj, key, key2, value, value2) {
  return arrObj.filter(function (obj) {
    return obj[key] === value && obj[key2] === value2;
  })[0];
}
function showAlert(msg, onPress) {
  Alert.alert(
    'Error',
    msg,
    [
      {
        text: 'Okay',
        onPress: () => {
          onPress();
        },
      },
    ],
    {
      cancelable: false,
    },
  );
}
export {isBlank, isNull, includeInArray, searchUser, showAlert};
