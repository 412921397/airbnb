import styled from 'styled-components';

export const ViewWrapper = styled.div`
  position: relative;
  padding: 8px 0;

  .scroll {
    overflow: hidden;

    .scroll-content {
      display: flex;
      transition: transform 250ms ease;
    }
  }

  .control {
    position: absolute;
    z-index: 9;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    text-align: center;
    border-width: 2px;
    border-style: solid;
    border-color: #fff;
    background: #fff;
    box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.14);
    cursor: pointer;

    &.left {
      left: 0;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    &.right {
      right: 0;
      top: 50%;
      transform: translate(50%, -50%);
    }
  }

  .leftblur,
  .rightblur {
    width: 48px;
    height: 68px;
    position: absolute;
    top: 0;
    z-index: 1;
  }

  .leftblur {
    background: linear-gradient(
      90deg,
      rgb(255, 255, 255) 0%,
      rgb(255, 255, 255) 17%,
      rgba(255, 255, 255, 0) 100%
    );
    left: -7px;
  }
  .rightblur {
    background: linear-gradient(
      270deg,
      rgb(255, 255, 255) 0%,
      rgb(255, 255, 255) 17%,
      rgba(255, 255, 255, 0) 100%
    );
    right: 0;
  }
`;
