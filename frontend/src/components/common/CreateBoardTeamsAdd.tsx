import React, {Component, FormEvent} from 'react';
import {Alert, Input} from "reactstrap/es";
import PropTypes from 'prop-types';
import {BsExclamationCircleFill} from "react-icons/all";
import {MAX_TEAM_IN_ONE_TOURNAMENT} from "../../common/constants/tournament";

interface CreateBoardTeamsAddProps {
    value: string;
    onChange: (newValue: string) => void;
}

class CreateBoardTeamsAdd extends Component<CreateBoardTeamsAddProps> {
    static propTypes = {
        onChange: PropTypes.func.isRequired,
        value: PropTypes.string.isRequired
    }

    handleChange = (event: FormEvent<HTMLInputElement>) => {
        const newValue: string = (event.target as HTMLInputElement).value;
        this.props.onChange(newValue);
    }

    render() {
        return (
            <div>
                <div className="mb-3 font-weight-bold text-primary text-uppercase">Add teams/players</div>
                <Alert color="info">
                    <BsExclamationCircleFill className="mr-2" /> Number of teams/players should be an even number and not greater than {MAX_TEAM_IN_ONE_TOURNAMENT}. Not allow to duplicate team/player.
                </Alert>
                <div>
                    <Input
                        type="textarea"
                        placeholder="Enter teams, split by comma"
                        value={this.props.value}
                        onChange={this.handleChange}
                        className="h-fix-280 w-100"
                    />
                </div>
            </div>
        );
    }
}

export default CreateBoardTeamsAdd;