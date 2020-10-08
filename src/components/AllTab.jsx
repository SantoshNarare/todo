import React, { useEffect, useState } from 'react';
import { useUpdateTaskData, useUpdateTaskStatus, useGroupBy } from './useTaskData';
import RapidGrid from './Grid';

const AllTab = () => {
  const updateTask = useUpdateTaskData();
  const updateState = useUpdateTaskStatus();
  const groupBy = useGroupBy();

  useEffect(() => {
    updateState('');
    updateTask({ url: groupBy ? `http://localhost:8080/api/todo?groupBy=${groupBy}` : "http://localhost:8080/api/todo" });
  }, [groupBy]);

  return (
    <>
      <RapidGrid />
    </>
  );
};


export default AllTab;
