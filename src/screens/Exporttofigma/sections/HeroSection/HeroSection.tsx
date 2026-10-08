import { Button } from "../../../../components/ui/button";

const navigationItems = ["Exhibitions", "Events", "About Gallery", "Location"];

export const HeroSection = (): JSX.Element => {
  return (
    <section className="flex min-h-[1034px] w-full flex-col bg-[#251a0d]">
      <header className="flex h-[85.59px] w-full justify-center bg-transparent">
        <div className="grid h-full w-full max-w-[1200px] grid-cols-[158px_minmax(0,1fr)_188px] items-start">
          <img
            className="mt-[15px] h-[51px] w-[158px]"
            alt="Container"
            src="/container.svg"
          />
          <nav
            className="flex items-start justify-center"
            aria-label="Primary navigation"
          >
            <ul className="mt-[15px] flex items-center">
              {navigationItems.map((item) => (
                <li key={item}>
                  <Button
                    type="button"
                    variant="ghost"
                    className="h-auto rounded-none px-[17.5px] py-2.5 [font-family:'Work_Sans',Helvetica] text-[15px] font-normal leading-[normal] tracking-[0] text-[#ffffff96] hover:bg-transparent hover:text-white"
                  >
                    {item}
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
          <img
            className="mt-[15px] h-[51px] w-[188px] justify-self-end"
            alt="Container margin"
            src="/container-margin.svg"
          />
        </div>
      </header>
      <main
        className="min-h-[948px] w-full flex-1"
        aria-label="Gallery content"
      />
    </section>
  );
};
