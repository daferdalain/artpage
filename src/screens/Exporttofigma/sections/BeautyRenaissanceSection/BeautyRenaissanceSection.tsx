import { Button } from "../../../../components/ui/button";

const decorativeAssets = [
  {
    src: "/container-1.svg",
    alt: "",
    className:
      "absolute left-[8.91%] top-[31.22%] h-auto w-[7.09%] max-w-[101px]",
  },
  {
    src: "/container-transform.svg",
    alt: "",
    className:
      "absolute left-[73.40%] top-[8.54%] h-auto w-[26.67%] max-w-[380px]",
  },
];

export const BeautyRenaissanceSection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="beauty-renaissance-title"
      className="relative isolate aspect-[1425/679] w-full overflow-hidden bg-[#251a0d]"
    >
      <div className="absolute inset-0 bg-[#251a0d]" />
      <h1
        id="beauty-renaissance-title"
        className="absolute left-[9.82%] top-[10.90%] m-0 w-[82%] font-normal text-[clamp(22px,6.46vw,92px)] leading-none tracking-0 text-[#eab156] [font-family:'Bacasime_Antique',Helvetica] sm:whitespace-nowrap"
      >
        Unlock the Beauty of the
      </h1>
      <p className="absolute left-[18.67%] top-[25.18%] m-0 font-normal text-[clamp(22px,6.46vw,92px)] leading-none tracking-0 text-[#9f7647] [font-family:'Bacasime_Antique',Helvetica]">
        Renaissance
      </p>
      <p className="absolute left-[9.82%] top-[48.16%] m-0 w-[23.51%] font-normal text-[clamp(8px,1.05vw,15px)] leading-[1.4] tracking-0 text-[#ffffff52] [font-family:'Work_Sans',Helvetica]">
        We strive to create an environment where the masterpieces of the
        Renaissance can be appreciated and admired by all.
      </p>
      <p className="absolute left-[9.82%] top-[48.16%] m-0 w-[25.89%] translate-y-[-35%] font-bold text-[clamp(9px,1.19vw,17px)] leading-[1.4] tracking-0 text-[#ffffff96] [font-family:'Work_Sans',Helvetica]">
        The Renaissance was a period of great cultural, intellectual, and
        artistic change in Europe from the 14th to the 17th centuries.
      </p>
      <Button
        type="button"
        variant="ghost"
        className="absolute left-[47.44%] top-[68.48%] h-auto min-h-0 rounded-none border-0 bg-transparent p-0 font-normal text-[clamp(7px,0.84vw,12px)] leading-[1.67] tracking-[0.1em] text-[#fbf6e9] hover:bg-transparent hover:text-[#fbf6e9] [font-family:'Antic_Didone',Helvetica]"
      >
        ONLINE GUIDE
      </Button>
      {decorativeAssets.map((asset) => (
        <img
          key={asset.src}
          src={asset.src}
          alt={asset.alt}
          aria-hidden="true"
          className={asset.className}
        />
      ))}

      <div
        aria-hidden="true"
        className="absolute left-[87.30%] top-[79.09%] aspect-square w-[1.89%] max-w-[27px] bg-[#eab156]"
      />
      <div
        aria-hidden="true"
        className="absolute left-[43.09%] top-[52.43%] aspect-square w-[5.82%] max-w-[83px] rounded-full bg-[#eab156]"
      />
      <div
        aria-hidden="true"
        className="absolute left-[45.33%] top-[57.14%] h-[2.95%] w-[1.82%] max-w-[26px] rotate-90 bg-white"
      />
      <div className="absolute left-[47.86%] top-[10.90%] h-[72.17%] w-[31.65%] overflow-hidden rounded-t-[21%]">
        <img
          src="/image--illustration--1.png"
          alt="Renaissance portrait illustration"
          className="h-full w-full object-cover object-center"
        />
      </div>
    </section>
  );
};
