import React from "react";
import PropTypes from 'prop-types';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap/es";
import {BsArrowCounterclockwise, BsCheck} from "react-icons/all";
import MatchScheduleModel from "../../models/tournaments/MatchScheduleModel";
import {createMatchSchedule} from "../../helpers/scheduleHelper";

interface CreateNationLeagueBoardPreviewModalProps {
    visible: boolean;
    onClose: () => void;
    randomSortedTeams: string[];                //TODO: Use data from store, not props.
    hasTwoTurns: boolean
}

function CreateNationLeagueBoardPreviewModal(props: CreateNationLeagueBoardPreviewModalProps) {
    const hasTwoTurns: boolean = props.hasTwoTurns || false;
    const handleChangeResult = () => {

    };
    const handleSubmit = () => {

    };
    const scheduleData: MatchScheduleModel = createMatchSchedule(props.randomSortedTeams, props.hasTwoTurns);
    return (
        <Modal isOpen={props.visible} toggle={props.onClose} fade={false}>
            <ModalHeader toggle={props.onClose}>Preview result</ModalHeader>
            <ModalBody>
                {JSON.stringify(scheduleData)}
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

CreateNationLeagueBoardPreviewModal.propTypes = {
    visible: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    randomSortedTeams: PropTypes.arrayOf(PropTypes.string).isRequired,
    hasTwoTurns: PropTypes.bool
}

export default CreateNationLeagueBoardPreviewModal;