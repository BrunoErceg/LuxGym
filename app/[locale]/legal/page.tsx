import Navigation from '@/components/layout/Navigation';
import Heading from '@/components/ui/Heading';
import { useTranslations } from 'next-intl';

export default function Legal() {
  const t = useTranslations('legal');
  return (
    <>
      <title>{`Lux Gym - ${t('title')}`}</title>
      <Navigation />
      <section className="container max-w-[900px] space-y-7 py-25">
        <Heading level={2} className="mb-10 text-center md:mb-15">
          {t('title')}
        </Heading>
        <div>
          <Heading level={3}>{t('imprintTitle')}</Heading>
          <p>{t('imprintText')}</p>
        </div>

        <div>
          <Heading level={3}>{t('privacyTitle')}</Heading>
          <p>{t('privacyText')}</p>
        </div>

        <div>
          <Heading level={3}>{t('complaintTitle')}</Heading>
          <p>{t('complaintText')}</p>
        </div>
        <div>
          <Heading level={3}>{t('disclaimerTitle')}</Heading>
          <p>{t('disclaimerText')}</p>
        </div>
      </section>
    </>
  );
}
