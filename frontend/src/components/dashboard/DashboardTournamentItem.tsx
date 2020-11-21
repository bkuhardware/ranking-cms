import React from 'react';
import { Card, CardText, CardTitle } from 'reactstrap';
import TournamentModel from "../../models/tournaments/tournamentModel";
import {formatDate} from "../../helpers/dateHelper";

function DashboardTournamentItem(props: any) {
    const tournament: TournamentModel = props.tournament;
    const lastUpdatedStr: string = formatDate(tournament.lastUpdated);
    return (
        <Card body outline color="info" className="mb-3 tournament cursor-pointer">
            <CardTitle tag="h3">
                {tournament.title}
            </CardTitle>
            <CardText>{tournament.description}</CardText>
            <CardText>
                <small className="text-muted">Last updated: {lastUpdatedStr}</small>
            </CardText>
        </Card>
    )
}

export default DashboardTournamentItem;