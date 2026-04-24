import { render, screen } from "@testing-library/react"
import TampilanProduk from "@/views/produk"

describe("TampilanProduk Component", () => {
  it("renders component correctly", () => {
    const products = [] as any[]

    const page = render(<TampilanProduk products={products} />)

    expect(screen.getByTestId("title").textContent).toBe("Daftar Produk")
    expect(page).toMatchSnapshot()
  })
})