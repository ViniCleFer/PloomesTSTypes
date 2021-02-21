import { IDealsPipelines } from "../Deals";
import { ITables } from "../Tables";
import { IUsers } from "../Users";
import { IPanels } from "./IPanels";
import { IPanelsCharts } from "./IPanelsCharts";
import { IPanelsChartsMentricsAggregations } from "./IPanelsChartsMetricAggregations";
import { IPanelsChartsMentricsModifiers } from "./IPanelsChartsMetricsModifiers";

interface Native {
    Id: number;
    ChartId: number;
    TableId: number;
    Name: string;
    Color: string;
    AggregatorId: number | null;
    ModifierId: number | null;
    Oridination: number;
  }
  
  interface NonNative {
      Chart: IPanelsCharts
      Table: ITables
      Aggregator: IPanelsChartsMentricsAggregations
      Modifier: IPanelsChartsMentricsModifiers
  }
  
  interface RealmType {}
  
  type IPanelsChartsMetricsSelectKeys = keyof Native;
  type IPanelsChartsMetricsExpandKeys = keyof NonNative;
  export type IPanelsChartsMetrics = Native & NonNative & RealmType;
  export type IPanelsChartsMetricsReadOnly = Readonly<IPanelsChartsMetrics>;
  export type IPanelsChartsMetricsPartial = Partial<IPanelsChartsMetrics>;
  export interface IPanelsChartsMetricsExpandObject {
    key: 'Metrics';
    selectArray?: IPanelsChartsMetricsSelectKeys[];
    expandArray?: IPanelsChartsMetricsExpandKeys[];
  }
  