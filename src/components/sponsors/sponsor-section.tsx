import { Company, SponsorCategory } from '@/models/models';

import { SponsorLogo } from './sponsor-logo';
import styles from './sponsor-section.module.css';

type Props = {
  sectionTitle: string;
  companies: Company[];
};

export function SponsorSection({ sectionTitle, companies }: Props) {
  const mainSponsor = companies.find((c) => c.category === SponsorCategory.MAIN_SPONSOR);
  const featuredSponsors = companies.filter((c) => c.category === SponsorCategory.FEATURED_SPONSOR);
  const regularSponsors = companies.filter((c) => c.category === SponsorCategory.SPONSOR);

  return (
    <div className='w-full bg-white'>
      <section className={styles.section}>
        <h2 className='text-3xl font-bold'>{sectionTitle}</h2>
        <div className='flex flex-col justify-center'>
          <h3 className='mb-auto text-3xl'>Főtámogató</h3>
          <div className='my-auto flex flex-wrap items-center justify-evenly'>
            {mainSponsor?.logoUrl && (
              <div className='mx-0 h-auto w-72 sm:w-96 2xl:w-80'>
                <SponsorLogo company={mainSponsor} />
              </div>
            )}
          </div>
        </div>
        <div>
          <h3 className='text-3xl'>Kiemelt támogatók</h3>
          <div className={styles.containerMany}>
            {featuredSponsors.map(
              (c) =>
                c.logoUrl && (
                  <div className='col-span-2 h-auto max-w-[200px]'>
                    <SponsorLogo key={c.name} company={c} />
                  </div>
                )
            )}
          </div>
        </div>
        <div>
          <h3 className='text-3xl'>További támogatóink</h3>
          <div className={styles.containerMany}>
            {regularSponsors.map((c) => (
              <div className='col-span-2 h-auto max-w-[170px]'>
                <SponsorLogo key={c.name} company={c} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
