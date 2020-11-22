import React, {Component, FormEvent} from 'react';
import {Input} from "reactstrap/es";
import PropTypes from 'prop-types';

interface CreateBoardTeamsAddProps {
    value: string;
    onChange: (newValue: string) => void;
}

class CreateBoardTeamsAdd extends Component<CreateBoardTeamsAddProps> {
    propTypes = {
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
                <div className="mb-3 font-weight-bold text-primary">Add teams/players</div>
                <div>
                    <Input
                        type="textarea"
                        placeholder="Enter teams, split by new line"
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