import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Checkbox } from '@mui/material';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { taskListItemTimer } from '../constants/timer';

import '../animations/taskAnimation.css';
import styled from 'styled-components'

import FingersSvg from '../assets/icons/Fingers';
import UncheckedSvg from '../assets/icons/Unchecked';
import CheckedSvg from '../assets/icons/Checked';

interface Task {
  id: number;
  text: string;
  checked: boolean;
}

const initialTasks: Task[] = [
  { id: 1, text: 'Register for 10DLC', checked: false },
  { id: 2, text: 'Specify what the user must do as step number 2.', checked: false },
  { id: 3, text: 'Specify what the user must do as step number 3.', checked: false },
  // Add other tasks here
];

const uncheckedIcon = <UncheckedSvg />;
const checkedIcon = <CheckedSvg />;

const StyledTitle = styled.p`
  font-family: Inter, 'sans-serif';
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0em;
  padding-left: 15px;
`;

const StyledList = styled.div`
  background: #EFF1F6;
  max-width: 268px;
  padding: 12px;
  border-radius: 6px;
  margin: 15% auto 0;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledListItemText = styled(ListItemText)`
  color: #1F2936;
  font-family: Inter, 'sans-serif';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  padding-left: 10px;
`;

const StyledListItemIcon = styled(ListItemIcon)`
  min-width: initial !important;
`;

const StyledText = styled.p`
  font-family: Inter, 'sans-serif';
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: center;
`;

const StyledListItem = styled(ListItem)`
  &:not(:last-child) {
    border-bottom: 1px dashed #CBD2DE;
    padding-bottom: 8px;
  }
`;

const TaskList: React.FC = () => {
  const [tasks, setTasks] = React.useState<Task[]>(initialTasks);

  const handleToggle = (id: number) => () => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, checked: !task.checked } : task)));
  };

  const handleRemove = (id: number) => {
    // Triggering the exit animation before removing the item
    setTasks(tasks.map(task => (task.id === id ? { ...task, checked: true } : task)));
    setTimeout(() => setTasks(tasks.filter(task => task.id !== id)), 300); // 300ms matches the CSS animation duration
  };

  return (
  <StyledList>
      <Wrapper>
        <FingersSvg />
        <StyledTitle>Don’t forget to:</StyledTitle>
      </Wrapper>
    <List>
      <TransitionGroup>
        {tasks.map((task) => (
          <CSSTransition
            key={task.id}
            timeout={taskListItemTimer}
            classNames="task"
          >
            <StyledListItem disablePadding>
              <StyledListItemIcon onClick={() => handleRemove(task.id)}>
                <Checkbox
                  edge="start"
                  icon={uncheckedIcon}
                  checkedIcon={checkedIcon}
                  checked={task.checked}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': `checkbox-list-label-${task.id}` }}
                  onClick={handleToggle(task.id)}
                />
              </StyledListItemIcon>
              <StyledListItemText id={`checkbox-list-label-${task.id}`} primary={task.text} />
            </StyledListItem>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </List>
    {!tasks.length && <StyledText>No data oops...</StyledText>}
  </StyledList>
  );
};

export default TaskList;
