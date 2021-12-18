import React from 'react';
import {Grid, Header} from 'semantic-ui-react';

interface Props {
	title: string;
	content: string;
	attribution?: string;
}

export function ContentWrapper(props: Props) {
	return (
		<Grid padded>
			<Grid.Row>
				<Grid.Column>
					<Header>{props.title}</Header>
				</Grid.Column>
			</Grid.Row>
			<Grid.Row>
				<Grid.Column>{props.content}</Grid.Column>
			</Grid.Row>
			{props.attribution && (
				<Grid.Row>
					<Grid.Column>{props.attribution}</Grid.Column>
				</Grid.Row>
			)}
		</Grid>
	);
}
