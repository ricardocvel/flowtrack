import React, { useState } from 'react';
import { withStyles, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Chart } from "react-google-charts";
import { Button, Checkbox, FormControlLabel  } from '@material-ui/core';
import Switch, { SwitchClassKey, SwitchProps } from '@material-ui/core/Switch';
import SVG from 'react-inlinesvg';
import { OfflineBolt, HighlightOff,CheckCircleOutline ,
    CloudOff, FlashOff
} from '@material-ui/icons';

interface Styles extends Partial<Record<SwitchClassKey, string>> {
    focusVisible?: string;
  }
  interface Props extends SwitchProps {
    classes: Styles;
  }

const PurpleSwitch = withStyles({
    switchBase: {
      color: "pink",
      '&$checked': {
        color: 'red',
      },
      '&$checked + $track': {
        backgroundColor: 'red',
      },
    },
    checked: {},
    track: {},
  })(Switch);

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

    containerColunRigth: {
        display: 'flex',
        flexDirection: 'column' ,
        borderTop: "1px solid #b9b9b9",
        margin: "30px 0 10px 30px",
    },

    containerStatus: {
        display: 'flex',
        flexDirection: 'row' ,
    },

    labelAc: {
        display: 'flex',
        alignItems: "center",
        justifyContent: "center"
    },

    medidores:{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: "30px"
    },

    labelChart: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        border: "1px solid #b9b9b9"
    },

    p: {
        padding: "10px",
        marginTop: 0,
    },

    containerRigth: {
        minWidth: "40%",
        borderLeft: "1px solid #b9b9b9",
    },

    m: {
        // padding: "10px",
        display: "flex",
        margin: "30px 0 10px 30px",
        alignContent: "flex-start"
    },

    contaiButtons: {
        alignContent: "start",
    },

    title: {
        fontWeight: "bold",
        fontSize: "20px"
    }

}));


export default function Dashboard() {

    //style
    const classes = useStyles();

    // 
    let [acStatus, setAcStatus] = useState([
        true, 'Ligado'
    ])

    let [iOstatus, setIoStatus] = useState([
        [ true, ' - Sinal ON'],
        [ false, ' - Sinal OFF'],
        [ false, ' - Sinal OFF'],
        [ true, ' - Sinal ON'],
    ])

    let [releStatus, setReleStatus] = useState([
        [ false, ' - Acionado OFF'],
        [ true, ' - Acionado ON'],
        [ true, ' - Acionado ON'],
        [ false, ' - Acionado OFF'],
    ])

    const [state, setState] = useState({
        ativaGravacao: false,
        ativaButton: false,
      });

      
    const [ativaCheckButton, setAtivaCheckButton] = useState(
        true
      );

      const [checkButton, setCheckButton] = useState({
        button01: false,
        button02: false,
        button03: false,
        button04: false,
      });


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        setAtivaCheckButton(state.ativaButton)
        console.log(ativaCheckButton)
    };

    var optionsVolts = {
        redFrom: 90, redTo: 100,
        // yellowFrom:75, yellowTo: 90,
        // minorTicks: 8
      };

    var optionsAmp = {
        max: 30,
        redFrom: 20, redTo: 30,
        // yellowFrom:75, yellowTo: 90,
        // minorTicks: 8
      };

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
            <div className={classes.containerColun}> 
                <label className={classes.title}>Tensao de entrada </label>
                <div className={classes.labelAc}>
                    {acStatus[0] ? (
                            <OfflineBolt style={{ color: "#42ac00", height:"30px", width: "30px" }} ></OfflineBolt> 
                        ) : (
                            <FlashOff style={{ color: "#ff0101", height:"30px", width: "30px" }} ></FlashOff> 
                        )}
                    <label className={classes.p}>Alimentação alternada ~ 110/220v {acStatus[1]} </label>
                </div>
            </div>
            {/* ------------------Medidores de tensao------------------- */}
            <div className={classes.containerColun}>
                <p className={classes.title}>Leituras de Tensão</p>
                <div className={classes.medidores}> 
                    <div>
                        <label className={classes.p}>
                            Painel Solar
                        </label>
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
                        <label className={classes.p}>
                            Gerador Heolico
                        </label>
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
                        <label className={classes.p}>
                            Bateria
                        </label>
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
                <p className={classes.title}>Leituras de Corrente</p>
                <div className={classes.medidores}> 
                    <div>
                        <label className={classes.p}>
                            Painel solar
                        </label>
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
                        <label className={classes.p}>
                            Gerador heolico
                        </label>
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
                        <label className={classes.p}>
                            Fonte
                        </label>
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
                                className={classes.p}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* ------------------Butoons-------------------  */}
            </div>
            <div className={classes.containerRigth}> 
                <div className={classes.contaiButtons}>
                    <div className={classes.m}>
                        {/* <FormControlLabel
                            control={<IOSSwitch checked={state.checkedB} onChange={handleChange} name="checkedB" />}
                            label="iOS style"
                        /> */}
                    </div>
                    <div className={classes.m}>
                        <Button variant="contained">
                            Rele 01
                            <Checkbox 
                                value="rele01"
                                inputProps={{ title: 'Manter Botão ligado apos pressionar' }}
                                //  {{releStatus[1][0] ? (disabled):()}}
                            />
                        </Button>
                        <label className={classes.p}>Reinicia a camera</label>
                    </div>
                    <div className={classes.m}>
                        <Button variant="contained">
                            Rele 02
                            <Checkbox 
                                value="rele02"
                                inputProps={{ title: 'Manter Botão ligado apos pressionar' }}
                            />
                            </Button>
                        <label className={classes.p}>Reinicia conversor de fibra</label>
                    </div>
                    <div className={classes.m}>
                        <Button variant="contained">
                            Rele 03
                            <Checkbox 
                                value="rele03"
                                inputProps={{ title: 'Manter Botão ligado apos pressionar' }}
                            />
                            </Button>
                        <label className={classes.p}> liga luz de ponto</label>
                    </div>
                    <div className={classes.m}>
                        <Button variant="contained">
                            Rele 04
                            <Checkbox 
                                value="rele04"
                                inputProps={{ title: 'Manter Botão ligado apos pressionar' }}
                            />
                        </Button>
                        <label className={classes.p}>Reinicia todo o sistema</label>
                    </div>
                    <div className={classes.m}>
                        <FormControlLabel
                            control={<IOSSwitch checked={state.ativaButton} onChange={handleChange} name="ativaButton" />}
                            label="Ativar checkbox de ativação permanetente dos reles"
                        />
                    </div>
                    <div className={classes.m}>
                        <FormControlLabel
                            control={<IOSSwitch checked={state.ativaGravacao} onChange={handleChange} name="ativaGravacao" />}
                            label="Manter coleta de dados, mesmo com sitema offline"
                        />
                    </div>
                </div>
                {/* Leituras das entradas analogicas */}
                <div className={classes.containerColunRigth}> 
                    <label className={classes.title}>Status de entradas analogicas</label>
                    <div className={classes.containerStatus}>
                        <div className={classes.p}>
                            <div className={classes.labelAc}>
                                {iOstatus[0][0] ? (
                                        <CheckCircleOutline style={{ color: "#42ac00", height:"30px", width: "30px" }} ></CheckCircleOutline> 
                                    ) : (
                                        <HighlightOff style={{ color: "#ff0101", height:"30px", width: "30px" }} ></HighlightOff> 
                                    )}
                                <label className={classes.p}>Entrada 01 {iOstatus[0][1]} </label>
                            </div>
                            <div className={classes.labelAc}>
                                {iOstatus[1][0] ? (
                                        <CheckCircleOutline style={{ color: "#42ac00", height:"30px", width: "30px" }} ></CheckCircleOutline> 
                                    ) : (
                                        <HighlightOff style={{ color: "#ff0101", height:"30px", width: "30px" }} ></HighlightOff> 
                                    )}
                                <label className={classes.p}>Entrada 02 {iOstatus[1][1]} </label>
                            </div>
                            <div className={classes.labelAc}>
                                {iOstatus[2][0] ? (
                                        <CheckCircleOutline style={{ color: "#42ac00", height:"30px", width: "30px" }} ></CheckCircleOutline> 
                                    ) : (
                                        <HighlightOff style={{ color: "#ff0101", height:"30px", width: "30px" }} ></HighlightOff> 
                                    )}
                                <label className={classes.p}>Entrada 03 {iOstatus[2][1]} </label>
                            </div>
                            <div className={classes.labelAc}>
                                {iOstatus[3][0] ? (
                                        <CheckCircleOutline style={{ color: "#42ac00", height:"30px", width: "30px" }} ></CheckCircleOutline> 
                                    ) : (
                                        <HighlightOff style={{ color: "#ff0101", height:"30px", width: "30px" }} ></HighlightOff> 
                                    )}
                                <label className={classes.p}>Entrada 04 {iOstatus[3][1]} </label>
                            </div>
                        </div>
                        {/* entrada reles */}
                        <div className={classes.p}>
                            <div className={classes.labelAc}>
                                {releStatus[0][0] ? (
                                        <CheckCircleOutline style={{ color: "#42ac00", height:"30px", width: "30px" }} ></CheckCircleOutline> 
                                    ) : (
                                        <HighlightOff style={{ color: "#ff0101", height:"30px", width: "30px" }} ></HighlightOff> 
                                    )}
                                <label className={classes.p}>Rele 01 {releStatus[0][1]} </label>
                            </div>
                            <div className={classes.labelAc}>
                                {releStatus[1][0] ? (
                                        <CheckCircleOutline style={{ color: "#42ac00", height:"30px", width: "30px" }} ></CheckCircleOutline> 
                                    ) : (
                                        <HighlightOff style={{ color: "#ff0101", height:"30px", width: "30px" }} ></HighlightOff> 
                                    )}
                                <label className={classes.p}>Rele 02 {releStatus[1][1]} </label>
                            </div>
                            <div className={classes.labelAc}>
                                {releStatus[2][0] ? (
                                        <CheckCircleOutline style={{ color: "#42ac00", height:"30px", width: "30px" }} ></CheckCircleOutline> 
                                    ) : (
                                        <HighlightOff style={{ color: "#ff0101", height:"30px", width: "30px" }} ></HighlightOff> 
                                    )}
                                <label className={classes.p}>Rele 03 {releStatus[2][1]} </label>
                            </div>
                            <div className={classes.labelAc}>
                                {releStatus[3][0] ? (
                                        <CheckCircleOutline style={{ color: "#42ac00", height:"30px", width: "30px" }} ></CheckCircleOutline> 
                                    ) : (
                                        <HighlightOff style={{ color: "#ff0101", height:"30px", width: "30px" }} ></HighlightOff> 
                                    )}
                                <label className={classes.p}>Rele 04 {releStatus[3][1]} </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  );
}


//style 

const IOSSwitch = withStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 42,
      height: 26,
      padding: 0,
      margin: theme.spacing(1),
    },
    switchBase: {
      padding: 1,
      '&$checked': {
        transform: 'translateX(16px)',
        color: theme.palette.common.white,
        '& + $track': {
          backgroundColor: '#52d869',
          opacity: 1,
          border: 'none',
        },
      },
      '&$focusVisible $thumb': {
        color: '#52d869',
        border: '6px solid #fff',
      },
    },
    thumb: {
      width: 24,
      height: 24,
    },
    track: {
      borderRadius: 26 / 2,
      border: `1px solid ${theme.palette.grey[400]}`,
      backgroundColor: theme.palette.grey[50],
      opacity: 1,
      transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
  }),
)(({ classes, ...props }: Props) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});