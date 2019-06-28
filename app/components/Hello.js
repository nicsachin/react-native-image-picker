import React, {Component} from 'react'
import {View, Text, Image, Button} from 'react-native'
import ImagePicker from 'react-native-image-picker'

class Hello extends Component {
    handleChoosePhoto = () => {

        console.log('>>>')
        const options = {
            title: 'Select Avatar',
            customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            }
        }
        ImagePicker.showImagePicker(options, response => {
            if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
        })
    }

    render() {
        return (
            <View>
                <Button title="Choose Photo"
                        onPress={this.handleChoosePhoto}
                />
            </View>

        );
    }
}


export default Hello;