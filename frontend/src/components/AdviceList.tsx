import { useQuery } from "@apollo/client";
import { GET_ALL_ADVICES } from "../graphql/queries";

function AdviceList() {
  const { loading, error, data } = useQuery(GET_ALL_ADVICES);

  console.log("Données reçues :", data); // Vérification des données reçues

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error.message}</p>; // Vérification si data.getAllAvis existe et n'est pas vide

  if (!data || !data.getAllAvis || data.getAllAvis.length === 0) {
    return <p>Aucun avis pour le moment.</p>;
  }

  return (
    <div>
      <h2>Avis des utilisateurs</h2>

      {data.getAllAvis.map((advice: any) => (
        <div key={advice.id} className="advice-card">
          <h3>{advice.title}</h3>

          <p>
            <strong>
              {advice.name} {advice.lastname}
            </strong>
          </p>
          <p>{advice.message}</p>
          <p>Note : {"⭐".repeat(advice.rating)}</p>
        </div>
      ))}
    </div>
  );
}

export default AdviceList;
