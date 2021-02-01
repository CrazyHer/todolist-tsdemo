import {
  Button,
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Paper,
  Tab,
  Tabs,
  TextField,
  LinearProgress,
} from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import React, { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import { fetch, Models } from './rapper';
import { Delete, Star, StarOutline } from '@material-ui/icons';

function App() {
  let [currentTab, setTab] = useState(0);
  const handleChange = (event: any, value: number) => {
    setTab(value);
  };

  return (
    <div className='app'>
      <Paper className='todolist'>
        <Tabs
          value={currentTab}
          onChange={handleChange}
          indicatorColor='primary'
          textColor='primary'
          centered
          scrollButtons='auto'>
          <Tab label='全部' />
          <Tab label='已完成' />
          <Tab label='未完成' />
          <Tab label='收藏' />
        </Tabs>
        <TabPanel tabValue={currentTab} />
      </Paper>
    </div>
  );
}

const TabPanel = (props: { tabValue: number }) => {
  const { tabValue } = props;
  let [respData, setRespData] = useState<Models['GET/todo/getlist']['Res']>();
  let [errorMessage, setErrMsg] = useState<string>();
  let [todoContent, setTodoContent] = useState<string>('');
  let [query, setQuery] = useState<string>('');
  let [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetch['GET/todo/getlist']()
      .then((res) => setRespData(res))
      .catch((err) => setErrMsg(err))
      .finally(() => setLoading(false));
  }, []);

  const handleFinish = async (id: number) => {
    setLoading(true);
    await fetch['POST/todo/finish']({ id });
    setRespData(await fetch['GET/todo/getlist']());
    setLoading(false);
  };
  const handleStar = async (id: number) => {
    setLoading(true);
    await fetch['POST/todo/star']({ id });
    setRespData(await fetch['GET/todo/getlist']());
    setLoading(false);
  };
  const handleUnstar = async (id: number) => {
    setLoading(true);
    await fetch['POST/todo/unstar']({ id });
    setRespData(await fetch['GET/todo/getlist']());
    setLoading(false);
  };
  const handleDelete = async (id: number) => {
    setLoading(true);
    await fetch['POST/todo/del']({ id });
    setRespData(await fetch['GET/todo/getlist']());
    setLoading(false);
  };
  const handleAdd = async (content: string) => {
    setLoading(true);
    await fetch['PUT/todo']({ content });
    setTodoContent('');
    setRespData(await fetch['GET/todo/getlist']());
    setLoading(false);
  };

  let todolist = respData?.data.filter((x) =>
    query.trim() === '' ? true : x.content.indexOf(query.trim()) > -1
  );
  switch (tabValue) {
    case 0:
      break;
    case 1:
      todolist = respData?.data.filter((v) => v.status === -1);
      break;
    case 2:
      todolist = respData?.data.filter((v) => v.status === 0 || v.status === 1);
      break;
    case 3:
      todolist = respData?.data.filter((v) => v.status === 1);
      break;
    default:
      break;
  }

  return (
    <div>
      <TextField
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder='搜索TODO内容'
        style={{ margin: 16 }}
      />
      {loading && <LinearProgress />}
      <List>
        {errorMessage && (
          <Alert severity='error'>
            <AlertTitle>获取数据失败</AlertTitle>
            {errorMessage.toString()}
          </Alert>
        )}

        {todolist?.map((v) => (
          <ListItem
            key={v.id}
            dense
            button
            disabled={v.status === -1}
            onClick={() => handleFinish(v.id)}>
            <ListItemIcon>
              <Checkbox
                edge='start'
                checked={v.status === -1}
                disabled={v.status === -1}
                disableRipple
              />
            </ListItemIcon>
            <ListItemText primary={v.content} />
            <ListItemSecondaryAction>
              {v.status === 1 ? (
                <IconButton edge='end' onClick={() => handleUnstar(v.id)}>
                  <Star />
                </IconButton>
              ) : v.status === 0 ? (
                <IconButton edge='end' onClick={() => handleStar(v.id)}>
                  <StarOutline />
                </IconButton>
              ) : (
                ''
              )}
              <IconButton edge='end' onClick={() => handleDelete(v.id)}>
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>

      <div className='Control'>
        <TextField
          value={todoContent}
          onChange={(e) => setTodoContent(e.target.value)}
          placeholder='输入TODO内容'
        />
        <Button
          color='primary'
          variant='contained'
          style={{ marginLeft: 8 }}
          onClick={() => handleAdd(todoContent)}
          disabled={todoContent.trim() === ''}>
          添加
        </Button>
      </div>
    </div>
  );
};
export default App;
