import React from "react"
import { storyblokEditable } from "@storyblok/js"

const Banner = ({ blok }) => {
  console.log("table", blok.pricing_table)

  return (
    <div {...storyblokEditable(blok)}>
      <div class="testimonial-separator" style={{ marginTop: "30px" }}>
        <div class="separator"></div>
      </div>
      <section className="">
        <div className="container">
          <h2 style={{ fontSize: "40px", marginBottom: "20px" }}>Pricing</h2>
          <h3 className="font-style-2 text-brand-green">{blok.title}</h3>

          {blok.pricing_table && (
            <div className="pricing-table-container">
              <table className="pricing-table">
                {blok.pricing_table?.thead?.length > 0 && (
                  <thead>
                    <tr>
                      {blok.pricing_table?.thead.map(cell => (
                        <th>{cell.value}</th>
                      ))}
                    </tr>
                  </thead>
                )}
                {blok.pricing_table?.tbody?.length > 0 && (
                  <tbody>
                    {blok.pricing_table?.tbody.map(row => (
                      <tr>
                        {row.body.map(cell => (
                          <td>{cell.value}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                )}
              </table>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Banner
