import {Manrope} from "next/font/google";
import styled from "styled-components";

import {useRef, useState} from "react";

const manrope = Manrope({
	subsets: ["latin"],
	display: 'swap'
});

const Container = styled.div`
	display: flex;
	flex: 1;
	justify-content: space-between;
	align-items: center;
	margin: 8px 0;	
	padding: 0 24px;
`;

const BackgroundLine = styled.div<{color: string}>`
	background: ${({color}) => 
		`linear-gradient(-45deg, ${color} 25%, ${color}80 0, ${color}80 50%, ${color} 0, ${color} 75%, ${color}80 0 )`
	};	
  background-size: 16px 16px;
  width: calc(100% - 24px - 24px);
	max-width: calc(475px - 24px - 24px);
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
	outline: none;
	
	text-shadow: 0 0 0 #ffffff;
	
	&::-webkit-outer-spin-button,
	&::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	&[type=number] {
		-moz-appearance: textfield;
	}
`;

const ClearButton = styled.button<{isFocused: boolean}>`
	border-width: 0;
	background-color: transparent;
	
	font-weight: 600;
	font-size: 2rem;
	align-items: center;
	padding: 0 ${({isFocused}) => isFocused ? 8 : 0}px;
	
	width: ${({isFocused}) => isFocused ? 44 : 0}px;
	opacity: ${({isFocused}) => isFocused ? 1 : 0};
	
	transition: all 0.3s;
`;

interface InputProps {
	inputName: string;
	value?: string;
	onInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
	color: string;
	tabIndex?: number;
}

const Input: React.FC<InputProps> = (props) => {
	const inputRef = useRef<HTMLInputElement>(null);
	const [isFocused, setIsFocused] = useState(false);

	const handleClickInputName = () => {
		inputRef.current?.focus();
	}

	const handleClickClear = () => {
		props.onInput({target: {value: ''}} as React.ChangeEvent<HTMLInputElement>);
		inputRef.current?.focus();
	}

	const handleFocus = () => {
		setIsFocused(true);
	}

	const handleBlur = () => {
		setIsFocused(false);
	}

	return (
		<Container>
			<BackgroundLine color={props.color} />
			<InputName className={manrope.className} onClick={handleClickInputName}>{props.inputName}</InputName>
			<InputBox tabIndex={props.tabIndex} inputMode={'numeric'} type={'number'}
			          className={manrope.className} onInput={props.onInput} value={props.value}
			          maxLength={6} ref={inputRef} onFocus={handleFocus} onBlur={handleBlur}
			          min={0} max={100000}
			/>
			<ClearButton className={manrope.className} onClick={handleClickClear} isFocused={isFocused}>
				×
			</ClearButton>
		</Container>
	)
};

export default Input;
