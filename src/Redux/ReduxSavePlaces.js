import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Button, FlatList} from 'react-native';
import ListItem from './component/ListItem';
import {connect} from 'react-redux';
import {addPlace, addCity} from './actions';
import {bindActionCreators} from 'redux';

class ReduxSavePlaces extends Component{
    
    state = {
        placeName: '',
        cityName: ''
    };
    placeSubmitHandler = () => {
        if (this.state.placeName.trim() == ''){
            return;
        }
        this.props.add(this.state.placeName);
    };

    citySubmitHandler = () => {
        if(this.state.cityName.trim() == ''){
            return;
        }
        this.props.add(this.state.cityName);
    }

   /*  placeNameChangeHandler = value => {
        this.setState({
            placeName:value
        })
    }; 
    placesOutput = () => {
        return(
            <FlatList 
                style={styles.listContainer} 
                data={this.props.dataPlaces}
                keyExtractor={(item, index) => index.toString()}
                renderItem={info => <ListItem placeName={info.item.value}/>}
            />
        )
    };*/

    cityNameChangeHandler = value => {
        this.setState({
            cityName:value
        })
    }
    citiesOutput = () => {
        return(
            <FlatList
                style={styles.listContainer}
                data={this.props.dataCities}
                keyExtractor={(item, index) => index.toString()}
                renderItem={data => <ListItem cityName={data.item.value}/>}
            />
        )
    }

    render(){
        console.log('Data Props Reducer');
        console.log(this.props);
        return(
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Add City to List"
                        style={styles.placeInput}
                        value={this.state.cityName}
                        onChangeText={this.cityNameChangeHandler}
                    />
                    <Button
                        title="Add"
                        style={styles.placeButton}
                        onPress={this.citySubmitHandler}
                    />
                </View>
                <View style={styles.listContainer}>{this.citiesOutput()}</View>
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
        //dataPlaces: state.listPlaces.places,
        dataCities: state.stateCities.cities
    }
};

const mapDispatchToProps = dispatch => {
    /* return { //cara 1
        add: name => {
            dispatch(addPlace(name)); // dispatch menghubungkan action menuju reducers
        }
    } */ 
    return bindActionCreators( //cara 2
        {add:addCity},
        dispatch
    );
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReduxSavePlaces);
