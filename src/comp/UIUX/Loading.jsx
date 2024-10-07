import React from 'react';
import Image from 'next/image';

function Loading(props) {
    return (
        <div className='loading' style={{ textAlign: 'center', padding: '100px' }}>
            <Image src='/images/loading.gif' width={200} height={200} alt='loading' priority style={{ borderRadius: '50%' }} />
        </div>
    );
}

export default Loading;