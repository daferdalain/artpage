import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const articles = [
  {
    date: "MAY 22, 2022",
    title: "RenArt Gallery Launches Virtual Tour Experience",
    description:
      "RenArt Gallery has launched a new virtual tour experience. The tour allows visitors to explore the gallery's collection of over 1,000 paintings from the Renaissance period.",
    image: "/image--illustration--19.png",
    imageClass:
      "top-[637px] left-[15px] h-[550px] w-[319px] rounded-[0_250px_0_0]",
    titleClass: "left-[15px]",
    descriptionClass: "left-[15px]",
    dateClass: "left-[15px]",
  },
  {
    date: "JUNE 02, 2023",
    title: "Immerse Yourself in the Timeless Beauty",
    description:
      "Step into a world of sophistication, elegance, and creativity as you wander through the corridors of RenArt Gallery with an exquisite collection of Renaissance masterpieces.",
    image: "/image--illustration--20.png",
    imageClass:
      "top-[545px] left-[456px] h-[642px] w-[289px] rounded-[150px_150px_0_0]",
    titleClass: "left-[456px]",
    descriptionClass: "left-[455px]",
    dateClass: "left-[456px]",
  },
  {
    date: "JULY 18, 2023",
    title: "New Captivating Art Collection at RenArt",
    description:
      'Prepare to embark on an enchanting journey as we venture deep into the heart of RenArt, a treasure trove of Renaissance art and its new "Love for Life" exhibition.',
    image: "/image--illustration--21.png",
    imageClass:
      "top-[462px] left-[856px] h-[725px] w-[326px] rounded-[230px_0_0_0]",
    titleClass: "left-[856px]",
    descriptionClass: "left-[860px]",
    dateClass: "left-[861px]",
  },
];

export const ExhibitionListingsSection = (): JSX.Element => {
  return (
    <section className="relative isolate min-h-[1599px] w-full overflow-hidden bg-[#251a0d]">
      <div className="relative mx-auto min-h-[1599px] w-full max-w-[1425px]">
        <header className="absolute inset-x-0 top-0">
          <img
            className="absolute left-[8.9%] top-[68px] h-[9px] w-[196px]"
            src="/container-1.svg"
            alt=""
            aria-hidden="true"
          />
          <h1 className="absolute left-[27.6%] top-10 w-[722px] [font-family:'Bacasime_Antique',Helvetica] text-[62px] font-normal leading-[62px] tracking-[0]">
            <span className="text-[#eab156]">
              Here, We Keep You Informed About the Latest{" "}
            </span>
            <span className="text-[#9f7647]">Exhibitions</span>
            <span className="text-[#eab156]"> and </span>
            <span className="text-[#9f7647]">Events</span>
          </h1>
        </header>
        <section
          className="absolute left-[8.9%] top-[302px] flex w-[82.5%] items-start"
          aria-labelledby="news-and-articles"
        >
          <div className="w-[32.8%] shrink-0">
            <h2
              id="news-and-articles"
              className="[font-family:'Bacasime_Antique',Helvetica] text-[32px] font-normal leading-[35.2px] text-[#9f7647]"
            >
              News &amp; Articles
            </h2>
            <p className="mt-[35px] w-[275px] [font-family:'Work_Sans',Helvetica] text-[15px] font-normal leading-[21px] text-[#ffffff4f]">
              Stay on the art wave. Be the first to know about new exhibitions.
            </p>
          </div>
          <p className="w-[535px] [font-family:'Work_Sans',Helvetica] text-justify text-[17px] font-normal leading-[23.8px] text-[#ffffff82]">
            From announcements of upcoming exhibitions and gallery openings to
            interviews with renowned art historians and curators, our News
            section offers a glimpse into the dynamic world of Renaissance art.
            Discover fascinating insights, captivating stories, and
            behind-the-scenes details.
          </p>
          <Button
            type="button"
            variant="ghost"
            className="ml-auto h-auto rounded-none px-0 py-0 text-xs font-normal leading-5 tracking-[1.2px] text-[#fbf6e9] hover:bg-transparent hover:text-[#eab156] [font-family:'Antic_Didone',Helvetica]"
          >
            MORE NEWS
          </Button>
        </section>
        <section
          className="absolute inset-x-0 top-0 min-h-[1599px]"
          aria-label="Featured articles"
        >
          {articles.map((article) => (
            <Card
              key={article.title}
              className="absolute inset-0 border-0 bg-transparent p-0 shadow-none"
            >
              <div className={`absolute overflow-hidden ${article.imageClass}`}>
                <img
                  className="h-full w-full object-cover"
                  src={article.image}
                  alt=""
                />
              </div>
              <CardContent className="absolute inset-0 p-0">
                <time
                  className={`absolute top-[1222px] ${article.dateClass} whitespace-nowrap [font-family:'Antic_Didone',Helvetica] text-xs font-normal leading-5 tracking-[1.2px] text-[#fbf6e9]`}
                >
                  {article.date}
                </time>
                <h3
                  className={`absolute top-[1268px] ${article.titleClass} w-[329px] [font-family:'Bacasime_Antique',Helvetica] text-[32px] font-normal leading-[35.2px] text-[#eab156]`}
                >
                  {article.title}
                </h3>
                <p
                  className={`absolute top-[1356px] ${article.descriptionClass} w-[325px] [font-family:'Work_Sans',Helvetica] text-justify text-[17px] font-normal leading-[23.8px] text-[#ffffff96]`}
                >
                  {article.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </section>
      </div>
    </section>
  );
};
