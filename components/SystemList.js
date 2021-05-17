import SystemItem from './SystemItem';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';

const useStyles = makeStyles((theme) => ({
  treeNode: {
    marginTop: '8px',
    position: 'relative'
  },
  expandIcon: {
    position: 'absolute',
    top: '152px',
    right: '8px',
    zIndex: 1,
  }
}));


const SystemList = ({ systems }) => {
  const classes = useStyles();

  const renderTree = (nodes) => (
    <TreeItem key={nodes.id} nodeId={nodes.id} className={classes.treeNode}
      label={
        <SystemItem systemItem={nodes} />
      }>
      {Array.isArray(nodes.children) ? nodes.children.map((node) => renderTree(node)) : null}
    </TreeItem>
  );

  return (
    <Grid container spacing={8} justify="center">
      {systems.map((systemItem) => (
        <Grid item xs={12} sm={12} md={6} xl={4} key={systemItem.id}>
          <TreeView
            defaultCollapseIcon={
              <ExpandMoreIcon className={classes.expandIcon} />
            }
            defaultExpanded={['root']}
            defaultExpandIcon={
              <KeyboardArrowLeftIcon className={classes.expandIcon} />
            }>
            {renderTree(systemItem)}
          </TreeView>
        </Grid>
      ))}
    </Grid>
  )
};

export default SystemList;
