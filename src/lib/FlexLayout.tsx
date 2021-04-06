import styled from 'styled-components';

export type Align = 'start' | 'center' | 'end' | 'stretch' | 'baseline';

export type Direction = 'horizontal' | 'vertical';

export type Justify = 'start' | 'center' | 'end' | 'all' | 'around' | 'evenly';

export type Wrap = 'nowrap' | 'wrap' | 'wrap-reverse';

interface Props {
    align?: Align;
    direction?: Direction;
    justify?: Justify;
    wrap?: Wrap;
}

const Direction_ = Object.freeze({
    horizontal: 'row',
    'horizontal-reverse': 'row-reverse',
    vertical: 'column',
    'vertical-reverse': 'column-reverse',
});

const Justify_ = Object.freeze({
    all: 'space-between',
    around: 'space-around',
    center: 'center',
    end: 'end',
    evenly: 'space-evenly',
    start: 'start',
});

const FlexLayout = styled.div<Props>`
  align-items: ${({ align }) => align};
  display: flex;
  flex-direction: ${({ direction }) => Direction_[direction || 'horizontal']};
  flex-wrap: ${({ wrap }) => wrap};
  justify-content: ${({ justify }) => Justify_[justify || 'start']};
`;

export default FlexLayout;
