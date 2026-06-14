import { useRouter } from 'expo-router';
import { Button } from 'expo-router/build/react-navigation';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function MenuPrincipal() {
  const router = useRouter(); 

  return (
    <View style={styles.container}>
      
      {/* Zone du Titre / Logo */}
      <View style={styles.header}>
        <Text style={styles.logo}>💃 ChoreoMaker</Text>
        <Text style={styles.subtitle}>Animez vos danseurs en rythme</Text>
      </View>

      {/* Zone des Boutons */}
      <View style={styles.menuContainer}>

        <Button onPressIn={() => {
          router.push('/parametres');
        }}>Settings</Button>
        
        {/* Bouton Principal */}
        <TouchableOpacity 
          style={[styles.bouton, styles.boutonPrimaire]} 
          onPress={() => router.push('/studio')}
          activeOpacity={0.8}
        >
          <Text style={styles.boutonPrimaireText}>✨ Nouvelle Chorégraphie</Text>
        </TouchableOpacity>

        {/* Boutons Secondaires */}
        <TouchableOpacity 
          style={[styles.bouton, styles.boutonSecondaire]} 
          onPress={() => router.push('/mes-projets')}
          activeOpacity={0.8}
        >
          <Text style={styles.boutonSecondaireText}>📂 Mes Projets</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.bouton, styles.boutonSecondaire]} 
          onPress={() => router.push('/parametres')}
          activeOpacity={0.8}
        >
          <Text style={styles.boutonSecondaireText}>⚙️ Paramètres</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', justifyContent: 'center', padding: 20 },
  header: { alignItems: 'center', marginBottom: 60 },
  logo: { color: '#ffffff', fontSize: 36, fontWeight: '900', letterSpacing: 1, marginBottom: 10 },
  subtitle: { color: '#00adb5', fontSize: 16, fontWeight: '500' },
  menuContainer: { width: '100%', maxWidth: 400, alignSelf: 'center', gap: 15 },
  bouton: { width: '100%', paddingVertical: 18, borderRadius: 12, alignItems: 'center', justifyContent: 'center', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.2, shadowRadius: 5, elevation: 3 },
  boutonPrimaire: { backgroundColor: '#00adb5', shadowColor: '#00adb5', marginBottom: 10 },
  boutonSecondaire: { backgroundColor: '#2a2a2a', shadowColor: '#000' },
  boutonPrimaireText: { color: '#ffffff', fontSize: 18, fontWeight: 'bold' },
  boutonSecondaireText: { color: '#e0e0e0', fontSize: 16, fontWeight: '600' },
});