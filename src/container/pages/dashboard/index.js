import React from 'react';
import { Paper, TextField, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { ResponsiveBar, ResponsiveBarCanvas } from '@nivo/bar'
import { ResponsivePie } from '@nivo/pie'

export default function Dashboard(props) {
    console.log(props);
    const [listBulan] = React.useState([
        { nama: 'Januari' },
        { nama: 'Februari' },
        { nama: 'Maret' },
        { nama: 'April' },
        { nama: 'Mei' },
        { nama: 'Juni' },
    ])
    const [bulan, setBulan] = React.useState([])
    const [listTanggal] = React.useState([
        { nama: '1' },
        { nama: '2' },
        { nama: '3' },
        { nama: '4' },
        { nama: '5' },
        { nama: '6' },
    ])
    const [tanggal, setTanggal] = React.useState([])
    const [listUsia] = React.useState([
        {
            "usia": "<5",
            "pasien": 50,
            "color": "#8bf0c5",
        },
        {
            "usia": "5-10",
            "pasien": 75,
            "color": "#8bf0c5",
        },
        {
            "usia": "10-20",
            "pasien": 100,
            "color": "#8bf0c5",
        },
        {
            "usia": "20-30",
            "pasien": 275,
            "color": "#8bf0c5",
        },
        {
            "usia": "30-40",
            "pasien": 275,
            "color": "#8bf0c5",
        },
        {
            "usia": "40-50",
            "pasien": 290,
            "color": "#8bf0c5",
        },
        {
            "usia": "50-60",
            "pasien": 200,
            "color": "#8bf0c5",
        },
        {
            "usia": "60-70",
            "pasien": 200,
            "color": "#8bf0c5",
        },
        {
            "usia": "70-80",
            "pasien": 200,
            "color": "#8bf0c5",
        },
        {
            "usia": "80-90",
            "pasien": 200,
            "color": "#8bf0c5",
        },
        {
            "usia": ">90",
            "pasien": 200,
            "color": "#8bf0c5",
        }
    ])
    const [listJenkel] = React.useState([
        {
            "id": "man",
            "label": "Man",
            "value": 80,
            "color": "#2a9c6c"
        },
        {
            "id": "woman",
            "label": "Woman",
            "value": 20,
            "color": "#8bf0c5"
        },
    ])

    return (
        <div style={{ maxHeight: props.height - 100, display: 'grid', overflow: 'scroll', }}>
            <div style={{ display: 'flex ', justifyContent: 'space-between' , marginTop: 10, paddingLeft: 20, paddingRight: 20 }}>
                <Paper style={{ height: 70, width: '7%', borderRadius: 20, boxShadow: '5px 5px 10px 0 #999999' }} />
                <Typography>JUDUL JUDUL JUDUL JUDUL</Typography>
                <Paper style={{ height: 70, width: '7%', borderRadius: 20, boxShadow: '5px 5px 10px 0 #999999' }} >
                </Paper>
                {/* <Autocomplete
                    options={listBulan}
                    getOptionLabel={(option) => option.nama}
                    id="bulan"
                    onChange={(event, newInputValue) => {
                        setBulan(newInputValue)
                    }}
                    underlineShow={false}
                    disableClearable
                    style={{ width: 150, marginTop: 20, backgroundColor: 'white', borderRadius: 10, boxShadow: '5px 5px 10px 0 #999999' }}
                    renderInput={(params) =>
                        <TextField
                            {...params}
                            InputProps={{ ...params.InputProps, disableUnderline: true }}
                            margin="normal" style={{ paddingLeft: 20, paddingRight: 10, margin: 0 }}
                        />}
                    value={bulan}
                />
                <Autocomplete
                    options={listTanggal}
                    getOptionLabel={(option) => option.nama}
                    id="tanggal"
                    onChange={(event, newInputValue) => {
                        setTanggal(newInputValue)
                    }}
                    underlineShow={false}
                    disableClearable
                    style={{ width: 70, marginTop: 20, backgroundColor: 'white', borderRadius: 10, marginLeft: 10, boxShadow: '5px 5px 10px 0 #999999' }}
                    renderInput={(params) =>
                        <TextField
                            {...params}
                            InputProps={{ ...params.InputProps, disableUnderline: true }}
                            margin="normal" style={{ paddingLeft: 20, paddingRight: 10, margin: 0 }}
                        />}
                    value={tanggal}
                /> */}
            </div>
            <div style={{ marginTop: 20, display: 'flex', justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20 }}>
                <Paper style={{ height: 510, margin: 'auto', width: '80%', overflow: 'scroll', borderRadius: 20, boxShadow: '5px 5px 10px 0 #999999'  }}>
                    <Typography>Bagan Organisasi</Typography>
                    <Link to="/generator">generator</Link>
                </Paper>
            </div>
            
        </div>
    );
}