import {
  HomeIcon,
  PaperPlaneIcon,
  ExclamationTriangleIcon,
  ArrowLeftIcon,
  LayersIcon,
  PlusIcon,
  MinusIcon,
  StarIcon,
  HeartIcon,
  HeartFilledIcon,
  DashboardIcon,
  GearIcon,
  ExitIcon,
} from '@radix-ui/react-icons';

export type IconProps = React.SVGProps<SVGSVGElement>;

export const Icons = {
  logo: (props: IconProps) => (
    <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
      className="lucide lucide-armchair"
      {...props}
              >
                <path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3" />
                <path d="M3 11v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H7v-2a2 2 0 0 0-4 0Z" />
                <path d="M5 18v2" />
                <path d="M19 18v2" />
              </svg>
  ),
  menu: (props: IconProps) => (
    <svg
      {...props}
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 4.5C2 4.22386 2.22386 4 2.5 4H12.5C12.7761 4 13 4.22386 13 4.5C13 4.77614 12.7761 5 12.5 5H2.5C2.22386 5 2 4.77614 2 4.5ZM2 7.5C2 7.22386 2.22386 7 2.5 7H7.5C7.77614 7 8 7.22386 8 7.5C8 7.77614 7.77614 8 7.5 8H2.5C2.22386 8 2 7.77614 2 7.5ZM2 10.5C2 10.2239 2.22386 10 2.5 10H10.5C10.7761 10 11 10.2239 11 10.5C11 10.7761 10.7761 11 10.5 11H2.5C2.22386 11 2 10.7761 2 10.5Z"
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
      ></path>
    </svg>
  ),
  home: HomeIcon,
  paperPlane: PaperPlaneIcon,
  exclamation: ExclamationTriangleIcon,
  arrowLeft: ArrowLeftIcon,
  layers: LayersIcon,
  plus: PlusIcon,
  minus: MinusIcon,
  star: StarIcon,
  heart: HeartIcon,
  heartfill: HeartFilledIcon,
  dashboard: DashboardIcon,
  gear: GearIcon,
  exit: ExitIcon,
};
