export const ArtworksGallerySection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="artworks-gallery-title"
      className="relative isolate aspect-[1425/796] w-full overflow-hidden bg-[#251a0d]"
    >
      <h1
        id="artworks-gallery-title"
        className="absolute left-[8.91%] top-[4.02%] m-0 w-[36.49%] font-normal text-[clamp(1.5rem,2.95vw,2.625rem)] leading-[1] tracking-normal [font-family:'Bacasime_Antique',Helvetica]"
      >
        <span className="text-[#eab156]">Renaissance Reverie: </span>
        <span className="text-white">Exploring </span>
        <span className="text-[#eab156]">
          the Unveiling Treasures of the XVI Century
        </span>
      </h1>
      <figure className="absolute left-[16.84%] top-[25.38%] m-0 aspect-[506/455] w-[35.51%]">
        <div
          aria-label="The Grocer's Shop artwork"
          className="h-full w-full bg-cover bg-center [background-image:url(..//image--illustration--12.png)]"
          role="img"
        />
      </figure>
      <p className="absolute left-[8.91%] top-[35.43%] m-0 whitespace-nowrap font-normal text-[clamp(2.5rem,6.46vw,5.75rem)] leading-none text-white [font-family:'Bacasime_Antique',Helvetica]">
        —1715
      </p>
      <div className="absolute left-[56.63%] top-[31.03%] w-[20.84%]">
        <h2 className="m-0 font-normal text-[clamp(1.25rem,2.25vw,2rem)] leading-[1.1] [font-family:'Bacasime_Antique',Helvetica]">
          <span className="text-[#eab156]">Frans van Mieris (II) </span>
          <span className="text-[#9f7647]">
            &quot;The Grocer&apos;s Shop&quot;
          </span>
        </h2>
      </div>
      <p className="absolute left-[56.63%] top-[41.96%] m-0 w-[23.30%] text-justify font-normal text-[clamp(0.75rem,1.19vw,1.0625rem)] leading-[1.4] text-[#ffffff96] [font-family:'Work_Sans',Helvetica]">
        This painting, The Grocer&apos;s Shop, can serve as a pendant to The
        Poultry Seller, which was painted by the father of Frans van Mieris the
        Younger and is also on display. The egg basket at the upper right
        appears to have been passed down through the generations.
      </p>
      <p className="absolute left-[56.63%] top-[41.96%] m-0 -translate-y-[2.95rem] whitespace-nowrap font-normal text-[clamp(0.625rem,0.84vw,0.75rem)] leading-[1.67] tracking-[0.1em] text-[#fbf6e9] [font-family:'Antic_Didone',Helvetica]">
        FOLLOWING THE FOOTSTEPS OF THE PAINTER&apos;S ANCESTORS
      </p>
      <img
        alt=""
        aria-hidden="true"
        className="absolute left-[56.14%] top-[10.8%] aspect-[408/9] w-[28.63%]"
        src="/container-1.svg"
      />
      <figcaption className="absolute left-[56%] top-[73.62%] flex w-[28.07%] flex-col font-normal text-[clamp(0.6875rem,1.05vw,0.9375rem)] leading-[1.4] text-[#ffffff52] [font-family:'Work_Sans',Helvetica]">
        <span>&quot;The Grocer&apos;s Shop&quot;</span>
        <span>by Frans van Mieris the Younger</span>
      </figcaption>
    </section>
  );
};
