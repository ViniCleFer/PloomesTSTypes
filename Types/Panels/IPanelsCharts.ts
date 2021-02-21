import { IDealsPipelines } from "../Deals";
import { IUsers } from "../Users";
import { IPanels } from "./IPanels";

interface Native {
    Id: number;
    PanelId: number;
    TypeId: number;
    Name: string;
    CreatorId: number;
    CreateDate: string;
    LastUpdateDate: string;
    Options: string;
    SizeClass: string;
    ViewId: number;
    DealPipelineId: number;
    DealHistoryLastNMonths: number
    Oridination: number;
  }
  
  interface NonNative {
      Creator: IUsers
      Panel: IPanels
      Type: any
      DealPipeline: IDealsPipelines
      Metrics: any[]
  }
  
  interface RealmType {}
  
  type IPanelsChartsSelectKeys = keyof Native;
  type IPanelsChartsExpandKeys = keyof NonNative;
  export type IPanelsCharts = Native & NonNative & RealmType;
  export type IPanelsChartsReadOnly = Readonly<IPanelsCharts>;
  export type IPanelsChartsPartial = Partial<IPanelsCharts>;
  export interface IPanelsChartsExpandObject {
    key: 'Chart';
    selectArray?: IPanelsChartsSelectKeys[];
    expandArray?: IPanelsChartsExpandKeys[];
  }
  