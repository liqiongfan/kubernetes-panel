import React from 'react';
import { ResponsiveGrid } from '@alifd/next';
import PageHeader from '@/components/PageHeader';
import CardList from './components/CardList';

const { Cell } = ResponsiveGrid;

const CardListPage = () => (
  <ResponsiveGrid gap={20}>
    <Cell colSpan={12}>
      <PageHeader
        title="PHP环境"
        breadcrumbs={[
          {
            name: '开发环境',
          },
          {
            name: 'PHP环境',
          },
        ]}
        description=""
      />
    </Cell>
    <Cell colSpan={12}>
      <CardList />
    </Cell>
  </ResponsiveGrid>
);

export default CardListPage;
