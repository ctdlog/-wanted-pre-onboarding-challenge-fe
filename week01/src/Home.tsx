import './App.css';
import { Link } from './Link';

function Home() {
  return (
    <Link to='/about'>
      <button>Go to About</button>
    </Link>
  );
}

export default Home;
