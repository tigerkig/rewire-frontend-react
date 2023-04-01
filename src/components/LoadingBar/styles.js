import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
     fullScreen: {
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          zIndex: 100000,
          background: '#00000024',

     },
     loader: {
          top: 'calc(50% - 10px)',
          right: 'calc(50% - -10px)',
          position: 'absolute',
     }
}));