import React from "react";
import PairModel from "../../models/common/pairModel";
import RoundMatches from "./RoundMatches";
import {Carousel, CarouselControl, CarouselItem} from "reactstrap/es";

interface TurnMatchesProps {
    turnMatches: PairModel[][];
    title: string;
}

interface TurnMatchesState {
    activeCarouselRoundIndex: number
}

class TurnMatches extends React.Component<TurnMatchesProps, TurnMatchesState> {
    constructor(props: TurnMatchesProps) {
        super(props);
        this.state = {
            activeCarouselRoundIndex: 0
        };
    }

    get numberOfRound(): number {
        return this.props.turnMatches.length;
    }

    get roundSlides() {
        return this.props.turnMatches.map((roundMatches: PairModel[], roundIndex: number) => (
            <CarouselItem key={roundIndex}>
                <RoundMatches roundMatches={roundMatches} title={`Round ${roundIndex + 1}`} key={roundIndex} />
            </CarouselItem>
        ))
    }

    handleNextRoundSlide = () => {
        const newActiveIndex: number = this.state.activeCarouselRoundIndex === this.numberOfRound - 1 ? 0 : this.state.activeCarouselRoundIndex + 1;
        this.setState({
            activeCarouselRoundIndex: newActiveIndex
        });
    }

    handlePreviousRoundSlide = () => {
        const newActiveIndex: number = this.state.activeCarouselRoundIndex === 0 ? this.numberOfRound - 1 : this.state.activeCarouselRoundIndex - 1;
        this.setState({
            activeCarouselRoundIndex: newActiveIndex
        });
    }

    render() {
        return (
            <div>
                <h3 className="mb-3 text-primary font-weight-bold">{`${this.props.title}:`}</h3>
                {this.numberOfRound > 0 ? (
                    <Carousel activeIndex={this.state.activeCarouselRoundIndex} next={() => {}} previous={() => {}}>
                        {this.roundSlides}
                        <CarouselControl className="text-dark" direction="prev" onClickHandler={this.handlePreviousRoundSlide} />
                        <CarouselControl className="text-dark" direction="next" onClickHandler={this.handleNextRoundSlide} />
                    </Carousel>
                ) : (
                    <div className="text-center text-warning">No match.</div>
                )}
            </div>
        )
    }
}

export default TurnMatches;