import { Button } from "../../../../components/ui/button";

const artworkDetails = [
  {
    artist: "Raphael",
    title: '"The Transfiguration"',
    description:
      "This painting is full of symbolism. Some people believe that the painting represents the different aspects of Jesus's nature, both human and divine. Others believe that the painting is an allegory of the soul's journey to enlightenment.",
    titlePosition: "left-[8.91%] top-[46.24%]",
    descriptionPosition: "left-[1.05%] top-[54.76%]",
    descriptionWidth: "w-[277px]",
  },
  {
    artist: "Bartolomé Esteban Murillo",
    title: '"Virgin and Child"',
    description:
      "Murillo's paintings of the Virgin and Child are popular because he imbues the traditional theme with a sense of intimacy and sweetness. This is evident in the soft modelling of the figures, as well as in the infant's momentary glance away from the Virgin.",
    titlePosition: "left-[35.93%] top-[53.13%]",
    descriptionPosition: "left-[28.70%] top-[62.47%]",
    descriptionWidth: "w-[286px]",
  },
];

export const RenaissanceExplorationSection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="renaissance-exploration-title"
      className="relative isolate flex w-full max-w-[1425px] aspect-[1425/1103] overflow-hidden bg-[#251a0d]"
    >
      <div className="absolute inset-0 bg-[#251a0d]" />
      <time
        dateTime="2025-06-13"
        className="absolute left-[84.77%] top-[6.44%] font-['Work_Sans',Helvetica] text-[15px] font-normal leading-[21px] tracking-[0] text-[#9f7647] whitespace-nowrap"
      >
        Jun 13, 2025
      </time>
      <time
        dateTime="2024-09-22"
        className="absolute left-[9.05%] top-[6.62%] font-['Work_Sans',Helvetica] text-[15px] font-normal leading-[21px] tracking-[0] text-[#9f7647] whitespace-nowrap"
      >
        Sep 22, 2024 –
      </time>
      <h1
        id="renaissance-exploration-title"
        className="absolute left-[8.91%] top-[30.83%] m-0 font-['Bacasime_Antique',Helvetica] text-[62px] font-normal leading-[62px] tracking-[0] text-[#eab156] whitespace-nowrap"
      >
        Religious Motifs
      </h1>
      <p className="absolute left-[55.37%] top-[30.73%] m-0 font-['Bacasime_Antique',Helvetica] text-[62px] font-normal leading-[62px] tracking-[0] text-[#eab156] whitespace-nowrap">
        in Renaissance
      </p>
      <Button
        type="button"
        className="absolute left-[46.81%] top-[32.82%] h-auto rounded-none border-0 bg-transparent p-0 font-['Antic_Didone',Helvetica] text-xs font-normal leading-[20px] tracking-[1.2px] text-[#fbf6e9] shadow-none hover:bg-transparent hover:text-[#eab156]"
      >
        LEARN MORE
      </Button>
      {artworkDetails.map((artwork) => (
        <article key={artwork.artist} className="contents">
          <div
            className={`absolute ${artwork.titlePosition} flex w-[400px] flex-col items-start`}
          >
            <h2 className="m-0 font-['Bacasime_Antique',Helvetica] text-[32px] font-normal leading-[35.2px] tracking-[0] text-[#fbf6e9] whitespace-nowrap">
              {artwork.artist}
            </h2>
            <p className="m-0 font-['Bacasime_Antique',Helvetica] text-[32px] font-normal leading-[35.2px] tracking-[0] text-[#9f7647] whitespace-nowrap">
              {artwork.title}
            </p>
          </div>
          <p
            className={`absolute ${artwork.descriptionPosition} ${artwork.descriptionWidth} m-0 font-['Work_Sans',Helvetica] text-[17px] font-normal leading-[23.8px] tracking-[0] text-[#ffffff82] text-justify`}
          >
            {artwork.description}
          </p>
        </article>
      ))}

      <figure className="absolute left-[67.65%] top-[44.51%] m-0 flex h-[41.16%] w-[23.44%] items-start">
        <div
          role="img"
          aria-label="Renaissance religious artwork"
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/image--illustration--10.png')",
          }}
        />
      </figure>
      <a
        href="#"
        className="absolute left-[1.05%] top-[84.22%] font-['Work_Sans',Helvetica] text-[15px] font-normal leading-[21px] tracking-[0] text-[#eab156] underline underline-offset-2"
      >
        Book tickets
      </a>
      <img
        src="/container-1.svg"
        alt=""
        aria-hidden="true"
        className="absolute left-[8.91%] top-[39%] h-[9px] w-[82.11%]"
      />
      <figure className="absolute left-[32.28%] top-[5.17%] m-0 flex h-[21.76%] w-[35.51%] items-start overflow-hidden rounded-[0_0_250px_250px]">
        <div
          role="img"
          aria-label="Renaissance illustration"
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/image--illustration--11.png')",
          }}
        />
      </figure>
      <div
        aria-hidden="true"
        className="absolute left-[67.09%] top-[39.80%] h-[47.42%] w-[23.44%] rotate-[65deg]"
      >
        <div className="h-full w-full rounded-[417.95px] border-2 border-solid border-[#ffffff08]" />
      </div>
    </section>
  );
};
