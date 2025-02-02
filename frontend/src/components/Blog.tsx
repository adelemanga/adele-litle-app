
function Blog() {

  return (
    <div className="list">
      <h2>Blog</h2>

      <main>
        <article>
          <h3>
            Découverte culinaire : la belle assiette en France entre terre et
            mer
          </h3>
          <img
            className="img1Blog"
            src="https://labelleassiette.fr/wp-content/uploads/2024/05/decouverte-culinaire-la-belle-assiette-en-france-entre-terre-et-mer.jpg"
            alt="image"
          />
          <p className="date">Publié le 1er novembre 2024</p>
          <p className="text-blog1">
            La France est mondialement reconnue pour sa gastronomie riche et
            variée. Par sa position géographique, le pays offre une diversité
            culinaire exceptionnelle, où les produits de la terre et de la mer
            se rencontrent pour créer des plats inoubliables. Cet article
            explore cette merveilleuse fusion culinaire qui ravit tant les
            palais.
          </p>
          <a
            href="https://labelleassiette.fr/la-belle-assiette-france/une-balade-entre-terre-et-mer1/"
            className="read-more"
          >
            Lire plus
          </a>
        </article>

        <article>
          <h2>Des fruits de mer dans vos assiettes !</h2>
          <img
            className="img1Blog"
            src="https://static.restovisio.com/uploads/2015/07/6082128671_4f6337600f_z.jpg"
            alt="image2"
          />
          <p className="date">Publié le 30 octobre 2024</p>
          <p>
            Au cœur de Bordeaux, à côté de la place des Quinconces comme le nom
            du restaurant l’indique, c’est un moment gourmand que vous allez
            passer au Bistrot des Quinconces. Authentique et chaleureux, vous
            vous sentirez tout de suite à votre aise en entrant dans
            l’établissement. Cuisine française traditionnelle dans vos
            assiettes, vous vous régalerez ! Notre plat favori : Noix de
            Saint-Jacques Rossini On a aimé : Une brasserie bordelaise typique !
            Le petit + : En plein cœur de Bordeaux, idéal pour visiter la ville
            !
          </p>{" "}
          <a
            href="https://www.restovisio.com/blog/la-selec/des-fruits-de-mer-dans-vos-assiettes/"
            className="read-more"
          >
            Lire plus
          </a>
        </article>
      </main>
    </div>
  );
}

export default Blog;
