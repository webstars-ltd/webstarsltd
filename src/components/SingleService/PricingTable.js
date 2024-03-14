import React from "react"
import { storyblokEditable } from "@storyblok/js"

const Banner = ({ blok }) => (
  <div {...storyblokEditable(blok)}>
    <div class="services-pricing-separator" style={{ marginTop: "30px" }}>
      <div class="separator"></div>
    </div>
    <section className="">
      <div className="container">
        <h2
          className="text-brand-blue"
          style={{ fontSize: "40px", marginBottom: "20px" }}
        >
          Pricing
        </h2>
        <h3 className="font-style-2 text-brand-green">{blok.title}</h3>

        {blok.pricing_table && (
          <div className="pricing-table-container">
            <table className="pricing-table">
              {blok.pricing_table?.thead?.length > 0 && (
                <thead>
                  <tr>
                    {blok.pricing_table?.thead.map(cell => (
                      <th key={cell.value}>{cell.value}</th>
                    ))}
                  </tr>
                </thead>
              )}
              {blok.pricing_table?.tbody?.length > 0 && (
                <tbody>
                  {blok.pricing_table?.tbody.map(row => (
                    <tr key={row.body[0].value}>
                      {row.body.map(cell => (
                        <td key={cell.value}>{cell.value}</td>
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

export default Banner
