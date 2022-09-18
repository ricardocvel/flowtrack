import React, { useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Chart } from "react-google-charts";
import SVG from 'react-inlinesvg';
import FlashOnIcon from '@material-ui/icons/FlashOn';

const useStyles = makeStyles((theme: Theme) => ({
    root:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: "0px",
        height: "100%",
        width: "100%",
    },

    containerLeft: {
        minWidth: "50%",
        maxWidth: "60%",
    },

    containerColun:{
        display: 'flex',
        flexDirection: 'column' ,
        borderTop: "1px solid #b9b9b9",
    },

    medidores:{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: "30px"
    },

    labelChart: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center'
    },

    p: {
        padding: "2px",
        marginTop: 0,
    },

    containerRigth: {
        minWidth: "40%",
        borderLeft: "1px solid #b9b9b9",
    }

}));


export default function Dashboard() {

    //style
    const classes = useStyles();

    const [optionsVolts, setOptionsVolts] = useState({
        title: 'Leitura de Tensão'
      })

    const [optionsAmp, setOptionsAmp] = useState({
    title: 'Leitura de Tensão'
    })

    let [volt01, setVolt01] = useState([
        ['Label', 'Value'],
        ['V', 45],
      ])
    let [volt02, setVolt02] = useState([
        ['Label', 'Value'],
        ['V', 30],
    ])
    let [volt03, setVolt03] = useState([
        ['Label', 'Value'],
        ['V', 19],
      ])

    let [amp01, setAmp01] = useState([
        ['Label', 'Value'],
        ['A', 10],
    ])

    let [amp02, setAmp02] = useState([
        ['Label', 'Value'],
        ['A', 30],
    ])

    let [amp03, setAmp03] = useState([
        ['Label', 'Value'],
        ['A', 19],
    ])


  return (
    <div  className={classes.root}>
        <div className={classes.containerLeft}>
        {/* ------------------Medidores de tensao------------------- */}
        <div className={classes.containerColun}>
            <p>Leituras de Tensão</p>
            <div className={classes.medidores}> 
                <div>
                    <Chart
                        width={'200px'}
                        height={'200px'}
                        chartType="Gauge"
                        data={volt01}
                        options={optionsVolts}
                    />
                    <div className={classes.labelChart}>
                        <SVG
                            src="https://raw.githubusercontent.com/ricardocvel/flowtrack/dff485ae29b7c0369c156c4c8da0d6d5f1fb225f/src/assets/symbol/current-dc.svg"
                            width="25px"
                            height="25px"
                            title="React"
                            className={classes.p}
                        />
                        <label className={classes.p}>
                            {volt01[1][1]} Volts
                        </label>
                    </div>
                </div>


                <div>
                    <Chart
                        width={'200px'}
                        height={'200px'}
                        chartType="Gauge"
                        data={volt02}
                        options={optionsVolts}
                    />
                    <div className={classes.labelChart}>
                        <SVG
                            src="https://raw.githubusercontent.com/ricardocvel/flowtrack/dff485ae29b7c0369c156c4c8da0d6d5f1fb225f/src/assets/symbol/current-dc.svg"
                            width="25px"
                            height="25px"
                            title="React"
                            className={classes.p}
                        />
                        <label className={classes.p}>
                            {volt02[1][1]} Volts
                        </label>
                    </div>
                </div>
                <div>
                    <Chart
                        width={'200px'}
                        height={'200px'}
                        chartType="Gauge"
                        data={volt03}
                        options={optionsVolts}
                    />
                    <div className={classes.labelChart}>
                        <SVG
                            src="https://raw.githubusercontent.com/ricardocvel/flowtrack/dff485ae29b7c0369c156c4c8da0d6d5f1fb225f/src/assets/symbol/current-dc.svg"
                            width="25px"
                            height="25px"
                            title="React"
                            className={classes.p}
                        />
                        <label className={classes.p}>
                            {volt03[1][1]} Volts
                        </label>
                    </div>
                </div>
            </div>
        </div>
        <div className={classes.containerColun}>
            <p>Leituras de Corrente</p>
            <div className={classes.medidores}> 
                <div>
                    <Chart
                        width={'200px'}
                        height={'200px'}
                        chartType="Gauge"
                        data={amp01}
                        options={optionsAmp}
                    />
                    <div className={classes.labelChart}>
                        <label className={classes.p}>
                            {amp01[1][1]}
                        </label>
                        <SVG
                            src="https://raw.githubusercontent.com/ricardocvel/flowtrack/5020a5051fd0396f71d2d8d6f9f4a1e4683e470d/src/assets/symbol/omega.svg"
                            width="18px"
                            height="18px"
                            title="React"
                            className={classes.p}
                        />
                    </div>
                </div>
                <div>
                    <Chart
                        width={'200px'}
                        height={'200px'}
                        chartType="Gauge"
                        data={amp02}
                        options={optionsAmp}
                    />
                    <div className={classes.labelChart}>
                        <label className={classes.p}>
                            {amp02[1][1]}
                        </label>
                        <SVG
                            src="https://raw.githubusercontent.com/ricardocvel/flowtrack/5020a5051fd0396f71d2d8d6f9f4a1e4683e470d/src/assets/symbol/omega.svg"
                            width="18px"
                            height="18px"
                            title="React"
                            className={classes.p}
                        />
                    </div>
                </div>
                <div>
                    <Chart
                        width={'200px'}
                        height={'200px'}
                        chartType="Gauge"
                        data={amp03}
                        options={optionsAmp}
                    />
                    <div className={classes.labelChart}>
                        <label className={classes.p}>
                            {amp03[1][1]}
                        </label>
                        <SVG
                            src="https://raw.githubusercontent.com/ricardocvel/flowtrack/5020a5051fd0396f71d2d8d6f9f4a1e4683e470d/src/assets/symbol/omega.svg"
                            width="16px"
                            height="17px"
                            title="React"
                            color="#42ac00"
                            style={{ color: "#42ac00"}}
                            className={classes.p}
                        />
                    </div>
                </div>
            </div>
        </div>
        <div className={classes.containerColun}> 
            <label>Tensao de entrada </label>
            <div>
                <FlashOnIcon style={{ color: "#42ac00", height:"50px", width: "50px" }} ></FlashOnIcon> 
                <label>Alimentação alternada ~ 110/220v Ligado</label>
            </div>
        </div>
        {/* ------------------Butoons-------------------  */}
        </div>
        <div className={classes.containerRigth}> 
            <h1>dsd</h1>
        </div>
    </div>
  );
}