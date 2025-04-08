import { Icons } from './Icons';
import { cn } from '@/lib/utils';

interface RatingProp {
  rating: number;
}

function Rating({ rating }: RatingProp) {
  return (
    <div className="flex items-center space-x-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <Icons.star
          key={index}
          className={cn(
            'size-5 ',
            rating >= index + 1 ? 'text-yellow-500' : 'text-muted-foreground'
          )}
        />
      ))}
    </div>
  );
}

export default Rating;
