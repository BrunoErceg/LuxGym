import { HTMLAttributes } from 'react';
import { cn } from '@/utils/cn';
import Stack from '@layout/Stack';
import Heading from '@ui/Heading';
import Typography from '@ui/Typography';

type CijenaProps = HTMLAttributes<HTMLDivElement> & {
  usluga: string;
  opis: string;
  cijena: number;
};

/**
 * A component that displays a price with a dotted line underneath.
 *
 * @returns A React component that displays a price with a dotted line underneath.
 */
function PriceListItem({ usluga, opis, cijena, className, ...props }: CijenaProps) {
  return (
    <Stack direction="col" gap="none" className={cn('relative pr-16 pb-14')} {...props}>
      <Heading level={4} className="text-left">
        {usluga}
      </Heading>
      <Typography>{opis}</Typography>
      <Typography variant="price">€{cijena}</Typography>
      <div className="dotted-line absolute bottom-0 mb-8 h-1 w-full"></div>
    </Stack>
  );
}

export default PriceListItem;
