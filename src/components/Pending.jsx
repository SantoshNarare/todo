import React, { useEffect, useState } from 'react';
import { useUpdateTaskData, useUpdateTaskStatus, useGroupBy } from './useTaskData';
import RapidGrid from './Grid';

const Pending = () => {
  const updateTask = useUpdateTaskData();
  const updateState = useUpdateTaskStatus();
  const groupBy = useGroupBy();

  useEffect(() => {
    updateState('open');
    updateTask({ url: groupBy ? `http://localhost:8080/api/todo?status=open&&groupBy=${groupBy}` : "http://localhost:8080/api/todo?status=open" });
  }, [groupBy]);

  return (
    <>
      <RapidGrid />
    </>
  );
};

export default Pending;
