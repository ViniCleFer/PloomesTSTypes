
type Native = 
{
    "Id": 1,
    "Name": "Dia"
}|
{
    "Id": 2,
    "Name": "Semana"
}|
{
    "Id": 3,
    "Name": "Dia da semana"
}|
{
    "Id": 4,
    "Name": "Mês"
}|
{
    "Id": 5,
    "Name": "Bimestre"
}|
{
    "Id": 6,
    "Name": "Trimestre"
}|
{
    "Id": 7,
    "Name": "Quadrimestre"
}|
{
    "Id": 8,
    "Name": "Ano"
}|
{
    "Id": 9,
    "Name": "Hora"
}
  

interface NonNative {
}

interface RealmType {}

type IPanelsChartsMentricsModifiersSelectKeys = keyof Native;
type IPanelsChartsMentricsModifiersExpandKeys = keyof NonNative;
export type IPanelsChartsMentricsModifiers = Native & NonNative & RealmType;
export type IPanelsChartsMentricsModifiersPartial = Partial<Native & NonNative & RealmType>;
export type IPanelsChartsMentricsModifiersReadOnly = Readonly<IPanelsChartsMentricsModifiers>;
export interface IPanelsChartsMentricsModifiersExpandObject {
  key: 'Modifier';
  selectArray?: IPanelsChartsMentricsModifiersSelectKeys[];
  expandArray?: IPanelsChartsMentricsModifiersExpandKeys[];
}