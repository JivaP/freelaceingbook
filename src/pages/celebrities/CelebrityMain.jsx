import React, { useEffect, useState } from 'react'
import Celebrities from './celebrities'
import CelebrityGrid from './CelebrityGrid'
import CelebrityCards from '../../Common/ui/Card/Card'
import { Container } from '@mui/material';


export default function CelebrityMain() {
    const [celebrities, setCelebrities] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const response = await fetch('/json/celebrity.json');

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log(data, 'Fetched Celebrity Data >>>');
            setCelebrities(data);
        } catch (err) {
            console.error('Fetch Error:', err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <>
            <Celebrities />
            <Container>

                <CelebrityCards celebrityData={celebrities} />
            </Container>
        </>
    )
}
