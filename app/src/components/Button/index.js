import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {colors, fontSize, scales, spacing} from '../../utils/responsive';

const Button = props => {
  const {disabled, onPress, title, style} = props;
  const disabledButtonStyles = disabled ? styles.disabledButtonStyles : {};
  const disabledLabelStyles = disabled ? styles.disabledLabelStyles : {};

  const getButtonStyles = () => ({
    // button styles
    ...styles.button,
    ...disabledButtonStyles,
    ...props.buttonStyles,
    ...style,
  });

  const getLabelStyles = () => ({
    // button label styles
    ...styles.label,
    ...disabledLabelStyles,
    ...props.labelStyles,
  });
  return (
    <TouchableOpacity
      style={{...getButtonStyles()}}
      disabled={disabled} // prop to disable the button
      onPress={onPress} // function to be called when button is pressed
    >
      {/* button title */}
      <Text style={{...getLabelStyles()}}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  // styles for the component
  disabledButtonStyles: {
    // width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.blackTwo,
    marginTop: spacing(15),
    height: scales(40),
    borderRadius: scales(4),
  },
  button: {
    // width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.greenOne,
    marginTop: spacing(15),
    height: scales(40),
    borderRadius: scales(4),
  },
  label: {
    // fontFamily: fonts.WorkSansMedium,
    fontSize: fontSize(14),
    color: colors.black,
    fontWeight: 'bold',
  },
  disabledLabelStyles: {
    // fontFamily: fonts.WorkSansMedium,
    fontSize: fontSize(16),
    color: colors.greyTwo,
  },
});

export default Button;
