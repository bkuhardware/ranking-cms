import React from "react";
import PairModel from "../../models/common/pairModel";
import MatchItem from "./MatchItem";

interface RoundMatchesProps {
    roundMatches: PairModel[];
    title: string;
}

const RoundMatches: React.FunctionComponent<RoundMatchesProps> = (props: RoundMatchesProps) => {
    return (
        <div className="mb-2">
            <div className="mb-2 text-info">{props.title}</div>
            <div className="text-center rounded bg-dark text-white">
                {props.roundMatches.map((match: PairModel, index: number) => (
                    <MatchItem match={match} key={index} />
                ))}
            </div>
        </div>
    )
}

export default RoundMatches;