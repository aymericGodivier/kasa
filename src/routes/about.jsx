import Header from '../../components/header.jsx'
import Footer from '../../components/footer.jsx'
import BackgroundImage from '../../components/background-image.jsx'
import FoldingMenu from '../../components/folding-menu.jsx'

export default function About() {

  const dropDownContent1 = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
  const dropDownContent2 = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de la plateforme" 
  const dropDownContent3 = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de la plateforme" 
  const dropDownContent4 = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respecté. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."

    return (
      <div className='about'>
        <Header></Header>
          <BackgroundImage imgSrc={"../src/assets/kalen-emsley-Bkci-unsplash.jpg"} imgAlt={"montagne"}></BackgroundImage>
          <div className='drop-down-container'>
            <FoldingMenu key="fm1" menuTitle={"Fiabilité"} content={dropDownContent1}></FoldingMenu>
            <FoldingMenu key="fm2" menuTitle={"Respect"} content={dropDownContent2}></FoldingMenu>
            <FoldingMenu key="fm3" menuTitle={"Service"} content={dropDownContent3}></FoldingMenu>
            <FoldingMenu key="fm4" menuTitle={"Sécurité"} content={dropDownContent4}></FoldingMenu> 
          </div>                
        <Footer></Footer>
      </div>
    )
}