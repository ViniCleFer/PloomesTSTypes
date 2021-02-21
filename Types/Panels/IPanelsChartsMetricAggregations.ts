
type Native = 
{
    "Id": 1,
    "Name": "Contagem"
}|
{
    "Id": 2,
    "Name": "Soma"
}|
{
    "Id": 3,
    "Name": "Média"
}|
{
    "Id": 4,
    "Name": "Valor máximo"
}|
{
    "Id": 5,
    "Name": "Valor mínimo"
}

  

interface NonNative {
}

interface RealmType {}

type IPanelsChartsMentricsAggregationsSelectKeys = keyof Native;
type IPanelsChartsMentricsAggregationsExpandKeys = keyof NonNative;
export type IPanelsChartsMentricsAggregations = Native & NonNative & RealmType;
export type IPanelsChartsMentricsAggregationsPartial = Partial<Native & NonNative & RealmType>;
export type IPanelsChartsMentricsAggregationsReadOnly = Readonly<IPanelsChartsMentricsAggregations>;
export interface IPanelsChartsMentricsAggregationsExpandObject {
  key: 'Aggregation';
  selectArray?: IPanelsChartsMentricsAggregationsSelectKeys[];
  expandArray?: IPanelsChartsMentricsAggregationsExpandKeys[];
}