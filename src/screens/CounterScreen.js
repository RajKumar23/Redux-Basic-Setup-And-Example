import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useDispatch, useSelector } from 'react-redux';
import { decremented, incrementByAmount, incremented } from '../redux/counter';

export default Counter = () => {
    const { count } = useSelector((state) => state.counter)
    const dispatch = useDispatch()

    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>{count}</Text>
            <View style={styles.marginTop} />
            <Button title="Increase" onPress={() => dispatch(incremented())} />
            <View style={styles.marginTop} />
            <Button title="Decrease" onPress={() => dispatch(decremented())} />
            <View style={styles.marginTop} />
            <Button title="Increase by 45" onPress={() => dispatch(incrementByAmount(45))} />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 30,
        // alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle:{
        fontSize: 50,
        fontWeight:"bold",
        alignSelf:"center",
    },
    marginTop: {
        margin: 10
    }
});