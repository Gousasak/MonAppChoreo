import { useRouter } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function MesProjets() {
  const router = useRouter();

  // Simulation d'une liste de chorégraphies enregistrées
  const projetsFactices = [
    { id: 1, nom: "Spectacle Fin d'Année", danseurs: 4, duree: "3:45" },
    { id: 2, nom: "Entraînement Hip-Hop", danseurs: 2, duree: "1:30" },
    { id: 3, nom: "Duo Salsa", danseurs: 2, duree: "2:15" },
  ];

  return (
    <View style={styles.container}>
      {/* Barre du haut */}
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.boutonRetour}>
          <Text style={styles.texteRetour}>⬅ Retour</Text>
        </Pressable>
        <Text style={styles.titre}>Mes Projets</Text>
        <View style={{ width: 60 }} />
      </View>

      {/* Liste déroulante des projets */}
      <ScrollView style={styles.content}>
        <Text style={styles.sectionTitle}>Chorégraphies sauvegardées</Text>

        {projetsFactices.map((projet) => (
          <View key={projet.id} style={styles.projetCard}>
            <View>
              <Text style={styles.projetNom}>{projet.nom}</Text>
              <Text style={styles.projetInfos}>🕺 {projet.danseurs} danseurs  •  ⏱️ {projet.duree}</Text>
            </View>
            <Pressable style={styles.boutonOuvrir}>
              <Text style={styles.boutonOuvrirTexte}>Ouvrir</Text>
            </Pressable>
          </View>
        ))}
      </ScrollView>
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
  projetCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1f1f1f',
    padding: 20,
    borderRadius: 12,
    marginBottom: 12,
  },
  projetNom: { color: '#fff', fontSize: 18, fontWeight: 'bold', marginBottom: 4 },
  projetInfos: { color: '#aaa', fontSize: 14 },
  boutonOuvrir: { backgroundColor: '#00adb5', paddingVertical: 8, paddingHorizontal: 16, borderRadius: 8 },
  boutonOuvrirTexte: { color: '#fff', fontWeight: 'bold' },
});