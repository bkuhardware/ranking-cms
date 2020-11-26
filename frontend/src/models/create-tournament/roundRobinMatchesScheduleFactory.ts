import PairModel from "../common/pairModel";

class RoundRobinMatchesScheduleFactory {
    private dummyTeam: string = '##';
    constructor(private teams: string[]) {}

    private get numOfTeam(): number {
        return this.teams.length;
    }

    private get isNumOfTeamOdd(): boolean {
        return this.numOfTeam % 2 === 1;
    }

    private get numOfTurn(): number {
        return this.isNumOfTeamOdd ? this.numOfTeam : this.numOfTeam - 1;
    }

    private get midIndexNumOfTeam(): number {
        return this.isNumOfTeamOdd  ? (this.numOfTeam + 1) / 2 : this.numOfTeam / 2;
    }

    private createCircleTable(): string[][] {
        const circleTable: string[][] = [new Array(this.midIndexNumOfTeam), new Array(this.midIndexNumOfTeam)];
        for (let i = 0; i < this.midIndexNumOfTeam; ++i) {
            circleTable[0][i] = this.teams[i];
            circleTable[1][i] = this.teams[this.midIndexNumOfTeam + i] || this.dummyTeam;
        }
        return circleTable;
    }

    createOneTurnMatches(isClockwise: boolean = true): PairModel[][] {
        const circleTable: string[][] = this.createCircleTable();
        const matches: PairModel[][] = [];
        for (let i = 0; i < this.numOfTurn; ++i) {
            const allMatchesOfTurn: PairModel[] = this.getAllMatchesOfTurnFromCircleTable(circleTable, isClockwise);
            matches.push(allMatchesOfTurn);
            this.circularCircleTable(circleTable, isClockwise);
        }
        return matches;
    }

    private getAllMatchesOfTurnFromCircleTable(circleTable: string[][], isClockwise: boolean): PairModel[] {
        const allMatchesOfTurn: PairModel[] = [];
        for (let i = 0; i < this.midIndexNumOfTeam; ++i) {
            if (circleTable[0][i] === this.dummyTeam || circleTable[1][i] === this.dummyTeam)
                continue;
            const matchPair: PairModel = isClockwise ? new PairModel(circleTable[0][i], circleTable[1][i]) : new PairModel(circleTable[1][i], circleTable[0][i]);
            allMatchesOfTurn.push(matchPair);
        }
        return allMatchesOfTurn;
    }

    private circularCircleTable(circleTable: string[][], isClockwise: boolean = true): void {
        if (isClockwise) {
            this.circularClockwiseCircleTable(circleTable);
        }
        else {
            this.circularCounterClockwiseCircleTable(circleTable);
        }
    }

    private circularClockwiseCircleTable(circleTable: string[][]): void  {
        const anchor = circleTable[1][0];
        for (let i = 1; i < this.midIndexNumOfTeam; ++i) {
            circleTable[1][i - 1] = circleTable[1][i];
        }
        circleTable[1][this.midIndexNumOfTeam - 1] = circleTable[0][this.midIndexNumOfTeam - 1];
        for (let i = this.midIndexNumOfTeam - 1; i >= 2; --i) {
            circleTable[0][i] = circleTable[0][i - 1];
        }
        circleTable[0][1] = anchor;
    }

    private circularCounterClockwiseCircleTable(circleTable: string[][]): void {
        const anchor = circleTable[0][1];
        for (let i = 1; i < this.midIndexNumOfTeam - 1; ++i) {
            circleTable[0][i] = circleTable[0][i + 1];
        }
        circleTable[0][this.midIndexNumOfTeam - 1] = circleTable[1][this.midIndexNumOfTeam - 1];
        for (let i = this.midIndexNumOfTeam - 1; i >= 1; --i) {
            circleTable[1][i] = circleTable[1][i - 1];
        }
        circleTable[1][0] = anchor;
    }
}

export default RoundRobinMatchesScheduleFactory;