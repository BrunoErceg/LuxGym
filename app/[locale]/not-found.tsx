// Next
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

// Images
import background from '@images/teretana-privatni-trening.jpg';

// Components
import OutlineText from '@/components/ui/OutlineText';
import Heading from '@/components/ui/Heading';
import Navigation from '@/components/layout/Navigation';

/**
 * A component that displays a 404 page when the user navigates to a route that does not exist.
 * It includes a title, a background image, and a link to the home page.
 */
function NotFound() {
  const t = useTranslations('notFound');
  return (
    <>
      <title>{`404 - ${t('title')}`}</title>
      <section className="h-screen text-white">
        <Navigation />
        <Image
          alt="Gym"
          src={background}
          fill
          sizes="90vw"
          priority
          className="relative z-[-1] object-cover"
        />
        <div className="text-light relative flex h-[calc(100vh-100px)] w-auto items-center justify-center">
          <div className="container">
            <Heading level={1} className="mb-4 text-center text-9xl md:text-center">
              <OutlineText>404</OutlineText>
            </Heading>
            <Heading level={3} className="md:text-center">
              {t('title')}
            </Heading>
            <Link href="/" className="underline-animation mx-auto block w-fit text-center text-xl">
              {t('link')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default NotFound;
