import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link as RouterLink
} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import AboutPage from './components/AboutPage';
import HomePage from './components/HomePage';
import LinksPage from './components/LinksPage';

const useStyles = makeStyles({
	toolbar: {
		justifyContent: 'space-between'
	},
	navbarBtn: {
		color: 'white'
	},
	navbarLink: {
		color: 'white'
	},
	btnGroup: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '200px'
	},
	appBody: {
		boxSizing: 'border-box',
		padding: '10px 30px'
	}
});

const App = () => {
	const classes = useStyles();

	return (
		<Router>
			<div className="App">
				<header>
					<AppBar position="static">
						<Toolbar className={classes.toolbar}>
							<IconButton edge="start">
								<MenuIcon />
							</IconButton>
							<Typography variant="h6">Gabe Jensen's Portfolio</Typography>
							<nav className={classes.btnGroup}>
								<Typography variant="h6"><Link className={classes.navbarLink} component={RouterLink} to="/">Home</Link></Typography>
								<Typography variant="h6"><Link className={classes.navbarLink} component={RouterLink} to="/about">About</Link></Typography>
								<Typography variant="h6"><Link className={classes.navbarLink} component={RouterLink} to="/links">Links</Link></Typography>
							</nav>
						</Toolbar>
					</AppBar>
				</header>

				<div className={classes.appBody}>
					<Switch>
						<Route path="/about">
							<AboutPage />
						</Route>
						<Route path="/links">
							<LinksPage />
						</Route>
						<Route path="/">
							<HomePage />
						</Route>
					</Switch>
				</div>
			</div>
		</Router >
	);
}

export default App;
