import { myListItem } from "./myListItem";

export default class MockClient{
    private static _listItems:myListItem[] = [
        {Id:"1",Title:"Santosh"},
        {Id:"2",Title:"Mhatre"},
        ];
        public static get(restUrl:string,options?:any):Promise<myListItem[]>{
        return new Promise<myListItem[]>((resolve)=>{
            resolve(MockClient._listItems);
        });
    }
}