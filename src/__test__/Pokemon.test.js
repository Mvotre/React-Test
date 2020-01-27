import React from "react";
import { render, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom';
import Pokemon from '../components/pokemon';

afterEach(cleanup);

it("matches snapshot", () => {
  const { asFragment } = render( <Pokemon />);
  expect(asFragment()).toMatchSnapshot();
})


it("pass proper name", () => {
  const { getByTestId } = render( <Pokemon nome={"Zémon"} />);
  const nomePok = getByTestId('nome');
  expect(nomePok.textContent).toBe("Nome: Zémon")
})
