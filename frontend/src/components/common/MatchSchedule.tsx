import React, {FunctionComponent} from "react";
import RoundRobinMatchesScheduleModel from "../../models/common/roundRobinMatchesScheduleModel";
import TurnMatches from "./TurnMatches";
import {Col, Row} from "reactstrap/es";

interface MatchScheduleProps {
    matchSchedule: RoundRobinMatchesScheduleModel
}

const MatchSchedule: FunctionComponent<MatchScheduleProps> = (props: MatchScheduleProps) => {
    const matchScheduleData: RoundRobinMatchesScheduleModel = props.matchSchedule;
    return (
        <Row className="match-schedule">
            <Col>
                <TurnMatches title="First turn" turnMatches={matchScheduleData.firstTurn} />
            </Col>
            <Col>
                <TurnMatches title="Second turn" turnMatches={matchScheduleData.secondTurn || []} />
            </Col>
        </Row>
    )
}

export default MatchSchedule;