import React from "react";
import {Button} from "reactstrap/es";
import PropTypes from 'prop-types';

interface CreateBoardPageHeaderProps {
    title: string;
    onCancel: () => void;
    onPreview: () => void;
    previewDisabled?: boolean;
    cancelDisabled?: boolean;
}

function CreateBoardPageHeader(props: CreateBoardPageHeaderProps) {
    const previewDisabled: boolean = props.previewDisabled || false;
    const cancelDisabled: boolean = props.cancelDisabled || false;
    return (
        <h3 className="page-title">
            {props.title}
            <div className="float-right">
                <Button className="mr-2" onClick={props.onCancel} disabled={cancelDisabled}>
                    Cancel
                </Button>
                <Button color="success" onClick={props.onPreview} disabled={previewDisabled}>
                    Preview
                </Button>
            </div>
        </h3>
    );
}

CreateBoardPageHeader.propTypes = {
    title: PropTypes.string.isRequired,
    onCancel: PropTypes.func.isRequired,
    onPreview: PropTypes.func.isRequired,
    previewDisabled: PropTypes.bool,
    cancelDisabled: PropTypes.bool
}

export default CreateBoardPageHeader;