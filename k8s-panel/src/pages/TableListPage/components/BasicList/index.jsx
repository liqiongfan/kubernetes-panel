import React, { useState, useEffect } from 'react';
import {
  Card,
  Table,
  Pagination,
  Divider,
  ResponsiveGrid,
  Button,
  Box,
  Form,
  Input,
  Select,
  Icon,
  Loading,
} from '@alifd/next';
import styles from './index.module.scss';
import {request} from "ice";

const { Cell } = ResponsiveGrid;
const { Option } = Select;
const FormItem = Form.Item;

const mockTableData = [];

for (let i = 0; i <= 0; i += 1) {
  mockTableData.push({
    // name: `品牌营销服务设计 ${String.fromCharCode(97 + i).toUpperCase()}`,
    name: 'docker-desktop',
    status: '就绪',
    roles: '主节点',
    age: '245d',
    version: 'v1.14.3',
  });
}

const DEFAULT_DATA = {
  tableData: mockTableData,
  tableColumn: {
    name: '名称',
    status: '状态',
    roles: '角色',
    age: '时长',
    version: '版本',
  },
};

const TableList = props => {
  const { dataSource = DEFAULT_DATA } = props;
  const [loading, setLoading] = useState(true);
  const [expand, setExpand] = useState(false);

  console.log(dataSource.tableData)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });

  const onOperation = () => {
    setLoading(true);
  };

  const onPaginationChange = () => {
    setLoading(true);
  };

  const toggleSeachList = () => {
    setExpand(!expand);
  };

  return (
    <>
      <Card free>
        <Card.Content>
          <Box padding={10}>
            <Form responsive fullWidth labelAlign="top">
              <FormItem colSpan={3} label="节点名称">
                <Input
                  placeholder="输入节点名称进行搜索"
                  innerAfter={<Icon type="search" size="xs" className={styles.searchIcon} />}
                />
              </FormItem>
              {/*<FormItem colSpan={3} label="需求方">*/}
              {/*  <Input placeholder="输入需求方进行搜索" />*/}
              {/*</FormItem>*/}
              {/*<FormItem colSpan={3} label="标签">*/}
              {/*  <Select placeholder="选择标签">*/}
              {/*    <Option value="small">标签A</Option>*/}
              {/*    <Option value="medium">标签B</Option>*/}
              {/*  </Select>*/}
              {/*</FormItem>*/}
              {/*{expand && (*/}
              {/*  <>*/}
              {/*    <FormItem colSpan={3} label="需求名称/编号">*/}
              {/*      <Input*/}
              {/*        placeholder="输入需求名称/编号进行搜索"*/}
              {/*        innerAfter={<Icon type="search" size="xs" className={styles.searchIcon} />}*/}
              {/*      />*/}
              {/*    </FormItem>*/}
              {/*    <FormItem colSpan={3} label="需求方">*/}
              {/*      <Input placeholder="输入需求方进行搜索" />*/}
              {/*    </FormItem>*/}
              {/*    <FormItem colSpan={3} label="标签">*/}
              {/*      <Select placeholder="选择标签">*/}
              {/*        <Option value="small">标签A</Option>*/}
              {/*        <Option value="medium">标签B</Option>*/}
              {/*      </Select>*/}
              {/*    </FormItem>*/}
              {/*    <FormItem colSpan={3} label="标签">*/}
              {/*      <Select placeholder="选择标签">*/}
              {/*        <Option value="small">标签A</Option>*/}
              {/*        <Option value="medium">标签B</Option>*/}
              {/*      </Select>*/}
              {/*    </FormItem>*/}
              {/*  </>*/}
              {/*)}*/}
              <Cell colSpan={3} className={styles.btns}>
                <Box
                  spacing={8}
                  direction="row"
                  align="flex-end"
                  justify="center"
                  style={{
                    height: '100%',
                  }}
                >
                  <Button type="primary" onClick={onOperation}>
                    查询
                  </Button>
                  <Form.Reset>重置</Form.Reset>
                  {/*<Button onClick={toggleSeachList}>*/}
                  {/*  {expand ? (*/}
                  {/*    <>*/}
                  {/*      收起 <Icon className={styles.icon} type="arrow-up" size="xs" />*/}
                  {/*    </>*/}
                  {/*  ) : (*/}
                  {/*    <>*/}
                  {/*      展开 <Icon className={styles.icon} type="arrow-down" size="xs" />*/}
                  {/*    </>*/}
                  {/*  )}*/}
                  {/*</Button>*/}
                </Box>
              </Cell>
            </Form>
          </Box>
          <Divider dashed />
          <div className={styles.Main}>
            <Loading visible={loading}>
              <div className={styles.add}>
                <Button type="primary">新增</Button>
                <Button type="normal">下载</Button>
                <Button type="normal">
                  更多操作
                  <Icon className={styles.icon} type="arrow-down" />
                </Button>
              </div>
              <Table
                hasBorder={false}
                className={styles.Table}
                dataSource={dataSource.tableData}
                rowSelection={{
                  columnProps: () => ({
                    lock: 'left',
                  }),
                }}
              >
                {Object.keys(dataSource.tableColumn).map(col => (
                  <Table.Column title={dataSource.tableColumn[col]} dataIndex={col} key={col} />
                ))}
                <Table.Column
                  title="操作"
                  cell={() => (
                    <div className={styles.opt}>
                      <Button type="primary" text>
                        编辑
                      </Button>
                      <Divider direction="ver" />
                      {/*<Button type="primary" text>*/}
                      {/*  订阅*/}
                      {/*</Button>*/}
                      {/*<Divider direction="ver" />*/}
                      <Button type="primary" text>
                        删除
                      </Button>
                    </div>
                  )}
                />
              </Table>
              <Box margin={[15, 0, 0, 0]} direction="row" align="center" justify="space-between">
                <div className={styles.total}>
                  共<span>1</span>条需求
                </div>
                <Pagination total={1} onChange={onPaginationChange} />
              </Box>
            </Loading>
          </div>
        </Card.Content>
      </Card>
    </>
  );
};

export default TableList;
