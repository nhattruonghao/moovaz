import React, { useContext, useEffect, useRef, useState } from 'react'
import { MoveDateApi } from '../../Api/MoovazApi';
import { GlobalState } from '../../GlobalState';

function ModalMoveDate() {
    const modal = useRef(null);
    const state = useContext(GlobalState);
    const [modalMoveDate, setModalMoveDate] = state.modalMoveState;
    const [reloDetail] = state.ReloDetail.ReloDetail;
    const [token] = state.token;
    const [callback, setCallback] = state.ReloDetail.callback;
    const [fromTo, setFromTo] = useState({
        from: '',
        to: '',
        movedate:''
    })
    console.log(state);

    useEffect(() => {
        if(!modalMoveDate){
            modal.current.classList.add('hide');
        }else{
            modal.current.classList.remove('hide');
        }
        if(reloDetail){
            setFromTo({
                from: reloDetail.originCityName,
                to: reloDetail.destCountryName,
                movedate: reloDetail.moveDate
            })
        }
    }, [modalMoveDate,reloDetail])

    const onChangeInput = e =>{
        const target = e.target;
        const name = target.name;
        const value = target.value;
        setFromTo({...fromTo, [name]: value}) ;
    }

    const hideModalMoveDate = () => {
        setModalMoveDate(false);
    }

    const submitMoveDate = async(e) => {
        e.preventDefault();
        const relocateId = reloDetail.relocateId;
        await MoveDateApi(relocateId, fromTo.movedate, token);
        setModalMoveDate(false);
        setCallback(!callback);
    }
    return (
        <div className="modal-move-date" ref={modal}>
            <div className="move-date__block">
                <div className="move-date__block__cross">
                    <img onClick={hideModalMoveDate} src="/asset/img/cross.png" alt="" />
                </div>
                <div className="move-date__content">
                    <div className="move-date__content__title">
                        <span>Update Move Date</span>
                        </div>
                    <div className="move-date__content__form">
                        <form onSubmit={submitMoveDate}>
                            <label htmlFor="from">From</label>
                            <input type="text" name='from' defaultValue={fromTo.from} readOnly />
                            <div className="logo-bird">
                                <img src="/asset/img/bird.png" alt="" />
                            </div>
                            <label htmlFor="to">To</label>
                            <input type="text" name='to' defaultValue={fromTo.to} readOnly />
                            <label htmlFor="movedate">Move Date</label>
                            <input type="date" name='movedate' defaultValue={fromTo.movedate} onChange={onChangeInput} />
                            <div className="btn-move-date"><button type='submit'>SAVE</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalMoveDate
