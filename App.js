import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, TextInput, ImageBackground } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Font from 'expo-font';

const customFonts = {
  'K2D-Bold': require('./assets/fonts/K2D-Bold.ttf'),
  'K2D-Medium': require('./assets/fonts/K2D-Medium.ttf'),
  'K2D-Light': require('./assets/fonts/K2D-Light.ttf'),
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  async function loadFonts() {
    await Font.loadAsync(customFonts);
    setFontsLoaded(true);
  }

  useEffect(() => {
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return <View />;
  }

  return <PlayerStatsEditor />;
}

const PlayerStatsEditor = () => {
  const [playerImage, setPlayerImage] = useState(null);
  const [playerLastName, setPlayerLastName] = useState('');
  const [stats, setStats] = useState({
    PAC: 80,
    SHO: 88,
    PAS: 83,
    DRI: 87,
    DEF: 39,
    PHY: 78,
  });
  const [selectedStat, setSelectedStat] = useState(null);

  const getSelectorTextStyle = (value) => {
    if (value === 20) {
      return styles.selectorTextMin;
    } else if (value === 99) {
      return styles.selectorTextMax;
    } else {
      return styles.selectorText;
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setPlayerImage(result.uri);
    }
  };

  const updateStat = (statKey, value) => {
    const newValue = Math.max(20, Math.min(99, Number(value)));
    setStats((prevStats) => ({
      ...prevStats,
      [statKey]: newValue,
    }));
  };

  const calculateAverage = () => {
    const sum = Object.values(stats).reduce((acc, cur) => acc + cur, 0);
    return Math.round(sum / Object.keys(stats).length);
  };

  const statKeys = Object.keys(stats);
  const halfIndex = Math.ceil(statKeys.length / 2);
  const firstColumnStats = statKeys.slice(0, halfIndex);
  const secondColumnStats = statKeys.slice(halfIndex);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
      <ImageBackground
          source={require('./assets/create/group-3.png')}
          style={styles.cardBackground}
          imageStyle={styles.cardBackgroundImage}
        >
        <TouchableOpacity onPress={pickImage}>
          <Image source={playerImage ? { uri: playerImage } : require('./assets/create/player.jpg')} style={styles.playerImage} />
        </TouchableOpacity>
        <Text style={styles.averageRating}>{calculateAverage()}</Text>
        <TextInput
          style={styles.playerLastNameInput}
          placeholder="Last Name"
          value={playerLastName}
          onChangeText={setPlayerLastName}
        />
        <View style={styles.statsContainer}>
          <View style={styles.column}>
            {firstColumnStats.map((key) => (
              <TouchableOpacity key={key} onPress={() => setSelectedStat(key)}>
                <Text style={styles.stat}>{key}: {stats[key]}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.column}>
            {secondColumnStats.map((key) => (
              <TouchableOpacity key={key} onPress={() => setSelectedStat(key)}>
                <Text style={styles.stat}>{key}: {stats[key]}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ImageBackground>
      </View>
      {selectedStat && (
        <View style={styles.selector}>
          <Text style={getSelectorTextStyle(stats[selectedStat] - 1)}>{stats[selectedStat] > 20 ? stats[selectedStat] - 1 : ' '}</Text>

          <TouchableOpacity onPress={() => updateStat(selectedStat, stats[selectedStat] - 1)} disabled={stats[selectedStat] <= 20}>
            <Image
              style={styles.selectorArrow}
              source={require('./assets/select/arrow-left.png')}
            />
          </TouchableOpacity>

          <Text style={getSelectorTextStyle(stats[selectedStat])}>{stats[selectedStat]}</Text>



          <TouchableOpacity onPress={() => updateStat(selectedStat, stats[selectedStat] + 1)} disabled={stats[selectedStat] >= 99}>
            <Image
              style={styles.selectorArrow}
              source={require('./assets/select/arrow-right.png')}
            />
          </TouchableOpacity>

          <Text style={getSelectorTextStyle(stats[selectedStat] + 1)}>{stats[selectedStat] < 99 ? stats[selectedStat] + 1 : ' '}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  card: {
    width: '100%',
    height: '60%',
    backgroundColor: 'transparent',
  },
  cardBackground: {
    width: '100%', 
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  cardBackgroundImage: {
    resizeMode: 'cover',
  },
  playerImage: {
    width: 150,
    height: 150,
    borderRadius: 100,
    overflow: 'hidden',
    paddingBottom: 50,
  },
  averageRating: {
    fontSize: 44,
    fontFamily: 'K2D-Medium',
  },
  playerLastNameInput: {
    fontSize: 24,
    marginBottom: 10,
    fontFamily: 'K2D-Medium',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  column: {
    flexDirection: 'column',
  },
  stat: {
    marginVertical: 5,
    fontSize: 22,
    fontFamily: 'K2D-Medium',
  },
  selector: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 25,
    width: '90%',
    height: 120,
  },
  selectorText: {
    fontSize: 24,
    marginHorizontal: 10,
  },
  selectorTextMax: {
    fontSize: 26,
    marginHorizontal: 10,
    color: '#AAAAAA',
  },
  selectorTextMin: {
    fontSize: 26,
    marginHorizontal: 10,
    color: '#AAAAAA',
  },
  selectorArrow: {
    width: 50,
    height: 50,
  },
  selectorNumber: {
    fontSize: 26,
  }
});

