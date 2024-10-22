import { NextRequest, NextResponse } from 'next/server';
import { queryExecute } from '../../../comp/lib/db';



export async function DELETE(req, { params }) {
    // console.log(params.seq, 'params.seq')
    const data = await queryExecute('delete from user where idx=?', [params.seq]);
    return NextResponse.json(data);
}