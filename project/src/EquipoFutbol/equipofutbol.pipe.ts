import {ArgumentMetadata, Injectable} from '@nestjs/common';
import * as Joi from 'joi';
import {PeticionErroneaException} from '../excepciones/peticion-erronea.exception';
@Injectable()
export  class EquipofutbolPipe {
    constructor (private readonly _schema){

    }
    transform (jsonAValidar: any, metadata:ArgumentMetadata){
        const{
            error}
            =Joi.validate(jsonAValidar,this._schema)
        if (error) {
            throw new PeticionErroneaException(
                {
                    erorr: error,
                    mensaje: 'Json no valido'
                },
                10
            );
        } else {
            return jsonAValidar;
        }
    }
}