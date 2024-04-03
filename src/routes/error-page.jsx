import { useRouteError } from "react-router-dom";
import Header from '../../components/header.jsx'
import Footer from '../../components/footer.jsx'

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="error-page">
      <Header/>
      <h1>404</h1>
      <p>Oups, la page que vous demandez n'existe pas</p>
      <li>
        <a href="/">Retourner sur la page d'accueil</a>
      </li>
      <Footer/>
    </div>
  );
}