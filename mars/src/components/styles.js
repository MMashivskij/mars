import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    verticalAlign: 'bottom'
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  image: {
    width: 150,
    margin: 10,
    transition: '0.5s',
    '&:hover': {
      transform: 'scale(3)',
      cursor: 'pointer'
    }
  },
  display: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  pagination: {
    width: 'fit-content',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
}));

