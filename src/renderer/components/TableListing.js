import React from 'react';
import {CTable} from '@coreui/react';

const sampleColumns = [
  {
    key: 'id',
    label: '#',
    _props: { scope: 'col' },
  },
  {
    key: 'class',
    _props: { scope: 'col' },
  },
  {
    key: 'heading_1',
    label: 'Heading',
    _props: { scope: 'col' },
  },
  {
    key: 'heading_2',
    label: 'Heading',
    _props: { scope: 'col' },
  },
];
const sampleItems = [
  {
    id: 1,
    class: 'Mark',
    heading_1: 'Otto',
    heading_2: '@mdo',
    _cellProps: { id: { scope: 'row' } },
  },
  {
    id: 2,
    class: 'Jacob',
    heading_1: 'Thornton',
    heading_2: '@fat',
    _cellProps: { id: { scope: 'row' } },
  },
  {
    id: 3,
    class: 'Larry the Bird',
    heading_2: '@twitter',
    _cellProps: { id: { scope: 'row' }, class: { colSpan: 2 } },
  },
]
const TableListing = (columns, items) => {
  const renderColumns = columns ?? sampleColumns;
  const renderItems = items?? sampleItems
  console.log("###### render columns", renderColumns)
  console.log("###### render items ", renderItems)

  return (
    <CTable columns={sampleColumns} items={sampleItems} />
  )
}

export default TableListing;
