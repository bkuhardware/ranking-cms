import React, {Component} from 'react';
import CreateNationLeagueBoardDetail from "../components/create-nation-league-board/CreateNationLeagueBoardDetail";
import CreateBoardPageHeader from "../components/common/CreateBoardPageHeader";
import CreateBoardInfoForm from "../components/create-nation-league-board/CreateBoardInfoForm";

class CreateNationLeagueBoard extends Component {
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
                    value={{}}
                    onChange={() => {}}
                />
                <CreateNationLeagueBoardDetail />
            </div>
        );
    }
}

export default CreateNationLeagueBoard;