import {randomCompare} from "./utilHelper";
import {MAX_TEAM_IN_ONE_TOURNAMENT, TEAM_SEPARATOR_CHARACTER} from "../common/constants/tournament";
import CreateBoardInfoFormModel from "../models/tournaments/createBoardInfoFormModel";

export const randomSortTeams = (teamsText: string): string[] => {
    const teams: string[] = teamsText.split(TEAM_SEPARATOR_CHARACTER);
    const sortedTeams: string[] = teams.sort(randomCompare);
    return sortedTeams;
};

export const checkTournamentInfo = (tournamentInfo: CreateBoardInfoFormModel): boolean => {
    return Boolean(tournamentInfo.name) && Boolean(tournamentInfo.description) && Boolean(tournamentInfo.acronymName);
}

export const checkTeamsText = (teamsText: string): boolean => {
    const isEmptyTeams: boolean = teamsText === '';
    const teams: string[] = teamsText.split(TEAM_SEPARATOR_CHARACTER)
    const isEvenNumberOfTeams: boolean = teams.length % 2 === 0;
    const isNumberOfTeamsNotExceed: boolean = teams.length <= MAX_TEAM_IN_ONE_TOURNAMENT;
    const hasEmptyTeam: boolean = teams.some((team: string) => team === '');
    const isDuplicateTeam: boolean = checkDuplicateTeam(teams);
    return !hasEmptyTeam
        && isEvenNumberOfTeams
        && isNumberOfTeamsNotExceed
        && !isEmptyTeams
        && !isDuplicateTeam;
}

export const checkDuplicateTeam = (teams: string[]): boolean => {
    const teamsHashMap: {[k: string]: true} = {};
    let isDuplicate: boolean = false;
    teams.forEach((team: string) => {
        if (teamsHashMap[team]) {
            isDuplicate = true;
            return;
        }
        teamsHashMap[team] = true;
    });
    return isDuplicate;
}