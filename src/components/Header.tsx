import React from "react";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import HelpIcon from "@material-ui/icons/Help";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import {
	createStyles,
	Theme,
	withStyles,
	WithStyles,
} from "@material-ui/core/styles";

const darkColor = "#202121";
const lightGrey = "#e8e9eb";
const darkGrey = "#a2a3a4";

const styles = (theme: Theme) =>
	createStyles({
		secondaryBar: {
			zIndex: 0,
		},
		menuButton: {
			marginLeft: -theme.spacing(1),
		},
		iconButtonAvatar: {
			padding: 4,
		},
		link: {
			textDecoration: "none",
			textTransform: "uppercase",
			color: darkColor,
			"&:hover": {
				textDecoration: "none",
				color: darkGrey,
			},
		},
		button: {
			borderColor: lightGrey,
			"&:hover": {
				borderColor: theme.palette.primary.dark,
				color: theme.palette.primary.dark,
				backgroundColor: theme.palette.primary.light,
			},
		},
	});

interface HeaderProps extends WithStyles<typeof styles> {
	onDrawerToggle: () => void;
}

function Header(props: HeaderProps) {
	const { classes, onDrawerToggle } = props;

	return (
		<React.Fragment>
			<AppBar color="primary" position="sticky" elevation={0}>
				<Toolbar>
					<Grid container spacing={1} alignItems="center">
						<Hidden smUp>
							<Grid item>
								<IconButton
									color="inherit"
									aria-label="open drawer"
									onClick={onDrawerToggle}
									className={classes.menuButton}
								>
									<MenuIcon />
								</IconButton>
							</Grid>
						</Hidden>
						<Grid item xs />
						<Grid item>
							<Link className={classes.link} href="#" variant="button">
								Go to docs
							</Link>
						</Grid>
						<Grid item>
							<Tooltip title="Alerts • No alerts">
								<IconButton color="default">
									<NotificationsIcon />
								</IconButton>
							</Tooltip>
						</Grid>
						<Grid item>
							<IconButton color="inherit" className={classes.iconButtonAvatar}>
								<Avatar src="/static/images/avatar/1.jpg" alt="My Avatar" />
							</IconButton>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
			<Divider />

			<AppBar
				component="div"
				className={classes.secondaryBar}
				color="primary"
				position="static"
				elevation={0}
			>
				<Toolbar>
					<Grid container alignItems="center" spacing={1}>
						<Grid item xs>
							<Typography color="inherit" variant="h5" component="h1">
								Authentication
							</Typography>
						</Grid>
						<Grid item>
							<Button
								className={classes.button}
								variant="outlined"
								color="inherit"
								size="small"
							>
								Web setup
							</Button>
						</Grid>
						<Grid item>
							<Tooltip title="Help">
								<IconButton color="default">
									<HelpIcon />
								</IconButton>
							</Tooltip>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
			<Divider />

			<AppBar
				component="div"
				className={classes.secondaryBar}
				color="primary"
				position="static"
				elevation={0}
			>
				<Tabs value={0} textColor="inherit">
					<Tab textColor="inherit" label="Users" />
					<Tab textColor="inherit" label="Sign-in method" />
					<Tab textColor="inherit" label="Templates" />
					<Tab textColor="inherit" label="Usage" />
				</Tabs>
			</AppBar>
			<Divider />
		</React.Fragment>
	);
}

export default withStyles(styles)(Header);
