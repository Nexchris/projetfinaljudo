import React, { useState, useEffect } from 'react';
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth";
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Background from './image/adminbackground.png'

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-image: url(${Background});
  background-color: gray;
  width: 100vw; /* Utiliser 100vw pour la largeur */
  height: 100vh; /* Utiliser 100vh pour la hauteur */
  background-size: cover; /* Redimensionner l'image de fond pour couvrir le conteneur */
  background-position: center; /* Centrer l'image de fond */
`;

const FormContainer = styled.form`
  display: ${props => props.show ? 'grid' : 'none'}; /* Affiche ou cache le formulaire en fonction de la valeur de 'show' */
  grid-template-columns: repeat(2, 1fr); /* Deux colonnes */
  grid-template-rows: auto; /* Hauteur des lignes ajustée au contenu */
  grid-column-gap: 20px; /* Espacement horizontal entre les colonnes */
  grid-row-gap: 10px; /* Espacement vertical entre les lignes */
  width: 100%;
  max-width: 800px; /* Ajuster la largeur maximale du formulaire */
  margin-bottom: 20px;

  input,
  textarea {

    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    margin-left:2vh;
    
  }

  input[type="submit"] {
    grid-column: 1 / -1; /* Étendre sur deux colonnes pour remplir l'espace */
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
  }

  input[type="submit"]:hover {
    background-color: #45a049;
  }
`;


const TableContainer = styled.table`
  display: ${props => props.show ? 'table' : 'none'}; /* Affiche ou cache la table en fonction de la valeur de 'show' */
  width: 100%;
  border-collapse: collapse;

  th, td {
    padding: 10px;
    border-bottom: 1px solid #ddd;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-left: 10px;
  background-color: #0A0095;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0A094B;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;

  button {
    margin-right: 10px;
    margin-bottom: 10vh;
   

    font-size:2vh;
  }
`;

const Heading1 = styled.h1`
  font-size: 6vh;
  margin-bottom: 20px;
`;
const SignOutButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 10px 20px;
  background-color: #0A094B;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #d32f2f;
  }
`;

export default function MainView() {
  const [champions, setChampions] = useState([]);
  const [selectedChampionId, setSelectedChampionId] = useState(null);
  const [championData, setChampionData] = useState({
    nom: '',
    prenom: '',
    age: '',
    description: '',
    categorie: '',
    recompenses: '',
    url: '',
    urlo: '',
    texte1: '',
    texte2: '',
    texte3: '',
    texte4: '',
    texte5: ''
  });
  const [showForm, setShowForm] = useState(false); // State pour afficher/cacher le formulaire
  const auth = getAuth();
  const firestore = getFirestore();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchChampions = async () => {
      const championsSnapshot = await getDocs(collection(firestore, "champions"));
      const championsData = championsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setChampions(championsData);
    };

    fetchChampions();
  }, [firestore]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (!user) {
        navigate('/login');
      }
    });

    return unsubscribe;
  }, [auth, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setChampionData({ ...championData, [name]: value });
  };

  const handleAddChampion = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(firestore, "champions"), championData);
      console.log("Champion ajouté avec succès");
      setChampionData({
        nom: '',
        prenom: '',
        age: '',
        description: '',
        categorie: '',
        recompenses: '',
        url: '',
        urlo: '',
        texte1: '',
        texte2: '',
        texte3: '',
        texte4: '',
        texte5: ''
      });
    } catch (error) {
      console.error("Erreur lors de l'ajout du champion :", error);
    }
  };

  const handleEditChampion = (championId) => {
    setSelectedChampionId(championId);
    const selectedChampion = champions.find(champion => champion.id === championId);
    setChampionData({
      nom: selectedChampion.nom,
      prenom: selectedChampion.prenom,
      age: selectedChampion.age,
      description: selectedChampion.description,
      categorie: selectedChampion.categorie,
      recompenses: selectedChampion.recompenses,
      url: selectedChampion.url,
      urlo: selectedChampion.urlo,
      texte1: selectedChampion.texte1 || '',
      texte2: selectedChampion.texte2 || '',
      texte3: selectedChampion.texte3 || '',
      texte4: selectedChampion.texte4 || '',
      texte5: selectedChampion.texte5 || ''
    });
    setShowForm(true); // Afficher le formulaire lorsqu'on clique sur "Modifier"
  };

  const handleUpdateChampion = async (e) => {
    e.preventDefault();
    try {
      await updateDoc(doc(firestore, "champions", selectedChampionId), {
        nom: championData.nom,
        prenom: championData.prenom,
        age: championData.age,
        description: championData.description,
        categorie: championData.categorie,
        recompenses: championData.recompenses,
        url: championData.url,
        urlo: championData.urlo,
        texte1: championData.texte1,
        texte2: championData.texte2,
        texte3: championData.texte3,
        texte4: championData.texte4,
        texte5: championData.texte5
      });
      
      console.log(selectedChampionId);
      console.log("Champion mis à jour avec succès");
  
      window.location.reload();
    } catch (error) {
      console.error("Erreur lors de la mise à jour du champion :", error);
    }
  };

  const handleDeleteChampion = async (id) => {
    try {
      await deleteDoc(doc(firestore, "champions", id));
      console.log("Champion supprimé avec succès");
      setChampions(champions.filter(champion => champion.id !== id));
    } catch (error) {
      console.error("Erreur lors de la suppression du champion :", error);
    }
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Déconnexion réussie");
      })
      .catch((error) => {
        console.error("Erreur lors de la déconnexion :", error);
      });
  };

  return (
    <MainContainer>
      <Heading1>Zone Administration</Heading1>
      <ButtonGroup>
        <Button onClick={() => setShowForm(false)}>Afficher les champions</Button>
        <Button onClick={() => setShowForm(true)}>Ajouter un champion</Button>
      </ButtonGroup>
      <TableContainer show={!showForm}>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Âge</th>
            <th>Description</th>
            <th>Catégorie</th>
            <th>Récompenses</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {champions.map((champion) => (
            <tr key={champion.id}>
              <td>{champion.nom}</td>
              <td>{champion.prenom}</td>
              <td>{champion.age}</td>
              <td>{champion.description}</td>
              <td>{champion.categorie}</td>
              <td>{champion.recompenses}</td>
              <td>
                <ButtonGroup>
                  <Button onClick={() => handleDeleteChampion(champion.id)}>Supprimer</Button>
                  <Button onClick={() => handleEditChampion(champion.id)}>Modifier</Button>
                </ButtonGroup>
              </td>
            </tr>
          ))}
        </tbody>
      </TableContainer>
      <FormContainer show={showForm} onSubmit={selectedChampionId ? handleUpdateChampion : handleAddChampion}>
        <input type="text" name="nom" value={championData.nom} onChange={handleInputChange} placeholder="Nom du champion" required />
        <input type="text" name="prenom" value={championData.prenom} onChange={handleInputChange} placeholder="Prénom du champion" required />
        <input type="text" name="age" value={championData.age} onChange={handleInputChange} placeholder="Âge du champion" required />
        <textarea name="description" value={championData.description} onChange={handleInputChange} placeholder="Description du champion" required />
        <input type="text" name="categorie" value={championData.categorie} onChange={handleInputChange} placeholder="Catégorie du champion" required />
        <input type="text" name="recompenses" value={championData.recompenses} onChange={handleInputChange} placeholder="Récompenses du champion" required />
        <input type="url" name="url" value={championData.url} onChange={handleInputChange} placeholder="URL de l'image du champion" />
        <input type="url" name="urlo" value={championData.urlo} onChange={handleInputChange} placeholder="URL de l'overlay" />
        <input type="text" name="texte1" value={championData.texte1} onChange={handleInputChange} placeholder="Texte 1" />
        <input type="text" name="texte2" value={championData.texte2} onChange={handleInputChange} placeholder="Texte 2" />
        <input type="text" name="texte3" value={championData.texte3} onChange={handleInputChange} placeholder="Texte 3" />
        <input type="text" name="texte4" value={championData.texte4} onChange={handleInputChange} placeholder="Texte 4" />
        <input type="text" name="texte5" value={championData.texte5} onChange={handleInputChange} placeholder="Texte 5" />
        <input type="submit" value={selectedChampionId ? "Mettre à jour Champion" : "Ajouter Champion"} />
      </FormContainer>
      <SignOutButton title='Déconnexion' onClick={handleSignOut}>Déconnexion</SignOutButton>
    </MainContainer>
  );
}
