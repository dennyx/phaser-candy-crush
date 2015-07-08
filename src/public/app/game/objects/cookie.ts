/// <reference path='../_references.ts' />

module GameApp.Objects {
	'use strict';

	export interface ICookie {
		column: number;
		row: number;
		cookieType: number;
		sprite: any;

		spriteName(): string;
		highlightedSpriteName(): string;

	}

	export class Cookie implements ICookie {
		column: number;
		row: number;
		cookieType: number;
		sprite: any;

	   spriteNames: Array<string> = [
			"Croissant",
			"Cupcake",
			"Danish",
			"Donut",
			"Macaroon",
			"SugarCookie"
		]

	    highlightedSpriteNames: Array<string> = [
			"Croissant-Highlighted",
			"Cupcake-Highlighted",
			"Danish-Highlighted",
			"Donut-Highlighted",
			"Macaroon-Highlighted",
			"SugarCookie-Highlighted",
		]


		spriteName(): string {
			return this.spriteNames[this.cookieType - 1];
		}
		highlightedSpriteName() {
         return this.highlightedSpriteNames[this.cookieType - 1];
		}
		
		//TODO: loging ?

	}
}