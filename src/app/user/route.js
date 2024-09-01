import { NextRequest, NextResponse } from 'next/server';
import {queryExecute} from '../../comp/lib/db';

const sql = 'select * from user';

export async function GET(){
    const data = await queryExecute(sql,"");
    // const data = JSON.parse(JSON.stringify(getData))
    return NextResponse.json(data);
}

export async function POST(req){
    const newUser = await req.json();
    const birth = newUser.birth || null;
    const data = await queryExecute('insert into user (user_id,user_pw,user_email,user_name,user_birth) values (?,?,?,?,?)', [newUser.id,newUser.pw,newUser.user_email,newUser.user_name,birth]);
    return NextResponse.json(data);
}