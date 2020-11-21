import React, {Component} from 'react';
import CreateNationLeagueBoardDetail from "../components/create-nation-league-board/CreateNationLeagueBoardDetail";
import CreateBoardPageHeader from "../components/common/CreateBoardPageHeader";
import CreateBoardInfoForm from "../components/create-nation-league-board/CreateBoardInfoForm";
import CreateBoardInfoFormModel from "../models/tournaments/createBoardInfoFormModel";

class CreateNationLeagueBoard extends Component {
    state = {
        info: new CreateBoardInfoFormModel()
    }

    handleChangeInfo = (newInfo: CreateBoardInfoFormModel) => {
        this.setState({
            info: newInfo
        });
    }

    handleCancelCreate() {

    }

    handleSubmit() {

    }

    render() {
        return (
            <div>
                <CreateBoardPageHeader
                    title="Create nation league"
                    onCancel={this.handleCancelCreate}
                    onSubmit={this.handleSubmit}
                />
                <CreateBoardInfoForm
                    value={this.state.info}
                    onChange={this.handleChangeInfo}
                />
                <CreateNationLeagueBoardDetail />
            </div>
        );
    }
}

export default CreateNationLeagueBoard;