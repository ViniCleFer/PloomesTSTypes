
type Native = 
{
  "Id": 1,
  "Name": "Gráfico de área",
  "Key": "AreaChart",
  "Icon": "fa-chart-area"
} |
{
  "Id": 2,
  "Name": "Gráfico de linha",
  "Key": "LineChart",
  "Icon": "fa-chart-line"
} |
{
  "Id": 3,
  "Name": "Gráfico de barra",
  "Key": "ColumnChart",
  "Icon": "fa-chart-bar"
} |
{
  "Id": 4,
  "Name": "Gráfico de pizza",
  "Key": "PieChart",
  "Icon": "fa-chart-pie"
} |
{
  "Id": 5,
  "Name": "Tabela",
  "Key": "Table",
  "Icon": "fa-table"
} |
{
  "Id": 6,
  "Name": "Mapa",
  "Key": "GeoChart",
  "Icon": "fa-map"
} |
{
  "Id": 7,
  "Name": "Indicador",
  "Key": null,
  "Icon": "fa-tachometer"
} |
{
  "Id": 8,
  "Name": "Situação atual do funil",
  "Key": null,
  "Icon": "fa-th-large"
} |
{
  "Id": 9,
  "Name": "Análise histórica do funil",
  "Key": null,
  "Icon": "fa-history"
}


  

interface NonNative {
}

interface RealmType {}

type IPanelsChartsTypesSelectKeys = keyof Native;
type IPanelsChartsTypesExpandKeys = keyof NonNative;
export type IPanelsChartsTypes = Native & NonNative & RealmType;
export type IPanelsChartsTypesPartial = Partial<Native & NonNative & RealmType>;
export type IPanelsChartsTypesReadOnly = Readonly<IPanelsChartsTypes>;
export interface IPanelsChartsTypesExpandObject {
  key: 'Type';
  selectArray?: IPanelsChartsTypesSelectKeys[];
  expandArray?: IPanelsChartsTypesExpandKeys[];
}