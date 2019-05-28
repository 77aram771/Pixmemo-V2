/**
 * Created by Aram on 28.05.2019.
 */
import React, {Component} from 'react';
import {Container, Content, Button, Text} from 'native-base';
import {
    StyleSheet,
} from 'react-native';
export default class ButtonRoundedExample extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Button rounded style={styles.buttonStyle}>
                        <Text>Next</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    buttonStyle: {
        marginTop: 10,
        width: 151,
        height: 41,
        borderRadius: 30,
        backgroundColor: '#0091c1',
        display: 'flex',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 3,
    },
    buttonText: {
        fontSize: 16,
    }
});