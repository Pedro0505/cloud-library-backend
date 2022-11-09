import joi from 'joi';
import ICreateBookBody from './interfaces/ICreateBook';

export default class BookSchema {
  private joi: joi.Root;

  constructor(validator: joi.Root) {
    this.joi = validator;
  }

  public createTask() {
    return this.joi.object<ICreateBookBody>({
      caption: this.joi.string().required().max(45).min(5)
        .messages({
          'any.required': '400|"caption" is required',
          'string.empty': '400|"caption" can\'t be empty',
          'string.min': '400|"caption" can\'t be less than 5',
          'string.max': '400|"caption" can\'t be more than 45',
          'string.base': '400|"caption" must be a string',
        }),
      publicationDate: this.joi.string().regex(/^(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3})Z$/).required().messages({
        'string.pattern.base': '400|"publicationDate" is invalid date format',
        'any.required': '400|"publicationDate" is required',
        'string.base': '400|"publicationDate" must be a string',
      }),
      title: this.joi.string().required().max(45)
        .messages({
          'any.required': '400|"title" is required',
          'string.empty': '400|"title" can\'t be empty',
          'string.min': '400|"title" can\'t be less than 5',
          'string.max': '400|"title" can\'t be more than 45',
          'string.base': '400|"title" must be a string',
        }),
      writerId: this.joi.number().strict().required().messages({
        'any.required': '400|"writerId" is required',
        'number.base': '400|"writerId" must be a number',
      }),
    });
  }
}
