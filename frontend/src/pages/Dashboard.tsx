import React, {Component} from 'react';
import PageLoading from "../components/common/PageLoading";
import DashboardTournaments from "../components/dashboard/DashboardTournaments";

class Dashboard extends Component {
    state = {
        isLoaded: true
    }

    render() {
        const isLoaded: boolean = this.state.isLoaded;
        return (
            <div className="dashboard">
                <h3 className="page-title">Your dashboard</h3>
                {!isLoaded ? (
                    <PageLoading />
                ) : (
                    <DashboardTournaments />
                )}
            </div>
        );
    }
}

export default Dashboard;