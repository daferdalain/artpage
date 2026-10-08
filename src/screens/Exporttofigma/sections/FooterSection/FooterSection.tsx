import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import { Button } from "../../../../components/ui/button";

const navigationItems = ["Exhibitions", "Events", "About Gallery", "Location"];

const socialItems = [
  { label: "YouTube", icon: YoutubeIcon },
  { label: "Facebook", icon: FacebookIcon },
  { label: "Instagram", icon: InstagramIcon },
  { label: "Twitter", icon: TwitterIcon },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="w-full bg-[#1e140a] text-white">
      <div className="mx-auto grid min-h-[421px] w-full max-w-[1425px] grid-cols-1 px-8 py-[72px] sm:px-12 lg:grid-cols-3 lg:px-0 lg:py-[100px]">
        <section className="flex flex-col items-start justify-between lg:h-[221px] lg:pl-32">
          <h2 className="[font-family:'Antic_Didone',Helvetica] text-xs font-normal leading-[20px] tracking-[1.2px] text-[#eab156]">
            BUY A TICKET
          </h2>
          <Button
            type="button"
            variant="link"
            className="h-auto p-0 [font-family:'Work_Sans',Helvetica] text-[15px] font-normal leading-[21px] text-[#ffffff52] underline hover:text-[#ffffff96]"
          >
            Faq &amp; Help
          </Button>
        </section>
        <section className="mt-12 flex flex-col items-center lg:mt-0">
          <img
            className="h-[58px] w-40 object-contain"
            alt="Gallery mark"
            src="/text.svg"
          />
          <nav
            aria-label="Gallery navigation"
            className="mt-[30px] flex flex-wrap items-center justify-center gap-x-[34px] gap-y-3"
          >
            {navigationItems.map((item) => (
              <Button
                key={item}
                type="button"
                variant="link"
                className="h-auto p-0 [font-family:'Work_Sans',Helvetica] text-[15px] font-normal leading-[18px] text-[#ffffff96] hover:text-white"
              >
                {item}
              </Button>
            ))}
          </nav>
          <p className="mt-[30px] [font-family:'Work_Sans',Helvetica] text-center text-[15px] font-normal leading-[21px] text-[#ffffff52]">
            © Created by | All rights Reserved
          </p>
          <div className="mt-[30px] flex items-center gap-2">
            {socialItems.map(({ label, icon: Icon }) => (
              <Button
                key={label}
                type="button"
                variant="ghost"
                size="icon"
                aria-label={label}
                className="h-[30px] w-[30px] rounded-none p-0 text-[#ffffff96] hover:bg-transparent hover:text-white"
              >
                <Icon className="h-[18px] w-[18px]" strokeWidth={1.5} />
              </Button>
            ))}
          </div>
        </section>
        <section className="mt-12 flex flex-col items-start justify-between lg:mt-0 lg:h-[221px] lg:items-end lg:pr-32">
          <h2 className="[font-family:'Antic_Didone',Helvetica] text-xs font-normal leading-[20px] tracking-[1.2px] text-[#eab156]">
            MORE INFO
          </h2>
          <Button
            type="button"
            variant="link"
            className="h-auto p-0 [font-family:'Work_Sans',Helvetica] text-[15px] font-normal leading-[21px] text-[#ffffff52] underline hover:text-[#ffffff96] lg:text-right"
          >
            Subscribe
          </Button>
        </section>
      </div>
    </footer>
  );
};
