import styled from 'styled-components'

export const Container = styled.div`
  border: 1px solid #555;
  border-radius: 15px;
  padding: 10px;
  margin: 20px 0px;
  display: flex;
  align-items: center;

  .image {
    margin-right: 5px;
    margin-bottom: 5px;
  }

  input {
    border: 0;
    outline: 0;
    background: transparent;
    color: #fff;
    font-size: 18px;
    flex: 1;
  }

  button {
    color: #fff;
    background-color: #0d6efd;
    border-color: #0d6efd;
    display: inline-block;
    line-height: 1.5;
    text-align: center;
    cursor: pointer;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    border-radius: 0.25rem;
  }

  @media (max-width: 376px) {
    .image {
      display: none;
    }
    input {
      font-size: 15px;
    }
  }
`
