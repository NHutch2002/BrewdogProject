import React, {useState, useEffect } from 'react';
import { useNavigate, useParams} from 'react-router-dom';

const IndividualResult = () => {
    const navigate = useNavigate();
    const [result, setResult] = useState([]);

    const {resultId} = useParams();
    console.log("resultId: ", resultId);

    useEffect( () => {
        fetch('/brewdog/calculator', {
            method: 'GET',
            headers: {"Authorisation": "Token "+ localStorage.token, "CalculatorId": resultId},
            credentials: 'include'
        })
        .then(response => response.json())
        .then(data => {
            setResult(data);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);



    return (
        <>
        <p>Individual result page!!</p>
        </>
    );
}

export default IndividualResult;
