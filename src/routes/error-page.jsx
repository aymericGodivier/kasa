import Header from '../../components/header.jsx'
import Footer from '../../components/footer.jsx'

export default function ErrorPage() {

  return (
    <div className="error-page">
      <Header/>
      <h1>404</h1>
      <p className="error-message">Oups! La page que vous demandez n'existe pas</p>
      <a href="/">Retourner sur la page d'accueil</a>
      <Footer/>
    </div>
  );
}