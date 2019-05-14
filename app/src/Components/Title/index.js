/**
 * Created by Aram on 14.05.2019.
 */
import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export const Title = () => {
    return (
        <View>
            <Text style={styles.title}>
                PIXMEMO
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        color: '#ffffff'
    }
});