import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import {
	createStyles,
	Theme,
	withStyles,
	WithStyles,
} from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import RefreshIcon from "@material-ui/icons/Refresh";

// const darkColor = "#202121";
const lightGrey = "#e8e9eb";
// const darkGrey = "#a2a3a4";

const styles = (theme: Theme) =>
	createStyles({
		paper: {
			maxWidth: 936,
			margin: "auto",
			overflow: "hidden",
		},
		searchBar: {
			borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
		},
		searchInput: {
			fontSize: theme.typography.fontSize,
		},
		block: {
			display: "block",
		},
		addUser: {
			marginRight: theme.spacing(1),
			borderColor: lightGrey,
			"&:hover": {
				borderColor: theme.palette.primary.dark,
				color: theme.palette.primary.dark,
				backgroundColor: theme.palette.primary.light,
			},
		},
		contentWrapper: {
			margin: "40px 16px",
		},
	});

export interface ContentProps extends WithStyles<typeof styles> {}

function Content(props: ContentProps) {
	const { classes } = props;

	return (
		<Paper className={classes.paper}>
			<AppBar
				className={classes.searchBar}
				position="static"
				color="default"
				elevation={0}
			>
				<Toolbar>
					<Grid container spacing={2} alignItems="center">
						<Grid item>
							<SearchIcon className={classes.block} color="inherit" />
						</Grid>
						<Grid item xs>
							<TextField
								fullWidth
								placeholder="Search by email address, phone number, or user UID"
								InputProps={{
									disableUnderline: true,
									className: classes.searchInput,
								}}
							/>
						</Grid>
						<Grid item>
							<Button
								className={classes.addUser}
								variant="outlined"
								color="inherit"
								size="small"
							>
								Add user
							</Button>
							<Tooltip title="Reload">
								<IconButton>
									<RefreshIcon className={classes.block} color="inherit" />
								</IconButton>
							</Tooltip>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
			<div className={classes.contentWrapper}>
				<Typography color="textSecondary" align="center">
					No users for this project yet
				</Typography>
			</div>
		</Paper>
	);
}

export default withStyles(styles)(Content);
