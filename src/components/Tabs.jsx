import React from 'react';
import { Tab } from 'semantic-ui-react';
import AllTab from './AllTab';
import Completed from './Completed';
import Pending from './Pending';

const panes = [
  {
    menuItem: 'All',
    render: () => (
      <Tab.Pane loading={false}>
        <AllTab />
      </Tab.Pane>
    ),
  },
  {
    menuItem: 'Pending',
    render: () => <Tab.Pane><Pending /></Tab.Pane>
  },
  {
    menuItem: 'Completed',
    render: () => <Tab.Pane><Completed /></Tab.Pane>
  },
]

const GridComponent = () => {
  return (
    <div>
      <Tab menu={{ color: "blue", attached: true, tabular: true }} panes={panes} />
    </div>
  );
};

export default GridComponent;