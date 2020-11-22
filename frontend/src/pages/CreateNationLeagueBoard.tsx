import React, {Component} from 'react';
import CreateBoardPageHeader from "../components/common/CreateBoardPageHeader";
import CreateBoardInfoForm from "../components/common/CreateBoardInfoForm";
import CreateBoardInfoFormModel from "../models/tournaments/createBoardInfoFormModel";
import CreateBoardTeamsAdd from "../components/common/CreateBoardTeamsAdd";

class CreateNationLeagueBoard extends Component {
    state = {
        info: new CreateBoardInfoFormModel(),
        teams: ''
    }

    handleChangeInfo = (newInfo: CreateBoardInfoFormModel) => {
        this.setState({
            info: newInfo
        });
    }

    handleChangeTeams = (teams: string) => {
        this.setState({
            teams
        });
    }

    handleCancelCreate() {

    }

    handleSubmit() {

    }

    isSubmitButtonDisabled = (): boolean => {
        return !this.state.teams || !this.state.info.description || !this.state.info.name || !this.state.info.acronymName;
    }

    render() {
        return (
            <div>
                <CreateBoardPageHeader
                    title="Create nation league tournament"
                    onCancel={this.handleCancelCreate}
                    onSubmit={this.handleSubmit}
                    submitDisabled={this.isSubmitButtonDisabled()}
                />
                <CreateBoardInfoForm
                    value={this.state.info}
                    onChange={this.handleChangeInfo}
                />
                <br />
                <CreateBoardTeamsAdd value={this.state.teams} onChange={this.handleChangeTeams} />
            </div>
        );
    }
}

export default CreateNationLeagueBoard;