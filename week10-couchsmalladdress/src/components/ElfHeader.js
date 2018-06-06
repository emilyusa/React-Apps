import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import { gitItems, demoItems, initialDB } from './tileData';


const styles = {
    root: {
        flexGrow: 1
    },
    flex: {
        flex: 1
    },
};


class ElfHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    handleToggle = () => this.setState({ open: !this.state.open });

    render() {
        const { classes } = this.props;
        const sideList = (
            <div className={classes.list}>
                <List>{gitItems}</List>
                <Divider />
                <List>{demoItems}</List>
                <Divider/>
                <List>{initialDB}</List>
            </div>
        );
        return (
            <div>
                <AppBar
                    position="static"
                >
                    <Toolbar>
                        <IconButton
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="Menu"
                            onClick={this.handleToggle}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            Address Maven
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer open={this.state.open} onClose={this.handleToggle}>
                    <div
                        role="button"
                        onClick={this.handleToggle}
                        onKeyDown={this.handleToggle}
                    >
                        {sideList}
                    </div>
                </Drawer>

            </div>
        );
    }
}

ElfHeader.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ElfHeader);