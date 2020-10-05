import React from "react";
import {
	createMuiTheme,
	createStyles,
	ThemeProvider,
	withStyles,
	WithStyles,
} from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import CssBaseline from "@material-ui/core/CssBaseline";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Navigator from "./Navigator";
import Content from "./Content";
import Header from "./Header";

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{"Copyright © "}
			<Link color="inherit" href="https://apirobot.me">
				Your Website
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

// const darkColor = "#202121";
// const lightGrey = "#e8e9eb";
// const darkGrey = "#a2a3a4";

let theme = createMuiTheme({
	palette: {
		primary: {
			light: "#fcfcfc",
			main: "#F4F7F6",
			dark: "#49C5B6",
		},
	},
	typography: {
		fontFamily: "Raleway, sans-serif",
		button: {
			fontSize: 12,
			fontWeight: 600,
		},
		h5: {
			fontWeight: 500,
			fontSize: 26,
			letterSpacing: 0.5,
		},
	},
	shape: {
		borderRadius: 8,
	},
	props: {
		MuiTab: {
			disableRipple: true,
		},
	},
	mixins: {
		toolbar: {
			minHeight: 48,
		},
	},
});

theme = {
	...theme,
	overrides: {
		MuiDrawer: {
			paper: {
				backgroundColor: "#F4F7F6",
			},
		},
		MuiButton: {
			label: {
				textTransform: "uppercase",
			},
			contained: {
				boxShadow: "none",
				"&:active": {
					boxShadow: "none",
				},
			},
		},
		MuiTabs: {
			root: {
				marginLeft: theme.spacing(1),
			},
			indicator: {
				height: 3,
				borderTopLeftRadius: 3,
				borderTopRightRadius: 3,
				backgroundColor: theme.palette.common.black,
			},
		},
		MuiTab: {
			root: {
				"&:hover": {
					backgroundColor: theme.palette.primary.light,
				},
				textTransform: "none",
				minWidth: 0,
				padding: 10,
				[theme.breakpoints.up("md")]: {
					padding: 15,
					minWidth: 0,
				},
			},
		},
		MuiIconButton: {
			root: {
				color: theme.palette.primary.dark,
				padding: theme.spacing(1),
				"&:hover": {
					backgroundColor: theme.palette.primary.light,
				},
			},
		},
		MuiTooltip: {
			tooltip: {
				borderRadius: 4,
			},
		},
		MuiDivider: {
			root: {
				backgroundColor: "#e8e9eb",
			},
		},
		MuiListItemText: {
			primary: {
				fontWeight: theme.typography.fontWeightMedium,
			},
		},
		MuiListItemIcon: {
			root: {
				color: "inherit",
				marginRight: 0,
				"& svg": {
					fontSize: 20,
				},
			},
		},
		MuiAvatar: {
			root: {
				width: 32,
				height: 32,
			},
		},
	},
};

const drawerWidth = 256;

const styles = createStyles({
	root: {
		display: "flex",
		minHeight: "100vh",
	},
	drawer: {
		[theme.breakpoints.up("sm")]: {
			width: drawerWidth,
			flexShrink: 0,
		},
	},
	app: {
		flex: 1,
		display: "flex",
		flexDirection: "column",
	},
	main: {
		flex: 1,
		padding: theme.spacing(6, 4),
		background: "#F4F7F6",
	},
	footer: {
		padding: theme.spacing(2),
		background: "#F4F7F6",
	},
});

export interface TemplateProps extends WithStyles<typeof styles> {}

function Template(props: TemplateProps) {
	const { classes } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	return (
		<ThemeProvider theme={theme}>
			<div className={classes.root}>
				<CssBaseline />
				<nav className={classes.drawer}>
					<Hidden smUp implementation="js">
						<Navigator
							PaperProps={{ style: { width: drawerWidth } }}
							variant="temporary"
							open={mobileOpen}
							onClose={handleDrawerToggle}
						/>
					</Hidden>
					<Hidden xsDown implementation="css">
						<Navigator PaperProps={{ style: { width: drawerWidth } }} />
					</Hidden>
				</nav>
				<div className={classes.app}>
					<Header onDrawerToggle={handleDrawerToggle} />
					<main className={classes.main}>
						<Content />
					</main>
					<Divider />
					<footer className={classes.footer}>
						<Copyright />
					</footer>
				</div>
			</div>
		</ThemeProvider>
	);
}

export default withStyles(styles)(Template);
