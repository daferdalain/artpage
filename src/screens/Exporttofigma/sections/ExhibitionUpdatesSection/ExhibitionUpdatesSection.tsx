const artworkImages = [
  {
    src: "..//image--illustration--15.png",
    alt: "Lady and the Swan artwork",
    left: "8.9123%",
    top: "7.3718%",
    width: "24.5614%",
    height: "28.7179%",
  },
  {
    src: "..//image--illustration--14.png",
    alt: "Portrait of Mary Stuart II artwork",
    left: "37.7544%",
    top: "2.1154%",
    width: "24.5614%",
    height: "28.9103%",
  },
  {
    src: "..//image--illustration--13.png",
    alt: "After the Hunt artwork",
    left: "66.5263%",
    top: "7.0513%",
    width: "24.5614%",
    height: "26.1538%",
  },
];

const artworkCaptions = [
  {
    title: '"Lady and the Swan"',
    artist: "by Belgian unknown workshop",
    left: "8.9123%",
    top: "37.4359%",
    width: "28.0702%",
  },
  {
    title: '"Portrait of Mary Stuart II"',
    artist: "by Caspar Netscher",
    left: "37.8947%",
    top: "32.5641%",
    width: "28.0702%",
  },
  {
    title: '"After the Hunt"',
    artist: "by Jan Baptist Weenix",
    left: "66.6667%",
    top: "34.9359%",
    width: "28.0702%",
  },
  {
    title: '"Gravin de Pagès, née de Cornellan"',
    artist: "by Joseph-Désiré Court",
    left: "8.9825%",
    top: "81.7949%",
    width: "28.0702%",
  },
  {
    title: '"An Eagle, a Cockerell, Hens, a Pigeon In Flight"',
    artist: "by Melchior de Hondecoeter",
    left: "61.3333%",
    top: "89.1026%",
    width: "15.0877%",
  },
];

export const ExhibitionUpdatesSection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="artworks-heading"
      className="relative isolate w-full overflow-hidden bg-[#251a0d]"
    >
      <div className="relative mx-auto aspect-[1425/1560] w-full max-w-[1425px]">
        <h2
          id="artworks-heading"
          className="absolute left-[15.5789%] top-[-0.4487%] z-10 whitespace-nowrap font-['Bacasime_Antique',Helvetica] text-[clamp(40px,12.84vw,183px)] font-normal leading-none tracking-0 text-[#eab156]"
        >
          Artworks
        </h2>
        {artworkImages.map((artwork) => (
          <figure
            key={artwork.src}
            className="absolute m-0 overflow-hidden"
            style={{
              left: artwork.left,
              top: artwork.top,
              width: artwork.width,
              height: artwork.height,
            }}
          >
            <div
              role="img"
              aria-label={artwork.alt}
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url("${artwork.src}")` }}
            />
          </figure>
        ))}

        {artworkCaptions.map((artwork) => (
          <figcaption
            key={artwork.title}
            className="absolute flex flex-col items-start font-['Work_Sans',Helvetica] text-[clamp(8px,1.053vw,15px)] font-normal leading-[1.4] tracking-0 text-[#ffffff52]"
            style={{
              left: artwork.left,
              top: artwork.top,
              width: artwork.width,
            }}
          >
            <span>{artwork.title}</span>
            <span>{artwork.artist}</span>
          </figcaption>
        ))}

        <p className="absolute left-[9.9649%] top-[45.4487%] m-0 w-[24.7018%] text-justify font-['Work_Sans',Helvetica] text-[clamp(9px,1.193vw,17px)] font-bold leading-[1.4] tracking-0 text-[#ffffff96]">
          There are many reasons why the Renaissance is considered to be such an
          important cultural period. It was a time of renewed interest in
          classical learning and culture. This led to a flowering of art,
          literature, and philosophy that was unprecedented in Western history.
        </p>
        <p className="absolute left-[44.6316%] top-[43.2051%] m-0 w-[35.7895%] text-justify font-['Work_Sans',Helvetica] text-[clamp(9px,1.193vw,17px)] font-normal leading-[1.4] tracking-0 text-[#ffffff96]">
          The Renaissance saw the rise of humanism, a new way of thinking about
          the individual and their place in the world. This new way of thinking
          had a profound impact on society, and it continues to influence our
          thinking today. The Renaissance also had a significant impact on the
          arts. Artists began to focus on depicting the world around them in a
          more realistic way, and they also began to explore new subjects and
          techniques.
        </p>
        <figure className="absolute left-[8.9123%] top-[58.7821%] m-0 aspect-square w-[22.386%] overflow-hidden rounded-full">
          <div
            role="img"
            aria-label="Renaissance portrait artwork"
            className="h-full w-full bg-cover bg-center"
            style={{
              backgroundImage: 'url("..//image--illustration--17.png")',
            }}
          />
        </figure>
        <div
          aria-hidden="true"
          className="absolute left-[5.8947%] top-[61.4103%] aspect-[404/236] w-[28.3509%] rotate-[-15deg] rounded-[308.78px] border-2 border-solid border-[#ffffff08]"
        />
        <figure className="absolute left-[46.8772%] top-[60%] m-0 h-[21.4744%] w-[17.4737%] overflow-hidden rounded-[120px_120px_0_0]">
          <div
            role="img"
            aria-label="Renaissance figure artwork"
            className="h-full w-full bg-cover bg-center"
            style={{
              backgroundImage: 'url("..//image--illustration--18.png")',
            }}
          />
        </figure>
        <figure className="absolute left-[61.1929%] top-[71.4103%] m-0 h-[15.1923%] w-[15.8596%] overflow-hidden">
          <div
            role="img"
            aria-label="Renaissance still life artwork"
            className="h-full w-full bg-cover bg-center"
            style={{
              backgroundImage: 'url("..//image--illustration--16.png")',
            }}
          />
        </figure>
        <div
          aria-hidden="true"
          className="absolute left-[85.0526%] top-[56.6667%] aspect-square w-[1.7544%] bg-[#eab156]"
        />
      </div>
    </section>
  );
};
