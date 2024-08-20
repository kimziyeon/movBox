import { NextRequest, NextResponse } from 'next/server';
import {queryExecute} from '../../comp/lib/db';

const sql = 'select * from screens';

export async function GET(){
    const data = await queryExecute(sql,"");
    // const data = JSON.parse(JSON.stringify(getData))
    return NextResponse.json(data);
}

// export async function POST(req){
//     const d = await req.json();
//     // const data = await queryExecute('insert into todo (idx,complete,contents,date) values (?,?,?,?)', [d.idx,d.complete,d.contents,d.date]);
//     // const data = JSON.parse(JSON.stringify(getData))
//     return NextResponse.json(data);
// }