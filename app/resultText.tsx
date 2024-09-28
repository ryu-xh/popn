import React from 'react';
import styled from "styled-components";
import {Manrope, Noto_Sans_KR, Noto_Sans_JP} from "next/font/google";

const manrope = Manrope({ subsets: ["latin"] });
const notoSansKR = Noto_Sans_KR({ subsets: ["latin"], display: 'swap' });
const notoSansJP = Noto_Sans_JP({ subsets: ["latin"], display: 'swap' });

const Container = styled.div<{isExists: boolean}>`
	display: flex;
	flex: 1;
	justify-content: space-between;
	align-items: center;
	margin: ${({isExists}) => isExists ? "8px" : "0"} 0;
	padding: 0 28px;
	opacity: ${({isExists}) => isExists ? 1 : 0};
	height: ${({isExists}) => isExists ? 32 : 0}px;
		
	transition: all 0.3s;
`;

const Title = styled.span`
	font-weight: 500;
	font-size: 1.25rem;
`;

const CountText = styled.span`
	font-size: 1.5rem;
	font-weight: 800;
`;

interface IProps {
	text?: string;
	count?: string | number;
	isExists: boolean;
}

const ResultText: React.FC<IProps> = ({
	text,
	count,
	isExists
}) => {
	return (
		<Container isExists={isExists}>
			<Title className={[notoSansKR.className, notoSansJP.className].join(" ")}>{text}</Title>
			<CountText className={manrope.className}>{count}</CountText>
		</Container>
	)
};

export default ResultText;
