import React from "react";
import { Trans, useTranslation } from 'react-i18next';
import "./Menu.css";
import tuna from "../assets/menu/tuna.jpeg";
import tartare from "../assets/menu/tartare.jpeg";
import tataki from "../assets/menu/tataki.jpeg";
import tournedos from "../assets/menu/tournedos.jpeg";
import carbonara from "../assets/menu/carbonara.jpeg";
import gnocchi from "../assets/menu/gnocchi.jpeg";
import pesto from "../assets/menu/tagliatelle.jpg";
import seafood from "../assets/menu/seafood.jpeg";
import moelleux from "../assets/menu/moelleux.jpeg";
import frenchtoast from "../assets/menu/frenachtoast.jpeg";
import lemonpie from "../assets/menu/lemonpie.jpeg";
import freshfruit from "../assets/menu/freshfruit.jpeg";
import mojito from "../assets/menu/mojito.jpg";
import sexonthebeach from "../assets/menu/sexonthebeach.jpeg";
import caipiroskafraise from "../assets/menu/caipiroskafraise.jpeg";
import virgincolada from "../assets/menu/virgincolada.jpeg";
import menu from "../assets/menu/menu.pdf";

const Menu = () => {
    const { t } = useTranslation();
  return (
    <div className="main-container">
      <div className="kitchen-hours">
        <h3>
          <Trans>The kitchen is open daily from 12:00 to 20:30</Trans>
        </h3>
      </div>
      {/* First Section: Images on the left, text on the right */}
      <div className="container">
        <div className="left-section">
          <img src={tuna} alt="tuna" className="menu-image" />
          <img src={tartare} alt="tartare" className="menu-image" />
          <img src={tataki} alt="tataki" className="menu-image" />
          <img src={tournedos} alt="tournedos" className="menu-image" />
        </div>
        <div className="right-section">
          <h2 className="menu-section-title"><Trans>MAIN MEALS</Trans></h2>
          <div className="menu-item">
            <div>
              <h4 className="item-name"><Trans>Semi-cooked tuna in a sesame crust</Trans></h4>
              <p className="item-description"><Trans>Sashimi tuna, sesame seeds, spinach sprouts, served with vinegared rice.</Trans></p>
            </div>
            <span className="item-price">€28</span>
          </div>
          <div className="menu-item">
            <div>
              <h4 className="item-name"><Trans>Beef tartare</Trans></h4>
              <p className="item-description"><Trans>Tender chicken accompanied by grilled seasonal vegetables for a healthy and tasty dish.</Trans></p>
            </div>
            <span className="item-price">€24</span>
          </div>
          <div className="menu-item">
            <div>
              <h4 className="item-name"><Trans>Beef tataki with Asian sauce</Trans></h4>
              <p className="item-description"><Trans>Heart of rump steak, Asian sauce, sesame with vinegared rice.</Trans></p>
            </div>
            <span className="item-price">€28</span>
          </div>
          <div className="menu-item">
            <div>
              <h4 className="item-name"><Trans>Tournedos Rossini</Trans></h4>
              <p className="item-description"><Trans>Beef, duck liver escalope, truffle.</Trans></p>
            </div>
            <span className="item-price">€32</span>
          </div>
        </div>
      </div>

      {/* Second Section: Images on the right, text on the left */}
      <div className="container reversed">
        <div className="left-section-reversed">
          <h2 className="menu-section-title"><Trans>PASTA</Trans></h2>
          <div className="menu-item">
            <div>
              <h4 className="item-name"><Trans>Spaghetti Seafood</Trans></h4>
              <p className="item-description"><Trans>Rich and hearty meat sauce simmered to perfection with tomatoes and aromatic herbs.</Trans></p>
            </div>
            <span className="item-price">€26</span>
          </div>
          <div className="menu-item">
            <div>
              <h4 className="item-name"><Trans>Gnocchi à la Sorentina</Trans></h4>
              <p className="item-description"><Trans>A creamy garlic-infused sauce, tender salmon, and fresh garnishes like parsley and lemon combine perfectly.</Trans></p>
            </div>
            <span className="item-price">€22</span>
          </div>
          <div className="menu-item">
            <div>
              <h4 className="item-name"><Trans>Spaghetti Carbonara</Trans></h4>
              <p className="item-description"><Trans>A creamy sauce made with eggs, Parmesan cheese, pancetta, and black pepper, creating a rich and comforting flavor.</Trans></p>
            </div>
            <span className="item-price">€20</span>
          </div>
          <div className="menu-item">
            <div>
              <h4 className="item-name"><Trans>Penne al Pesto</Trans></h4>
              <p className="item-description"><Trans>Basil pesto, garlic, Parmesan, and pine nuts in a flavorful, creamy sauce.</Trans></p>
            </div>
            <span className="item-price">€19</span>
          </div>
        </div>
        <div className="right-section-reversed">
          <img src={seafood} alt="seafood pasta" className="menu-image" />
          <img src={gnocchi} alt="gnocchi à la Sorentina" className="menu-image" />
          <img src={carbonara} alt="spaghetti carbonara" className="menu-image" />
          <img src={pesto} alt="penne al pesto" className="menu-image" />
        </div>
      </div>

      {/* Third Section: Desserts - Images on the left, text on the right */}
      <div className="container">
        <div className="left-section">
          <img src={moelleux} loading="lazy" alt="moelleux" className="menu-image" />
          <img src={frenchtoast} loading="lazy" alt="french toast" className="menu-image" />
          <img src={lemonpie} loading="lazy" alt="lemon pie" className="menu-image" />
          <img src={freshfruit} loading="lazy" alt="fresh fruit" className="menu-image" />
        </div>
        <div className="right-section">
          <h2 className="menu-section-title"><Trans>DESSERT</Trans></h2>
          <div className="menu-item">
            <div>
              <h4 className="item-name"><Trans>Moelleux au chocolat</Trans></h4>
              <p className="item-description"><Trans>Rich chocolate cookie infused with crunchy hazelnuts.</Trans></p>
            </div>
            <span className="item-price">€10</span>
          </div>
          <div className="menu-item">
            <div>
              <h4 className="item-name"><Trans>French toast with vanilla ice cream and salted butter caramel</Trans></h4>
              <p className="item-description"><Trans>Classic cheesecake with a smooth and creamy texture.</Trans></p>
            </div>
            <span className="item-price">€8</span>
          </div>
          <div className="menu-item">
            <div>
              <h4 className="item-name"><Trans>Lemon pie</Trans></h4>
              <p className="item-description"><Trans>Decadent chocolate cake layered with raspberry filling.</Trans></p>
            </div>
            <span className="item-price">€8</span>
          </div>
          <div className="menu-item">
            <div>
              <h4 className="item-name"><Trans>Hawaiian fresh fruit</Trans></h4>
              <p className="item-description"><Trans>Heavenly combination of chocolate and vanilla flavors in a moist cake.</Trans></p>
            </div>
            <span className="item-price">€8</span>
          </div>
        </div>
      </div>

      {/* Fourth Section: Cocktails - Text on the left, images on the right */}
      <div className="container reversed">
        <div className="left-section-reversed">
          <h2 className="menu-section-title"><Trans>COCKTAILS</Trans></h2>
          <div className="menu-item">
            <div>
              <h4 className="item-name"><Trans>Mojito</Trans></h4>
              <p className="item-description"><Trans>A refreshing mix of rum, mint leaves, lime, and soda.</Trans></p>
            </div>
            <span className="item-price">€12</span>
          </div>
          <div className="menu-item">
            <div>
              <h4 className="item-name"><Trans>Sex on the Beach</Trans></h4>
              <p className="item-description"><Trans>Vodka, peach schnapps, cranberry juice, and orange juice.</Trans></p>
            </div>
            <span className="item-price">€10</span>
          </div>
          <div className="menu-item">
            <div>
              <h4 className="item-name"><Trans>Caipiroska Fraise</Trans></h4>
              <p className="item-description"><Trans>A twist on the classic caipiroska with fresh strawberries and lime.</Trans></p>
            </div>
            <span className="item-price">€11</span>
          </div>
          <div className="menu-item">
            <div>
              <h4 className="item-name"><Trans>Virgin Colada</Trans></h4>
              <p className="item-description"><Trans>A tropical, non-alcoholic delight with coconut and pineapple.</Trans></p>
            </div>
            <span className="item-price">€8</span>
          </div>
        </div>
        <div className="right-section-reversed">
          <img src={mojito} loading="lazy" alt="mojito" className="menu-image" />
          <img src={sexonthebeach} loading="lazy" alt="sex on the beach" className="menu-image" />
          <img src={caipiroskafraise} loading="lazy" alt="caipiroska fraise" className="menu-image" />
          <img src={virgincolada} loading="lazy" alt="virgin colada" className="menu-image" />
        </div>
      </div>
      <div className="full-menu-button-container">
      <a href={menu} target="_blank" rel="noopener noreferrer" className="full-menu-button">
        <Trans>Full Menu</Trans>
        </a>
      </div>
    </div>
  );
};

export default Menu;