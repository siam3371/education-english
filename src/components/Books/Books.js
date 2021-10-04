import React from 'react';

const Books = () => {
    return (
        <div>
          {/* most famous english books name and price */}
            <table className="table fs-4 regular-color ">
                  <tbody>
                    <tr>
                      <td>The Outsiders – S.E. Hinton</td>
                      <td>$<span >3456</span></td>
                    </tr>
                    </tbody>
                  <tbody>
                    <tr>
                      <td> The House On Mango Street – Sandra Cisneros</td>
                      <td>$<span >500</span></td>
                    </tr>
                    </tbody>
                  <tbody>
                    <tr>
                      <td> Thirteen Reasons Why – Jay Asher</td>
                      <td>$<span >900</span></td>
                    </tr>
                    </tbody>
                  <tbody>
                    <tr>
                      <td>  Peter Pan – J.M. Barrie</td>
                      <td>$<span >199</span></td>
                    </tr>
                    </tbody>
                    </table>
        </div>
    );
};

export default Books;