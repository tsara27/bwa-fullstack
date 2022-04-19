import GameItem from '../../complex/GameItem';

function FeaturedGame() {
  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Our Featured
          <br />
          Games This Year
        </h2>
        <div className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4" data-aos="fade-up">
          <GameItem thumbnail="Thumbnail-1.png" gameTitle="Super Mech" gameDevice="Mobile" />
          <GameItem thumbnail="Thumbnail-2.png" gameTitle="Call of Duty: Modern" gameDevice="Mobile" />
          <GameItem thumbnail="Thumbnail-3.png" gameTitle="Mobile Legends" gameDevice="Mobile" />
          <GameItem thumbnail="Thumbnail-4.png" gameTitle="Clash of Clans" gameDevice="Mobile" />
          <GameItem thumbnail="Thumbnail-5.png" gameTitle="Valorant" gameDevice="Desktop" />
        </div>
      </div>
    </section>
  )
}

export default FeaturedGame;
