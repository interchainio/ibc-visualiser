import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// Data...
import { VirtualizedTable, rows } from '../../../utils/dummyData';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '60%',
    height: '80vh',
    border: '2px solid #F7F8F9',
  },
}));

const GaiaChainTable = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <VirtualizedTable
        rowCount={rows.length}
        rowGetter={({ index }) => rows[index]}
        columns={[
          {
            width: 200,
            label: 'Connections',
            dataKey: 'connections',
          },
          {
            width: 150,
            label: 'Channels',
            dataKey: 'channels',
            numeric: true,
          },
          {
            width: 150,
            label: 'Port',
            dataKey: 'port',
            numeric: true,
          },
          {
            width: 200,
            label: 'Packet Commitment',
            dataKey: 'packetCommitment',
            numeric: true,
          },
          {
            width: 140,
            label: 'Data',
            dataKey: 'data',
            numeric: true,
          },
        ]}
      />
    </div>
  );
}

export default GaiaChainTable; 