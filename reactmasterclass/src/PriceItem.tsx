import styled from "styled-components";
import PropTypes from "prop-types";

const ItemBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: ${(props) => props.theme.boxColor};
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px 10px 10px 10px;
  padding: 10px 5px 10px 5px;
  border-color: ${(props) => props.theme.textColor};
  border-width: 1px;
  border-style: solid;
  border-radius: 8px;
`;

interface Props {
  time: string;
  open: number;
  high: number;
  low: number;
  close: number;
}

function PriceItem({ time, open, high, low, close }: Props) {
  return (
    <div>
      <ItemBox>
        <Item>Date: {time.slice(0, 10)}</Item>
        <Item>
          Open: {open.toFixed(2)} <br />
          High: {high.toFixed(2)} <br />
          Low: {low.toFixed(2)} <br />
          Close: {close.toFixed(2)} <br />
        </Item>
      </ItemBox>
    </div>
  );
}

PriceItem.propTypes = {
  time: PropTypes.string.isRequired,
  open: PropTypes.number.isRequired,
  high: PropTypes.number.isRequired,
  low: PropTypes.number.isRequired,
  close: PropTypes.number.isRequired,
};

export default PriceItem;