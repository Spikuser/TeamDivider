import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const GameStatsPage = () => {
  const [teams, setTeams] = useState([
    { name: 'Limonchiki', w: 6, l: 2, d: 3 },
    { name: 'Zyabliki', w: 4, l: 5, d: 3 },
    { name: 'Sosuli', w: 3, l: 6, d: 7 }
  ]);

  const updateTeamStats = (index, field, value) => {
    const newTeams = [...teams];
    const newValue = parseInt(value, 10);
    if (!isNaN(newValue) && newValue >= 0) {
      newTeams[index][field] = newValue;
      setTeams(newTeams);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Game Stats</Text>
      {teams.map((team, index) => (
        <View key={team.name} style={styles.teamContainer}>
          <Text style={styles.teamName}>{team.name}</Text>
          <View style={styles.stats}>
            <View style={styles.statItem}>
              <Text style={styles.statLetter}>W</Text>
              <TextInput
                style={styles.input}
                keyboardType='number-pad'
                value={team.w.toString()}
                onChangeText={(value) => updateTeamStats(index, 'w', value)}
              />
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statLetter}>L</Text>
              <TextInput
                style={styles.input}
                keyboardType='number-pad'
                value={team.l.toString()}
                onChangeText={(value) => updateTeamStats(index, 'l', value)}
              />
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statLetter}>D</Text>
              <TextInput
                style={styles.input}
                keyboardType='number-pad'
                value={team.d.toString()}
                onChangeText={(value) => updateTeamStats(index, 'd', value)}
              />
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    margin: 40,
  },
  teamContainer: {
    marginBottom: 48,
    padding: 10,
    borderWidth: 1,
    borderRadius: 25,
  },
  teamName: {
    fontSize: 26,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: '#C2E812',
    marginBottom: 20,
  },
  statLetter: {
    fontSize: 20,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignSelf: 'center',
    marginBottom: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#D9D9D9',
    padding: 5,
    width: 40,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#fff',
  },
});

export default GameStatsPage;
