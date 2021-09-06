import { Request, Response } from 'express';
import path from 'path';

export const home = (req: Request, res: Response) => {
	res.send('home');
};
export const dogs = (req: Request, res: Response) => {
	// res.sendFile(path.join(__dirname, '../../_html/index.html'));
};
export const cats = (req: Request, res: Response) => {};
export const fishes = (req: Request, res: Response) => {};
