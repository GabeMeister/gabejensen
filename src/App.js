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
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import AboutPage from './components/pages/AboutPage';
import HomePage from './components/pages/HomePage';
import PortfolioPage from './components/pages/PortfolioPage';
import BlogPage from './components/pages/BlogPage';
import ContactPage from './components/pages/ContactPage';

const useStyles = makeStyles({
	appBar: {
		backgroundColor: '#1976d2'
	},
	toolbar: {
		display: 'flex',
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
		width: '350px'
	},
	appBody: {
		boxSizing: 'border-box',
		padding: '10px 30px'
	},
	homePageIcon: {
		height: '40px'
	}
});

const App = () => {
	const classes = useStyles();

	return (
		<Router>
			<div className="App">
				<header>
					<AppBar className={classes.appBar} position="static">
						<Toolbar className={classes.toolbar}>
							<IconButton edge="start">
								<Link className={classes.navbarLink} component={RouterLink} to="/">
									<img className={classes.homePageIcon} src="/tomato.png" alt="Gabe Jensen Home Page" />
								</Link>
							</IconButton>
							<nav className={classes.btnGroup}>
								<Typography variant="h6">
									<Link className={classes.navbarLink} component={RouterLink} to="/about">
										About
									</Link>
								</Typography>
								<Typography variant="h6">
									<Link className={classes.navbarLink} component={RouterLink} to="/portfolio">
										Portfolio
									</Link>
								</Typography>
								<Typography variant="h6">
									<Link className={classes.navbarLink} component={RouterLink} to="/blog">
										Blog
									</Link>
								</Typography>
								<Typography variant="h6">
									<Link className={classes.navbarLink} component={RouterLink} to="/contact">
										Contact
									</Link>
								</Typography>
							</nav>
						</Toolbar>
					</AppBar>
				</header>

				<div className={classes.appBody}>
					<Switch>
						<Route path="/about">
							<AboutPage />
						</Route>
						<Route path="/portfolio">
							<PortfolioPage />
						</Route>
						<Route path="/blog">
							<BlogPage />
						</Route>
						<Route path="/contact">
							<ContactPage />
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
