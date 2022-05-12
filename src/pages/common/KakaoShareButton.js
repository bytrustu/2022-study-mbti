import React, {useEffect} from 'react';
import styled from "styled-components";
const { Kakao } = window;

const KakaoShareButton = ({ image, desc }) => {
    const url = 'https://mbti0513.netlify.app/'
    const resultUrl = window.location.href;

    const shareKakao = () => {
        Kakao.Link.sendDefault({
            objectType: 'feed',
            content: {
                title: '예비집사 판별기 결과',
                description: desc,
                imageUrl: url + image,
                link: {
                    mobileWebUrl: resultUrl,
                    webUrl: resultUrl,
                },
            },
            buttons: [
                {
                    title: '나도 테스트 하로하기',
                    link: {
                        mobileWebUrl: resultUrl,
                        webUrl: resultUrl,
                    },
                },
            ]
        })
    };

    useEffect(() => {
        Kakao.cleanup();
        Kakao.init('93a4390e4d458bb507b45d0bdadf6221');
    }, [])
    return (
        <Button onClick={shareKakao}>카카오톡 공유하기</Button>
    );
};

export default KakaoShareButton;

const Button = styled.button`
  margin-top: 10px;
  color: #fff;
  background-color: #0f519d;
  font-size: 1rem;
  border-radius: 0.25rem;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  cursor: pointer;
  height: 40px;
`

