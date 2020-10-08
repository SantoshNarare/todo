import React, { useEffect, useState } from 'react';
import { useUpdateTaskData, useUpdateTaskStatus, useGroupBy } from './useTaskData';
import RapidGrid from './Grid';

const Completed = () => {

  const updateTask = useUpdateTaskData();
  const updateState = useUpdateTaskStatus();
  const groupBy = useGroupBy();

  useEffect(() => {
    updateState('done');
    updateTask({ url: groupBy ? `http://localhost:8080/api/todo?status=done&&groupBy=${groupBy}` : "http://localhost:8080/api/todo?status=done" });
  }, [groupBy]);

  return (
    <>
      <RapidGrid />
    </>
  );
};

export default Completed;
