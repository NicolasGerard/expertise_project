const Details = ({ phone }) => {
  return (
    <ul>
      <li>Nom : {phone.name}</li>
      <li>Sortie : {phone.released_at}</li>
      <li>Poid et epaisseur : {phone.body}</li>
      <li>OS : {phone.os}</li>
      <li>Stockage : {phone.storage}</li>
      <li>Taille de l'ecran : {phone.display_size}</li>
      <li>Résolution : {phone.display_resolution}</li>
      <li>Résolution de la caméra : {phone.camera_pixels}</li>
      <li>Résolution de la vidéo : {phone.video_pixels}</li>
      <li>RAM : {phone.ram}</li>
      <li>Processeur : {phone.chipset}</li>
      <li>Taille de la batterie : {phone.battery_size}</li>
      <li>Type de la batterie : {phone.battery_type}</li>
    </ul>
  );
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/api/hello");
  const posts = await res.json();

  const paths = posts.map((phone) => {
    return {
      params: { id: phone.id },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("http://localhost:3000/api/phone/" + id);
  console.log(res);
  const posts = await res.json();
  return {
    props: {
      phone: posts,
    },
  };
};

export default Details;
