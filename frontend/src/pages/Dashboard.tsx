import React, {Component} from 'react';
import { Button, Col, Row } from 'reactstrap';
import TournamentModel from "../models/tournamentModel";
import DashboardTournament from "../components/dashboard/DashboardTournament";
import {Builder} from "builder-pattern";

class Dashboard extends Component {
    state = {
        tournaments: [
            Builder<TournamentModel>().id('0').title('test-1').description('simple love simple love').lastUpdated(new Date()).build(),
            Builder<TournamentModel>().id('1').title('test-1').description('simple love simple love').lastUpdated(new Date()).build(),
            Builder<TournamentModel>().id('2').title('test-1').description('simple love simple love').lastUpdated(new Date()).build()
        ]
    }

    render() {
        const tournaments: TournamentModel[] = this.state.tournaments;
        return (
            <div className="dashboard">
                <h3 className="page-title">
                    Your dashboard
                    <Button color="success" className="float-right">Add tournament</Button>
                </h3>
                <Row>
                    {tournaments.map((tournament: TournamentModel) => (
                        <Col sm="3" key={tournament.id}>
                            <DashboardTournament tournament={tournament} />
                        </Col>
                    ))}
                </Row>
            </div>
        );
    }
}

export default Dashboard;