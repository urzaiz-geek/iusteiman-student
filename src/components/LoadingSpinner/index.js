//react
import { React } from 'react';
import { Wrapper, Content, SpinnerBox} from './LoadingSpinner.style';

const LoadingSpinner = () => (
    <Wrapper>
        <Content>
            <span>Chargement ...</span>
            <SpinnerBox />
        </Content>
    </Wrapper>
);

export default LoadingSpinner;