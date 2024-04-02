import Header from '../../components/header.jsx'
import Footer from '../../components/footer.jsx'
import BackgroundImage from '../../components/background-image.jsx'

export default function About() {
   
    return (
      <div>
        <Header></Header>
          <BackgroundImage imgSrc={"../src/assets/eric-muhr-unsplash.jpg"} imgAlt={"eric-muhr"}></BackgroundImage>     
        <Footer></Footer>
      </div>
    )
  }