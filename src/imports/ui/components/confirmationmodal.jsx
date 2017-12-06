import React, { Children } from 'react';
import { Meteor } from 'meteor/meteor';
import Alert from 'react-s-alert';

export default ConfirmationModal = ({id, header, children, onSubmit, submitLabel, cancelLabel}) =>
    <div className="modal fade" id={id.toString()} role="dialog">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header rtl">
                    {header}
                    <button className="close" data-dismiss="modal">&times;</button>
                </div>
                <div className="modal-body">
                    {Children.map(children, x => x)}
                </div>
                <div className="modal-footer">
                    <button className="btn btn-default" data-dismiss="modal">
                        {cancelLabel || "ביטול"}
                    </button>
                    <button className="btn btn-success" onClick={onSubmit}>
                        {submitLabel || "אישור"}
                    </button>
                </div>
            </div>
        </div>
    </div>