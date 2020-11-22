import React, {FormEvent} from "react";
import FieldItem from "./FieldItem";
import {Input, Label} from "reactstrap/es";
import PropTypes from 'prop-types';
import {Builder} from "builder-pattern";
import CreateBoardInfoFormModel from "../../models/tournaments/createBoardInfoFormModel";
import {MAX_TOURNAMENT_DESCRIPTION_LENGTH, MAX_TOURNAMENT_NAME_LENGTH} from "../../common/constants/tournament";
import {getAcronymText} from "../../helpers/textHelper";

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
        if (newName.length <= MAX_TOURNAMENT_NAME_LENGTH) {
            const newAcronym: string = getAcronymText(newName);
            const newValue: CreateBoardInfoFormModel = Builder<CreateBoardInfoFormModel>(this.props.value).name(newName).acronymName(newAcronym).build();
            this.props.onChange(newValue);
        }
    }

    handleInputTournamentDescription = (event: FormEvent<HTMLInputElement>) => {
        const newDescription: string = (event.target as HTMLInputElement).value;
        if (newDescription.length <= MAX_TOURNAMENT_DESCRIPTION_LENGTH) {
            this.props.onChange(Builder<CreateBoardInfoFormModel>(this.props.value).description(newDescription).build());
        }
    }

    handleChangeHasTwoRounds = (event: FormEvent<HTMLInputElement>) => {
        const newValue: boolean = (event.target as HTMLInputElement).checked;
        this.props.onChange(Builder<CreateBoardInfoFormModel>(this.props.value).isTwoRounds(newValue).build());
    }

    handleInputTournamentAcronymName = (event: FormEvent<HTMLInputElement>) => {
        const newValue: string = (event.target as HTMLInputElement).value;
        this.props.onChange(Builder<CreateBoardInfoFormModel>(this.props.value).acronymName(newValue).build());
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
                <FieldItem label="Acronym Name">
                    <Input
                        type="text"
                        className="w-fix-80"
                        value={this.props.value.acronymName}
                        onInput={this.handleInputTournamentAcronymName}
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