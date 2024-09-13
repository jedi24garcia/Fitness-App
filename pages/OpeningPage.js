import React, { useRef } from 'react';
import { StyleSheet, View, Text, Image, Animated, ScrollView, Dimensions } from 'react-native';
import { ExpandingDot } from 'react-native-animated-pagination-dots';

import BackgroundImage from '../components/MainBackground';

const { width: screenWidth } = Dimensions.get('window');

const OpenPage = ({ navigation }) => {
    const scrollX = useRef(new Animated.Value(0)).current;

    const handleScrollEnd = (event) => {
        const contentOffsetX = event.nativeEvent.contentOffset.x;
        const currentPage = Math.round(contentOffsetX / screenWidth);

        if (currentPage === 1) { 
            navigation.navigate('Entry');
        }
    };

    return (
        <BackgroundImage source={require('../images/mainbg.webp')}>
                <ScrollView
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onScroll={Animated.event (
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        { useNativeDriver: false }
                    )}
                    scrollEventThrottle={16}
                    keyExtractor={(item, index) => index.toString()}
                    onMomentumScrollEnd={handleScrollEnd}
                >
                    <View style={styles.page}>
                        <Text style={styles.introText}>FitnessMate</Text>
                    </View>
                    <View style={styles.page} />
                </ScrollView>

                <ExpandingDot 
                    data={[1, 2]} 
                    scrollX={scrollX} 
                    expandingDotWidth={30} 
                    inActiveDotColor='rgba(255, 255, 255, 0.6)'
                    dotStyle={{
                        width: 10,
                        height: 10,
                        backgroundColor: '#347af0',
                        borderRadius: 5,
                        marginHorizontal: 5,
                    }}
                    containerStyle={{
                        position: 'absolute',
                        bottom: 30,
                    }} 
                />
        </BackgroundImage>
    );
};

export default OpenPage;

const styles = StyleSheet.create ({
    page: {
        justifyContent: 'center',
        alignItems: 'center',
        width: screenWidth,
    },
    introText: {
        marginTop: '100%',
        fontSize: 30,
        fontStyle: "italic",
        fontWeight: "900",
        font: "@font/raleway_blackitalic",
        textAlign: 'center',
        color: '#00CED1',
    },
    fitnessImage: {
        width: 370,
        height: 350,
        borderRadius: 10,  
    },
});
