import { SVGProps } from "react";

export interface LinkItem {
  id: number;
  name: string;
  to: string;
  icon: any;
}

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};
