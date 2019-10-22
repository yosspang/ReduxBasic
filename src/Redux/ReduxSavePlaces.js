import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Button, FlatList} from 'react-native';
import ListItem from './component/ListItem';
import {connect} from 'react-redux';
import {addPlace} from './actions';

class ReduxSavePlaces extends Component{
    
    state = {
        placeName: '',
        places: []
    };
    placeSubmitHandler = () => {
        if (this.state.placeName.trim() == ''){
            return;
        }
        this.props.add(this.state.placeName);
    };
    placeNameChangeHandler = value => {
        this.setState({
            placeName:value
        })
    };
    placesOutput = () => {
        return(
            <FlatList 
                style={styles.listContainer} 
                data={this.props.places}
                keyExtractor={(item, index) => index.toString()}
                renderItem={info => <ListItem placeName={info.item.value}/>}
            />
        )
    };
    render(){
        console.log('Data Props Reducer');
        console.log(this.props);
        return(
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Search Places"
                        style={styles.placeInput}
                        value={this.state.placeName}
                        onChangeText={this.placeNameChangeHandler}
                    />
                    <Button
                        title="Add"
                        style={styles.placeButton}
                        onPress={this.placeSubmitHandler}
                    />
                </View>
                <View style={styles.listContainer}>{this.placesOutput()}</View>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container:{
        paddingTop: 30,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    inputContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    placeInput:{
        width: '70%',
    },
    placeButton:{
        width: '30%'
    },
    listContainer:{
        width: '100%'
    },
});

//export default ReduxSaveData
const mapStateToProps = state => {
    return {
        places: state.places.places
    }
};

const mapDispatchToProps = dispatch => {
    return {
        add: name => {
            dispatch(addPlace(name)); // dispatch menghubungkan action menuju reducers
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReduxSavePlaces);
