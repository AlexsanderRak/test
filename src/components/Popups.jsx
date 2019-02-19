import React, { Component } from 'react'
import PopupCancelByPerformer from './PopupCancelByPerformer'
import PopupPaymentNotReceived from './PopupPaymentNotReceived'
import PopupPaymentNotReceivedWarning from './PopupPaymentNotReceivedWarning'
import PopupTransportLeft from './PopupTransportLeft'
import PopupExtendTheLease from './PopupExtendTheLease'

// import '../css/popups.css'

const Popups = (props) => {
	return (
		<div>
			<PopupExtendTheLease />
			<PopupTransportLeft />
			<PopupPaymentNotReceived />
			<PopupCancelByPerformer />
			<PopupPaymentNotReceivedWarning />
		</div>
	)
}

export default Popups