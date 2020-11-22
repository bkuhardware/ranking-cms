import React from "react";
import {Button} from "reactstrap/es";
import PropTypes from 'prop-types';

interface CreateBoardPageHeaderProps {
    title: string;
    onCancel: () => void;
    onSubmit: () => void;
    submitDisabled?: boolean;
    cancelDisabled?: boolean;
}

function CreateBoardPageHeader(props: CreateBoardPageHeaderProps) {
    const title: string = props.title;
    const handleCancel = props.onCancel;
    const handleSubmit = props.onSubmit;
    const submitDisabled: boolean = props.submitDisabled || false;
    const cancelDisabled: boolean = props.cancelDisabled || false;
    return (
        <h3 className="page-title">
            {title}
            <div className="float-right">
                <Button className="mr-2" onClick={handleCancel} disabled={cancelDisabled}>
                    Cancel
                </Button>
                <Button color="success" onClick={handleSubmit} disabled={submitDisabled}>
                    Submit
                </Button>
            </div>
        </h3>
    );
}

CreateBoardPageHeader.propTypes = {
    title: PropTypes.string.isRequired,
    onCancel: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    submitDisabled: PropTypes.bool,
    cancelDisabled: PropTypes.bool
}

export default CreateBoardPageHeader;