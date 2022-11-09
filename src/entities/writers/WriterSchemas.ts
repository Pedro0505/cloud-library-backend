import joi from 'joi';
import { IWriter } from './interfaces/IWriter';

export default class WriterSchemas {
  private joi: joi.Root;

  constructor(validator: joi.Root) {
    this.joi = validator;
  }

  public createTask() {
    return this.joi.object<IWriter>({
      name: joi.string().required().max(45).min(5)
        .messages({
          'any.required': '400|"caption" is required',
          'string.empty': '400|"caption" can\'t be empty',
          'string.min': '400|"caption" can\'t be less than 5',
          'string.max': '400|"caption" can\'t be more than 45',
          'string.base': '400|"caption" must be a string',
        }),
      birthDate: joi.string().regex(/^(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3})Z$/).required().messages({
        'string.pattern.base': '400|"publicationDate" is invalid date format',
        'any.required': '400|"publicationDate" is required',
        'string.base': '400|"publicationDate" must be a string',
      }),
      sex: joi.string().regex(/^(Male|Female|Other)$/).required().messages({
        'any.required': '400|"sex" is required',
        'string.base': '400|"sex" must be a string',
        'string.pattern.base': '400|"sex" must be Male, Female or Other',
      }),
    });
  }
}
