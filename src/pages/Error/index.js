import { Link } from 'react-router-dom';
import './styles.css';

function Erro() {
  return (
    <div className="not-found">
      <h1>Error 404</h1>
      <h2>Pagina não encontrada!</h2>
      <Link to="/">Veja todos os Filmes!</Link>
    </div>
  );
}

export default Erro;
