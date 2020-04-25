import React from 'react';
import { ResponsiveGrid } from '@alifd/next';
import PageHeader from '@/components/PageHeader';
import BasicList from './components/BasicList';

const { Cell } = ResponsiveGrid;

const TableListPage = () => (
  <ResponsiveGrid gap={20}>
    <Cell colSpan={12}>
      <PageHeader
        title="Kubernetes 节点"
        breadcrumbs={[
          {
            name: 'Kubernetes',
          },
          {
            name: 'Nodes(节点)',
          },
        ]}
        description="管理您的Kubernetes节点信息"
      />
    </Cell>

    <Cell colSpan={12}>
      <BasicList />
    </Cell>
  </ResponsiveGrid>
);

export default TableListPage;
