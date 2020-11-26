import React from "react";
import PairModel from "../../models/common/pairModel";

interface MatchItemProps {
    match: PairModel
}

const MatchItem: React.FunctionComponent<MatchItemProps> = (props: MatchItemProps) => {
    return (
        <div className="d-flex pt-2 pb-2">
            <div className="flex-grow-1">{props.match.first}</div>
            <span className="w-10">-</span>
            <div className="flex-grow-1">{props.match.second}</div>
        </div>
    )
}

export default MatchItem;