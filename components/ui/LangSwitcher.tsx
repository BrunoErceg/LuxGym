'use client';

import { usePathname, useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { useLocale } from 'next-intl';

function LangSwitcher() {
  const locale = useLocale(); // Trenutni jezik (hr ili en)
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const nextLocale = locale === 'hr' ? 'en' : 'hr';

    // Zamjenjujemo trenutni locale u URL-u novim
    // npr. /hr/about postaje /en/about
    const newPath = pathname.replace(`/${locale}`, `/${nextLocale}`);

    router.push(newPath);
  };

  return (
    <button
      className="underline-animation ml-7 cursor-pointer text-base duration-150 ease-in-out md:text-xl"
      onClick={toggleLanguage}
    >
      {locale === 'hr' ? 'English' : 'Hrvatski'} <FontAwesomeIcon icon={faLanguage} />
    </button>
  );
}

export default LangSwitcher;
