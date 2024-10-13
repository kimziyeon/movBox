import { NextRequest, NextResponse } from 'next/server';
import {queryExecute} from '../../../comp/lib/db';



export async function DELETE(req,{params}){
    const data = await queryExecute('delete from user where idx=?',[params.seq]);
    return NextResponse.json(data);
}