import React, { useState, useEffect } from "react";
import "../assets/css/styles.css";
import {verifyToken, createToken} from "../helper/auth";
import { connect } from "react-redux";
import ReactTooltip from "react-tooltip";
import 'react-custom-alert/dist/index.css';

const ExportChat = (props) => {
    const [statusExport, setStatusExport] = useState(false);
    const [data, setData] = useState([]);
    const [encryptExport, setEncryptExport] = useState("");
    const [statusResultExport, setStatusResultExport] = useState(false);
    const [statusGenerate, setStatusGenerate] = useState(false);

    useEffect(() => {
        fetchInputExport();
    }, []);

    const handleClick = (event) => {
        let newData = [...data];
        if (event.target.checked === true) {
            newData.push({
                address: event.target.value,
            });
        } else {
            const filterUserCheck = newData.findIndex(val => val.address === event.target.value);
            newData.splice(filterUserCheck, 1);
        }
        setData(newData);
    };

    const fetchInputExport = () => {
        if (localStorage.getItem("opponentList")) {
            let getOpponentList = JSON.parse(verifyToken(props.addressWallet, "opponentList", localStorage.getItem("opponentList")));
            console.log("opponentlist", getOpponentList);
            if (getOpponentList.findIndex(val => val.address === props.startingChat) > -1) {
                if (getOpponentList.filter(val => val.address === props.startingChat)[0].export) {
                    setStatusExport(true);
                } else {
                    setStatusExport(false);
                }
            } else {
                setStatusExport(false);
            }
        }
    };

    const fetchExportChat = () => {
        let exportChatData = [];
        data.map(val => {
            let localStorageData = JSON.parse((verifyToken(props.addressWallet, val.address, localStorage.getItem(val.address))));
            let opponentList = JSON.parse((verifyToken(props.addressWallet, "opponentList", localStorage.getItem("opponentList"))));
            return exportChatData.push({ opponentList, addressOpponent: val.address, data: localStorageData });
        });
        if (exportChatData.length > 0) {
            let encryptExport = createToken(props.addressWallet, "exportChat", JSON.stringify(exportChatData));
            setEncryptExport(encryptExport);
            setStatusResultExport(true);
            setStatusGenerate(true);
        }
    };

    return (
        <>
            {
                statusGenerate ?
                    <>
                        <span className="semiHeadFont">Save Key</span>
                        <ReactTooltip id="copy-text" type="dark">
                            Click to copy
                        </ReactTooltip>
                        <span onClick={() => {navigator.clipboard.writeText(encryptExport)}} data-tip data-for="copy-text" className="bi bi-clipboard mx-2 mt-2" type="button"></span>
                    </>
                    :
                    <>
                        <p className="semiHeadFont">Choose User</p>
                        <hr />
                    </>
            }
            {
                localStorage.getItem("opponentList") !== null ?
                    JSON.parse(verifyToken(props.addressWallet, "opponentList", localStorage.getItem("opponentList"))).map((val, i) => {
                        return (
                            <div key={i} className={`form-check text-truncate normalFont ${statusGenerate ? 'd-none' : 'd-block'}`}>
                                <div className="col-11 col-md-11">
                                    <input className="form-check-input" type="checkbox" value={val.address} id={`flexCheckDefault-${i}`} onClick={handleClick} checked={data.findIndex(data => data.address === val
