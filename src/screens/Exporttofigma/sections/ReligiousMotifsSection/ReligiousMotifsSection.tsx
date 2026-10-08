export const ReligiousMotifsSection = (): JSX.Element => {
  return (
    <section className="relative w-full overflow-hidden bg-[#251a0d]">
      <div className="relative mx-auto h-[696px] w-full max-w-[1425px]">
        <div className="pointer-events-none absolute inset-0 bg-[#251a0d]" />
        <h1 className="absolute left-[180px] top-0 whitespace-nowrap [font-family:'Bacasime_Antique',Helvetica] text-[183px] font-normal leading-[183px] tracking-[0] text-[#eab156]">
          Eternal
        </h1>
        <h2 className="absolute left-[757px] top-0 whitespace-nowrap [font-family:'Bacasime_Antique',Helvetica] text-[183px] font-normal leading-[183px] tracking-[0] text-[#eab156]">
          Beauty
        </h2>
        <div className="absolute left-[152px] top-[214px] flex w-[400px] flex-col items-start [font-family:'Bacasime_Antique',Helvetica] text-[62px] font-normal leading-[62px] tracking-[0] text-white">
          <span>Visions of the</span>
          <span>Renaissance:</span>
        </div>
        <p className="absolute left-[153px] top-[346px] m-0 w-[400px] [font-family:'Bacasime_Antique',Helvetica] text-[62px] font-normal leading-[62px] tracking-[0]">
          <span className="text-white">Uniting History and </span>
          <span className="text-[#9f7647]">Creativity</span>
        </p>
        <p className="absolute left-[995px] top-[275px] m-0 w-[293px] [font-family:'Work_Sans',Helvetica] text-justify text-[17px] font-normal leading-[23.8px] tracking-[0] text-[#ffffff96]">
          Join us as we celebrate the legacy of the Renaissance through our
          engaging exhibitions. Experience the awe-inspiring beauty of this
          transformative period and revel in the genius of the artists who
          forever changed the course of art.
        </p>
        <div
          aria-label="Renaissance artwork"
          className="absolute left-[480px] top-9 h-[533px] w-[463px] overflow-hidden rounded-[0_300px_0_0] bg-[url(..//image--illustration--9.png)] bg-cover bg-center"
          role="img"
        />
      </div>
    </section>
  );
};
