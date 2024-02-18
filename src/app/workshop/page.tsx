export default function WorkshopPage() {
  return (
    <div className='max-w-6xl w-full px-6 xl:px-0'>
      <h1 className='mb-16 mt-16 text-3xl sm:text-4xl md:text-[42px]'>A 21. század műanyaga az AI - Workshop</h1>
      <div className='flex flex-col md:flex-row gap-8'>
        <div>
          <p className='text-stone-200 text-[20px] whitespace-pre-line'>
            A 21. század műanyaga a mesterséges intelligencia. Már előreláthatólag el fog árasztani mindent, és lépésről
            lépésre fel kell fedezzük (a mérnökök és a felhasználók) a tulajdonságait, hogy az általános használata
            milyen előnyökkel és hátrányokkal jár együtt. 2 órás gyakorlati workshopomban a résztvevőkkel együtt
            bemutatom a neurális hálók működését, eddig megismert tulajdonságait. A résztvevőkkel felépítünk egy kisebb
            képfelismerő hálót, majd a hálót felhasználva megismerjük a ma népszerű nagy nyelvi modelleket (ChatGPT,
            Gemini) biztonsági és etikai szempontok alapján.
          </p>
          <p className='mt-8 text-stone-200 text-[20px] whitespace-pre-line'>A részvétel regsiztrációhoz kötött ....</p>
        </div>
        <div className='flex flex-col items-center flex-shrink-0 text-center md:max-w-sm order-first md:order-last'>
          <img
            src='https://konf-api-staging.kir-dev.hu/cdn/public/MEDVE_17BB6XBGVH7Q2.webp'
            // TODO PROD LINK
            className='object-cover rounded-3xl w-[250px] h-[250px] sm:w-[308px] sm:h-[308px]'
            alt='Presentation Image'
          />
          <p className='block mt-4 text-[32px] leading-tight font-bold text-white-900'>Bartos-Elekes Miklós</p>
          <p className='block mt-0.5 text-[20px]  text-[#FFE500]'>LEGO Kör MI projektvezető, MSc hallgató</p>
        </div>
      </div>
    </div>
  );
}
