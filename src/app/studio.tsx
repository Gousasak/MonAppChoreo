import { useRouter } from 'expo-router';
import { useRef } from 'react';
import { Animated, PanResponder, Pressable, StyleSheet, Text, View } from 'react-native';

export default function Studio() {
  const router = useRouter(); // Outil pour naviguer programmatiquement

  // On stocke la position X et Y du danseur
  const pan = useRef(new Animated.ValueXY({ x: 150, y: 250 })).current;

  // On crée le système qui détecte le doigt ou la souris
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event(
        [null, { dx: pan.x, dy: pan.y }],
        { useNativeDriver: false } // Obligatoire à false pour les déplacements X/Y
      ),
      onPanResponderRelease: () => {
        pan.extractOffset(); // Sauvegarde la nouvelle position quand on lâche
      },
    })
  ).current;

  return (
    <View style={styles.container}>
      {/* Barre de navigation */}
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.boutonRetour}>
          <Text style={styles.texteRetour}>⬅ Retour</Text>
        </Pressable>
        <Text style={styles.titre}>Scène de Danse</Text>
        <View style={{ width: 60 }} /> {/* Espace vide pour centrer le titre */}
      </View>

      {/* Zone où les danseurs évoluent */}
      <View style={styles.scene}>
        <Animated.View
          {...panResponder.panHandlers}
          style={[
            styles.danseur,
            { transform: [{ translateX: pan.x }, { translateY: pan.y }] }
          ]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a', // Un gris très foncé, différent du menu
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 40,
    paddingBottom: 15,
    paddingHorizontal: 20,
    backgroundColor: '#121212',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  boutonRetour: {
    padding: 10,
    backgroundColor: '#2a2a2a',
    borderRadius: 8,
  },
  texteRetour: {
    color: '#00adb5',
    fontWeight: 'bold',
  },
  titre: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  scene: {
    flex: 1,
    position: 'relative',
    overflow: 'hidden', // Empêche le danseur de sortir visuellement de la zone
  },
  danseur: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#00adb5',
    position: 'absolute',
  },
});