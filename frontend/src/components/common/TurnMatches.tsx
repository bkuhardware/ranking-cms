import React from "react";
import PairModel from "../../models/common/pairModel";
import RoundMatches from "./RoundMatches";

interface TurnMatchesProps {
    turnMatches: PairModel[][];
    title: string;
}

const TurnMatches: React.FunctionComponent<TurnMatchesProps> = (props: TurnMatchesProps) => {
    return (
        <div>
            <div className="mb-3 text-primary font-weight-bold">{`${props.title}:`}</div>
            {props.turnMatches.length > 0 ? (
                <React.Fragment>
                    {props.turnMatches.map((roundMatches: PairModel[], roundIndex: number) => (
                        <RoundMatches roundMatches={roundMatches} title={`Round ${roundIndex + 1}`} key={roundIndex} />
                    ))}
                </React.Fragment>
            ) : (
                <div className="text-center text-warning">No match.</div>
            )}

        </div>
    )
}

export default TurnMatches;