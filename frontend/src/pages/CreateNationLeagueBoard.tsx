import React, {Component} from 'react';
import CreateBoardPageHeader from "../components/common/CreateBoardPageHeader";
import CreateBoardInfoForm from "../components/common/CreateBoardInfoForm";
import CreateBoardInfoFormModel from "../models/create-tournament/createBoardInfoFormModel";
import CreateBoardTeamsAdd from "../components/common/CreateBoardTeamsAdd";
import CreateNationLeagueBoardPreviewModal
    from "../components/create-nation-league/CreateNationLeagueBoardPreviewModal";
import {checkTeamsText, checkTournamentInfo, randomSortTeams} from "../helpers/createBoardHelper";
import {RouteComponentProps, withRouter} from "react-router";
import ROUTE_PATH from "../common/constants/routeConstants";
import {MAX_TEAM_IN_ONE_NATION_LEAGUE_TOURNAMENT} from "../common/constants/nationLeague";

interface CreateNationLeagueBoardProps extends RouteComponentProps {

}
class CreateNationLeagueBoard extends Component<CreateNationLeagueBoardProps> {
    state = {
        info: new CreateBoardInfoFormModel(),
        teamsText: '',
        randomSortedTeams: [],
        isPreviewModalVisible: false,
        isChangeTeamsAfterPreview: false
    }

    handleChangeInfo = (newInfo: CreateBoardInfoFormModel) => {
        this.setState({
            info: newInfo
        });
    }

    handleChangeTeamsText = (teamsText: string) => {
        this.setState({
            teamsText: teamsText,
            isChangeTeamsAfterPreview: true
        });
    }

    handleClosePreviewModal = () => {
        this.setState({
            isPreviewModalVisible: false
        });
    }

    handleCancelCreate = () => {
        this.props.history.push(ROUTE_PATH.DASHBOARD);
    }

    handlePreview = () => {
        if (this.state.isChangeTeamsAfterPreview) {
            this.handleSortRandom();
        }
        this.setState({
            isPreviewModalVisible: true,
            isChangeTeamsAfterPreview: false
        });
    }

    handleSortRandom = () => {
        const randomSortedTeams: string[] = randomSortTeams(this.state.teamsText);
        this.setState({
            randomSortedTeams
        });
    }
    isPreviewButtonDisabled = (): boolean => {
        return !checkTournamentInfo(this.state.info) || !checkTeamsText(this.state.teamsText);          //TODO: Use selector and store.
    }

    render() {
        return (
            <div>
                <CreateBoardPageHeader
                    title="Create nation league tournament"
                    onCancel={this.handleCancelCreate}
                    onPreview={this.handlePreview}
                    previewDisabled={this.isPreviewButtonDisabled()}
                />
                <CreateBoardInfoForm
                    value={this.state.info}
                    onChange={this.handleChangeInfo}
                />
                <br />
                <CreateBoardTeamsAdd value={this.state.teamsText} onChange={this.handleChangeTeamsText} maxTeams={MAX_TEAM_IN_ONE_NATION_LEAGUE_TOURNAMENT} />
                <CreateNationLeagueBoardPreviewModal
                    info={this.state.info}
                    visible={this.state.isPreviewModalVisible}
                    onClose={this.handleClosePreviewModal}
                    randomSortedTeams={this.state.randomSortedTeams}            //TODO: Use data from store, not props.
                    hasTwoTurns={this.state.info.isTwoTurns}
                    onSortRandom={this.handleSortRandom}
                />
            </div>
        );
    }
}

export default withRouter(CreateNationLeagueBoard);