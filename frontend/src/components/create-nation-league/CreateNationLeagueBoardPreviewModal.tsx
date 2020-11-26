import React from "react";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap/es";
import {BsArrowCounterclockwise, BsCheck} from "react-icons/all";
import RoundRobinMatchesScheduleModel from "../../models/common/roundRobinMatchesScheduleModel";
import {createMatchSchedule} from "../../helpers/scheduleHelper";
import MatchSchedule from "../common/MatchSchedule";
import CreateBoardInfoFormModel from "../../models/create-tournament/createBoardInfoFormModel";

interface CreateNationLeagueBoardPreviewModalProps {
    visible: boolean;
    onClose: () => void;
    randomSortedTeams: string[];                //TODO: Use data from store, not props.
    hasTwoTurns: boolean;
    info: CreateBoardInfoFormModel
}

function CreateNationLeagueBoardPreviewModal(props: CreateNationLeagueBoardPreviewModalProps) {
    const hasTwoTurns: boolean = props.hasTwoTurns || false;
    const handleChangeResult = () => {

    };
    const handleSubmit = () => {

    };
    const scheduleData: RoundRobinMatchesScheduleModel = createMatchSchedule(props.randomSortedTeams, hasTwoTurns);
    return (
        <Modal isOpen={props.visible} toggle={props.onClose} fade={false} modalClassName="create-nation-league-board-preview-modal">
            <ModalHeader toggle={props.onClose}>Preview result</ModalHeader>
            <ModalBody>
                <h3 className="text-center">{`${props.info.name} (${props.info.acronymName})`}</h3>
                <div className="mb-3">{props.info.description}</div>
                <MatchSchedule matchSchedule={scheduleData} />
            </ModalBody>
            <ModalFooter>
                <Button color="info" onClick={handleChangeResult}>
                    <BsArrowCounterclockwise /> Change
                </Button>
                <Button color="success" onClick={handleSubmit}>
                    <BsCheck /> Submit
                </Button>
            </ModalFooter>
        </Modal>
    )
}

export default CreateNationLeagueBoardPreviewModal;