import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <img 
            className="home_image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Upload/UPLO_S1_FT_XSite_HeroTALL_1500x600_PV_en-GB._CB433982839_.jpg" 
            alt="amazon_banner"
            />
            {/* product id.title,price,rating,images*/}
            <div className="home_row">
            <Product 
            id="12345"
            title="The Lean Startup:How Constant Innovation creates"
            price={521.5}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51CTIr1bJxL._SX325_BO1,204,203,200_.jpg"
            />
             <Product 
            id="45678"
            title="Kenwood KMX750RD/ KMix Stand Mixer 1000W (Red)"
            price={45916}
            rating={4}
            image="https://m.media-amazon.com/images/I/51ae8jtSakL._AC_UY218_.jpg"
            />
            </div>
            <div className="home_row">
            <Product 
            id="23446"
            title="All-new Echo Dot (4th Gen) with clock | Next generation smart speaker with improved bass, LED display and Alexa (Blue)"
            price={5499}
            rating={4}
            image="https://m.media-amazon.com/images/I/61u0y9ADElL._AC_UY218_.jpg"
            />  
             <Product 
            id="1876"
            title="New Apple Watch Series 6 (GPS + Cellular, 44mm) - Graphite Stainless Steel Case with Black Sport Band"
            price={73900}
            rating={5}
            image="https://m.media-amazon.com/images/I/71gsvhnfHKL._AC_UL320_.jpg"
            />
             <Product 
            id="12478"
            title="Apple iPad Pro (12.9-inch, Wi-Fi, 512GB) - Space Grey (4th Generation)"
            price={111055}
            rating={5}
            image="https://m.media-amazon.com/images/I/811aBwuSuIL._AC_UL320_.jpg"
            />
            </div>
            <div className="home_row">
            <Product 
            id="54321"
            title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
            price={13436.00}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71MlcO29QOL._SL1500_.jpg"
            />


            </div>
           
            {/* product */}
        </div>
    );
}

export default Home
