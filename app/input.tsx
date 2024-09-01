import {Manrope} from "next/font/google";
import styled from "styled-components";

const manrope = Manrope({ subsets: ["latin"] });

const Container = styled.div`
	display: flex;
	flex: 1;
	justify-content: space-between;
	align-items: center;
	margin: 2px 0;	
	padding: 0 16px;
`;

const BackgroundLine = styled.div<{color: string}>`
	background: ${({color}) => 
		`linear-gradient(-45deg, ${color} 25%, ${color}80 0, ${color}80 50%, ${color} 0, ${color} 75%, ${color}80 0 )`
	};	
  background-size: 16px 16px;
  width: calc(100% - 32px);
	max-width: calc(475px - 32px);
	position: absolute;
	height: 18px;
	z-index: -1;
	opacity: 0.5;
`;

const InputName = styled.span`
	font-weight: 800;
	font-size: 2rem;
	padding-left: 8px;
`;

const InputBox = styled.input `
	border-width: 0;
	text-align: right;
	font-size: 2rem;
	background-color: transparent;
	width: 100%;
	padding-right: 8px;
`;

interface InputProps {
	inputName: string;
	value?: string;
	onInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
	color: string;
}

const Input: React.FC<InputProps> = (props) => {
	return (
		<Container>
			<BackgroundLine color={props.color} />
			<InputName className={manrope.className}>{props.inputName}</InputName>
			<InputBox className={manrope.className} onInput={props.onInput} value={props.value} maxLength={6}/>
		</Container>
	)
};

export default Input;