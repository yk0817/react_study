import React from 'react';
import Reboot from 'material-ui/Reboot';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Input from 'material-ui/Input';
import List, { ListItem, ListItemText } from 'material-ui/List';

export default function TodoApp({ task, tasks, inputTask, addTask }){
  return (
    <div>
      <Reboot />
      <AppBar position="static">
        <Toolbar>
          <Typography type="title" color="inherit">
            Todo
          </Typography>
        </Toolbar>
      </AppBar>
      <div style={{ padding: '16px' }}>
        <Input onChange={(e) => inputTask(e.target.value)} />
        <Button raised color="secondary" onClick={() => addTask(task)}>add</Button>
        {console.log(tasks)}
        <List>
          {
            tasks.map(function(item, i){
              return (
                <ListItem key={i}>
                  <ListItemText primary={`.${item}`} />
                </ListItem>
              );
            })
          }
        </List>
      </div>
    </div>
  );
}
