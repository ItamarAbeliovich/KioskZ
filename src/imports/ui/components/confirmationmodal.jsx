import React from 'react';
import { Meteor } from 'meteor/meteor';
import Alert from 'react-s-alert';

export default ConfirmationModal = ({key, header, content, onSubmit}) =>
    <div className="modal fade" id={key.toString()} role="dialog">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header rtl">
                </div>
            </div>
        </div>
    </div>