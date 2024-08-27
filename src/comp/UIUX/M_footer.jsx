import React from 'react';
import '../style/footer.scss';
import Image from 'next/image';


function M_footer(props) {
    return (
        <footer>
            <div className='copyright'>
                Copyright © Team KIMSONG. <br />All rights reserved.
            </div>

            <div className='team'>
                <div className='member'>
                    <p>KIM</p>
                    <div className='link'>
                        <a href="mailto:aa40254037@gmail.com">
                            <Image src="/images/mail_icon.svg" width={24} height={24} />
                        </a>
                        <a href="https://kimziyeon-portfolio.vercel.app/" target='_blank'>
                            <Image src="/images/link_icon.svg" width={24} height={24} />
                        </a>
                        <a href="https://github.com/kimziyeon" target='_blank'>
                            <Image src="/images/github_icon.svg" width={40} height={40} />
                        </a>
                    </div>
                </div>

                <div className='member'>
                    <p>SONG</p>
                    <div className='link'>
                        <a href="mailto:swm8793@naver.com">
                            <Image src="/images/mail_icon.svg" width={24} height={24} />
                        </a>
                        <a href="https://portfolio-fawn-three-33.vercel.app/" target='_blank'>
                            <Image src="/images/link_icon.svg" width={24} height={24} />
                        </a>
                        <a href="https://github.com/dnaals" target='_blank'>
                            <Image src="/images/github_icon.svg" width={40} height={40} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default M_footer;