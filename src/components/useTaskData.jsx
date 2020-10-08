import React, { createContext, useContext, useEffect, useState } from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';
import { format } from 'date-fns';
const axios = require('axios');

const TaskDataContext = createContext(null);
const UpdateTaskDataContext = createContext(null);
const UpdateStateContext = createContext(null);
const StateContext = createContext(null);
const GroupBYContext = createContext(null);
const UpdateGroupBYContext = createContext(null);
const SearchContext = createContext(null);
const UpdateSearchContext = createContext(null);

const TaskDataProvider = ({ children }) => {
  const [taskData, setTaskData] = useState([]);
  const [cloneTask, setCloneTask] = useState([]);
  const [status, setStatus] = useState('');
  const [groupBY, setGroupBY] = useState('');
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [tempurl, setTempUrl] = useState('');

  const updateTaskData = async ({ url }) => {
    try {
      setLoading(true);
      setTempUrl(url || tempurl);
      const response = await axios.get(url || tempurl);
      if (response && response.status === 200 && response.data && response.data.data && response.data.data) {
        const data = response.data.data.map((item) => {
          if (item.todoList) {
            return item.todoList.map((x) => {
              return {
                ...x,
                DueDate: x.dueDate,
                dueDate: format(new Date(x.dueDate), 'yyyy-dd-MM'),
                createdAt: format(new Date(x.createdAt), 'yyyy-dd-MM'),
              }
            })
          } else {
            return {
              ...item,
              DueDate: item.dueDate,
              dueDate: format(new Date(item.dueDate), 'yyyy-dd-MM'),
              createdAt: format(new Date(item.createdAt), 'yyyy-dd-MM'),
            }
          }
        });
        setTaskData(data);
        setCloneTask(data);
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
      return error;
    }
  };

  const updateState = async (statePram) => {
    setStatus(statePram);
  }

  const updateGroupBy = (param) => {
    setGroupBY(param);
  }
  const updateSearch = (param) => {
    setSearch(param);
    if (param) {
      const searchData = fuzzySearch(param.toString(), cloneTask);
      setTaskData(searchData);
    } else {
      if (tempurl) {
        updateTaskData({ url: tempurl.toString() });
      }
    }
  }

  return (
    <TaskDataContext.Provider value={taskData}>
      <UpdateTaskDataContext.Provider value={updateTaskData}>
        <StateContext.Provider value={status}>
          <UpdateStateContext.Provider value={updateState}>
            <GroupBYContext.Provider value={groupBY}>
              <UpdateGroupBYContext.Provider value={updateGroupBy}>
                <SearchContext.Provider value={search}>
                  <UpdateSearchContext.Provider value={updateSearch}>
                    <Dimmer active={false}>
                      <Loader size='large' color="blue" active={false}>Loading</Loader>
                    </Dimmer>
                    {children}
                  </UpdateSearchContext.Provider>
                </SearchContext.Provider>
              </UpdateGroupBYContext.Provider>
            </GroupBYContext.Provider>
          </UpdateStateContext.Provider>
        </StateContext.Provider>
      </UpdateTaskDataContext.Provider>
    </TaskDataContext.Provider>
  )
};

export default TaskDataProvider;

export function useTaskData() {
  return useContext(TaskDataContext);
};

export function useUpdateTaskData() {
  return useContext(UpdateTaskDataContext);
};

export function useTaskStatus() {
  return useContext(StateContext);
};

export function useUpdateTaskStatus() {
  return useContext(UpdateStateContext);
};

export function useGroupBy() {
  return useContext(GroupBYContext);
};

export function useUpdateGroupBy() {
  return useContext(UpdateGroupBYContext);
};

export function useSearch() {
  return useContext(SearchContext);
};

export function useUpdateSearch() {
  return useContext(UpdateSearchContext);
};

export const fuzzySearch = (searchQuery, searchArray) => {
  const filteredArray = [];
  if (searchQuery) {
    searchArray.forEach((i) => {
      let temp = 0;
      for (const keyname in i) {
        if (i[keyname] && i[keyname].indexOf(searchQuery) > -1) {
          temp++;
        }
      }
      if (temp >= 1) {
        filteredArray.push(i);
      }
    });
  };
  return filteredArray;
};
