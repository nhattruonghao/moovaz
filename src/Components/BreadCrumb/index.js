import React, { useContext } from 'react'
import { GlobalState } from '../../GlobalState'

function BreadCrumb() {
    const state = useContext(GlobalState);
    const [modalMoveDate, setModalMoveDate] = state.modalMoveState;
    const [reloDetail] = state.ReloDetail.ReloDetail;

    const onModalMoveDate = () => {
        setModalMoveDate(true);
    }
    return (
        <div className="breadcrumb">
            <div className="container">
            <div className="breadcrumb__left">
                <span>My To-Dos</span>
                <span> / </span>
                <span>Find a Service</span>
            </div>
            <div className="breadcrumb__right">
            <div className="breadcrumb__right__text">
                Moving from <span>{reloDetail.originCityName}</span> to <span>{reloDetail.destCountryName}</span> on <span>{reloDetail.moveDate}</span>
            </div>
            <div className="breadcrumb__right__edit">
                <span onClick={onModalMoveDate}>EDIT</span>
            </div>
            </div>
            </div>
        </div>
    )
}

export default BreadCrumb
