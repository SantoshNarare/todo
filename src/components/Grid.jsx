import React, { useState, useEffect, useMemo } from 'react';
import { format } from 'date-fns';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import {
  Icon,
  Modal,
  Form,
  Input,
  TextArea,
  Button,
  Select
} from 'semantic-ui-react';

import { useUpdateTaskData, useTaskData, useTaskStatus } from './useTaskData';
const axios = require('axios');


const Priority = [
  {
    key: 1,
    text: 'None',
    value: 'None'
  },
  {
    key: 2,
    text: 'Low',
    value: 'Low'
  },
  {
    key: 3,
    text: 'Medium',
    value: 'Medium'
  },
  {
    key: 4,
    text: 'High',
    value: 'High'
  }
]

const Edit = (props) => {
  const [show, setshow] = useState(false);
  const onEdit = () => {
    setshow(true);
  }
  return (
    <>
      { show && <EditPopUpModel item={props.data} isShowModel={show} onClose={setshow} />}
      <Icon className="custome-cell" color="blue" name="pencil" onClick={onEdit} />
    </>
  )
}

const Status = (props) => {
  const [isDone, setDone] = useState(props.data.currentState === 'done' ? true : false
  );
  const updateTask = useUpdateTaskData();
  const status = useTaskStatus();

  const onStatus = async () => {
    setDone(!isDone);
    const postDat = await axios({
      method: 'post',
      url: `http://ec2-3-19-68-175.us-east-2.compute.amazonaws.com/api/api/todo/${props.data._id}`,
      headers: {
        "Content-Type": "application/json"
      },
      data: {
        ...props.data,
        dueDate: props.data.DueDate,
        currentState: props.data.currentState === 'open' ? 'done' : 'open',
      },
    });
    const url = status ? `http://ec2-3-19-68-175.us-east-2.compute.amazonaws.com/api/api/todo?status=${status}` : 'http://ec2-3-19-68-175.us-east-2.compute.amazonaws.com/api/api/todo';
    updateTask({ url });
  }

  return (
    <>
      { isDone
        ? <Button onClick={onStatus} color="green">Done</Button>
        : <Button onClick={onStatus} color="teal">Re-Open</Button>
      }
    </>
  )
}

const Delete = (props) => {
  const [show, setshow] = useState(false);
  const onDelete = () => {
    setshow(true);
  }
  return (
    <>
      {show && <DeletePopUpModel item={props.data} isShowModel={show} onClose={setshow} />}
      <Icon className="custome-cell" color="red" name="trash" onClick={onDelete} />
    </>
  )
}

const ColumnData = [
  {
    headerName: "Summary",
    field: "title",
    // filter: true,
    sortable: true
  },
  {
    headerName: "Priority",
    field: "priority",
    // filter: true,
    sortable: true,
  },
  {
    headerName: "created On",
    field: "createdAt",
    // filter: true,
    sortable: true
  },
  {
    headerName: "Due By",
    field: "dueDate",
    // filter: true,
    sortable: true
  },
  {
    menuTabs: [],
    headerName: "Action",
    cellRendererFramework: (prop) => <div> <Edit {...prop} /> <Status {...prop} />  <Delete {...prop} /> </div>,
    width: 200,
    sortable: false,
  },
]

const RapidGrid = (props) => {
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);
  const taskData = useTaskData();

  function onGridReady(params) {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
  }

  useEffect(() => {
  }, [taskData]);

  return (
    <>
      <div className="ag-theme-alpine" style={{ height: 400 }}>
        {taskData.length > 0 && <AgGridReact
          onGridReady={onGridReady}
          rowData={taskData}>
          {
            ColumnData.map((item, i) => <AgGridColumn key={i} {...item} />)
          }
        </AgGridReact>}
      </div>
    </>
  );
};

const EditPopUpModel = ({ item, isShowModel = false, onClose }) => {
  const [summary, setSummary] = useState(item.title);
  const [description, setDescription] = useState(item.description);
  const [dueDate, setDueDate] = useState(format(new Date(item.DueDate), 'yyyy-MM-dd'));
  const [priority, setPriority] = useState(item.priority);
  const updateTask = useUpdateTaskData();
  const status = useTaskStatus();

  const handleFormSubmit = async () => {
    if (summary && description && dueDate && priority) {
      const postDat = await axios({
        method: 'post',
        url: `http://ec2-3-19-68-175.us-east-2.compute.amazonaws.com/api/api/todo/${item._id}`,
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          title: summary,
          description: description,
          currentState: 'open',
          dueDate: format(new Date(dueDate), 'MM/dd/yyyy'),
          priority: priority,
        },
      });
      const url = status ? `http://ec2-3-19-68-175.us-east-2.compute.amazonaws.com/api/api/todo?status=${status}` : 'http://ec2-3-19-68-175.us-east-2.compute.amazonaws.com/api/api/todo';
      updateTask({ url });
      onClose(false);
    }
  }
  return (
    <Modal
      dimmer={true}
      open={isShowModel}
    >

      <Modal.Header>Edit Task</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Field
            control={Input}
            label='Summary'
            name="Summary"
            value={summary}
            onChange={(event) => setSummary(event.target.value)}
            placeholder='Summary'
          />
          <Form.Field
            control={TextArea}
            label='Description'
            name="Description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder='Description'
          />
          <Form.Group widths='equal'>
            <Form.Field
              control={Input}
              type="date"
              label='Due Date'
              name="DueDate"
              value={dueDate}
              onChange={(event) => setDueDate(event.target.value)}
              placeholder='Due Date'
            />

            <Form.Field
              control={Select}
              options={Priority}
              label={{ children: 'Priority' }}
              name="Priority"
              value={priority}
              onChange={(event, data) => setPriority(data.value)}
              placeholder='Priority'
            />
          </Form.Group>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button negative onClick={() => {
          onClose(false);
        }}>
          cancel
          </Button>
        <Button positive onClick={handleFormSubmit}>
          Save
          </Button>
      </Modal.Actions>
    </Modal>
  )
}

const DeletePopUpModel = ({ item, isShowModel = false, onClose }) => {

  const updateTask = useUpdateTaskData();
  const status = useTaskStatus();

  const handleFormSubmit = async () => {
    console.log('deleteRead', item);
    await axios.delete(`http://ec2-3-19-68-175.us-east-2.compute.amazonaws.com/api/api/todo/${item._id}`);
    const url = status ? `http://ec2-3-19-68-175.us-east-2.compute.amazonaws.com/api/api/todo?status=${status}` : 'http://ec2-3-19-68-175.us-east-2.compute.amazonaws.com/api/api/todo';
    await updateTask({ url });
    onClose(false);
  };

  return (
    <Modal
      dimmer={true}
      open={isShowModel}
    >

      <Modal.Header>Delete Task</Modal.Header>
      <Modal.Content>
        Are you sure you want to delete <b>{item.title} </b> task?
      </Modal.Content>
      <Modal.Actions>
        <Button negative onClick={() => {
          onClose(false);
        }}>
          cancel
          </Button>
        <Button positive onClick={handleFormSubmit}>
          delete
          </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default RapidGrid;


