import React, { useRef } from 'react';
import { StyleSheet, View, Text, Image, FlatList, Animated } from 'react-native';
import { ExpandingDot } from 'react-native-animated-pagination-dots';

const OpenPage = ({ navigation }) => {
    const scrollX = useRef(new Animated.Value(0)).current;
    const data = [1]

    const handleScrollEnd = (event) => {
        const contentOffsetX = event.nativeEvent.contentOffset.x;
        const currentPage = Math.round(contentOffsetX / styles.fitnessImage.width);

        if (currentPage === data.length -1) {
            navigation.navigate('Entry');
        }
    };

    const renderItem = () => (
        <View style={styles.container}>
            <Image style={styles.fitnessImage} source={require('../images/gym.jpg')} />
            <Text style={styles.welcomeText}>Hello</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
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
            />

            <ExpandingDot data={data} scrollX={scrollX} expandingDotWidth={30} inActiveDotColor='rgba(255, 255, 255, 0.6)'
                dotStyle={{
                    width: 10,
                    height: 10,
                    backgroundColor: '#347af0',
                    borderRadius: 5,
                    marginHorizontal: 5,
                }}
                containerStyle={{
                    top: 30,
                }} 
            />
        </View>
    );
};

export default OpenPage;

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: 'black',
    },
    welcomeText: {
        color: 'whitesmoke',
    },
    fitnessImage: {
        width: 370,
        height: 350,
        marginBottom: 40,
        borderRadius: 10,  
    },
})
