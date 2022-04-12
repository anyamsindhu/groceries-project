
export class Base
{
chosencount: number=0;


constructor(chosencount: number)
{
this.chosencount=chosencount;
}
}

export class Grocery {
fruits: Fruit[]=[];
vegetables: Vegetable[]=[];
}

export class Fruit extends Base{

name: string='';
stock: string='';
image: string='';
identifier: string='';

constructor(name: string, stock: string, image: string,identifier: string,chosencount:number)
{
super(chosencount);
}
}

export class Vegetable extends Base{
name: string='';
stock: string='';
image: string='';
identifier: string='';

constructor(name: string, stock: string, image: string,identifier: string,chosencount:number)
{
super(chosencount);
}
}


