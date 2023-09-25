import React from "react";
import Navbar from "./components/Navbar/navbar";
import Home from "./components/Home/home";
import Info from "./components/Info/info";
import Search from "./components/Search/search";
import Support from "./components/Support/support";
import Lounge from "./components/Lounge/lounge";
import Travelers from "./components/Travelers/travelers";
import Subscribers from "./components/Subscribers/subscribers";
import Footer from "./components/Footer/footer";

function App(){
    return (
        <div>
            <Navbar />
            <Home />
            <Search />
            <Support />
            <Info />
            <Lounge />
            <Travelers />
            <Subscribers />
            <Footer />
        </div>
    )
}

export default App;