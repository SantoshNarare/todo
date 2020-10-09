import React, { useEffect, useState } from 'react';
import { useUpdateTaskData, useUpdateTaskStatus, useGroupBy } from './useTaskData';
import RapidGrid from './Grid';

const Pending = () => {
  const updateTask = useUpdateTaskData();
  const updateState = useUpdateTaskStatus();
  const groupBy = useGroupBy();

  useEffect(() => {
    updateState('open');
    updateTask({ url: groupBy ? `http://ec2-3-16-187-172.us-east-2.compute.amazonaws.com/api/api/todo?status=open&&groupBy=${groupBy}` : "http://ec2-3-16-187-172.us-east-2.compute.amazonaws.com/api/api/todo?status=open" });
  }, [groupBy]);

  return (
    <>
      <RapidGrid />
    </>
  );
};

export default Pending;
