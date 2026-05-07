export async function getServerSideProps() {
  return {
    redirect: { destination: '/politica-privacidade', permanent: true },
  };
}

export default function Privacidade() {
  return null;
}
