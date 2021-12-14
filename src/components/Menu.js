import React from "react";

export const Menu = () => {
  return (
    <div className="container" id="menu-wrap">
      <div className="row menu-header justify-content-center">
        <div className="col-12 justify-content-center">
          <h3 id="menu-header" className="text-center">
            DRINK MENU
          </h3>
        </div>
      </div>
      {/* SIGNATURE COCKTAILS SECTION START */}
      <div className="row cocktail-header  justify-content-center">
        <div className="col-12  justify-content-center">
          <h3 id="cocktail-head" className="text-center mx-auto">
            SIGNATURE COCKTAILS
          </h3>
        </div>
      </div>

      <div className="row" id="menu-items">
        <div className="col-12 col-md-6 col-lg-4" id="menu-item">
          <p className="drink-name">Ron Burgandy 16</p>
          <p className="dr-description">
            Wild Turkey bourbon, sugar, angonostura & orange bitters
          </p>
        </div>
        <div className="col-12 col-md-6 col-lg-4" id="menu-item">
          <p className="drink-name">Veronica Corningstone 14</p>
          <p className="dr-description">
            Skyy vodka, elderflower, lavender, lemon & seltzer
          </p>
        </div>
        <div className="col-12 col-md-6 col-lg-4" id="menu-item">
          <p className="drink-name">Afternoon Delight 14</p>
          <p className="dr-description">
            Herradura reposado tequila, pineapple, jalapeno, agave & lime
          </p>
        </div>
        <div className="col-12 col-md-6 col-lg-4" id="menu-item">
          <p className="drink-name">Stay Classy... 16</p>
          <p className="dr-description">
            Grey Goose peach, lemon, orange peach bitters & sparkling water
          </p>
        </div>
      </div>

      {/* SIGNATURE COCKTAILS SECTION END */}
      {/* CLASSIC COCKTAILS SECTION START */}
      <div className="row cocktail-header  justify-content-center">
        <div className="col-12  justify-content-center">
          <h3 id="cocktail-head" className="text-center mx-auto">
            CLASSIC COCKTAILS
          </h3>
        </div>
      </div>

      <div className="row" id="menu-items">
        <div className="col-12 col-md-6 col-lg-4" id="menu-item">
          <p className="drink-name">Irish Mule 10</p>
          <p className="dr-description">
            Irish whiskey, fresh lime juice, bitters & Gosling's ginger beer
          </p>
        </div>
        <div className="col-12 col-md-6 col-lg-4" id="menu-item">
          <p className="drink-name">Old Fashioned 12</p>
          <p className="dr-description">
            Bourbon, simple syrup, bitters pressed orange & luxardo cherry
          </p>
        </div>
        <div className="col-12 col-md-6 col-lg-4" id="menu-item">
          <p className="drink-name">Mojito 10</p>
          <p className="dr-description">
            White rum, mint, fresh lime juice, simple syrup & club soda
          </p>
        </div>
        <div className="col-12 col-md-6 col-lg-4" id="menu-item">
          <p className="drink-name">Manhattan 12</p>
          <p className="dr-description">
            Bourbon, vermouth, angostura bitters, orange bitters & luxardo
            cherry
          </p>
        </div>
      </div>
      {/* CLASSIC COKTAILS SECTION END */}
      {/* CRAFT BEER SECTION START */}
      <div className="row cocktail-header  justify-content-center">
        <div className="col-12  justify-content-center">
          <h3 id="cocktail-head" className="text-center mx-auto">
            CRAFT BEERS
          </h3>
        </div>
      </div>

      <div className="row" id="menu-items">
        <div className="col-12 col-md-6 col-lg-4" id="menu-item">
          <p className="drink-name" id="beer-name">
            Mango Cart 6
          </p>
          <p className="beer-co">Golden Road Brewing</p>
          <p className="dr-description">
            A light wheat ale with lots of fresh mango flavor and aroma
          </p>
        </div>
        <div className="col-12 col-md-6 col-lg-4" id="menu-item">
          <p className="drink-name" id="beer-name">
            Cucumber Crush 7
          </p>
          <p className="beer-co">10 Barrel Brewing Co.</p>
          <p className="dr-description">
            Sour beer that tastes like a crispy baby cucumber fresh from the
            garden
          </p>
        </div>
        <div className="col-12 col-md-6 col-lg-4" id="menu-item">
          <p className="drink-name" id="beer-name">
            Perky Blonde 7
          </p>
          <p className="beer-co">Resident Brewing Co.</p>
          <p className="dr-description">
            American style, malt forward blonde ale
          </p>
        </div>
        <div className="col-12 col-md-6 col-lg-4" id="menu-item">
          <p className="drink-name" id="beer-name">
            Blood Orange IPA 8
          </p>
          <p className="beer-co">Latitude 33 Brewing</p>
          <p className="dr-description">
            Crisp entry and slightly sweet finish, blood orange fans will love
          </p>
        </div>
      </div>
      {/* CRAFT BEER SECTION END */}
    </div>
  );
};
