import React, { useState } from 'react';
import {
  Segment,
  Header,
  Icon,
  Dropdown,
  Grid,
  Modal,
  Form,
  Input,
  TextArea,
  Button,
  Select
} from 'semantic-ui-react';
import { format } from 'date-fns'
import {
  useUpdateTaskData,
  useTaskStatus,
  useUpdateGroupBy,
  useGroupBy,
  useUpdateSearch,
  useSearch
} from './useTaskData';

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

const GropByOptions = [
  {
    key: 14,
    text: 'None',
    value: ''
  },
  {
    key: 24,
    text: 'Created On',
    value: 'createdAt'
  },
  {
    key: 34,
    text: 'Pending On',
    value: 'currentState'
  },
  {
    key: 44,
    text: 'Priority',
    value: 'priority'
  }
]

const HeaderComponent = () => {

  const [isModelOpen, setModelOpen] = useState(false);
  const [summary, setSummary] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('');
  const updateTask = useUpdateTaskData();
  const status = useTaskStatus();
  const updateGroupBy = useUpdateGroupBy();
  const groupByVal = useGroupBy();
  const searchVal = useSearch();
  const updateSearch = useUpdateSearch();

  const handleFormSubmit = async () => {
    if (summary && description && dueDate && priority) {
      const postDat = await axios({
        method: 'post',
        url: 'http://ec2-3-19-68-175.us-east-2.compute.amazonaws.com/api/api/create',
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
      setModelOpen(false);
      const url = status ? `http://ec2-3-19-68-175.us-east-2.compute.amazonaws.com/api/api/todo?status=${status}` : 'http://ec2-3-19-68-175.us-east-2.compute.amazonaws.com/api/api/todo';
      updateTask({ url });
      setPriority('');
      setSummary('');
      setDueDate('');
      setDescription('');
    }
  }

  const onChange = async (event, data) => {
    updateGroupBy(data.value);
  }

  const handleSearch = (event) => {
    updateSearch(event.target.value);
  }


  return (
    <>
      <Segment clearing>
        <Header as='h2' floated='left'>
          ToDoApp
      </Header>
        <Header as='h6' floated='right'>
          <Icon onClick={() => setModelOpen(!isModelOpen)} color="blue" name="plus" />
        </Header>
      </Segment>
      <Segment>
        <Grid>
          <Grid.Row>
            <Grid.Column width={3}>
              <p>Group By</p>
              <Select value={groupByVal} onChange={onChange} placeholder='select priority' search selection options={GropByOptions} />
            </Grid.Column>
            <Grid.Column width={13}>
              <p>Search</p>
              <Input value={searchVal} onChange={handleSearch} className="search-input" action={{ icon: 'search' }} placeholder='Search...' />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>


      <Modal
        dimmer={true}
        open={isModelOpen}
      >

        <Modal.Header>Create Task</Modal.Header>
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
                onChange={(event, data) => setPriority(data.value)}
                placeholder='Priority'
              />
            </Form.Group>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={() => setModelOpen(!isModelOpen)}>
            cancel
          </Button>
          <Button type="submit" positive onClick={handleFormSubmit}>
            Save
          </Button>
        </Modal.Actions>
      </Modal>

    </>
  );
}

export default HeaderComponent;
