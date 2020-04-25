import React, { useState, useEffect } from 'react';
import {
  Box,
  Search,
  Card,
  Tag,
  ResponsiveGrid,
  Divider,
  Typography,
  Icon,
  Loading,
  Button,
  Drawer,
  Form, Input, DatePicker, TimePicker, NumberPicker, Select
} from '@alifd/next';

import styles from './index.module.scss';

const { Group: TagGroup, Selectable: SelectableTag } = Tag;
const { Cell } = ResponsiveGrid;


const DEFAULT_DATA = {
  popVisiable: false,
  popTitle: '',
  cards: [
    {
      title: 'PHP',
      content: '管理属于您的PHP环境',
      logo: 'http://pngimg.com/uploads/php/php_PNG35.png',
      link: [ '安装', '监控' ],
      urls: [ '#/env/php/install', '#/env/php/monitor' ]
    },
    {
      title: 'Nginx',
      content: '管理属于您的Nginx环境',
      logo: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2396357380,56598836&fm=26&gp=0.jpg',
      link: [ '安装', '监控' ],
      urls: [ '#/env/nginx/install', '#/env/nginx/monitor' ]
    },
    {
      title: 'MySQL',
      content: '管理属于您的MySQL环境',
      logo: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1131995677,1971778195&fm=26&gp=0.jpg',
      link: [ '安装', '监控' ],
      urls: [ '#/dashboard/analysis', '#/env/mysql/monitor' ]
    }
  ]
};


const FormItem = Form.Item;

const formItemLayout = {
  labelCol: {
    span: 6
  },
  wrapperCol: {
    span: 14
  }
};


const CardList = props => {

  const { dataSource = DEFAULT_DATA, onSearch = () => {} } = props;
  const [tagAValue, setTagAValue] = useState(dataSource.tagA);
  const [tagBValue, setTagBValue] = useState(dataSource.tagB);
  const [loading, setLoading] = useState(true);
  const [popVisiable, setPopVisable] = useState(dataSource.popVisiable);
  const [popTitle, setPopTitle] = useState(dataSource.popTitle);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });

  const showPop = (e) => {
    let name = e.currentTarget.getAttribute('data-name');
    setPopTitle('请配置您的{name}信息'.replace('{name}', name));
    setPopVisable(true)
  }

  const hidePop = () => {
    setPopVisable(false)
  }

  const onTagAValueChange = v => {
    setLoading(true);
    setTagAValue(v);
  };

  const onTagBValueChange = v => {
    setLoading(true);
    setTagBValue(v);
  };

  const onSearchClick = () => {
    setLoading(true);
    onSearch();
  };

  const renderTagListA = () =>
    dataSource.tagsA.map(name => (
      <SelectableTag
        key={name}
        checked={tagAValue === name}
        onChange={() => onTagAValueChange(name)}
        {...props}
      >
        {name}
      </SelectableTag>
    ));

  const renderTagListB = () =>
    dataSource.tagsB.map(name => (
      <SelectableTag
        key={name}
        checked={tagBValue === name}
        onChange={() => onTagBValueChange(name)}
        {...props}
      >
        {name}
      </SelectableTag>
    ));

  function showPage(e) {
    e.preventDefault();
    console.log(e.currentTarget.getAttribute('data-name'))
    showPop(e);
  }

  const renderCards = () =>
    dataSource.cards.map((c, i) => (
      <Cell colSpan={3} className={styles.ListItem} key={i}>
        <div className={styles.main}>
          <img
            style={{width:'300px', height:'300px'}}
            src={c.logo}
            alt="img"
          />
          <div className={styles.content}>
            <div className={styles.title}>{c.title}</div>
            <div className={styles.info}>{c.content}</div>
            <div className={styles.link}>
              <a onClick={showPage} data-name={c.title} href={c.urls[0]}>{c.link[0]}</a>
              <a href={c.urls[1]}>{c.link[1]}</a>
              <Drawer
                title={popTitle}
                style={{width:'900px'}}
                placement='right'
                visible={popVisiable}
                onClose={hidePop}
              >

                <Form {...formItemLayout}>
                  <FormItem label="端口：" validateState="error" help="请输入端口号">
                    <Input defaultValue="80"/>
                  </FormItem>

                  {/*<FormItem label="Loading：" hasFeedback validateState="loading" help="Information Checking...">*/}
                  {/*  <Input defaultValue="Checking"/>*/}
                  {/*</FormItem>*/}

                  {/*<FormItem label="Success：" hasFeedback validateState="success">*/}
                  {/*  <Input defaultValue="Successful verification"/>*/}
                  {/*</FormItem>*/}

                  {/*<FormItem label="Datepicker：" validateState="error" help="Please select the correct date">*/}
                  {/*  <DatePicker />*/}
                  {/*</FormItem>*/}

                  {/*<FormItem label="Timepicker：" validateState="error" help="Please select the correct time">*/}
                  {/*  <TimePicker />*/}
                  {/*</FormItem>*/}

                  {/*<FormItem label="Select：" validateState="error" help="Please select a country">*/}
                  {/*  <Select placeholder="Please select a country">*/}
                  {/*    <option value="china">China</option>*/}
                  {/*    <option value="use">United States</option>*/}
                  {/*    <option value="japan">Japan</option>*/}
                  {/*    <option value="korean">South Korea</option>*/}
                  {/*    <option value="Thailand">Thailand</option>*/}
                  {/*  </Select>*/}
                  {/*</FormItem>*/}

                  <FormItem label="进程数：" validateState="ok">
                    <NumberPicker defaultValue={8} />
                  </FormItem>

                  <FormItem wrapperCol={{ offset: 6 }} >
                    <Form.Submit validate type="primary" onClick={(v, e) => console.log(v, e)} style={{marginRight: 10}}>提交</Form.Submit>
                    <Form.Reset >重置</Form.Reset>
                  </FormItem>

                </Form>


              </Drawer>
            </div>
          </div>
        </div>
      </Cell>
    ));

  return (
    <>
      <Loading visible={loading}>
        <ResponsiveGrid gap={20}>
          {renderCards()}
        </ResponsiveGrid>
      </Loading>
    </>
  );
};

export default CardList;
