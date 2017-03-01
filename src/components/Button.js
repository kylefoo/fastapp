import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
  const { buttonStyle, textStyle } = styles;
  const { onPress, url } = props;

  return (
    <TouchableOpacity onPress={onPress(url)} style={ buttonStyle } >
       <Text style={textStyle}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = {
	textStyle: {
		alignSelf: 'center',
		fontWeight: '600',
		fontSize: 16,
		color: '#007aff',
		paddingTop: 10,
		paddingBottom: 10,
	},
	buttonStyle: {
		flex: 1,
		alignSelf: 'stretch',
		backgroundColor: 5,
		borderWidth: 1,
		borderRadius: 5,
		borderColor: '#007aff',
		marginLeft: 5,
		marginRight: 5
	}
};
export default Button;