import styled, {css} from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainerContainer = styled.div`
  width: 23%;
  padding-right: 15px;
`;

export const ImageContainer = styled.img`
  width: 100%;
  height: 100%;
`;

const commonFieldCss = css`
  width: 23%
`;

export const QuantityContainer = styled.div`
  position: relative;
  padding-left: 10px;
  
  ${commonFieldCss}
`;

export const NumberContainer = styled.span`
  display: block;
  width: 30px;
  text-align: center;
`;

export const NameContainer = styled.span`
  ${commonFieldCss}
`;

export const PriceContainer = styled.span`
  ${commonFieldCss}
`;

const commonArrowCss = css`
  position: absolute;
  cursor: pointer;
  font-size: 22px;
  margin-right: -30px;
`;

export const UpArrowContainer = styled.span`
  top: -25px;
  left: 14px;
  transform: rotate(-90deg);
  ${commonArrowCss}
`;

export const DownArrowContainer = styled.span`
  transform: rotate(90deg);
  left: 17px;
  top: 23px;
  ${commonArrowCss}
`;

export const RemoveButtonContainer = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
