import React, {useState, useEffect } from 'react';
import { useNavigate, useParams} from 'react-router-dom';

const IndividualResult = () => {
    const navigate = useNavigate();
    const [result, setResult] = useState([]);

    const {resultId} = useParams();

    useEffect( () => {
        fetch(`/brewdog/individualcalculator/?id=${resultId}`, {
            method: 'GET',
            headers: {"Authorisation": "Token "+ localStorage.token},
            credentials: 'include'
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setResult(data);
        })
        .catch(error => {
            console.log(error);
        });
    }, [resultId]);

    return (
        <>
        <h1>Individual Result</h1>
        <p>{result.created}</p>
        </>
    );
}

export default IndividualResult;
