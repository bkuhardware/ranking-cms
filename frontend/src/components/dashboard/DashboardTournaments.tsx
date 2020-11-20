import React, {Component} from 'react';
import TournamentModel from "../../models/tournamentModel";
import DashboardTournament from "./DashboardTournament";
import {BsChevronDoubleDown} from "react-icons/bs";
import {Builder} from "builder-pattern";
import { Button, Col, Row, Spinner } from 'reactstrap';

class DashboardTournaments extends Component {
    state = {
        tournaments: [
            Builder<TournamentModel>().id('0').title('test-1').description('simple love simple love').lastUpdated(new Date()).build(),
            Builder<TournamentModel>().id('1').title('test-1').description('simple love simple love').lastUpdated(new Date()).build(),
            Builder<TournamentModel>().id('2').title('test-1').description('simple love simple love').lastUpdated(new Date()).build()
        ],
        hasMoreTournament: true,
        isFetchingTournaments: false
    }
    render() {
        const hasMoreTournament: boolean = this.state.hasMoreTournament;
        const tournaments: TournamentModel[] = this.state.tournaments;
        const isFetchingTournaments: boolean = this.state.isFetchingTournaments;
        return (
            <React.Fragment>
                <Row>
                    {tournaments.map((tournament: TournamentModel) => (
                        <Col sm="3" key={tournament.id}>
                            <DashboardTournament tournament={tournament} />
                        </Col>
                    ))}
                </Row>
                {hasMoreTournament && (
                    <div className="mt-3">
                        <Button color="info" disabled={isFetchingTournaments}>
                            {isFetchingTournaments ? (<Spinner size="xs" className="mr-1" />) : (<BsChevronDoubleDown className="mr-1" />)}
                            More tournaments
                        </Button>
                    </div>
                )}
            </React.Fragment>
        );
    }
}

export default DashboardTournaments;