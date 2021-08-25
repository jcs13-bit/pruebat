import "./App.css";
import { Carousel, Slider, Wall, Banner, Mirror } from "./components";
import Header from "./navigation/header/Header";
function App() {
    return (
        <div className="App">
            <Header></Header>
            <Banner
                highlight="MÁS"
                title=" DE 800 MIL FAMILIAS HABILITADAS"
                buttonTitle="VER PRODUCTOS"
            ></Banner>
            <Slider></Slider>
            <Carousel title="NUEVA COLECCIÓN" color="#054BAA"></Carousel>
            <Wall></Wall>
            <Mirror></Mirror>
            <Carousel title="AYUDAS PARA LA MARCHA" color="#054BAA"></Carousel>

            <Carousel title="TERAPIAS RESPIRATORIAS" color="#054BAA"></Carousel>
        </div>
    );
}

export default App;
