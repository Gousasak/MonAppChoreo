import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function Parametres() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Barre du haut */}
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.boutonRetour}>
          <Text style={styles.texteRetour}>⬅ Retour</Text>
        </Pressable>
        <Text style={styles.titre}>Réglages</Text>
        <View style={{ width: 60 }} />
      </View>

      {/* Contenu des réglages */}
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Préférences de l'application</Text>
        
        <View style={styles.optionRow}>
          <Text style={styles.optionText}>🔊 Volume de la musique</Text>
          <Text style={styles.optionValue}>80%</Text>
        </View>

        <View style={styles.optionRow}>
          <Text style={styles.optionText}>⏱️ Affichage des BPM</Text>
          <Text style={styles.optionValue}>Activé</Text>
        </View>

        <View style={styles.optionRow}>
          <Text style={styles.optionText}>💾 Sauvegarde automatique</Text>
          <Text style={styles.optionValue}>Oui</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 40,
    paddingBottom: 15,
    paddingHorizontal: 20,
    backgroundColor: '#1f1f1f',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  boutonRetour: { padding: 10, backgroundColor: '#2a2a2a', borderRadius: 8 },
  texteRetour: { color: '#00adb5', fontWeight: 'bold' },
  titre: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  content: { padding: 20 },
  sectionTitle: { color: '#666', fontSize: 14, fontWeight: 'bold', marginBottom: 15, textTransform: 'uppercase' },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1f1f1f',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  optionText: { color: '#fff', fontSize: 16 },
  optionValue: { color: '#00adb5', fontWeight: 'bold' },
});