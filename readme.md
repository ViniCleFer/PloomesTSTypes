# PloomesTSTypes

Instalação

`npm install @ploomes/ploomeststypes`

Uso

`import PloomesTypes from '@ploomes/ploomestdtypes`

```TS
const { IContacts, IDeals, IFields } = PloomesTypes

const contact: IContacts = { Name: "Hello" }
const deal: IDeals = { Title: "World" }
const field: IFields = { Key: "hello_world_field" }


contact.Title // vai acusar um erro;
```
