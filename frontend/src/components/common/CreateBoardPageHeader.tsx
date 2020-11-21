import React from "react";
import {Button} from "reactstrap/es";
import PropTypes from 'prop-types';

function CreateBoardPageHeader(props: any) {
    const title: string = props.title;
    const handleCancel = props.onCancel;
    const handleSubmit = props.onSubmit;
    return (
        <h3 className="page-title">
            {title}
            <div className="float-right">
                <Button className="mr-2" onClick={handleCancel}>
                    Cancel
                </Button>
                <Button color="success" onClick={handleSubmit}>
                    Submit
                </Button>
            </div>
        </h3>
    );
}

CreateBoardPageHeader.propTypes = {
    title: PropTypes.string.isRequired,
    onCancel: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
}

export default CreateBoardPageHeader;