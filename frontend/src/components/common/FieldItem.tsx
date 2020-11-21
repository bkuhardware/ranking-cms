import React from "react";
import PropTypes from 'prop-types';

function FieldItem(props: any) {
    const customClassName: string = props.className || '';
    const label: string = props.label;
    const value: string | number = props.value || '';
    return (
        <div className={`${customClassName} d-flex mb-3`}>
            <div className="w-fix-80 mr-3">{label}</div>
            <div className="flex-grow-1">
                {props.children || value}
            </div>
        </div>
    );
}

FieldItem.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)])
};

export default FieldItem;