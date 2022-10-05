
import * as React from 'react';
import { useState } from 'react';
import { Component } from 'react';
import {
    Text, TextInput, View, Image, StyleSheet,
    ScrollView, TouchableOpacity, SafeAreaView,
    /* Modal*/
} from 'react-native'

/*const [visibleMoal, setVisibleModal] = useState(false);

function ModalCourse() {
    <Modal animationType="slide"
        transparent={true}
        visible={visibleMoal}>
        <View style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <View style={{
                flex: 0.5,
                borderRadius: 5,
                borderColor: '#cccccc',
                borderWidth: 1,
                backgroundColor: '#ffffff',
                padding: 5,
            }}>
                <Text style={{ fontSize: 20 }}>Modal 화면입니다.</Text>*/
/* Modal 다이얼로그 숨기기 *//*
<Button title='닫기' onPress={() => setVisibleModal(false)} />
</View>
</View>
</Modal>
}
*/
function PlaceName() {
    return (
        <View style={styles.nameblock}>
            <View style={styles.review}>
                <Text style={styles.placeNameText}> 을의 커피 </Text>

            </View>
        </View>
    )
}
/* 
<TouchableOpacity activeOpacity={0.8}>
                    <View style={{ paddingHorizontal: 10, flexDirection: 'row', alignSelf: 'flex-end' }}>
                        <Image style={styles.checkboxLogo} source={require('../assets/heart_1.png')} />
                        <Image style={styles.checkboxLogo} source={require('../assets/checkbox_1.png')}
                            onPress={() => setVisibleModal(true)} />
                    </View>
                </TouchableOpacity>*/

function PlaceImage() {
    return (
        <TouchableOpacity activeOpacity={0.8}>
            <Image style={styles.placeImage} source={require('../assets/logo.png')} />
        </TouchableOpacity>
    );
}

function PlaceInfo() {
    return (
        <View>
            <View style={styles.info}>
                <Score />
                <Tag />
                <Time />
                <Location />
                <SNS />



            </View>

            <Text></Text>
            <Text></Text>
            <View style={styles.info}>
                <Text style={styles.infoText}>Review</Text>
                <Text></Text>

                <Review />
            </View>
        </View>
    )
}

function MENU() {
    return (
        <View style={styles.info}>
            <View style={styles.menuName}>
                <Text style={styles.menu}>아메리카노</Text>
                <Text>--------------------------</Text>
                <Text>4000</Text>
            </View>
            <View style={styles.menuName}>
                <Text style={styles.menu}>카페라떼</Text>
                <Text>--------------------------</Text>
                <Text>4500</Text>
            </View>
            <View style={styles.menuName}>
                <Text style={styles.menu}>요거트스무디</Text>
                <Text>--------------------------</Text>
                <Text>6000</Text>
            </View>
            <View style={styles.menuName}>
                <Text style={styles.menu}>블루베리스무디</Text>
                <Text>--------------------------</Text>
                <Text>6000</Text>
            </View>
            <View style={styles.menuName}>
                <Text style={styles.menu}>자몽티</Text>
                <Text>--------------------------</Text>
                <Text>5500</Text>
            </View>
        </View>
    );
}

function Score() {
    return (
        <TouchableOpacity activeOpacity={0.8}>
            <View style={styles.homepage}>
                <Image style={styles.instaLogo} source={require('../assets/score_logo.png')} />
                <Text style={styles.infoText}>  4.58 / 5</Text>
            </View>

        </TouchableOpacity>
    );
}

function Tag() {
    return (
        <TouchableOpacity activeOpacity={0.8}>
            <View style={styles.homepage}>
                <Image style={styles.instaLogo} source={require('../assets/hashtag_logo.png')} />
                <Text style={styles.tagText}>  #따뜻함 #아늑함</Text>
            </View>

        </TouchableOpacity>
    );
}

function Time() {
    return (
        <TouchableOpacity activeOpacity={0.8}>
            <View style={styles.homepage}>
                <Image style={styles.instaLogo} source={require('../assets/clock_logo.png')} />
                <Text style={styles.infoText}>  매일 11:00 ~ 22:00</Text>
            </View>
        </TouchableOpacity>
    );
}

function Location() {
    return (
        <TouchableOpacity activeOpacity={0.8}>
            <View style={styles.homepage}>
                <Image style={styles.instaLogo} source={require('../assets/location_logo.png')} />
                <Text style={styles.infoText}>  서울 용산구 청파로47나길 13 1층</Text>
            </View>
        </TouchableOpacity>
    );
}

function SNS() {
    return (
        <TouchableOpacity activeOpacity={0.8}>
            <View style={styles.homepage}>
                <Image style={styles.instaLogo} source={require('../assets/insta_logo.png')} />
                <Text style={styles.infoText}>  eul_s_coffee</Text>
            </View>
        </TouchableOpacity>
    );
}
function Review() {
    return (
        <View style={styles.elem}>
            <View style={styles.review}>
                <Text style={styles.name}>jdkd****</Text>
                <Text style={styles.userComment}>분위기 아늑하고 좋아요</Text>
            </View>
            <View style={styles.review}>
                <Text style={styles.name}>jdkd****</Text>
                <Text style={styles.userComment}>분위기 아늑하고 좋아요</Text>
            </View>
            <View style={styles.review}>
                <Text style={styles.name}>jdkd****</Text>
                <Text style={styles.userComment}>분위기 아늑하고 좋아요</Text>
            </View>
            <View style={styles.review}>
                <Text style={styles.name}>jdkd****</Text>
                <Text style={styles.userComment}>분위기 아늑하고 좋아요</Text>
            </View>
            <View style={styles.review}>
                <Text style={styles.name}>jdkd****</Text>
                <Text style={styles.userComment}>분위기 아늑하고 좋아요</Text>
            </View>
            <View style={styles.review}>
                <Text style={styles.name}>jdkd****</Text>
                <Text style={styles.userComment}>분위기 아늑하고 좋아요</Text>
            </View>
            <View style={styles.review}>
                <Text style={styles.name}>jdkd****</Text>
                <Text style={styles.userComment}>분위기 아늑하고 좋아요</Text>
            </View><View style={styles.review}>
                <Text style={styles.name}>jdkd****</Text>
                <Text style={styles.userComment}>분위기 아늑하고 좋아요</Text>
            </View>
        </View>

    )
}

function PlaceDetailScreen() {

    return (
        <SafeAreaView>
            <ScrollView>
                <PlaceName />
                <View style={styles.placeImageAlign}>
                    <Text></Text>
                    <PlaceImage />
                    <Text></Text>
                    <PlaceInfo />
                </View>
            </ScrollView>
        </SafeAreaView>
        /*
        <View style={styles.place}>
                <PlaceInfo />
            </View>
        */

    );


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        flexDirection: 'column',
    },
    infoText: {
        fontSize: 15,
        color: 'black',
        paddingBottom: 3,
    },
    tagText: {
        fontSize: 15,
        color: '#5aa0c8',
        paddingBottom: 3,
    },
    nameblock: {
        padding: 16,
        backgroundColor: '#e6e6e6',
        alignItems: 'center',
        justifyContent: 'center',

        borderBottomColor: 'black',
        borderBottomWidth: 2.0
    },
    placeNameText: {
        fontSize: 24,
        color: '#323232',
        paddingHorizontal: 60,

    },
    place: {
        /*width: 120,
        height: 120,
        marginHorizontal: 30,*/
        flex: 1,

    },
    placeImageAlign: {
        alignItems: 'center',
        justifyContent: 'center',

    },
    placeImage: {
        /* flex: 1,
         flexDirection: 'column',*/
        width: 250,
        height: 250,
        resizeMode: 'contain',
        /*alignItems: 'center',
        justifyContent: 'center',*/
        paddingLeft: 10,
        /* padding: 100,*/
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: 2.0,
    },
    info: {
        fontSize: 20,
        lineHeight: "200%",
        paddingLeft: 15,
    },
    checkboxLogo: {
        width: 28,
        height: 28,
        resizeMode: "cover",
        paddingLeft: 10,
    },
    instaLogo: {
        width: 18,
        height: 18,
        resizeMode: "cover",
    },
    homepage: {
        flexDirection: 'row',
        paddingTop: 3,
    },
    elem: {
        width: '100%',
        flexDirection: 'column',
    },
    review: {
        flexDirection: 'row',

    },
    name: {
        paddingLeft: 10,
        backgroundColor: '#eee',
    },
    menu: {
        flexDirection: 'row',
        width: 100,
        height: 30,

    },
    menuName: {
        flexDirection: 'row',
        /*paddingLeft: 2,*/
    },
    userComment: {
        paddingLeft: 20,
        paddingBottom: 10,
        paddingTop: 10,


    }

});

export default PlaceDetailScreen;