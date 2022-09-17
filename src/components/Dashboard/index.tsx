import React, { useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Chart } from "react-google-charts";
import currentDc from '../../assets/symbol/current-dc.svg'
import SVG from 'react-inlinesvg';

const useStyles = makeStyles((theme: Theme) => ({
    root:{
        marginLeft: "0px",
        height: "100%",
        width: "100%",
    },

    containerRow:{
        display: 'flex',
        flexDirection: 'column' ,
        backgroundColor: 'red',
        minWidth: "50%",
        maxWidth: "70%"
    },

    medidores:{
        display: 'flex',
        justifyContent: 'space-between',
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
        ['A', 45],
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
                          <SVG
                        src="./src/assets/symbol/currentDc.svg"
                        width={300}
                        height="auto"
                        title="React"
                        />
        <div className={classes.containerRow}>
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
                    <label>
                        {volt01[1][1]} Volts
                    </label>
                </div>
                <div>
                    <Chart
                        width={'200px'}
                        height={'200px'}
                        chartType="Gauge"
                        data={volt02}
                        options={optionsVolts}
                    />
                    <label>{volt02}</label>
                </div>
                <div>
                    <Chart
                        width={'200px'}
                        height={'200px'}
                        chartType="Gauge"
                        data={volt03}
                        options={optionsVolts}
                    />
                    <label>{volt03}</label>
                </div>
            </div>
        </div>
        <div className={classes.containerRow}>
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
                    <label>{amp01}</label>
                </div>
            </div>
        </div>
    </div>
  );
}