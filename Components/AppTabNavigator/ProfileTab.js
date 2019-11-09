import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Icon, Container, Content, Header, Left, Body, Right, Button } from 'native-base';
import EntypoIcon from 'react-native-vector-icons/Entypo'

export default class HomeTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name='person' style={{ color: tintColor }} />
        )
    }

    render() {
        return (
            <Container style={{ flex:1, 2: 'white'}}>
                <Header style={{ backgroundColor: 'white'}}>
                    <Left><Icon name="md-person-add" style={{ paddingLeft:10 }} /></Left>
                    <Body><Text>JMCJMC</Text></Body>
                    <Right><EntypoIcon name="back-in-time" style={{ paddingRight:10, fontSize: 32 }} /></Right>
                </Header>
                <Content>
  <View style={{flexDirection:'row', paddingTop:10}}>
    <View style={{flex:1, alignItems:'center'}}>
      <Image source={{ url: 'https://steemitimages.com/u/anpigon/avatar' }}
             style={{width:75, height:75, borderRadius:37.5}}/>
    </View>
    <View style={{flex:3}}>
      <View style={{flexDirection:'row', justifyContent:'space-around'}}>
        <View style={{alignItems:'center'}}>
          <Text>12</Text>
          <Text style={{fontSize:10, color:'gray'}}>posts</Text>
        </View>
        <View style={{alignItems:'center'}}>
          <Text>579</Text>
          <Text style={{fontSize:10, color:'gray'}}>follower</Text>
        </View>
        <View style={{alignItems:'center'}}>
          <Text>77</Text>
          <Text style={{fontSize:10, color:'gray'}}>following</Text>
        </View>
      </View>
      <View style={{flexDirection:'row'}}>
        <Button bordered dark
                style={{flex:4, marginLeft:10, justifyContent:'center', height:30, marginTop:10}}>
          <Text>Edit Profile</Text>
        </Button>
        <Button bordered dark small icon
                style={{flex:1, marginRight:10, marginLeft:5, justifyContent:'center', height:30, marginTop:10}}>
          <Icon name="settings" />
        </Button>
      </View>
    </View>
  </View>
  <View style={{paddingHorizontal:10, paddingVertical:10}}>
    <Text style={{fontWeight:'bold'}}>JMC</Text>
    <Text>2019.11.09</Text>
    <Text>아자아자 화이팅</Text>
  </View>
</Content>
            </Container>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});