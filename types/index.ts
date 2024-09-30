import { ReactNode } from "react";

export interface ChildProps {
  children: ReactNode;
}

export interface IDropdown {
  title: string;
  items: Iitem[];
}

export interface Iitem {
  id: number;
  link: string;
}
