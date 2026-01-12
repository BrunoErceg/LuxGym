'use client';
// Next
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

// Icons & images
import { faGoogle, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import background from '@images/teretana-privatni-trening.jpg';
import arrow from '@icons/arrow.svg';

// Constants
import { SOCIAL_LINKS } from '@/utils/constants';

// Components
import Stack from '@layout/Stack';
import Navigation from '@layout/Navigation';
import OutlineText from '@ui/OutlineText';
import NavIcon from '@ui/NavIcon';
import Heading from '@ui/Heading';
import Typography from '@ui/Typography';

const socialItems = [
  { id: 'instagram', icon: faInstagram, link: SOCIAL_LINKS.instagram, label: 'Instagram' },
  { id: 'whatsapp', icon: faWhatsapp, link: SOCIAL_LINKS.whatsapp, label: 'WhatsApp' },
  {
    id: 'google',
    icon: faGoogle,
    link: SOCIAL_LINKS.google,
    label: 'Google',
    className: 'scale-90',
  },
];

/**
 * Hero component, displays hero section with background image, navigation and social links.
 *
 * @returns Hero component.
 */
function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="text-light relative flex h-170 w-screen flex-col justify-between overflow-hidden pb-8 md:h-screen">
      <Image
        alt={t('imageAlt')}
        src={background}
        fill
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1400px"
        className="relative z-[-1] object-cover"
      />

      <Navigation />
      <div className="container">
        <Heading level={1} className="mt-15">
          {t.rich('title', {
            lineBreak: () => <br />,
            OutlineText: (chunks) => <OutlineText>{chunks}</OutlineText>,
          })}
        </Heading>
        <Typography variant="subheading">
          {t.rich('description', {
            underline: (chunks) => <span className="decoration-primary underline">{chunks}</span>,
          })}
        </Typography>
      </div>

      <div className="container">
        <div className="flex items-end justify-between">
          <Stack>
            {socialItems.map(({ id, link, icon, label, className }) => (
              <NavIcon key={id} link={link} icon={icon} aria-label={label} className={className} />
            ))}
          </Stack>
          <Link href="#gym">
            <Image
              src={arrow}
              width={40}
              height={40}
              alt="Scroll down to gym details"
              className="size-7 animate-bounce opacity-90"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
