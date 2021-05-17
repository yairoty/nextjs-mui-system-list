import { server } from '../config';
import SystemList from '../components/SystemList';

export default function Home({ systems }) {
  return (
    <div>
      <SystemList systems={systems} />
    </div>
  )
};

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/systems`);
  const systems = await res.json();

  return {
    props: {
      systems,
    },
  }
};

// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const articles = await res.json()

//   return {
//     props: {
//       articles,
//     },
//   }
// }
