import api from '../../config/api'

export const getData =async () => {
    await api.get('/')
    .then(res => {
        const data: dataModel = JSON.parse(res.data) 
        return data
    }

)};

export interface dataModel {
    voltimetro: voltimetro;
    amperimetro: amperimetro;
    digitalIn: digitalIn;
    acIn: acIn;
    releStatus:releStatus;
};

export interface voltimetro{
    volt01?: number;
    volt02?: number;
    volt03?: number;
};

export interface amperimetro{
    amp01?: number;
    amp02?: number;
    amp03?: number;
};

export interface digitalIn{
    dig01?: number;
    dig02?: number;
    dig03?: number;
};

export interface acIn{
    acStatus?: number;
};

export interface releStatus{
    rele01?: number;
    rele02?: number;
    rele03?: number;
    rele04?: number;
};
