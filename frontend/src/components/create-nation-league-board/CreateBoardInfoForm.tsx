import React, {FormEvent} from "react";
import FieldItem from "../common/FieldItem";
import {Input} from "reactstrap/es";
import PropTypes from 'prop-types';
import {Builder} from "builder-pattern";

class CreateBoardInfoForm extends React.Component {

    handleInputTournamentName = (event: FormEvent<HTMLInputElement>) => {
        const newName: string = event.target.value;
        this.props.onChange(Builder(this.props.value).name(newName).build());
    }

    handleInputTournamentDescription = (event: FormEvent<HTMLInputElement>) => {
        const newDescription: string = event.target.value;
        this.props.onChange(Builder(this.props.value).description(newDescription).build());
    }

    render() {
        const name: string = this.props.name;
        const description: string = this.props.description;
        return (
            <div className="w-85">
                <FieldItem label="Name">
                    <Input
                        type="text"
                        placeholder="Enter tournament name"
                        value={name}
                        onInput={this.handleInputTournamentName}
                    />
                </FieldItem>
                <FieldItem label="Description">
                    <Input
                        type="textarea"
                        placeholder="Enter tournament description"
                        className="h-fix-60"
                        value={description}
                        onInput={this.handleInputTournamentDescription}
                    />
                </FieldItem>
            </div>
        )
    }
}

CreateBoardInfoForm.propTypes = {
    value: PropTypes.instanceOf(Object).isRequired,              //TODO: Change to correct instance.
    onChange: PropTypes.func.isRequired
}

export default CreateBoardInfoForm;