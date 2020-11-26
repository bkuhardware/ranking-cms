import PairModel from "./pairModel";

export default class RoundRobinMatchesScheduleModel {
    firstTurn: PairModel[][] = [];
    secondTurn?: PairModel[][];
}