import MatchScheduleModel from "../models/tournaments/MatchScheduleModel";
import PairModel from "../models/common/pairModel";
import MarkCompetitorModel from "../models/common/markCompetitorModel";

export const createMatchSchedule = (teams: string[], hasTwoRounds: boolean = false): MatchScheduleModel => {
    const matchScheduleData: MatchScheduleModel = new MatchScheduleModel();
    const allMatchInOneTurn: PairModel[][] = createOneTurnMatchSchedule(teams);
    matchScheduleData.firstTurn = allMatchInOneTurn;
    if (hasTwoRounds) {
        matchScheduleData.secondTurn = allMatchInOneTurn;
    }
    return matchScheduleData;
}

export const createOneTurnMatchSchedule = (teams: string[]): PairModel[][] => {
    const markCompetitorsMatrix: MarkCompetitorModel[][] = createMarkCompetitorsMatrix(teams);
    const numberOfTeams: number = teams.length;
    const numberOfRounds: number = numberOfTeams - 1;
    const rounds: PairModel[][] = [];
    for (let i = 0; i < numberOfRounds; ++i) {
        let pairs: PairModel[] = [];
        createAllMatchOfOneRound(pairs, markCompetitorsMatrix, teams);
        rounds.push(pairs);
    }
    return rounds;
}

export const createMarkCompetitorsMatrix = (teams: string[]): MarkCompetitorModel[][] => {
    const numberOfTeams: number = teams.length;
    const markCompetitorsMatrix: MarkCompetitorModel[][] = [];
    for (let i = 0; i < numberOfTeams; ++i) {
        const competitors: MarkCompetitorModel[] = [];
        for (let j = 0; j < numberOfTeams; ++j) {
            if (j !== i) {
                const markIndexItem = new MarkCompetitorModel(j);
                competitors.push(markIndexItem);
            }
        }
        markCompetitorsMatrix[i] = competitors;
    }
    return markCompetitorsMatrix;
}

export const createAllMatchOfOneRound = (pairs: PairModel[], markCompetitorsMatrix: MarkCompetitorModel[][], teams: string[]): void => {
    const markTable: boolean[] = createInitializeMarkTable(teams.length);
    for (let i = 0; i < markCompetitorsMatrix.length; ++i) {
        if (!markTable[i]) {
            const markIndexCompetitors: MarkCompetitorModel[] = markCompetitorsMatrix[i];
            for (let j = 0; j < markIndexCompetitors.length; ++j) {
                const markIndexCompetitor: MarkCompetitorModel = markIndexCompetitors[j];
                const competitorIndex: number = markIndexCompetitor.index;
                if (!markIndexCompetitor.isMarked && !markTable[competitorIndex]) {
                    markTable[i] = true;
                    markTable[competitorIndex] = true;
                    markIndexCompetitor.isMarked = true;
                    const newPair: PairModel = new PairModel(teams[i], teams[competitorIndex]);
                    pairs.push(newPair);
                    break;
                }
            }
        }
    }
}

export const createInitializeMarkTable = (numberOfTeams: number): boolean[] => {
    const markTable: boolean[] = [];
    for (let i = 0; i < numberOfTeams; ++i) {
        markTable.push(false);
    }
    return markTable;
}