import './App.css'
import Header from '../components/header.jsx'
import Footer from '../components/footer.jsx'
import BackgroundImage from '../components/background-image.jsx'
import LocationGallery from '../components/location-gallery.jsx'

function App() {

  const imgTitle = "Chez vous, partout et ailleurs"
  
  return (
    <div>
      <Header></Header>
        <BackgroundImage imgSrc={"../src/assets/eric-muhr-unsplash.jpg"} imgAlt={"eric-muhr"} title={imgTitle}></BackgroundImage>
        <LocationGallery/>     
      <Footer></Footer>
    </div>
  )
}

export default App
