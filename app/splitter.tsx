import styled from "styled-components";

const Container = styled.div`
	display: flex;
	flex: 1;
	justify-content: space-around;
	align-items: center;
	border-bottom: 4px dashed #61616150;
	height: 4px;
	margin: 16px;
`;

const Splitter: React.FC = () => {
	return (
		<Container />
	)
};

export default Splitter;
