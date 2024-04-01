import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';


const NumberSelector = ({ label, value, onValueChange }) => {
  return (
    <View style={styles.selectorContainer}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.selector}>
        <TouchableOpacity
          onPress={() => onValueChange(Math.max(0, value - 1))}
          style={{ ...styles.control, ...styles.sideValue }}
        >
          <Text style={styles.control}>{value !== 0 ? value - 1 : ''}</Text>  
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onValueChange(Math.max(0, value - 1))}>
        <Image
            style={styles.controlIcon}
            source={require('./assets/select/arrow-left.png')}
          />
        </TouchableOpacity>
        <Text style={styles.value}>{value}</Text>
        <TouchableOpacity onPress={() => onValueChange(value + 1)}>
        <Image
            style={styles.controlIcon}
            source={require('./assets/select/arrow-right.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onValueChange(value + 1)}
          style={{ ...styles.control, ...styles.sideValue }}
        >
          <Text style={styles.control}>{value + 1}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


const TeamAndPlayerSelectionScreen = () => {
  const [numTeams, setNumTeams] = useState(2);
  const [numPlayers, setNumPlayers] = useState(2);

  const maxPlayers = 9;
  const minPlayers = 1;
  const maxTeams = 9;
  const minTeams = 1;

  const handleTeamChange = (newValue) => {
    setNumTeams(Math.min(Math.max(newValue, minTeams), maxTeams));
  };

  const handlePlayerChange = (newValue) => {
    setNumPlayers(Math.min(Math.max(newValue, minPlayers), maxPlayers));
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image style={styles.icon} source={require('./assets/select/player.png')} />
        <NumberSelector
          label="Select the number of players"
          value={numPlayers}
          onValueChange={handlePlayerChange}
        />
      </View>
      <View style={styles.row}>
        <Image style={styles.icon} source={require('./assets/select/team.png')} />
        <NumberSelector
          label="Select the number of teams"
          value={numTeams}
          onValueChange={handleTeamChange}
        />
      <TouchableOpacity style={styles.ConfirmButton}>
        <Text style={styles.ConfirmButtonText}>Apply</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  selectorContainer: {
    marginBottom: 30,
  },
  row: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    marginBottom: 10,
  },
  controlIcon: {
      width: 50,
      height: 50,
  },
  label: {
    fontSize: 16,
    color: '#000',
    marginBottom: 15,
    alignSelf: 'center',
  },
  selector: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    alignItems: 'center',
    padding: 10,
    height: 180,
    width: 360,
    marginBottom: 10,
  },
  control: {
    fontSize: 42,
    color: '#C2E812',
    marginHorizontal: 20,
  },
  value: {
    fontSize: 42,
    color: '#000',
  },
  ConfirmButton: {
    width: 200,
    padding: 15,
    backgroundColor: '#C2E812',
    alignItems: 'center',
    borderRadius: 25,
    marginBottom: 10,
  },
  ConfirmButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default TeamAndPlayerSelectionScreen;