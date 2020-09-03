import React from 'react';
import Mui from '../../plugins/material-ui';
import { ArrowDropUp , ArrowDropDown } from '@material-ui/icons';

import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

// import CameraIcon from '@material-ui/icons/PhotoCamera';


const useStyles = Mui.makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Header(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Mui.AppBar color="transparent" position="static">
        <Mui.Toolbar>
          <Mui.Typography variant="h6" className={classes.title}>
            Pixabay
          </Mui.Typography>
          <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => {
              let arrowIcon ;
                if(popupState.isOpen){
                  arrowIcon = <ArrowDropUp/>
                }else{
                  arrowIcon = <ArrowDropDown/>

                }
             return <>

                <Mui.Button component="button" underline="none" color="inherit" {...bindTrigger(popupState)}>
                  
                  Explore {arrowIcon}
                </Mui.Button>
                <Mui.Menu {...bindMenu(popupState)}>
                  <Mui.MenuItem onClick={popupState.close}>Cake</Mui.MenuItem>
                  <Mui.MenuItem onClick={popupState.close}>Death</Mui.MenuItem>
                </Mui.Menu>

              </>
            }}
          </PopupState>
          <Mui.Button color="inherit">Login</Mui.Button>
          <Mui.Button color="inherit">Join</Mui.Button>


        </Mui.Toolbar>
      </Mui.AppBar>
    </div>
  );
}

export default Header;