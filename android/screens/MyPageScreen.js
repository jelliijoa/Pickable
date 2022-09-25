import React from 'react';
import {View, Text} from 'react-native'

function MyPageScreen({navigation}){
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>My Page!</Text>
        </View>
    )
}

export default MyPageScreen;