import QrReader from 'react-qr-reader'
import { useEffect, useState } from "react";
import { Container } from '@mui/material';

export const EscanerQR = () => {

    const [code, setCode] = useState(null);
    const [processing, setProcessing] = useState(false);
    const [selected, setSelected] = useState("environment");
    const [procesado, setProcesado] = useState(false);

    const handleScan = async scanData => {
        console.log("scanData", scanData);
        if (scanData !== null) {
            console.log(`loaded data data`, scanData);
        }
    };
    const handleError = err => {
        console.error(err);
    };

    return (
        <Container>
            <QrReader
                facingMode={selected}
                delay={4000}
                resolution={800}
                legacyMode={procesado}
                onError={handleError}
                onScan={handleScan}
                            />
        </Container>
    );

};