class Specifications extends React.Component {
  render() {
    return (
      <div className="specifications" id="specifications">
        <div className="section">
          <div className="head"><span className="name">BATTERY CHEMISTRY:</span> <span className="description">Nano Printed Polymer Lithium-ion</span></div>
          <table>
            <tbody>
              <tr>
                <td>Energy</td>
                <td>10kWh</td>
              </tr>
              <tr>
                <td>Depth of discharge (usable capacity)</td>
                <td>90%</td>
              </tr>
              <tr>
                <td>Ambient operating temp range</td>
                <td>-20 C to 50 C (9-4 F to 122 F)</td>
              </tr>
              <tr>
                <td>Chemistry</td>
                <td>Polymer Lithium-ion</td>
              </tr>
              <tr>
                <td>Roundtrip cell efficiency</td>
                <td>98%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="section">
          <div className="head"><span className="name">MECHANICAL DATA</span></div>
          <table>
            <tbody>
              <tr>
                <td>Dimensions</td>
                <td>
                  <div>568 mm(L) x 300 mm(W) x 142 mm(H)</div>
                  <div>22.36 in(L) x 11.81 in(W) x 5.59 in(H)</div>
                </td>
              </tr>
              <tr>
                <td>Weight (without case)</td>
                <td>53-64 kg (118-142 lbs)</td>
              </tr>
              <tr>
                <td>Installation</td>
                <td>Floor, wall mounted and container</td>
              </tr>
              <tr>
                <td>Coolings</td>
                <td>Natural convection and or fans</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="section">
          <div className="head"><span className="name">FEATURES & COMPLIANCE</span></div>
          <table>
            <tbody>
              <tr>
                <td>Compatibility</td>
                <td>Compatible with grid-tied PV systems</td>
              </tr>
              <tr>
                <td>Compliance</td>
                <td>UL 1642, UN 38.3</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="section">
          <div className="head"><span className="name">WARRANTY</span></div>
          <table>
            <tbody>
              <tr>
                <td>Limited warranty</td>
                <td>10 years or 20 years</td>
              </tr>
              <tr>
                <td>Cycles</td>
                <td>4,000 cycles or 8,000 cycles</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}