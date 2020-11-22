import React, {FormEvent} from "react";
import FieldItem from "./FieldItem";
import {Input, Label} from "reactstrap/es";
import PropTypes from 'prop-types';
import {Builder} from "builder-pattern";
import CreateBoardInfoFormModel from "../../models/tournaments/createBoardInfoFormModel";

interface CreateBoardInfoFormProps {
    value: CreateBoardInfoFormModel,
    onChange: (value: CreateBoardInfoFormModel) => void
}

class CreateBoardInfoForm extends React.Component<CreateBoardInfoFormProps> {
    static propTypes = {
        value: PropTypes.object.isRequired,
        onChange: PropTypes.func.isRequired
    }

    handleInputTournamentName = (event: FormEvent<HTMLInputElement>) => {
        const newName: string = (event.target as HTMLInputElement).value;
        this.props.onChange(Builder<CreateBoardInfoFormModel>(this.props.value).name(newName).build());
    }

    handleInputTournamentDescription = (event: FormEvent<HTMLInputElement>) => {
        const newDescription: string = (event.target as HTMLInputElement).value;
        this.props.onChange(Builder<CreateBoardInfoFormModel>(this.props.value).description(newDescription).build());
    }

    handleChangeHasTwoRounds = (event: FormEvent<HTMLInputElement>) => {
        const newValue: boolean = (event.target as HTMLInputElement).checked;
        this.props.onChange(Builder<CreateBoardInfoFormModel>(this.props.value).isTwoRounds(newValue).build());
    }

    render() {
        return (
            <div className="w-85">
                <FieldItem label="Name">
                    <Input
                        type="text"
                        placeholder="Enter tournament name"
                        value={this.props.value.name}
                        onInput={this.handleInputTournamentName}
                    />
                </FieldItem>
                <FieldItem label="Description">
                    <Input
                        type="textarea"
                        placeholder="Enter tournament description"
                        className="h-fix-60"
                        value={this.props.value.description}
                        onInput={this.handleInputTournamentDescription}
                    />
                </FieldItem>
                <FieldItem label="2 rounds?">
                    <Input type="checkbox" checked={this.props.value.isTwoRounds} onChange={this.handleChangeHasTwoRounds} className="ml-0" />
                </FieldItem>
            </div>
        )
    }
}

export default CreateBoardInfoForm;