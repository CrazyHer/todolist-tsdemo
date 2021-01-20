import {
  AppBar,
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Tab,
  Tabs,
} from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import React, { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import { fetch, useResponse } from "./rapper";
import { Delete, Star, StarOutline } from "@material-ui/icons";

function App() {
  let [currentTab, setTab] = useState(0);
  const handleChange = (event: any, value: number) => {
    setTab(value);
  };

  return (
    <div>
      <AppBar position='static' color='default'>
        <Tabs
          value={currentTab}
          onChange={handleChange}
          indicatorColor='primary'
          textColor='primary'
          variant='scrollable'
          scrollButtons='auto'>
          <Tab label='全部' />
          <Tab label='已完成' />
          <Tab label='未完成' />
          <Tab label='收藏' />
        </Tabs>
      </AppBar>
      <TabPanel tabValue={currentTab} />
      <div></div>
    </div>
  );
}

const TabPanel = (props: { tabValue: number }) => {
  const { tabValue } = props;
  let [respData, setRespData] = useState<
    | {
        code: number;
        message: string;
        data: {
          id: number;
          content: string;
          status: number;
        }[];
      }
    | undefined
  >();
  let [errorMessage, setErrMsg] = useState<string>();

  useEffect(() => {
    fetch["GET/todo/getlist"]()
      .then((res) => setRespData(res))
      .catch((err) => setErrMsg(err));
  }, []);

  if (errorMessage)
    return (
      <div>
        <Alert severity='error'>
          <AlertTitle>获取数据失败</AlertTitle>
          {errorMessage}
        </Alert>
      </div>
    );

  const handleFinish = async (id: number) => {
    await fetch["POST/todo/finish"]({ id });
    setRespData(await fetch["GET/todo/getlist"]());
  };
  const handleStar = async (id: number) => {
    await fetch["POST/todo/star"]({ id });
    setRespData(await fetch["GET/todo/getlist"]());
  };
  const handleUnstar = async (id: number) => {
    await fetch["POST/todo/unstar"]({ id });
    setRespData(await fetch["GET/todo/getlist"]());
  };
  const handleDelete = async (id: number) => {
    await fetch["DELETE/todo"]({ id });
    setRespData(await fetch["GET/todo/getlist"]());
  };

  let todolist = respData?.data;
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
      <List>
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
                <IconButton edge='end' onClick={() => handleStar(v.id)}>
                  <Star />
                </IconButton>
              ) : (
                <IconButton edge='end' onClick={() => handleUnstar(v.id)}>
                  <StarOutline />
                </IconButton>
              )}

              <IconButton edge='end' onClick={() => handleDelete(v.id)}>
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  );
};
export default App;
