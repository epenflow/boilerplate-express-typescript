import { NextFunction, Request, Response } from 'express';

export declare type ControllerMethod = (
	request: Request,
	response: Response,
	next: NextFunction,
) => any;

export abstract class Controller {
	abstract index?(req: Request, res: Response, next: NextFunction): any;
	abstract create?(req: Request, res: Response, next: NextFunction): any;
	abstract find?(req: Request, res: Response, next: NextFunction): any;
	abstract update?(req: Request, res: Response, next: NextFunction): any;
	abstract patch?(req: Request, res: Response, next: NextFunction): any;
	abstract delete?(req: Request, res: Response, next: NextFunction): any;
}
