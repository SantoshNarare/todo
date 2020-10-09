import React, { useEffect, useState } from 'react';
import { useUpdateTaskData, useUpdateTaskStatus, useGroupBy } from './useTaskData';
import RapidGrid from './Grid';

const Completed = () => {

  const updateTask = useUpdateTaskData();
  const updateState = useUpdateTaskStatus();
  const groupBy = useGroupBy();

  useEffect(() => {
    updateState('done');
    updateTask({ url: groupBy ? `http://ec2-3-19-68-175.us-east-2.compute.amazonaws.com/api/api/todo?status=done&&groupBy=${groupBy}` : "http://ec2-3-19-68-175.us-east-2.compute.amazonaws.com/api/api/todo?status=done" });
  }, [groupBy]);

  return (
    <>
      <RapidGrid />
    </>
  );
};

export default Completed;
