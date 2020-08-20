import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import Shoes from '../../component/Shoes';

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                source={require('../../assets/banner.png')}
                style={styles.image}
                />

                <View style={styles.textContainer}>
                    <Text style={styles.text}>TÊNIS</Text>
                    <Text style={[styles.text, { color: '#CECECF'} ]}>*</Text>
                    <Text style={[styles.text, { color: '#CECECF'}]}>MASCULINO</Text>

                    <TouchableOpacity style={{position: 'absolute', right: 0, alignSelf: 'center'}}>
                      <MaterialIcons
                       name="filter-list"
                       size={24}
                       color="#000"
                      />  
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.line} />

            <ScrollView>
                <Text style={styles.text}>Lançamentos</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Shoes img={require('../../assets/1.png')} cost="R$140,90">
                        Nike Air Max Dia
                    </Shoes>
                    <Shoes img={require('../../assets/2.png')} cost="R$280,90">
                        Nike Downshifter 10
                    </Shoes>
                </View>

            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff'
    },
    header: {
        marginBottom: 8
    },
    image: {
        width: '100%'
    },
    textContainer: {
        flexDirection: 'row',
        marginVertical: '5%',
        marginHorizontal: '5%'
    },
    text: {
        fontFamily: 'Anton_400Regular',
        fontSize: 26,
        marginHorizontal: '1%'
    },
    line: {
        borderBottomColor: '#D8d8d8',
        borderBottomWidth: 2,
    }
});