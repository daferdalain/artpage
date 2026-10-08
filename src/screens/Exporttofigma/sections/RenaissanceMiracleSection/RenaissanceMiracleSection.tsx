export const RenaissanceMiracleSection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="renaissance-miracle-title"
      className="relative w-full overflow-hidden bg-[#251a0d]"
      style={{ aspectRatio: "1425 / 1353" }}
    >
      <div aria-hidden="true" className="absolute inset-0 bg-[#251a0d]" />
      <header className="absolute inset-x-0 top-0">
        <h2
          id="renaissance-miracle-title"
          className="absolute left-[35.37%] top-[5.69%] w-[46.60%] font-normal text-[clamp(1rem,4.35vw,3.875rem)] leading-[1] tracking-[0] [font-family:'Bacasime_Antique',Helvetica]"
        >
          <span className="text-[#eab156]">Our Online Guide Offers You a </span>
          <span className="text-[#9f7647]">Virtual Tour</span>
        </h2>
        <p className="absolute left-[8.91%] top-[17.89%] whitespace-nowrap font-normal text-[clamp(0.75rem,2.25vw,2rem)] leading-[1.1] tracking-[0] text-[#9f7647] [font-family:'Bacasime_Antique',Helvetica]">
          Explore More
        </p>
        <p className="absolute left-[35.51%] top-[17.52%] w-[37.61%] font-normal text-[clamp(0.5rem,1.2vw,1.0625rem)] leading-[1.4] tracking-[0] text-[#ffffff82] [font-family:'Work_Sans',Helvetica]">
          Engage with the rich symbolism, meticulous details, and profound
          narratives that characterise Renaissance art, and unlock the secrets
          hidden within each stroke of the brush.
        </p>
      </header>
      <figure className="absolute left-[8.77%] top-[30.67%] m-0 h-[54.77%] w-[82.32%] overflow-hidden">
        <div
          role="img"
          aria-label="Renaissance painting illustration"
          className="h-full w-full bg-[url(..//image--illustration--5.png)] bg-cover bg-center"
        />
      </figure>
      <div
        aria-hidden="true"
        className="absolute left-[8.91%] top-[26.24%] h-px w-[82.11%] bg-[#ffffff14]"
      />
      <div
        aria-hidden="true"
        className="absolute left-[-3.79%] top-[48.63%] h-[40.50%] w-[53.40%] rotate-[-23deg] rounded-[645.78px] border-4 border-solid border-[#ffffff08]"
      />
      <footer className="absolute inset-x-0 bottom-0">
        <p className="absolute left-[27.72%] top-[-11.90%] whitespace-nowrap font-medium text-[clamp(0.5rem,1.05vw,0.9375rem)] leading-[1.4] tracking-[0] text-[#ffffff52] [font-family:'Work_Sans',Helvetica]">
          Watch the clip
        </p>
        <p className="absolute right-[11.23%] top-[-12.00%] whitespace-nowrap text-right font-medium text-[clamp(0.55rem,1.34vw,1.1875rem)] leading-[1.38] tracking-[0] text-[#eab156] [font-family:'Work_Sans',Helvetica]">
          Maria Mathilda Bingham (1810)
        </p>
        <p className="absolute right-[13.93%] top-[13.90%] whitespace-nowrap font-normal text-[clamp(0.4rem,0.84vw,0.75rem)] leading-[1.67] tracking-[1.2px] text-[#fbf6e9] [font-family:'Antic_Didone',Helvetica]">
          BY THOMAS LAWRENCE
        </p>
      </footer>
    </section>
  );
};
