import { Card, CardContent } from "../../../../components/ui/card";

const exhibitions = [
  {
    artist: "Henriette Ronner-Knip",
    title: "Cat with Kittens",
    status: "On display",
    dates: "May 19, 2023 – Aug 28, 2024",
    number: "01",
    image: "..//image--illustration--2.png",
    titleClassName: "pt-[73px]",
    metadataClassName: "mt-[69px]",
    imageClassName: "mt-[69px] h-[369px]",
  },
  {
    artist: "Kanuty Rusiecki",
    title: "Lithuanian Girl",
    status: "On display",
    dates: "Aug 01, 2023 – Sep 12, 2024",
    number: "02",
    image: "..//image--illustration--3.png",
    titleClassName: "pt-[136px]",
    metadataClassName: "mt-[69px]",
    imageClassName: "mt-[74px] h-[373px]",
  },
  {
    artist: "Marcello Fogolino",
    title: "Maria with The Child",
    status: "Soon",
    dates: "Sep 22, 2024 – Jun 13, 2025",
    number: "03",
    image: "..//image--illustration--4.png",
    titleClassName: "pt-[72px]",
    metadataClassName: "mt-[69px]",
    imageClassName: "mt-[69px] h-96",
  },
];

export const VirtualTourSection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="exhibitions-heading"
      className="relative min-h-[768px] w-full overflow-hidden bg-[#251a0d]"
    >
      <h2
        id="exhibitions-heading"
        className="pointer-events-none absolute left-1/2 top-[51px] -translate-x-1/2 whitespace-nowrap [font-family:'Bacasime_Antique',Helvetica] text-[clamp(92px,12.84vw,183px)] font-normal leading-none tracking-[0] text-[#ffffff0d]"
      >
        Exhibitions
      </h2>
      <div className="relative mx-auto grid min-h-[768px] w-full max-w-[1171px] grid-cols-3 gap-x-[clamp(32px,10.8vw,162px)]">
        {exhibitions.map((exhibition) => (
          <article
            key={exhibition.number}
            className="relative flex min-w-0 flex-col items-start"
          >
            <h3
              className={`${exhibition.titleClassName} w-[304px] max-w-full [font-family:'Bacasime_Antique',Helvetica] text-[32px] font-normal leading-8 tracking-[0]`}
            >
              <span className="text-[#eab156]">{exhibition.artist} </span>
              <span className="text-[#9f7647]">&#34;</span>
              <span className="text-[#9f7647]">{exhibition.title}&#34;</span>
            </h3>
            <div
              className={`${exhibition.metadataClassName} flex w-[212px] max-w-full flex-col items-start [font-family:'Work_Sans',Helvetica] text-[15px] font-normal leading-[21px] tracking-[0]`}
            >
              <span className="text-[#ffffff96]">{exhibition.status}</span>
              <span className="text-[#ffffff4f]">{exhibition.dates}</span>
            </div>
            <Card
              className={`${exhibition.imageClassName} relative w-full max-w-[277px] overflow-visible rounded-none border-0 bg-transparent p-0 shadow-none`}
            >
              <CardContent
                className="relative h-full w-full p-0"
                style={{
                  backgroundImage: `url(${exhibition.image})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <span className="absolute -top-[4px] left-[78px] whitespace-nowrap [font-family:'Bacasime_Antique',Helvetica] text-[62px] font-normal leading-[62px] tracking-[0] text-white">
                  — {exhibition.number}
                </span>
              </CardContent>
            </Card>
          </article>
        ))}
      </div>
    </section>
  );
};
