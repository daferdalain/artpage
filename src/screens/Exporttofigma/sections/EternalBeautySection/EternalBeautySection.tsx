const artworkAssets = [
  {
    src: "/image--illustration--7.png",
    alt: "Renaissance artwork featuring Proserpine",
    className:
      "absolute left-[8.91%] top-[1.78%] h-[59.48%] w-[21.89%] rounded-[9.82%_9.82%_0_0] object-cover",
  },
  {
    src: "/image--illustration--8.png",
    alt: "Renaissance artwork detail",
    className:
      "absolute left-[70.04%] top-[32.06%] h-[30.90%] w-[17.89%] rounded-[9.82%_9.82%_0_0] object-cover",
  },
];

export const EternalBeautySection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="eternal-beauty-title"
      className="relative isolate w-full overflow-hidden bg-[#251a0d] aspect-[1425/1123]"
    >
      <h1
        id="eternal-beauty-title"
        className="absolute left-[29.12%] top-[4.27%] m-0 whitespace-nowrap text-center text-[clamp(2rem,6.46vw,5.75rem)] font-normal leading-none tracking-[0] text-[#eab156] [font-family:'Bacasime_Antique',Helvetica]"
      >
        Renaissance Miracle.
      </h1>
      <h2 className="absolute left-[30.18%] top-[12.64%] m-0 whitespace-nowrap text-[clamp(1.5rem,4.35vw,3.875rem)] font-normal leading-none tracking-[0] [font-family:'Bacasime_Antique',Helvetica]">
        <span className="text-[#eab156]">Embrace the</span>
        <span className="text-white">&nbsp;</span>
        <span className="text-[#9f7647]">Art Treasures</span>
      </h2>
      <p className="absolute left-[27.86%] top-[25.20%] m-0 w-[26.39%] text-justify text-[clamp(0.65rem,1.19vw,1.0625rem)] font-bold leading-[1.4] tracking-[0] text-[#ffffff96] [font-family:'Work_Sans',Helvetica]">
        Step into a world of artistic wonders as RenArt Gallery presents a
        captivating series of Renaissance exhibitions.
      </p>
      <p className="absolute left-[35.58%] top-[33.93%] m-0 w-[28.07%] text-[clamp(0.65rem,1.19vw,1.0625rem)] font-normal leading-[1.4] tracking-[0] text-[#ffffff82] [font-family:'Work_Sans',Helvetica]">
        Each exhibition is thoughtfully designed to highlight a specific theme,
        artist, or artistic movement from the Renaissance period. From the
        grandeur of the Italian High Renaissance to the delicate details of
        Northern Renaissance art, our exhibitions capture the breadth and depth
        of this influential period in art history.
      </p>
      <figure className="absolute left-[44.91%] top-[57.70%] m-0 h-[31.43%] w-[46.11%]">
        <img
          src="/image--illustration--6.png"
          alt="Renaissance gallery illustration"
          className="h-full w-full object-cover"
        />
      </figure>
      <p className="absolute left-[19.30%] top-[56.19%] m-0 whitespace-nowrap text-[clamp(2rem,6.46vw,5.75rem)] font-normal leading-none tracking-[0] text-[#fbf6e9] [font-family:'Bacasime_Antique',Helvetica]">
        —1882
      </p>
      <figure className="absolute left-[8.91%] top-[65.98%] m-0 flex flex-col text-[clamp(0.6rem,1.05vw,0.9375rem)] font-medium leading-[1.4] tracking-[0] text-[#ffffff52] [font-family:'Work_Sans',Helvetica]">
        <figcaption>&quot;Proserpine&quot;</figcaption>
        <figcaption>by Dante Gabriel Rossetti</figcaption>
      </figure>
      <img
        src="/container-1.svg"
        alt=""
        aria-hidden="true"
        className="absolute left-[19.93%] top-[81.57%] h-[0.80%] w-[14.11%]"
      />
      {artworkAssets.map((artwork) => (
        <img
          key={artwork.src}
          src={artwork.src}
          alt={artwork.alt}
          className={artwork.className}
        />
      ))}
    </section>
  );
};
