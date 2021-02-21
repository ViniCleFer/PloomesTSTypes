import { IUsers } from "../Users";
import { IPanelsCharts } from "./IPanelsCharts";

interface Native {
    Id: number;
    Name: string;
    CreatorId: number;
    CreateDate: string;
    LastUpdateDate: string;
    Editable: boolean;
    Oridination: number;
  }
  
  interface NonNative {
      Creator: IUsers
      Charts: IPanelsCharts
  }
  
  interface RealmType {}
  
  type IPanelsSelectKeys = keyof Native;
  type IPanelsExpandKeys = keyof NonNative;
  export type IPanels = Native & NonNative & RealmType;
  export type IPanelsReadOnly = Readonly<IPanels>;
  export type IPanelsPartial = Partial<IPanels>;
  export interface IPanelsExpandObject {
    key: 'Panel';
    selectArray?: IPanelsSelectKeys[];
    expandArray?: IPanelsExpandKeys[];
  }
  