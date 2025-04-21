import { render, screen, waitFor } from "@testing-library/react";
import ContadorVisitas from "../components/ContadorVisitas";

test("el número de visitas es mayor que 0", async () => {
  render(<ContadorVisitas />);
  const contador = await waitFor(() =>
    screen.getByText(/visitas:\s*[0-9]+/i)
  );
  const numero = parseInt(contador.textContent.replace(/\D/g, ""));
  expect(numero).toBeGreaterThan(0);
});
