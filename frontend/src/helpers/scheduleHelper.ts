import RoundRobinMatchesScheduleModel from "../models/common/roundRobinMatchesScheduleModel";
import RoundRobinMatchesScheduleFactory from "../models/create-tournament/roundRobinMatchesScheduleFactory";

export const createMatchSchedule = (teams: string[], hasTwoTurns: boolean = false): RoundRobinMatchesScheduleModel => {
    const matchesScheduleData: RoundRobinMatchesScheduleModel = new RoundRobinMatchesScheduleModel();
    const matchScheduleFactory: RoundRobinMatchesScheduleFactory = new RoundRobinMatchesScheduleFactory(teams);
    matchesScheduleData.firstTurn = matchScheduleFactory.createOneTurnMatches();
    if (hasTwoTurns) {
        matchesScheduleData.secondTurn = matchScheduleFactory.createOneTurnMatches(false);
    }
    return matchesScheduleData;
}