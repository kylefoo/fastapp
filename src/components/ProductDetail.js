import React, { Component } from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

class ProductDetail extends Component {
  onButtonPress() {
    const { url } = this.props.product.url;

    Linking.canOpenURL(url).then(supported => {
     if (!supported) {
        console.log('Can\'t handle url: ' + url);
      } else {
        return Linking.openURL(url);
      }
	}).catch(err => console.error('An error occurred', err));
  }
  
  render () {
    const { title, artist, thumbnail_image, image, url } = this.props.product;
    const { thumbnailContainerStyle, thumbnailStyle, headerContentStyle, headerTextStyle, imageStyle} = styles;

    return (
      <Card>
        <CardSection>
          <View style={thumbnailContainerStyle}>
            <Image source={{ uri: thumbnail_image}} style={thumbnailStyle}></Image>
          </View>
          <View style={headerContentStyle}>
            <Text style={headerTextStyle}>{title}</Text>
            <Text>{artist}</Text>
          </View>
        </CardSection>

        <CardSection>
          <Image source={{ uri: image}} style={imageStyle}></Image>
        </CardSection>

        <CardSection>
          <Button url={url} onPress={ this.onButtonPress.bind(this) } >Click Me</Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
    headerContentStyle: {
      flexDirection: 'column',
      justifyContent: 'space-around'
    },
    headerTextStyle: {
      fontSize: 18,
      fontWeight: 'bold'
    },
    thumbnailStyle: {
      width: 50,
      height: 50
    },
    thumbnailContainerStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 10,
      marginRight: 10
    },
    imageStyle: {
      height: 300,
      flex: 1,
      width: null
    }
};

export default ProductDetail;