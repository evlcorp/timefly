import styled from 'styled-components'

export const HeaderMobileSt = styled.header `
  height: 10vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-content: center;
  padding: 0 10px;
  /* background-color: #F7FAFF; */
  .middel {
    display: grid;
    justify-content: center;
  }
  .otherAction {
    display: grid;
    justify-content: right;
  }
`
export const HeaderSt = styled.header `
  height: 10vh;
  max-height: 10vh;
  width: calc(100vw-60px);
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  background-color: purple;
  padding: 7px 30px;
  img {
    height: 100%;
  }
  .userPhoto {
    height: 90%;
    width: auto;
    justify-self: center;
    align-self: center;
    border-radius: 100%;
  }
  .menu {
    align-items: center;
    color: white;
    display: grid;
    justify-content: right;
    grid-auto-flow: column;
    grid-auto-rows: 100%;
    gap: 10px;
    .img {
      max-height: 10vh;      
      height: 100%;
      img {
        border-radius: 100%;
        max-height: 100%;
      }
    }
  }
  a {
    display: grid;
    align-content: center;
    justify-content: right;
    color: white;
    cursor: pointer;
  }
`

export const MainSt = styled.main `
  min-height: 80vh;
  background-color: grey;
`

export const CalendarSt = styled.main `
  display: grid;
  height: calc(81vh + 10vh/6);
  align-content: baseline;
  /* gap: 20px; */
  font-family: 'Roboto', sans-serif;
  .calendar {
    display: grid;
    justify-content: center;
    align-content: baseline;
    background-color: #F7FAFF;
    box-shadow: 0px 10px 10px rgba(0,0,0,0.1);
    /* .react-calendar__navigation__arrow {
      display: none
    } */
    .react-calendar {
      border: unset;
      background-color: #F7FAFF;
    }
    .react-calendar__navigation__next2-button, .react-calendar__navigation__prev2-button {
      display: none;
    }
  }
  .items {
    width: 90%;
    justify-self: center;
    display: grid;
    grid-auto-flow: row;
    grid-auto-rows: auto;
    align-content: baseline;
    gap: 20px;
    max-height: calc(100% - 20px);
    overflow-y: auto;
    padding-top: 10px;
    .item {
      color: black;
      display: grid;
      grid-template-columns: 30% auto;
      border-radius: 5px;
      border: 1px solid #BCC5E3;
      :nth-last-child(1) {
        margin-bottom: 15px;
      }
      .first-color {
        color: #475C98;
        font-size: 14px;
      }
      .second-color {
        color: #5120AE;
        font-size: 16px;
      }
      .date {
        gap: 10px;
        padding: 10px 0;
        /* justify-content: center; */
        text-align: center;
        display: grid;
        grid-template-rows: auto auto;
        border-right: 1px solid #BCC5E3;
        .bold {
          font-weight: bold;
          font-size: 18px;
        }
      }
      .event {
        padding: 10px 0;
        gap: 10px;
        padding-left: 10px;
        display: grid;
        grid-template-rows: auto auto;
      }
    }
  }
`

export const MainMobileSt = styled.main `
  display: grid;
  height: calc(80vh + 10vh/6);
  padding: 0 10px;
  /* gap: 15px; */
  font-family: 'Roboto', sans-serif;
  grid-template-rows: auto 1fr;
  align-content: baseline;
  .mainText {
    font-size: 24px;
    font-weight: normal;
    z-index: 1;
    /* background-color: #F7FAFF; */
    box-shadow: 0px 30px 40px rgba(0,0,0,0.1);
    /* height: 10vh; */
    .hello {
      font-weight: 300;
    }
  }
  .blocks {
    /* box-shadow: inset 0px 0px 30px rgba(0,0,0,0.3); */
    @media screen and (min-width: 768px)  {
      grid-template-columns: repeat(5, 1fr);
      .block {
        :nth-child(odd) {
          background-color: #8990A1;
          svg {
            color: #ffffff;
          }
          .info {
            color: #ffffff;
          }
        }
        :nth-child(even) {
          background-color: #ffffff;
          svg {
            color: #8990A1;
          }
          .info {
            color: #424753;
          }
        }
      }
    }
    @media screen and (max-width: 768px)  {
      .block {
        :nth-child(4n+3) {
          background-color: #8990A1;
          svg {
            color: #ffffff;
          }
          .info {
            color: #ffffff;
          }
        }
        :nth-child(4n+2) {
          background-color: #8990A1;
          svg {
            color: #ffffff;
          }
          .info {
            color: #ffffff;
          }
        }
      }
    }
    display: grid;
    background-color: white;
    /* width: 100%; */
    grid-template-columns: 1fr 1fr;
    grid-auto-flow: row;
    gap: 15px;
    max-height: auto;
    overflow-y: auto;
    padding-top: 5px;
    /* min-height: calc(70vh + 10vh/6); */
    align-content: baseline;
    .block {
      /* width: 100%; */
      display: grid;
      grid-template-columns: 1fr 1fr;
      padding: 15px;
      border-radius: 20px;
      box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
      min-height: 7.5em;
      background-color: #ffffff;
      svg {
        color: #8990A1;
      }
      :nth-child(1) {
        background-color: #CDD2DE;
        svg {
          color: #ffffff;
        }
      }
      .secondIcon {
        justify-self: right;
      }
      .info {
        display: grid;
        align-items: flex-end;
        grid-column: 1/3;
        grid-template-rows: 1fr auto;
          font-size: 17px;
          color: #424753;
      }
    }
  }
`

export const FooterSt = styled.footer `
  background-color: purple;
  height: 10vh;
`

export const FooterMobileSt = styled.footer `
  display: grid;
  height: 10vh;
  grid-template-rows: repeat(6, 1fr);
  grid-template-columns: 1fr 1fr 1fr;
  /* padding: 0 10px; */
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  /* width: calc(100% - 20px); */
  .fill {
    box-shadow: 0px 0px 45px rgba(0, 0, 0, 0.1);
    grid-column: 1/4;
    grid-row: 2/7;
    background-color: white;
    width: 100%;
    height: 100%;
  }
  .plus {
    display: grid;
    grid-column: 2; 
    grid-row: 1/7;
    justify-self: center;
    width: 60px;
    height: 60px;
    box-shadow: 0px 15px 45px rgba(0, 0, 0, 0.3);
    align-self: baseline; 
    border-radius: 100%;
    background-color: #878E9F;
    justify-items: center;
    align-items: center;
    svg {
      font-size: 24px;
    }
  }
  .home {
    display: grid;
    align-items: center;
    grid-column: 1;
    grid-row: 2/7;
    font-size: 24px;
    margin-left: 10px;
    justify-self: center;
  }
  .calendar {
    display: grid;
    align-items: center;
    grid-column: 3;
    grid-row: 2/7;
    font-size: 24px;
    justify-self: right;
    margin-right: 10px;
    justify-self: center;
  }
`

export const ModalSt = styled.div `
  display: grid;
  height: 100vh;
  background-color: rgba(0,0,0,0.7);
  position: absolute;
  width: 100vw;
  justify-content: center;
  align-content: center;
  top: 0;
  font-family: 'Roboto', sans-serif;
  /* grid-template-columns: 100%; */
  
  .wrapper {
    display: grid;
    background-color: white;
    border-radius: 10px;
    width: 90vw;
    /* height: 30vh; */
    /* padding: 10px; */
    /* gap: 15px; */
    .header {
      /* box-shadow: 0px 5px 35px rgba(0,0,0,0.1); */
      padding: 10px;
      display: grid;
      grid-template-columns: auto 50px;
      svg {
        justify-self: right;
      }
    }
    .tabs {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      text-align: center;
      margin-bottom: 10px;
      box-shadow: 0px 35px 25px rgba(0,0,0,0.1);

      div {
        border-right: 3px solid #BCC5E3;
        :hover {
          cursor: pointer;
        }
        :nth-last-child(1) {
          border: unset;
        }
      }
    }
    .addActivity {
      display: grid;
      grid-template-columns: auto auto;
      width: 80%;
      justify-self: center;
      gap: 15px;
      span {
        align-self: center;
      }
      .columns{
        grid-column: 1/3;
      }
      .react-datetime-picker {
        grid-column: 1/3;
        justify-content: left;
        display: grid;
      }
    }
    .inputs {
      display: grid;
      /* grid-template-columns: 1fr auto; */
      grid-template-columns: auto;
      padding: 10px;
      gap: 10px;
      .block {
        display: grid;
      }
      .newCategory {
        gap: 10px;
        grid-template-columns: auto 80px;
      }
      span {
        align-self: center;
      }
      .categories {
        display: grid;
        grid-template-columns: auto 15px;
        gap: 5px;
      }
      .react-date-picker__inputGroup, .react-timerange-picker__wrapper {
        display: flex;
        align-items: center;
        width: 100%;
      }
    }
    .submit {
      height: 30px;
      width: 60%;
      justify-self: center;
      margin: 10px 0;
    }
    input, select {
      height: 20px;
    }
  }
`

export const AdminPanelSt = styled.main `
  display: grid;
  height: calc(80vh + 10vh/6);
  align-content: baseline;
  gap: 15px;
  grid-template-rows: 50% 50%;
  .wrapper {
    justify-self: center;
    display: grid;
    width: 100%;
    align-content: baseline;
  }
  .mainText {
    width: 80%;
    justify-self: center;
    box-shadow: 0px 30px 40px rgba(0,0,0,0.1);
    text-transform: uppercase;
    font-weight: 10px;
  }
  .categories {
    display: grid;
    grid-template-columns: 100%;
    grid-auto-rows: auto;
    gap: 10px;
    width: 80%;
    justify-self: center;
    align-content: baseline;
    max-height: 100%;
    overflow-y: auto;
    .item {
      display: grid;
      grid-template-columns: 80% auto;
      background-color: white;
      padding: 10px;
      border-radius: 10px;
      box-shadow: 0px 0px 20px rgba(0,0,0,0.1);
      :nth-child(odd) {
        background-color: #8990A1;
        color: white;
      }
      :nth-child(even) {
        background-color: white;
        color: #42475;
      }
      span {
        justify-self: left;
        text-align: left;
      }
      .buttons {
        display: grid;
        grid-auto-flow: column;
        justify-content: right;
        gap: 10px;
      }
    }
  }
`
export const DiagramSt = styled.main `
  display: grid;
  height: calc(80vh + 10vh/6);
`