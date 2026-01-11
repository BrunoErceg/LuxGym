import Section from '@layout/Section';
import Hashtag from '@ui/Hashtag';

function hashTags() {
  return (
    <Section className="pt-0 pb-20 md:pt-0 md:pb-15">
      <Hashtag className="relative z-10 w-[120%] translate-x-[-50px] translate-y-10 -rotate-12 md:translate-y-[50px] md:-rotate-12 lg:rotate-[-9deg]" />
      <Hashtag className="bg-dark rotate-1" />
    </Section>
  );
}

export default hashTags;
