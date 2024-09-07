import React, { useRef } from 'react';
import { StyleSheet, View, Text, Image, Animated, ScrollView, Dimensions } from 'react-native';
import { ExpandingDot } from 'react-native-animated-pagination-dots';

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
        <View style={styles.container}>
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
                    <Image style={styles.fitnessImage} source={require('../images/gym.jpg')} />
                    <Text style={styles.welcomeText}>Hello</Text>
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
        </View>
    );
};

export default OpenPage;

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#004D74',
    },
    page: {
        justifyContent: 'center',
        alignItems: 'center',
        width: screenWidth,
    },
    welcomeText: {
        color: 'whitesmoke',
        marginTop: 20,
    },
    fitnessImage: {
        width: 370,
        height: 350,
        borderRadius: 10,  
    },
});
