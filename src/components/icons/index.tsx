export const Copy = () => (
  <svg viewBox="0 0 10 10">
    <path fill="none" d="M4.5 1 L7.5 1 Q8.5 1,8.5 2 L8.5 6 Q8.5 7,7.5 7 L4.5 7 Q3.5 7,3.5 6 L3.5 2 Q3.5 1,4.5 1" />
    <path fill="none" d="M2.5 3 L5.5 3 Q6.5 3,6.5 4 L6.5 8 Q6.5 9,5.5 9 L2.5 9 Q1.5 9,1.5 8 L1.5 4 Q1.5 3,2.5 3" />
  </svg>
);

export const Search: React.FC<{ className?: string; width: number; height: number }> = ({ className, width, height }) => (
  <svg className={className} viewBox="0 0 20 20" width={width} height={height}>
    <path stroke="currentColor" fill="none" d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"></path>
  </svg>
);

export const Home: React.FC = () => (
  <svg viewBox="0 0 500 500">
    <path d="M250 100 L450 230,350 230,350 400,150 400,150 230,50 230,250 100" />
  </svg>
);
