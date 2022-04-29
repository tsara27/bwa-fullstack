import Image from 'next/image';
import Link from 'next/link';

export interface GameItemProps {
  thumbnail: '/img/Thumbnail-1.png' | '/img/Thumbnail-2.png' | '/img/Thumbnail-3.png' | '/img/Thumbnail-4.png' | '/img/Thumbnail-5.png';
  gameTitle: string;
  gameDevice: string;
}

function GameItem(props: GameItemProps) {
  const { thumbnail, gameTitle, gameDevice } = props;

  return (
    <div className="featured-game-card position-relative">
      <Link href="/details">
        <a>
          <div className="blur-sharp">
            <Image
              className="thumbnail"
              src={thumbnail}
              width={205}
              height={270}
              alt=""
            />
          </div>
          <div className="cover position-absolute bottom-0 m-32">
            <div
              className="d-flex flex-column h-100 justify-content-between text-decoration-none"
            >
              <div className="game-icon mx-auto">
                <Image src="/icon/joystick.svg" height={36} width={54} alt="Joystick console" />
              </div>
              <div>
                <p className="fw-semibold text-white text-xl m-0">{gameTitle}</p>
                <p className="fw-light text-white m-0">{gameDevice}</p>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default GameItem;
