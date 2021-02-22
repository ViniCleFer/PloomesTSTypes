import { IFields } from '../Fields';
import { IFilters } from '../Filters';

export interface ITablesFields {
  Id: number;
  TableId: number;
  FieldKey: string;
  Ordination: number;
  AscendingSorting: boolean | null;
  Bold: boolean;
  Field: IFields
}

export interface ITables {
  Id?: number;
  Name?: string;
  EntityId?: number;
  FilterId?: number;
  Filter?: IFilters;
  Fields: ITablesFields[]
  CreatorId?: number;
  MaximumResultsPerPage?: number;
  Url?: string;
  BelongsToPipeline?: boolean;
  UserPageTable?: boolean;
  ContactPageTable?: boolean;
  Listable?: boolean;
  Editable?: boolean;
  Ordination?: number;
  MailChimpListIntegrationId?: number;
  RealmFilterQuery?: string;
  FilterUrl?: string;
  FilterExpand?: string;
}
